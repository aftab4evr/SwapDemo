from django.urls import path
from .views import (
    IndexView,
)

app_name= 'website'


urlpatterns = [

    path('', IndexView.as_view(), name='index'),

]