from django.contrib import admin
from django.urls import path
from accounts.activate_account import activate_account

urlpatterns = [
    path('admin/', admin.site.urls),
    path('activate/<str:activation_token>/', activate_account, name='activate_account'),
]
