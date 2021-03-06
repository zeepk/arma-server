from django.urls import path
from django.contrib import admin
from . import views


urlpatterns = [
    # from the root directory, load the index view
    path('', views.index),
    path('store', views.index),
    path('updates', views.index),
    path('admin/', admin.site.urls)
]
