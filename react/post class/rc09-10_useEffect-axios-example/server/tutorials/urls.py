from django.urls import path,include
from .views import TutorialViewSet
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register(r"tutorials",TutorialViewSet)
urlpatterns = router.urls

# urlpatterns = [
   
#      path("",include(router.urls))
# ]