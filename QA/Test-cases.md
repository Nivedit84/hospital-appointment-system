# Test Cases

**Project:** Hospital Appointment Management System  
**Document:** Test Cases  
**Version:** 1.0  
**Status:** Draft  
**Prepared By:** QA  
**Date:** 06-Oct-2026  

---

# 1. Patient Registration

## TC-REG-001 — Register with valid patient information

| Field | Details |
|---|---|
| Requirement | FR-P-001 |
| Scenario | TS-REG-001 |
| Priority | High |
| Preconditions | Patient does not already exist |
| Test Data | Valid patient registration data |
| Post Conditions |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open the patient registration page. |
| 2 | Enter a valid full name. |
| 3 | Enter a valid email address. |
| 4 | Enter a valid password. |
| 5 | Enter a valid phone number. |
| 6 | Enter a valid date of birth. |
| 7 | Select a gender. |
| 8 | Click the **Create Account** button. |

### Expected Result

- Registration should be successful.
- A new User record should be created.
- A new Patient profile should be created.
- The patient should be able to log in using the registered credentials.

**Actual Result:** Patient registration was successful. The patient account was created and the user was able to log in successfully.  
**Status:** PASS

---

## TC-REG-002 — Register with all required fields empty

| Field | Details |
|---|---|
| Requirement | FR-P-001 |
| Scenario | TS-REG-002 |
| Priority | High |
| Preconditions | Registration page is open |
| Test Data | All fields empty |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open the patient registration page. |
| 2 | Leave all fields empty. |
| 3 | Click the **Create Account** button. |

### Expected Result

- Registration should not be completed.
- Validation messages should be displayed.
- No patient account should be created.

**Actual Result:** Browser validation prevented form submission and prompted the user to enter required fields. No request was sent to the Django backend.  
**Status:** PASS

---

## TC-REG-003 — Register with name field empty

| Field | Details |
|---|---|
| Requirement | FR-P-001 |
| Scenario | TS-REG-002 |
| Priority | High |
| Preconditions | Registration page is open |
| Test Data | Valid data except full name |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open the registration page. |
| 2 | Leave the name field empty. |
| 3 | Enter valid values in all other required fields. |
| 4 | Click **Create Account**. |

### Expected Result

Registration should be rejected and the name field should be identified as required.

**Actual Result:** Browser validation prevented form submission and prompted the user to enter name. No request was sent to the Django backend  
**Status:** PASS

---

## TC-REG-004 — Register with email field empty

| Field | Details |
|---|---|
| Requirement | FR-P-001 |
| Scenario | TS-REG-002 |
| Priority | High |
| Preconditions | Registration page is open |
| Test Data | Valid data except email |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open the registration page. |
| 2 | Leave the email field empty. |
| 3 | Enter valid values in all other required fields. |
| 4 | Click **Create Account**. |

### Expected Result

Registration should be rejected and an email validation message should be displayed.

**Actual Result:** Browser validation prevented form submission and prompted the user to enter email. No request was sent to the Django backend  
**Status:** PASS

---

## TC-REG-005 — Register with password field empty

| Field | Details |
|---|---|
| Requirement | FR-P-001 |
| Scenario | TS-REG-002 |
| Priority | High |
| Preconditions | Registration page is open |
| Test Data | Valid data except password |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open the registration page. |
| 2 | Leave the password field empty. |
| 3 | Enter valid values in all other required fields. |
| 4 | Click **Create Account**. |

### Expected Result

Registration should be rejected and the password field should be identified as required.

**Actual Result:** Browser validation prevented form submission and prompted the user to enter password. No request was sent to the Django backend  
**Status:** PASS

---

## TC-REG-006 — Register with invalid email format

| Field | Details |
|---|---|
| Requirement | FR-P-001 |
| Scenario | TS-REG-003 |
| Priority | High |
| Preconditions | Registration page is open |
| Test Data | `testpatient@` |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open the registration page. |
| 2 | Enter valid patient information. |
| 3 | Enter an invalid email address such as `testpatient@`. |
| 4 | Click **Create Account**. |

### Expected Result

- Registration should not be completed.
- An invalid email validation message should be displayed.
- No patient account should be created.

**Actual Result:** Browser validation prevented form submission and prompted the user to enter a part of the following '@'. No request was sent to the Django backend  
**Status:** PASS

---

## TC-REG-007 — Register using an already registered email

| Field | Details |
|---|---|
| Requirement | FR-P-001 |
| Scenario | TS-REG-004 |
| Priority | High |
| Preconditions | Email already exists in the system |
| Test Data | Existing patient email |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open the registration page. |
| 2 | Enter valid patient information. |
| 3 | Enter an email address already registered in the system. |
| 4 | Click **Create Account**. |

### Expected Result

- Registration should fail.
- The system should indicate that the email is already registered.
- A duplicate User record should not be created.

**Actual Result:** Django throws an 500, shows key already exists, email already exists is not displaying in the UI
**Status:** FAIL

---

## TC-REG-008 — Register with invalid phone number

| Field | Details |
|---|---|
| Requirement | FR-P-001 |
| Scenario | TS-REG-005 |
| Priority | Medium |
| Preconditions | Registration page is open |
| Test Data | Invalid phone number |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open the registration page. |
| 2 | Enter valid patient information. |
| 3 | Enter an invalid phone number. |
| 4 | Click **Create Account**. |

### Expected Result

The system should reject the invalid phone number if it violates the application's validation rules.

**Actual Result:** Registration was accepted with an invalid phone number (`123`). A patient record was created in the database.  
**Status:** FAIL

---

## TC-REG-009 — Register without selecting gender

| Field | Details |
|---|---|
| Requirement | FR-P-001 |
| Scenario | TS-REG-002 |
| Priority | Medium |
| Preconditions | Registration page is open |
| Test Data | Valid data with no gender selected |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open the registration page. |
| 2 | Enter valid values in all fields except gender. |
| 3 | Leave gender unselected. |
| 4 | Click **Create Account**. |

### Expected Result

Registration should not be completed and gender should be identified as required.

**Actual Result:** Browser validation prevented form submission when no gender was selected. The page was refreshed and no request was sent to Django. No patient record was created.  
**Status:** FAIL

---

## TC-REG-010 — Register with valid date of birth

| Field | Details |
|---|---|
| Requirement | FR-P-001 |
| Scenario | TS-REG-001 |
| Priority | Medium |
| Preconditions | Registration page is open |
| Test Data | Date of birth: `2000-05-10` |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open the registration page. |
| 2 | Enter valid patient information. |
| 3 | Enter `2000-05-10` as the date of birth. |
| 4 | Submit the registration form. |

### Expected Result

Registration should be successful when all provided information is valid.

**Actual Result:** Entered valid date of birth. User record is created successfully  
**Status:** PASS

---

## TC-REG-011 — Register with different passwords

| Field | Details |
|---|---|
| Requirement | FR-P-001 |
| Scenario | TS-REG-001 |
| Priority | Medium |
| Preconditions | Registration page is open |
| Test Data | Password: abc12345, Confirm Password: Abc123124 |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open the registration page. |
| 2 | Enter valid patient information. |
| 3 | Enter different password and confirm password. |
| 4 | Submit the registration form. |

### Expected Result

Browser should show an alert and ask to enter matching password.

**Actual Result:** Entered different passwords, browser showed an alert, behacing as expected  
**Status:** PASS

---

# 2. Patient Login

## TC-LOGIN-001 — Login with valid patient credentials

| Field | Details |
|---|---|
| Requirement | FR-P-002 |
| Scenario | TS-LOGIN-001 |
| Priority | High |
| Preconditions | Active patient account exists |
| Test Data | Valid email and password |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open the login page. |
| 2 | Enter the registered patient email. |
| 3 | Enter the correct password. |
| 4 | Click **Login**. |

### Expected Result

- Login should be successful.
- Patient should be redirected to the patient dashboard.
- Patient information should be displayed correctly.

**Actual Result:** Logged in with valid credentials, browser redirected to the dashboard  
**Status:** PASS

---

## TC-LOGIN-002 — Login with incorrect password

| Field | Details |
|---|---|
| Requirement | FR-P-002 |
| Scenario | TS-LOGIN-002 |
| Priority | High |
| Preconditions | Patient account exists |
| Test Data | Valid email + incorrect password |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open the login page. |
| 2 | Enter a registered patient email. |
| 3 | Enter an incorrect password. |
| 4 | Click **Login**. |

### Expected Result

- Login should fail.
- An appropriate error message should be displayed.
- Patient should remain on the login page.

**Actual Result:** Login failed, browser showed "Invalid email or password"  
**Status:** PASS

---

## TC-LOGIN-003 — Login with non-existent email

| Field | Details |
|---|---|
| Requirement | FR-P-002 |
| Scenario | TS-LOGIN-003 |
| Priority | High |
| Preconditions | Login page is open |
| Test Data | Email not registered in the system |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open the login page. |
| 2 | Enter an email that does not exist. |
| 3 | Enter a password. |
| 4 | Click **Login**. |

### Expected Result

Login should fail and an appropriate authentication error should be displayed.

**Actual Result:** Login failed, browser showed "Invalid email or password"  
**Status:** PASS

---

## TC-LOGIN-004 — Login with inactive account

| Field | Details |
|---|---|
| Requirement | FR-P-002 |
| Scenario | TS-LOGIN-004 |
| Priority | High |
| Preconditions | Patient account exists with inactive status |
| Test Data | Inactive patient credentials |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open the login page. |
| 2 | Enter the inactive patient's email. |
| 3 | Enter the correct password. |
| 4 | Click **Login**. |

### Expected Result

- Login should fail.
- The user should be informed that the account is inactive.
- The patient dashboard should not be accessible.

**Actual Result:** Login fails, dashboard not accessible, but browser shows invalid email or password  
**Status:** FAIL

---

## TC-LOGIN-005 — Login with empty email

| Field | Details |
|---|---|
| Requirement | FR-P-002 |
| Scenario | TS-LOGIN-005 |
| Priority | High |
| Preconditions | Login page is open |
| Test Data | Empty email |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open the login page. |
| 2 | Leave the email field empty. |
| 3 | Enter a password. |
| 4 | Click **Login**. |

### Expected Result

Login should not proceed and email validation should be displayed.

**Actual Result:** Browser asks to enter email as it is a required field  
**Status:** PASS

---

## TC-LOGIN-006 — Login with empty password

| Field | Details |
|---|---|
| Requirement | FR-P-002 |
| Scenario | TS-LOGIN-005 |
| Priority | High |
| Preconditions | Login page is open |
| Test Data | Empty password |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open the login page. |
| 2 | Enter a registered email. |
| 3 | Leave the password field empty. |
| 4 | Click **Login**. |

### Expected Result

Login should not proceed and password validation should be displayed.

**Actual Result:** Browser asks to enter email as it is a required field  
**Status:** PASS

---

## TC-LOGIN-007 — Login with both fields empty

| Field | Details |
|---|---|
| Requirement | FR-P-002 |
| Scenario | TS-LOGIN-005 |
| Priority | Medium |
| Preconditions | Login page is open |
| Test Data | Empty email and password |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open the login page. |
| 2 | Leave email empty. |
| 3 | Leave password empty. |
| 4 | Click **Login**. |

### Expected Result

Validation messages should be displayed and login should not proceed.

**Actual Result:** Browser asks to enter email and password as it these are required field  
**Status:** PASS

---

# 3. Doctor Listing and Profile

## TC-DOC-001 — View doctor list

| Field | Details |
|---|---|
| Requirement | FR-P-003 |
| Scenario | TS-DOC-001 |
| Priority | High |
| Preconditions | Patient is logged in |
| Test Data | Active doctors exist |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Login as a patient. |
| 2 | Open the **Find Doctor** page. |
| 3 | View the doctor list. |

### Expected Result

The system should display the available doctors.

**Actual Result:** Logged in as a patient, find a doctor shows a list of available doctors  
**Status:** PASS

---

## TC-DOC-002 — Verify doctor information

| Field | Details |
|---|---|
| Requirement | FR-P-003 |
| Scenario | TS-DOC-001 |
| Priority | Medium |
| Preconditions | Doctor list is displayed |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open the doctor list. |
| 2 | Select a doctor. |
| 3 | Verify the displayed doctor information. |

### Expected Result

Doctor information should be displayed correctly, including name and specialty.

**Actual Result:** Doctor information displayed correctly  
**Status:** PASS

---

## TC-DOC-003 — Open doctor profile

| Field | Details |
|---|---|
| Requirement | FR-P-004 |
| Scenario | TS-DOC-002 |
| Priority | High |
| Preconditions | Doctor exists |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open the doctor list. |
| 2 | Select a doctor. |
| 3 | Click **View Profile**. |

### Expected Result

The selected doctor's profile should open and display the correct doctor information.

**Actual Result:** Doctor profile displays correct doctor information  
**Status:** PASS

---

## TC-DOC-004 — Verify doctor specialty

| Field | Details |
|---|---|
| Requirement | FR-P-004 |
| Scenario | TS-DOC-002 |
| Priority | Medium |
| Preconditions | Doctor profile is open |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open a doctor profile. |
| 2 | Locate the specialty information. |

### Expected Result

The doctor's specialty should be displayed correctly.

**Actual Result:** Doctor speciality displayed correctly  
**Status:** PASS

---

## TC-DOC-005 — Verify doctor experience

| Field | Details |
|---|---|
| Requirement | FR-P-004 |
| Scenario | TS-DOC-002 |
| Priority | Medium |
| Preconditions | Doctor profile is open |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open a doctor profile. |
| 2 | Locate the experience information. |

### Expected Result

The doctor's experience should be displayed correctly.

**Actual Result:** Experience is displayed in doctor's profile  
**Status:** PASS

---

## TC-DOC-006 — Verify consultation fee

| Field | Details |
|---|---|
| Requirement | FR-P-004 |
| Scenario | TS-DOC-002 |
| Priority | Medium |
| Preconditions | Doctor profile is open |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open a doctor profile. |
| 2 | Locate the consultation fee. |

### Expected Result

The consultation fee should match the doctor's configured fee.

**Actual Result:** Consultion fee is displayed  
**Status:** PASS

---

## TC-DOC-007 — Inactive doctor should not be available for booking

| Field | Details |
|---|---|
| Requirement | FR-P-003 |
| Scenario | TS-DOC-005 |
| Priority | High |
| Preconditions | Doctor exists with inactive status |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Login as a patient. |
| 2 | Open the doctor listing. |
| 3 | Search/view available doctors. |
| 4 | Check whether the inactive doctor is available for booking. |

### Expected Result

Inactive doctors should not be available for appointment booking.

**Actual Result:** The inactive doctor was still visible in the doctor listing and the doctor's information could be viewed. The inactive doctor was therefore available to the patient instead of being hidden from booking.  
**Status:** FAIL

---

# 4. Appointment Slot Availability

## TC-SLOT-001 — View slots for scheduled day

| Field | Details |
|---|---|
| Requirement | FR-P-005 |
| Scenario | TS-DOC-003 |
| Priority | High |
| Preconditions | Doctor has an active schedule |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open the doctor's profile. |
| 2 | Select a date on which the doctor has a schedule. |
| 3 | View the available time slots. |

### Expected Result

Available appointment slots should be displayed for the selected day.

**Actual Result:** Available time slots are visible for a selected day  
**Status:** PASS

---

## TC-SLOT-002 — Verify 30-minute slot intervals

| Field | Details |
|---|---|
| Requirement | FR-P-005 |
| Scenario | TS-DOC-003 |
| Priority | High |
| Preconditions | Doctor schedule is active |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open the doctor's profile. |
| 2 | Select a scheduled date. |
| 3 | Review the generated time slots. |

### Expected Result

Slots should be generated in 30-minute intervals.

Example:

text
10:00
10:30
11:00
11:30
12:00

**Actual Result:** 30 minute intervals are displayed  
**Status:** PASS

---

## TC-SLOT-003 — View day with no doctor schedule

| Field | Details |
|---|---|
| Requirement | FR-P-005 |
| Scenario | TS-DOC-003 |
| Priority | High |
| Preconditions | Doctor has no schedule on selected day |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open the doctor's profile. |
| 2 | Select a day without an active schedule. |

### Expected Result

The system should indicate that no appointments are available for the selected day.

**Actual Result:** Browser show no available slots for the selected day as no schedule exists  
**Status:** PASS

---

## TC-SLOT-004 — Verify booked slot is unavailable

| Field | Details |
|---|---|
| Requirement | FR-P-005 |
| Scenario | TS-DOC-005 |
| Priority | Critical |
| Preconditions | Selected slot already has a booked appointment |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open the doctor's profile. |
| 2 | Select the appointment date. |
| 3 | Locate a previously booked slot. |

### Expected Result

The booked slot should be disabled or otherwise unavailable for selection.

**Actual Result:** Booked slot reflects that this slot is taken  
**Status:** PASS

---

## TC-SLOT-005 — Cancelled appointment releases slot

| Field | Details |
|---|---|
| Requirement | FR-P-005 |
| Scenario | TS-DOC-005 |
| Priority | Critical |
| Preconditions | Existing appointment is cancelled |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Cancel an existing booked appointment. |
| 2 | Open the doctor's profile. |
| 3 | Select the appointment date. |
| 4 | Check the previously booked time slot. |

### Expected Result

The previously booked slot should become available again.

**Actual Result:** Cancelling appointment successfully realeases slot  
**Status:** PASS

---

## TC-SLOT-006 — Completed appointment does not block future availability

| Field | Details |
|---|---|
| Requirement | FR-P-005 |
| Scenario | TS-DOC-005 |
| Priority | Medium |
| Preconditions | Appointment exists with `COMPLETED` status |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Mark an appointment as completed. |
| 2 | Open the doctor's profile. |
| 3 | Check availability for a future appointment date/time. |

### Expected Result

A completed historical appointment should not block future appointment availability.

**Actual Result:** Completed appointment didnt block future appointment  
**Status:** PASS

# 5. Appointment Booking

## TC-BOOK-001 — Book an available appointment

| Field | Details |
|---|---|
| Requirement | FR-P-006 |
| Scenario | TS-BOOK-001 |
| Priority | Critical |
| Preconditions | Patient is logged in and slot is available |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Login as a patient. |
| 2 | Open a doctor's profile. |
| 3 | Select an available date. |
| 4 | Select an available time slot. |
| 5 | Enter the appointment reason. |
| 6 | Submit the appointment. |

### Expected Result

- Appointment should be created successfully.
- Appointment status should be `BOOKED`.
- Confirmation should be displayed.
- Appointment should appear in **My Appointments**.

**Actual Result:** Appointment is successfully booked  
**Status:** PASS

---

## TC-BOOK-002 — Attempt to book an occupied slot

| Field | Details |
|---|---|
| Requirement | FR-P-006 |
| Scenario | TS-BOOK-002 |
| Priority | Critical |
| Preconditions | Selected slot already has a booked appointment |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Login as a patient. |
| 2 | Select a doctor. |
| 3 | Select a date containing a booked slot. |
| 4 | Attempt to book the occupied slot. |
| 5 | Submit the appointment. |

### Expected Result

- Booking should be rejected.
- The existing appointment should remain unchanged.
- An appropriate error should be displayed.

**Actual Result:** Booking is rejected, taken slot button is unclickable 
**Status:** PASS

---

## TC-BOOK-003 — Attempt to book outside doctor's schedule

| Field | Details |
|---|---|
| Requirement | FR-P-006 |
| Scenario | TS-BOOK-003 |
| Priority | Critical |
| Preconditions | Selected time is outside doctor's active schedule |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Select a doctor. |
| 2 | Select a date. |
| 3 | Attempt to submit an appointment outside the doctor's schedule. |

### Expected Result

The appointment should be rejected.

**Actual Result:** Appointment rejected, no slots generated outside doctor's schedule  
**Status:** PASS

---

## TC-BOOK-004 — Book without selecting a date

| Field | Details |
|---|---|
| Requirement | FR-P-006 |
| Scenario | TS-BOOK-004 |
| Priority | High |
| Preconditions | Booking page is open |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open the booking page. |
| 2 | Do not select an appointment date. |
| 3 | Enter other required information. |
| 4 | Submit the appointment. |

### Expected Result

Booking should not proceed and date validation should be displayed.

**Actual Result:** Cannot proceed with appointment without a date  
**Status:** PASS

## TC-BOOK-005 — Book without selecting a time

| Field | Details |
|---|---|
| Requirement | FR-P-006 |
| Scenario | TS-BOOK-005 |
| Priority | High |
| Preconditions | Booking page is open |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open the booking page. |
| 2 | Select a valid date. |
| 3 | Do not select a time. |
| 4 | Submit the appointment. |

### Expected Result

Booking should not proceed and time validation should be displayed.

**Actual Result:** Cannot book without selecting a time  
**Status:** PASS

---

## TC-BOOK-006 — Book without required appointment information

| Field | Details |
|---|---|
| Requirement | FR-P-006 |
| Scenario | TS-BOOK-006 |
| Priority | High |
| Preconditions | Booking page is open |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Select a valid doctor, date and time. |
| 2 | Leave required appointment information empty. |
| 3 | Submit the appointment. |

### Expected Result

The system should reject the booking and display the relevant validation message.

**Actual Result:** Browser asks to enter a reason  
**Status:** PASS

---

## TC-BOOK-007 — Attempt double booking

| Field | Details |
|---|---|
| Requirement | FR-P-006 |
| Scenario | TS-BOOK-002 |
| Priority | Critical |
| Preconditions | Slot is already booked |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Create an appointment for a specific doctor/date/time. |
| 2 | Attempt to create another appointment for the same doctor/date/time. |
| 3 | Submit the second appointment. |

### Expected Result

The second appointment should be rejected and only one booked appointment should exist for that slot.

**Actual Result:** Appointment rejected as slot is already marked as taken  
**Status:** PASS

---

## TC-BOOK-008 — Verify booked appointment appears in My Appointments

| Field | Details |
|---|---|
| Requirement | FR-P-006 |
| Scenario | TS-BOOK-001 |
| Priority | High |
| Preconditions | Appointment has been successfully booked |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Book an appointment successfully. |
| 2 | Open **My Appointments**. |
| 3 | Locate the newly created appointment. |

### Expected Result

The newly booked appointment should be displayed with the correct doctor, date, time and status.

**Actual Result:** Newly booked appointments appears on dashboard as well as my appointments page  
**Status:** PASS

# 6. View Appointments

## TC-APT-001 — View booked appointments

| Field | Details |
|---|---|
| Requirement | FR-P-007 |
| Scenario | TS-APT-001 |
| Priority | High |
| Preconditions | Patient has at least one appointment |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Login as a patient. |
| 2 | Open **My Appointments**. |

### Expected Result

The patient's appointments should be displayed.

**Actual Result:** Patient can view all the appointments  
**Status:** PASS

---

## TC-APT-002 — Verify appointment details

| Field | Details |
|---|---|
| Requirement | FR-P-007 |
| Scenario | TS-APT-001 |
| Priority | High |
| Preconditions | Patient has an appointment |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open **My Appointments**. |
| 2 | Select an appointment. |
| 3 | Review the displayed details. |

### Expected Result

The system should display the correct:

- Doctor
- Appointment date
- Appointment time
- Status
- Appointment reason

**Actual Result:** Patient can see the appointment details  
**Status:** PASS

---

## TC-APT-003 — Verify cancelled appointment status

| Field | Details |
|---|---|
| Requirement | FR-P-007 |
| Scenario | TS-APT-001 |
| Priority | Medium |
| Preconditions | Appointment has been cancelled |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Cancel an existing appointment. |
| 2 | Open **My Appointments**. |
| 3 | Locate the cancelled appointment. |

### Expected Result

The appointment should remain visible with status `CANCELLED`.

**Actual Result:** Appointment status successfully changes to CANCELLED  
**Status:** PASS

---

## TC-APT-004 — Patient sees only their appointments

| Field | Details |
|---|---|
| Requirement | FR-P-007 |
| Scenario | TS-APT-001 |
| Priority | Critical |
| Preconditions | Multiple patients have appointments |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Login as Patient A. |
| 2 | Open **My Appointments**. |
| 3 | Review the appointment list. |

### Expected Result

Patient A should only see appointments belonging to Patient A.

**Actual Result:** Patient A can only see the appointment of patient A  
**Status:** PASS

# 7. Reschedule Appointment

## TC-RES-001 — Reschedule an existing appointment

| Field | Details |
|---|---|
| Requirement | FR-P-008 |
| Scenario | TS-APT-002 |
| Priority | Critical |
| Preconditions | Patient has a booked appointment and another slot is available |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Login as a patient. |
| 2 | Open **My Appointments**. |
| 3 | Select a booked appointment. |
| 4 | Choose **Reschedule**. |
| 5 | Select a new available date and time. |
| 6 | Submit the reschedule request. |

### Expected Result

- Appointment should be updated to the new date and time.
- Appointment status should remain `BOOKED`.
- The old slot should become available.
- The new slot should become unavailable.

**Actual Result:** Browser prompts to enter new date and time on reschedule  
**Status:** PASS

---

## TC-RES-002 — Attempt to reschedule to an occupied slot

| Field | Details |
|---|---|
| Requirement | FR-P-008 |
| Scenario | TS-APT-003 |
| Priority | Critical |
| Preconditions | Patient has a booked appointment and target slot is already occupied |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Login as a patient. |
| 2 | Open **My Appointments**. |
| 3 | Select a booked appointment. |
| 4 | Choose **Reschedule**. |
| 5 | Select an already occupied slot. |
| 6 | Submit the reschedule request. |

### Expected Result

The reschedule request should be rejected and the original appointment should remain unchanged.

**Actual Result:** Browser alerts that failed to reschedule appointment  
**Status:** PASS

---

## TC-RES-003 — Reschedule to a time outside doctor's schedule

| Field | Details |
|---|---|
| Requirement | FR-P-008 |
| Scenario | TS-BOOK-003 |
| Priority | High |
| Preconditions | Patient has a booked appointment |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open **My Appointments**. |
| 2 | Select a booked appointment. |
| 3 | Choose **Reschedule**. |
| 4 | Attempt to select a time outside the doctor's active schedule. |
| 5 | Submit the request. |

### Expected Result

The reschedule request should be rejected.

**Actual Result:** Fails as no schedule exists  
**Status:** PASS

---

## TC-RES-004 — Verify old slot becomes available after rescheduling

| Field | Details |
|---|---|
| Requirement | FR-P-008 |
| Scenario | TS-APT-002 |
| Priority | High |
| Preconditions | Existing appointment can be successfully rescheduled |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Note the current appointment date and time. |
| 2 | Reschedule the appointment to another available slot. |
| 3 | Open the doctor's profile. |
| 4 | Select the original appointment date. |
| 5 | Check the original appointment time slot. |

### Expected Result

The original time slot should be available for booking.

**Actual Result:** Original time slot becomes available after rescheduling  
**Status:** PASS

# 8. Cancel Appointment

## TC-CAN-001 — Cancel a booked appointment

| Field | Details |
|---|---|
| Requirement | FR-P-009 |
| Scenario | TS-APT-004 |
| Priority | Critical |
| Preconditions | Patient has a booked appointment |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Login as a patient. |
| 2 | Open **My Appointments**. |
| 3 | Select a booked appointment. |
| 4 | Click **Cancel Appointment**. |
| 5 | Confirm the cancellation. |

### Expected Result

- Appointment status should change to `CANCELLED`.
- Cancellation confirmation should be displayed.
- The appointment should no longer be treated as an active booking.

**Actual Result:** Browser alerts that appointment is cancelled  
**Status:** PASS

---

## TC-CAN-002 — Cancelled appointment releases the slot

| Field | Details |
|---|---|
| Requirement | FR-P-009 |
| Scenario | TS-APT-005 |
| Priority | Critical |
| Preconditions | Patient has a booked appointment |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Cancel an existing appointment. |
| 2 | Open the doctor's profile. |
| 3 | Select the appointment date. |
| 4 | Locate the previously booked time slot. |

### Expected Result

The cancelled appointment's time slot should become available for another patient.

**Actual Result:** Cancelling an appointment releases time slot 
**Status:** PASS

---

## TC-CAN-003 — Cancelled appointment remains in appointment history

| Field | Details |
|---|---|
| Requirement | FR-P-009 |
| Scenario | TS-APT-004 |
| Priority | Medium |
| Preconditions | Appointment has been cancelled |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Cancel an existing appointment. |
| 2 | Open **My Appointments**. |
| 3 | Locate the cancelled appointment. |

### Expected Result

The cancelled appointment should remain visible with status `CANCELLED` for historical reference.

**Actual Result:** Cancelled appointment remains visibile  
**Status:** PASS

# 9. Doctor Appointment Management

## TC-DOC-APT-001 — Doctor views assigned appointments

| Field | Details |
|---|---|
| Requirement | FR-D-003 |
| Scenario | TS-ADM-004 |
| Priority | High |
| Preconditions | Doctor has at least one appointment |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Login as a doctor. |
| 2 | Open the doctor dashboard. |
| 3 | Open the appointments section. |

### Expected Result

The doctor should see appointments assigned to them with the relevant patient, date, time and status.

**Actual Result:** Doctor can see the appointment assigned  
**Status:** PASS

---

## TC-DOC-APT-002 — Doctor completes an appointment

| Field | Details |
|---|---|
| Requirement | FR-D-004 |
| Scenario | TS-APT-006 |
| Priority | High |
| Preconditions | Doctor has a booked appointment |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Login as the doctor. |
| 2 | Open the appointments section. |
| 3 | Select a booked appointment. |
| 4 | Mark the appointment as completed. |

### Expected Result

The appointment status should change from `BOOKED` to `COMPLETED`.

**Actual Result:** Doctor can mark the appointment as completed, appointment shows completed  
**Status:** PASS

---

## TC-DOC-APT-003 — Doctor cancels an appointment

| Field | Details |
|---|---|
| Requirement | FR-D-005 |
| Scenario | TS-APT-007 |
| Priority | High |
| Preconditions | Doctor has a booked appointment |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Login as the doctor. |
| 2 | Open the appointments section. |
| 3 | Select a booked appointment. |
| 4 | Cancel the appointment. |
| 5 | Confirm the cancellation. |

### Expected Result

The appointment status should change to `CANCELLED`.

**Actual Result:** Doctor can successfully cancel an appointment  
**Status:** PASS

---

## TC-DOC-APT-004 — Doctor cannot modify another doctor's appointment

| Field | Details |
|---|---|
| Requirement | FR-D-003 |
| Scenario | TS-APT-006 |
| Priority | Critical |
| Preconditions | Appointments exist for multiple doctors |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Login as Doctor A. |
| 2 | Attempt to access an appointment assigned to Doctor B. |
| 3 | Attempt to modify the appointment. |

### Expected Result

Doctor A should not be able to view or modify Doctor B's appointment.

**Actual Result:** Doctor A cannot access Doctor B's appointments  
**Status:** PASS

# 10. Admin Management

## TC-ADMIN-001 — Admin login

| Field | Details |
|---|---|
| Requirement | FR-A-001 |
| Scenario | TS-ADM-001 |
| Priority | Critical |
| Preconditions | Valid admin account exists |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open the login page. |
| 2 | Enter valid admin email. |
| 3 | Enter valid admin password. |
| 4 | Click **Login**. |

### Expected Result

Admin should be successfully authenticated and redirected to the admin dashboard.

**Actual Result:** Not Executed  
**Status:** Not Executed

---

## TC-ADMIN-002 — Admin views doctors

| Field | Details |
|---|---|
| Requirement | FR-A-002 |
| Scenario | TS-ADM-002 |
| Priority | High |
| Preconditions | Admin is logged in |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open the admin dashboard. |
| 2 | Open **Manage Doctors**. |

### Expected Result

The system should display the list of doctors.

**Actual Result:** Not Executed  
**Status:** Not Executed

---

## TC-ADMIN-003 — Admin creates a doctor

| Field | Details |
|---|---|
| Requirement | FR-A-002 |
| Scenario | TS-ADM-002 |
| Priority | High |
| Preconditions | Admin is logged in |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open **Manage Doctors**. |
| 2 | Add a new doctor with valid information. |
| 3 | Save the doctor. |

### Expected Result

The doctor should be created successfully and appear in the doctor list.

**Actual Result:** Not Executed  
**Status:** Not Executed

---

## TC-ADMIN-004 — Admin views patients

| Field | Details |
|---|---|
| Requirement | FR-A-003 |
| Scenario | TS-ADM-003 |
| Priority | High |
| Preconditions | Admin is logged in and patients exist |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open the admin dashboard. |
| 2 | Open **Manage Patients**. |

### Expected Result

The system should display the list of registered patients.

**Actual Result:** Not Executed  
**Status:** Not Executed

---

## TC-ADMIN-005 — Admin views appointments

| Field | Details |
|---|---|
| Requirement | FR-A-004 |
| Scenario | TS-ADM-004 |
| Priority | High |
| Preconditions | Admin is logged in and appointments exist |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open the admin dashboard. |
| 2 | Open **Manage Appointments**. |

### Expected Result

The system should display the appointment records with relevant patient, doctor, date, time and status information.

**Actual Result:** Not Executed  
**Status:** Not Executed

---

## TC-ADMIN-006 — Admin updates doctor information

| Field | Details |
|---|---|
| Requirement | FR-A-002 |
| Scenario | TS-ADM-002 |
| Priority | Medium |
| Preconditions | Doctor exists and admin is logged in |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open **Manage Doctors**. |
| 2 | Select an existing doctor. |
| 3 | Modify doctor information. |
| 4 | Save the changes. |

### Expected Result

The doctor's information should be updated successfully.

**Actual Result:** Not Executed  
**Status:** Not Executed

---

## TC-ADMIN-007 — Admin updates patient information

| Field | Details |
|---|---|
| Requirement | FR-A-003 |
| Scenario | TS-ADM-003 |
| Priority | Medium |
| Preconditions | Patient exists and admin is logged in |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open **Manage Patients**. |
| 2 | Select an existing patient. |
| 3 | Modify patient information. |
| 4 | Save the changes. |

### Expected Result

The patient's information should be updated successfully.

**Actual Result:** Not Executed  
**Status:** Not Executed

---

## TC-ADMIN-008 — Admin updates appointment status

| Field | Details |
|---|---|
| Requirement | FR-A-004 |
| Scenario | TS-ADM-004 |
| Priority | Medium |
| Preconditions | Appointment exists and admin is logged in |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open **Manage Appointments**. |
| 2 | Select an existing appointment. |
| 3 | Change the appointment status. |
| 4 | Save the changes. |

### Expected Result

The appointment status should be updated successfully.

**Actual Result:** Not Executed  
**Status:** Not Executed

---

## TC-ADMIN-009 — Non-admin user cannot access admin functions

| Field | Details |
|---|---|
| Requirement | FR-A-001 |
| Scenario | TS-ADM-001 |
| Priority | Critical |
| Preconditions | Valid patient or doctor account exists |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Login as a patient or doctor. |
| 2 | Attempt to access the admin dashboard. |
| 3 | Attempt to access admin management functions. |

### Expected Result

Non-admin users should not be allowed to access admin functionality.

**Actual Result:** Not Executed  
**Status:** Not Executed

# 11. Authentication and Access Control

## TC-AUTH-001 — Login with invalid password

| Field | Details |
|---|---|
| Requirement | FR-P-002 |
| Scenario | TS-LOGIN-002 |
| Priority | High |
| Preconditions | Valid user account exists |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open the login page. |
| 2 | Enter a valid email. |
| 3 | Enter an incorrect password. |
| 4 | Click **Login**. |

### Expected Result

Login should fail and an appropriate error message should be displayed.

**Actual Result:** Browser shows "Invalid email or password"  
**Status:** PASS

---

## TC-AUTH-002 — Login with non-existent email

| Field | Details |
|---|---|
| Requirement | FR-P-002 |
| Scenario | TS-LOGIN-003 |
| Priority | High |
| Preconditions | No account exists with the entered email |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open the login page. |
| 2 | Enter a non-existent email. |
| 3 | Enter any password. |
| 4 | Click **Login**. |

### Expected Result

Login should fail and an appropriate error message should be displayed.

**Actual Result:** Browser show "Invalid email or password"  
**Status:** PASS

---

## TC-AUTH-003 — Inactive user cannot login

| Field | Details |
|---|---|
| Requirement | FR-P-002 |
| Scenario | TS-LOGIN-004 |
| Priority | Critical |
| Preconditions | User account exists with inactive status |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open the login page. |
| 2 | Enter the inactive user's email. |
| 3 | Enter the correct password. |
| 4 | Click **Login**. |

### Expected Result

Login should be rejected and the inactive user should not be allowed to access the application.

**Actual Result:** User inactive, cannot login, browser shows Invalid email or password
**Status:** PASS

---

## TC-AUTH-004 — Patient cannot access doctor functions

| Field | Details |
|---|---|
| Requirement | Role-based access |
| Scenario | Role access validation |
| Priority | Critical |
| Preconditions | Patient account exists |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Login as a patient. |
| 2 | Attempt to access the doctor dashboard. |
| 3 | Attempt to access doctor appointment functions. |

### Expected Result

The patient should not be allowed to access doctor-only functionality.

**Actual Result:** Patient is not able to access doctor appointment functions  
**Status:** PASS

---

## TC-AUTH-005 — Doctor cannot access admin functions

| Field | Details |
|---|---|
| Requirement | Role-based access |
| Scenario | Role access validation |
| Priority | Critical |
| Preconditions | Doctor account exists |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Login as a doctor. |
| 2 | Attempt to access the admin dashboard. |
| 3 | Attempt to access admin management functions. |

### Expected Result

The doctor should not be allowed to access admin-only functionality.

**Actual Result:** Doctor not able to access admin-only functionality  
**Status:** PASS

---

## TC-AUTH-006 — Unauthenticated user cannot access protected functionality

| Field | Details |
|---|---|
| Requirement | Authentication |
| Scenario | Protected resource validation |
| Priority | Critical |
| Preconditions | User is not logged in |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Open the application without logging in. |
| 2 | Attempt to access a protected page or API endpoint. |

### Expected Result

The system should prevent unauthorized access and redirect the user to login or return an appropriate authorization error.

**Actual Result:** Fails, opening a random module causes to login with the last used user login
**Status:** FAIL


# 12. API Testing

## TC-API-001 — Patient registration API with valid data

| Field | Details |
|---|---|
| Requirement | FR-P-001 |
| Scenario | TS-REG-001 |
| Priority | Critical |
| Preconditions | API is running |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Send a POST request to `/api/auth/register/`. |
| 2 | Provide valid patient registration data. |
| 3 | Submit the request. |

### Expected Result

- API should return a successful response.
- Patient user should be created.
- Patient profile should be created.

**Actual Result:** Patient is created  
**Status:** PASS

---

## TC-API-002 — Registration API rejects duplicate email

| Field | Details |
|---|---|
| Requirement | FR-P-001 |
| Scenario | TS-REG-004 |
| Priority | High |
| Preconditions | Email already exists |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Send a POST request to `/api/auth/register/`. |
| 2 | Use an email that already exists. |
| 3 | Submit the request. |

### Expected Result

The API should reject the request and return a validation error.

**Actual Result:** Tried duplicate email  
**Status:** API rejects the request

---

## TC-API-003 — Login API with valid credentials

| Field | Details |
|---|---|
| Requirement | FR-P-002 |
| Scenario | TS-LOGIN-001 |
| Priority | Critical |
| Preconditions | Valid user account exists |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Send a POST request to `/api/auth/login/`. |
| 2 | Provide valid email and password. |
| 3 | Submit the request. |

### Expected Result

The API should authenticate the user and return the appropriate user and role information.

**Actual Result:** API successfully authenticates the user  
**Status:** PASS

---

## TC-API-004 — Login API rejects invalid credentials

| Field | Details |
|---|---|
| Requirement | FR-P-002 |
| Scenario | TS-LOGIN-002 |
| Priority | High |
| Preconditions | API is running |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Send a POST request to `/api/auth/login/`. |
| 2 | Provide an incorrect password. |
| 3 | Submit the request. |

### Expected Result

The API should reject the request and return an authentication error.

**Actual Result:** API successfully rejects invalid credentials  
**Status:** PASS

---

## TC-API-005 — Appointment API creates valid appointment

| Field | Details |
|---|---|
| Requirement | FR-P-006 |
| Scenario | TS-BOOK-001 |
| Priority | Critical |
| Preconditions | Valid patient, doctor and available slot exist |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Send a POST request to `/api/appointments/`. |
| 2 | Provide valid patient, doctor, date and time information. |
| 3 | Submit the request. |

### Expected Result

The appointment should be created successfully with status `BOOKED`.

**Actual Result:** Appointment API creates booking successfully  
**Status:** PASS

---

## TC-API-006 — Appointment API rejects double booking

| Field | Details |
|---|---|
| Requirement | FR-P-006 |
| Scenario | TS-BOOK-002 |
| Priority | Critical |
| Preconditions | Doctor/date/time already has a booked appointment |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Send a POST request for an already booked doctor/date/time. |
| 2 | Submit the request. |

### Expected Result

The API should reject the request with a validation error indicating that the slot is already booked.

**Actual Result:** API rejects attempts to schedule a already booked slot  
**Status:** PASS

---

## TC-API-007 — Appointment API updates appointment

| Field | Details |
|---|---|
| Requirement | FR-P-008 / FR-P-009 |
| Scenario | TS-APT-002 / TS-APT-004 |
| Priority | High |
| Preconditions | Existing appointment exists |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Send a PATCH request to the appointment endpoint. |
| 2 | Update the appointment date/time or status. |
| 3 | Submit the request. |

### Expected Result

The appointment should be updated successfully and the response should contain the updated appointment information.

**Actual Result:** API succssfully updates the appointment record  
**Status:** PASS

---

## TC-API-008 — Appointment API rejects booking outside schedule

| Field | Details |
|---|---|
| Requirement | FR-P-006 |
| Scenario | TS-BOOK-003 |
| Priority | Critical |
| Preconditions | Selected appointment time is outside the doctor's active schedule |

### Test Steps

| Step | Action |
|---:|---|
| 1 | Send a POST request to `/api/appointments/`. |
| 2 | Provide a doctor, date and time outside the doctor's schedule. |
| 3 | Submit the request. |

### Expected Result

The API should reject the appointment because the selected time is outside the doctor's active schedule.

**Actual Result:** API rejects the request  
**Status:** PASS


# Requirement Traceability Matrix (RTM)