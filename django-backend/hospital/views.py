from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework import status
from .models import Role, User, Patient, Doctor, Appointment, DoctorSchedule
from .serializers import RoleSerializer, PatientSerializer, RegisterSerializerPatient, DoctorSerializer, RegisterSerializerDoctor, AppointmentSerializer, DoctorScheduleSerializer, LoginSerializer
# Create your views here.
# Tells django what to do with a web page

class RoleListCreateAPIView(viewsets.ModelViewSet):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer

class LoginAPIView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)

        if serializer.is_valid():
            user = serializer.validated_data["user"]
            if user.role.code == "PATIENT":
                return Response({
                    "message": "Login successful",
                    "user_id": user.id,
                    "patient_id": user.patient_profile.id,
                    "email": user.email,
                    "role": user.role.code
                }, status=status.HTTP_200_OK)
            elif user.role.code == "DOCTOR":
                return Response({
                    "message": "Login successful",
                    "user_id": user.id,
                    "doctor_id": user.doctor_profile.id,
                    "email": user.email,
                    "role": user.role.code
                }, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PatientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()  # Get all records from the Patient model, fetch only active records
    serializer_class = PatientSerializer

class DoctorViewSet(viewsets.ModelViewSet):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer

class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

class DoctorScheduleViewSet(viewsets.ModelViewSet):
    queryset = DoctorSchedule.objects.filter(status="active")
    serializer_class = DoctorScheduleSerializer

class RegisterPatientAPIView(APIView):
    def post(self, request):
        serializer = RegisterSerializerPatient(data=request.data)
        if serializer.is_valid():
            patient = serializer.save()   # Invokes create method inside my serializer
            return Response({'message': 'Patient registered successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RegisterDoctorAPIView(APIView):
    def post(self, request):
        serializer = RegisterSerializerDoctor(data=request.data)
        if serializer.is_valid():
            doctor = serializer.save()
            return Response({'message': 'Doctor registered successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
