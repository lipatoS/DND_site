import string
import random


def generate_random_token():
    # Длина токена
    length = 32
    # Список символов, которые вы хотите включить в случайную строку
    allowed_characters = string.ascii_letters + string.digits

    # Генерация случайной строки
    random_string = ''.join(random.choice(allowed_characters) for _ in range(length))

    return random_string
