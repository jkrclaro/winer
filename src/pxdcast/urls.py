
from django.urls import re_path, path
from django.views.generic.base import TemplateView

from .views import (
    home,
    signup,
    login
)

app_name = 'pxdcast'


urlpatterns = [
    path('', home, name='home'),
    path('signup', signup, name='signup'),
    path('login', login, name='login'),
    path('pricing', TemplateView.as_view(template_name='home/pricing.html'), name='pricing')
]