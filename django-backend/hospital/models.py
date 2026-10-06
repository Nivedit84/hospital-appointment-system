from django.db import models
from django.contrib.auth.models import AbstractUser, UserManager
# Create your models here. 

class Role(models.Model):
    name = models.CharField(max_length=100)
    code = models.CharField(unique=True, max_length=10)  # will be used to identify the role in the code, so it should be unique
    description = models.TextField()


class CustomUserManager(UserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:   
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)   # makes email representation consistent, e.g., converts to lowercase
        user = self.model(email=email, **extra_fields)  # User(email=email,password=password)
        user.set_password(password)  # use django's password hashing mechanism to store the password securely
        user.save(using=self._db)  # store the user in the database, using the default database connection
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)  # login to admin
        extra_fields.setdefault('is_superuser', True)  # permissions

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, password, **extra_fields)

class User(AbstractUser):   # AbstractUser provides basic user funcitonality

    objects = CustomUserManager()  # use the custom user manager for creating users and superusers
    username = None   # Don't use the default username field

    email = models.EmailField(unique=True)  # Two users cannot have the same email address

    USERNAME_FIELD = 'email'    #Login Identifier, this is why emails should be unique

    role = models.ForeignKey(Role, on_delete=models.PROTECT, related_name='users')  # Relationship to Role model, on_delete means that if someone tries to delete a role that is assigned to a user, it will raise an error and prevent the deletion
    # related_name='users' allows us to access all users associated with a specific role

    status = models.CharField(max_length=20, default='active')  # if the user is active or inactive, default is active

    created_at = models.DateTimeField(auto_now_add=True)  # user creation timestamp, auto_now_add says timestamp wont change once created

    updated_at = models.DateTimeField(auto_now=True)  # user update timestamp, auto_now says timestamp will change every time the user is updated

    REQUIRED_FIELDS = []  # django will also ask for this information

class Patient(models.Model):
    user = models.OneToOneField(User, on_delete=models.PROTECT, related_name='patient_profile')
    full_name = models.CharField(max_length=255)
    phone = models.CharField(max_length=20)
    date_of_birth = models.DateField()
    gender = models.CharField(max_length=10)

    status = models.CharField(max_length=20, default='active')  # if the patient is active or inactive, default is active
    created_at = models.DateTimeField(auto_now_add=True)  # patient creation timestamp, auto_now_add says timestamp wont change once created
    updated_at = models.DateTimeField(auto_now=True)  # patient update timestamp, auto_now says timestamp will change every time the patient is updated

class Doctor(models.Model):
    user = models.OneToOneField(User, on_delete=models.PROTECT, related_name='doctor_profile')
    full_name = models.CharField(max_length=255)
    specialty = models.CharField(max_length=100)
    qualification = models.TextField()
    experience = models.IntegerField()  # number of years of experience
    bio = models.TextField()  # short bio of the doctor
    consultation_fee = models.DecimalField(max_digits=10, decimal_places=2)  # consultation fee of the doctor

    status = models.CharField(max_length=20, default='active')  # if the doctor is active or inactive, default is active
    created_at = models.DateTimeField(auto_now_add=True)  # doctor creation timestamp,
    updated_at = models.DateTimeField(auto_now=True)  # doctor update timestamp, auto_now says timestamp will change every time the doctor is updated


class Appointment(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.PROTECT, related_name='appointments')
    doctor = models.ForeignKey(Doctor, on_delete=models.PROTECT, related_name='appointments')
    appointment_date = models.DateField()
    appointment_time = models.TimeField()
    status = models.CharField(max_length=20, default='scheduled')  # if the appointment is scheduled, completed or cancelled, default is scheduled
    reason = models.TextField()  # reason for the appointment

    STATUS_CHOICES = [
    ("booked", "Booked"),
    ("cancelled", "Cancelled"),
    ("completed", "Completed"),
    ]
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="booked"
    )
    created_at = models.DateTimeField(auto_now_add=True)  # appointment creation timestamp,
    updated_at = models.DateTimeField(auto_now=True)  # appointment update timestamp, auto_now says timestamp will change every time the appointment is updated

class DoctorSchedule(models.Model):
    doctor = models.ForeignKey(Doctor, on_delete=models.PROTECT, related_name='schedules')
    day_of_week = models.CharField(max_length=10)  # e.g., Monday, Tuesday, etc.
    start_time = models.TimeField()
    end_time = models.TimeField()

    status = models.CharField(max_length=20, default="active")
    created_at = models.DateTimeField(auto_now_add=True)  # schedule creation timestamp,
    updated_at = models.DateTimeField(auto_now=True)  # schedule update timestamp, auto_now says timestamp will change every time the schedule is updated