1.1 Objective
The Hospital Appointment Management System is a web-based application that enables patients to register, find doctors, view available appointment slots, book appointments, and manage existing appointments.
Doctors can view and manage their appointments, while administrators can manage doctors, patients and appointments.


1.2 Users
User	Responsibility
Patient	Register, login and manage appointments
Doctor	View and manage assigned appointments
Admin	Manage doctors, patients and appointments


1.3 Functional Requirements
Patient
- FR-P-001 — Patient can register.
- FR-P-002 — Patient can login.
- FR-P-003 — Patient can view doctors.
- FR-P-004 — Patient can view doctor profile.
- FR-P-005 — Patient can view available appointment slots.
- FR-P-006 — Patient can book an appointment.
- FR-P-007 — Patient can view appointments.
- FR-P-008 — Patient can reschedule an appointment.
- FR-P-009 — Patient can cancel an appointment.

Doctor
- FR-D-001 — Doctor can login.
- FR-D-002 — Doctor can view dashboard.
- FR-D-003 — Doctor can view appointments.
- FR-D-004 — Doctor can view appointment details.
- FR-D-005 — Doctor can complete an appointment.
- FR-D-006 — Doctor can cancel an appointment.

Admin
- FR-A-001 — Admin can login.
- FR-A-002 — Admin can manage doctors.
- FR-A-003 — Admin can manage patients.
- FR-A-004 — Admin can manage appointments.


1.4 Business Rules
ID	Rule
BR-001	A booked appointment slot cannot be booked by another patient.
BR-002	A cancelled appointment should release the appointment slot.
BR-003	A completed appointment is treated as historical.
BR-004	Patients can only book during an active doctor schedule.
BR-005	Appointment slots are generated in 30-minute intervals.
BR-006	Inactive doctor schedules should not be available for booking.


1.5 Main Workflows
Patient
Register
→ Login
→ Dashboard
→ Find Doctor
→ Doctor Profile
→ Select Date
→ Select Time
→ Enter Details
→ Confirm
→ My Appointments
→ Reschedule / Cancel

Doctor
Login
→ Dashboard
→ Appointments
→ Appointment Details
→ Complete / Cancel

Admin
Login
→ Dashboard
→ Manage Doctors
→ Manage Patients
→ Manage Appointments