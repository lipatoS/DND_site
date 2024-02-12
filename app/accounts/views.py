from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from accounts.models import CustomUser
from accounts import token_gen
from settings.settings import EMAIL_HOST_USER, HTTP_SCHEMA, DOMAIN
from django.contrib.auth import authenticate, login
from django.shortcuts import get_object_or_404
from django.core.mail import send_mail


def send_activation_email(email, activation_token):
    subject = 'Активация учетной записи'
    message = (f'Для активации вашей учетной записи перейдите по ссылке: '
               f'{HTTP_SCHEMA}://{DOMAIN}/activate/{activation_token}/')
    from_email = EMAIL_HOST_USER
    recipient_list = [email]

    send_mail(subject, message, from_email, recipient_list)


class RegistrationView(APIView):
    def post(self, request):
        print(request)
        email = request.data.get('email')
        name = request.data.get('name')
        password = request.data.get('password')

        # Проверка, существует ли уже пользователь с таким email
        if CustomUser.objects.filter(email=email).exists():
            return Response({'errorText': 'Этот email уже зарегистрирован.',
                             'status': status.HTTP_400_BAD_REQUEST},
                            status=status.HTTP_400_BAD_REQUEST)

        # Создание нового пользователя
        user = CustomUser(name=name, email=email)
        user.set_password(password)
        activation_token = token_gen.generate_random_token()
        user.activation_token = activation_token
        user.save()

        send_activation_email(user.email, activation_token)

        return Response({'message': 'Вы успешно зарегистрировались. Подтвердите адрес электронной почты.',
                         'status': status.HTTP_201_CREATED},
                        status=status.HTTP_201_CREATED)



class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        # Получение пользователя, или 404 если не найден
        user = get_object_or_404(CustomUser, email=email)

        # Аутентификация пользователя
        auth_user = authenticate(request, username=email, password=password)
        if auth_user is not None:
            login(request, auth_user)

            user_type = 2
            if auth_user.is_admin:
                user_type = 1

            return Response({'message': 'Вы успешно вошли в систему.', 'userType': user_type},
                            status=status.HTTP_200_OK)

        return Response({'errorText': 'Неправильный пароль или аккаунт не активирован.'},
                        status=status.HTTP_400_BAD_REQUEST)