from django.shortcuts import redirect
from django.contrib.auth import get_user_model
from django.core.exceptions import ObjectDoesNotExist

from settings import settings

CustomUser = get_user_model()


def activate_account(request, activation_token):
    try:
        user = CustomUser.objects.get(activation_token=activation_token)
        user.is_authenticated = True
        user.activation_token = ''
        user.save()

        return redirect('http://localhost:3000/account')
    except ObjectDoesNotExist:
        return redirect('http://localhost:3000/page-not-found')
