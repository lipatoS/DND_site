from django.db import models

from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.utils import timezone


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.created_dat = timezone.now()
        user.save(using=self._db)
        return user


class CustomUser(AbstractBaseUser):
    name = models.CharField(max_length=30, blank=True, null=True)
    email = models.EmailField(unique=True)
    is_admin = models.BooleanField(default=False)
    is_authenticated = models.BooleanField(default=False)
    activation_token = models.CharField(max_length=255, blank=True)
    created_dat = models.DateTimeField(auto_now_add=True)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email
