from django.contrib import admin
from django.urls import path, include
from reg.views import home, UserProfileView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')),
    path('', home, name='home'),
    path('api/user/profile/', UserProfileView.as_view(), name='user-profile'),
]
