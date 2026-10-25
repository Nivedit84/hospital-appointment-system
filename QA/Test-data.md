# Test Data

| Field | Details |
|---|---|
| Project | Hospital Appointment Management System |
| Document | Test Data |
| Version | 1.0 |
| Status | Draft |
| Prepared By | QA |
| Date | October 2026 |

---

# 1. Patient Test Data

## TD-PAT-001 — Valid Patient

| Field | Test Value |
|---|---|
| Full Name | Rahul Sharma |
| Email | rahul.sharma@test.com |
| Password | Test@123 |
| Phone | 9876543210 |
| Date of Birth | 1998-05-15 |
| Gender | Male |
| Status | Active |

---

## TD-PAT-002 — Second Valid Patient

| Field | Test Value |
|---|---|
| Full Name | Priya Verma |
| Email | priya.verma@test.com |
| Password | Test@123 |
| Phone | 9876543211 |
| Date of Birth | 1999-08-20 |
| Gender | Female |
| Status | Active |

---

## TD-PAT-003 — Duplicate Email

| Field | Test Value |
|---|---|
| Full Name | Test Patient |
| Email | rahul.sharma@test.com |
| Password | Test@123 |
| Phone | 9876543212 |
| Date of Birth | 2000-01-10 |
| Gender | Male |

**Purpose:** Verify that registration with an existing email is rejected.

---

## TD-PAT-004 — Invalid Email

| Field | Test Value |
|---|---|
| Full Name | Invalid Patient |
| Email | rahul.sharma |
| Password | Test@123 |
| Phone | 9876543213 |
| Date of Birth | 2000-01-10 |
| Gender | Male |

**Purpose:** Verify email validation.

---

## TD-PAT-005 — Missing Required Data

| Field | Test Value |
|---|---|
| Full Name | Test Patient |
| Email | missing |
| Password | missing |
| Phone | 9876543214 |
| Date of Birth | 2000-01-10 |
| Gender | Male |

**Purpose:** Verify required-field validation.

# 2. Doctor Test Data

## TD-DOC-001 — Valid Doctor

| Field | Test Value |
|---|---|
| Full Name | Dr. Minal Singh |
| Email | doctor2@gmail.com |
| Password | Doctor@123 |
| Specialty | Dermatologist |
| Qualification | MBBS, MD Dermatology |
| Experience | 8 |
| Bio | Experienced dermatologist specializing in preventive and clinical dermatology. |
| Consultation Fee | 800.00 |
| Status | Active |

---

## TD-DOC-002 — Second Valid Doctor

| Field | Test Value |
|---|---|
| Full Name | Dr. Arjun Mehta |
| Email | doctor3@gmail.com |
| Password | Doctor@123 |
| Specialty | Cardiologist |
| Qualification | MBBS, MD Cardiology |
| Experience | 10 |
| Bio | Experienced cardiologist providing preventive and clinical cardiac care. |
| Consultation Fee | 1000.00 |
| Status | Active |

---

# 3. Doctor Schedule Test Data

## TD-SCH-001 — Doctor Weekly Schedule

| Doctor | Day | Start Time | End Time | Status |
|---|---|---:|---:|---|
| Dr. Minal Singh | Monday | 10:00 | 14:00 | Active |
| Dr. Minal Singh | Tuesday | 10:00 | 14:00 | Active |
| Dr. Minal Singh | Wednesday | 10:00 | 14:00 | Active |

---

## TD-SCH-002 — No Schedule Day

| Doctor | Day | Schedule |
|---|---|---|
| Dr. Minal Singh | Thursday | No active schedule |

**Purpose:** Test that appointments cannot be booked on days when the doctor is unavailable.

---

## TD-SCH-003 — Inactive Schedule

| Doctor | Day | Start Time | End Time | Status |
|---|---|---:|---:|---|
| Dr. Minal Singh | Friday | 10:00 | 14:00 | Inactive |

**Purpose:** Verify that inactive schedules are not available for booking.

# 4. Appointment Test Data

## TD-APT-001 — Available Slot

| Field | Test Value |
|---|---|
| Patient | Rahul Sharma |
| Doctor | Dr. Minal Singh |
| Date | 2026-10-12 |
| Time | 10:00 |
| Status | Available |
| Reason | General consultation |

---

## TD-APT-002 — Second Available Slot

| Field | Test Value |
|---|---|
| Patient | Priya Verma |
| Doctor | Dr. Minal Singh |
| Date | 2026-10-12 |
| Time | 10:30 |
| Status | Available |
| Reason | Skin consultation |

---

## TD-APT-003 — Booked Slot

| Field | Test Value |
|---|---|
| Patient | Rahul Sharma |
| Doctor | Dr. Minal Singh |
| Date | 2026-10-12 |
| Time | 11:00 |
| Status | Booked |
| Reason | Follow-up consultation |

**Purpose:** Used to verify that another patient cannot book the same slot.

---

## TD-APT-004 — Cancelled Appointment

| Field | Test Value |
|---|---|
| Patient | Rahul Sharma |
| Doctor | Dr. Minal Singh |
| Date | 2026-10-12 |
| Time | 11:30 |
| Status | Cancelled |
| Reason | General consultation |

**Purpose:** Verify that a cancelled appointment releases the slot.

---

## TD-APT-005 — Completed Appointment

| Field | Test Value |
|---|---|
| Patient | Priya Verma |
| Doctor | Dr. Minal Singh |
| Date | 2026-10-07 |
| Time | 10:00 |
| Status | Completed |
| Reason | Follow-up consultation |

**Purpose:** Verify that completed appointments remain historical and do not block future availability.

---

# 5. Appointment Slot Data

For a doctor scheduled from **10:00 to 14:00**, the expected 30-minute slots are:

| Slot | Expected |
|---|---|
| 10:00 | Available |
| 10:30 | Available |
| 11:00 | Available / Booked depending on test data |
| 11:30 | Available / Cancelled depending on test data |
| 12:00 | Available |
| 12:30 | Available |
| 13:00 | Available |
| 13:30 | Available |

**Expected total:** 8 appointment slots.

**Purpose:** Verify that the system generates 30-minute appointment intervals correctly.

# 6. Login Test Data

## TD-LOGIN-001 — Valid Patient Login

| Field | Test Value |
|---|---|
| Email | rahul.sharma@test.com |
| Password | Test@123 |
| Expected Role | PATIENT |

---

## TD-LOGIN-002 — Valid Doctor Login

| Field | Test Value |
|---|---|
| Email | doctor2@gmail.com |
| Password | Doctor@123 |
| Expected Role | DOCTOR |

---

## TD-LOGIN-003 — Valid Admin Login

| Field | Test Value |
|---|---|
| Email | niveditsoni84@gmail.com |
| Password | Admin password configured in environment |
| Expected Role | ADMIN |

---

## TD-LOGIN-004 — Invalid Password

| Field | Test Value |
|---|---|
| Email | rahul.sharma@test.com |
| Password | WrongPassword@123 |
| Expected Result | Login rejected |

---

## TD-LOGIN-005 — Non-existent User

| Field | Test Value |
|---|---|
| Email | nonexistent@test.com |
| Password | Test@123 |
| Expected Result | Login rejected |

---

# 7. Role Test Data

| Role | Account | Expected Access |
|---|---|---|
| Patient | Rahul Sharma | Patient functions |
| Doctor | Dr. Minal Singh | Doctor functions |
| Admin | Admin account | Admin functions |

## Role Access Rules

| Function | Patient | Doctor | Admin |
|---|---:|---:|---:|
| Patient Dashboard | ✅ | ❌ | ❌ |
| Doctor Dashboard | ❌ | ✅ | ❌ |
| Admin Dashboard | ❌ | ❌ | ✅ |
| Book Appointment | ✅ | ❌ | ❌ |
| View Own Appointments | ✅ | ✅ | ✅ |
| Manage Doctors | ❌ | ❌ | ✅ |
| Manage Patients | ❌ | ❌ | ✅ |
| Manage Appointments | ❌ | ❌ | ✅ |

# 8. API Test Data

## TD-API-001 — Valid Registration Payload

json
{
  "email": "api.patient@test.com",
  "password": "Test@123",
  "full_name": "API Test Patient",
  "phone": "9876543220",
  "date_of_birth": "1998-05-15",
  "gender": "Male"
}

---

## TD-API-002 — Valid Login Payload

| Field | Test Value |
|---|---|
| Email | rahul.sharma@test.com |
| Password | Test@123 |

### JSON Payload

json
{
  "email": "rahul.sharma@test.com",
  "password": "Test@123"
}

---

## TD-API-003 — Valid Appointment Payload

| Field | Test Value |
|---|---|
| Patient ID | Actual ID of Rahul Sharma |
| Doctor ID | Actual ID of Dr. Minal Singh |
| Appointment Date | 2026-10-12 |
| Appointment Time | 10:00:00 |
| Status | booked |
| Reason | General consultation |

### JSON Payload

json
{
  "patient": 1,
  "doctor": 1,
  "appointment_date": "2026-10-12",
  "appointment_time": "10:00:00",
  "status": "booked",
  "reason": "General consultation"
}

---

## TD-API-004 — Double Booking Payload

| Field | Test Value |
|---|---|
| Patient ID | Actual ID of Priya Verma |
| Doctor ID | Actual ID of Dr. Minal Singh |
| Appointment Date | 2026-10-12 |
| Appointment Time | 11:00:00 |
| Status | booked |
| Reason | Follow-up consultation |

### JSON Payload

json
{
  "patient": 2,
  "doctor": 1,
  "appointment_date": "2026-10-12",
  "appointment_time": "11:00:00",
  "status": "booked",
  "reason": "Follow-up consultation"
}

---

## TD-INVALID-APT-001 — Missing Date

| Field | Test Value |
|---|---|
| Patient ID | Actual patient ID |
| Doctor ID | Actual doctor ID |
| Appointment Date | Missing |
| Appointment Time | 10:00:00 |
| Status | booked |
| Reason | General consultation |

### JSON Payload

json
{
  "patient": 1,
  "doctor": 1,
  "appointment_time": "10:00:00",
  "status": "booked",
  "reason": "General consultation"
}

---

## TD-INVALID-APT-002 — Missing Time

| Field | Test Value |
|---|---|
| Patient ID | Actual patient ID |
| Doctor ID | Actual doctor ID |
| Appointment Date | 2026-10-12 |
| Appointment Time | Missing |
| Status | booked |
| Reason | General consultation |

### JSON Payload

json
{
  "patient": 1,
  "doctor": 1,
  "appointment_date": "2026-10-12",
  "status": "booked",
  "reason": "General consultation"
}

---

## TD-INVALID-APT-003 — Appointment Outside Doctor Schedule

| Field | Test Value |
|---|---|
| Patient ID | Actual patient ID |
| Doctor ID | Actual doctor ID |
| Appointment Date | 2026-10-12 |
| Appointment Time | 15:00:00 |
| Status | booked |
| Reason | General consultation |

### JSON Payload

json
{
  "patient": 1,
  "doctor": 1,
  "appointment_date": "2026-10-12",
  "appointment_time": "15:00:00",
  "status": "booked",
  "reason": "General consultation"
}

---

# 10. Test Data Management Rules

- Use separate test accounts for different test scenarios.
- Do not modify the primary admin account during testing.
- Reset appointment data when repeating booking-related tests.
- Use unique email addresses when testing successful registration.
- Reuse an existing email only when testing duplicate-email validation.
- Record actual database IDs when executing API tests.
- Keep `BOOKED`, `CANCELLED` and `COMPLETED` appointments available for their respective scenarios.
- Do not use production data for testing.

---

# 11. Test Data Status

| Data Category | Status |
|---|---|
| Patient Data | Ready |
| Doctor Data | Ready |
| Doctor Schedule Data | Ready |
| Appointment Data | Ready |
| Login Data | Ready |
| Role Data | Ready |
| API Data | Ready |
| Invalid Data | Ready |