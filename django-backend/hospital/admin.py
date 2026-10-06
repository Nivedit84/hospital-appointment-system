from django.contrib import admin
from .models import Role, User, Patient, Doctor, Appointment, DoctorSchedule

# Register your models here.

admin.site.register(Role)
admin.site.register(User)
admin.site.register(Patient)
admin.site.register(Doctor)
admin.site.register(Appointment)
admin.site.register(DoctorSchedule)