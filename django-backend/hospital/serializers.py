from django.contrib.auth import authenticate
from rest_framework import serializers   # from package import modules
from .models import Role, User, Patient, Doctor, Appointment, DoctorSchedule  # import models from the current directory

class RoleSerializer(serializers.ModelSerializer):  # Inherit from ModelSerializer to create a serializer for the Role model
    class Meta:
        model = Role
        fields = ('id', 'name', 'description')

class PatientSerializer(serializers.ModelSerializer):
    class Meta:   # To configure the serializer, we need to define a Meta class
        model = Patient
        fields = '__all__'  # Include all fields from the Patient model

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = '__all__'

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'



class DoctorScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = DoctorSchedule
        fields = '__all__'

class RegisterSerializerPatient(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ('email', 'password', 'full_name', 'phone', 'date_of_birth', 'gender')
        extra_kwargs = {'password': {'write_only': True}}  # Password should not be returned in the response

    email = serializers.EmailField(required=True)
    password = serializers.CharField(write_only=True, required=True)

    full_name = serializers.CharField(required=True)
    phone = serializers.CharField(required=True)
    date_of_birth = serializers.DateField(required=True)
    gender = serializers.CharField(required=True)
    
    def create(self, validated_data):
        patient_role = Role.objects.get(code='PATIENT')  # Get the role object for patients
        user = User.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password'],
            role = patient_role
        )

        patient = Patient.objects.create(
            user=user,
            full_name=validated_data['full_name'],
            phone=validated_data['phone'],
            date_of_birth=validated_data['date_of_birth'],
            gender=validated_data['gender']
        )

        return patient

class RegisterSerializerDoctor(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = ('email', 'password', 'full_name', 'specialty', 'qualification', 'experience', 'bio', 'consultation_fee')
        extra_kwargs = {'password': {'write_only': True}}  # Password should not be returned in the response

    email = serializers.EmailField(required=True)
    password = serializers.CharField(write_only=True, required=True)

    full_name = serializers.CharField(required=True)
    specialty = serializers.CharField(required=True)
    qualification = serializers.CharField(required=True)
    experience = serializers.IntegerField(required=True)
    bio = serializers.CharField(required=True)
    consultation_fee = serializers.DecimalField(max_digits=10, decimal_places=2, required=True)

    def create(self, validated_data):
        doctor_role = Role.objects.get(code='DOCTOR')  # Get the role object for doctors
        user = User.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password'],
            role=doctor_role
        )

        doctor = Doctor.objects.create(
            user=user,
            full_name=validated_data['full_name'],
            specialty=validated_data['specialty'],
            qualification=validated_data['qualification'],
            experience=validated_data['experience'],
            bio=validated_data['bio'],
            consultation_fee=validated_data['consultation_fee']
        )

        return doctor

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        user = authenticate(email=data["email"], password=data["password"])

        if user is None:
            raise serializers.ValidationError("Invalid email or password")
        if user.status != "active":
            raise serializers.ValidationError("User account is inactive")
        
        data["user"] = user

        return data