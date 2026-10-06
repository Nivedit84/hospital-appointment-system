from django.urls import path, include
from .views import RoleListCreateAPIView, RegisterPatientAPIView, PatientViewSet, DoctorViewSet, RegisterDoctorAPIView, AppointmentViewSet, DoctorScheduleViewSet,LoginAPIView
from rest_framework import routers   # Allows us to create GET and POST request

router = routers.DefaultRouter()  # Create a router object, URL generator for viewsets
router.register(r'roles', RoleListCreateAPIView)
router.register(r'patients', PatientViewSet)  # When someone visits the /patients/ URL, it will be handled by the PatientViewSet class
router.register(r'doctors', DoctorViewSet)  # When someone visits the /doctors/ URL, it will be handled by the DoctorViewSet class
router.register(r'appointments', AppointmentViewSet)
router.register(r'schedules', DoctorScheduleViewSet)

urlpatterns = [
    path('', include(router.urls)),  # Include the router's URLs in the urlpatterns list
    path('auth/register/patient/', RegisterPatientAPIView.as_view()),  # Converts to a django compatible view
    path('auth/register/doctor/', RegisterDoctorAPIView.as_view()),
    path('auth/login/', LoginAPIView.as_view()),
]