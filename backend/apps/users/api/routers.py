from django.urls import include, path
from rest_framework import routers

from .api import UserViewSet

router = routers.DefaultRouter()

router.register("", UserViewSet, "users")

urlpatterns = [
    path("", include(router.urls)),
]