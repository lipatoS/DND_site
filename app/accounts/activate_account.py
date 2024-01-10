from django.shortcuts import redirect
from django.contrib.auth import get_user_model
from django.core.exceptions import ObjectDoesNotExist

from settings import settings

CustomUser = get_user_model()


def activate_account(activation_token):
    try:
        # Найдите пользователя с указанным ключом активации
        user = CustomUser.objects.get(activation_token=activation_token)

        # Установите is_authenticated в True, очистите activation_token и сохраните пользователя
        user.is_authenticated = True
        user.activation_token = ''
        user.save()

        # Возвращайте сообщение об успешной активации или что-то еще
        # return HttpResponse("Учетная запись успешно активирована")
        return redirect(f'{settings.SITE_URL}/activation-success')
        # return Response({'message': 'Учетная запись успешно активирована', 'response': status.HTTP_200_OK},
        #                 status=status.HTTP_200_OK)

    except ObjectDoesNotExist:
        # Если пользователь с указанным ключом активации не найден, возвращайте сообщение об ошибке
        # return HttpResponse("Ошибка: Учетная запись не найдена")
        return redirect(f'{settings.SITE_URL}/page-not-found')
        # return Response({'message': 'Учетная запись не найдена', 'response': status.HTTP_400_BAD_REQUEST},
        #                 status=status.HTTP_400_BAD_REQUEST)
