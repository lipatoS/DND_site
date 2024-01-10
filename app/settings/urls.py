from django.contrib import admin
from django.urls import path
from accounts.activate_account import activate_account
from accounts.views import RegistrationView, LoginView

urlpatterns = [
    path('admin/', admin.site.urls),
    # API регистрации users
    path('api/registration', RegistrationView.as_view(), name='registration'),
    path('api/login', LoginView.as_view(), name='login'),
    path('activate/<str:activation_token>/', activate_account, name='activate_account'),
]
