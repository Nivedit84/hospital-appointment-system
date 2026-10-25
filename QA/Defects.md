# Defects

## DEF-001 — Duplicate Email Causes 500 Error

| Field | Details |
|---|---|
| Defect ID | DEF-001 |
| Test Case | TC-REG-007 |
| Requirement | FR-P-001 |
| Severity | High |
| Priority | High |
| Module | Patient Registration |
| Status | Open |

### Description

When a patient attempts to register using an email address that already exists in the system, Django returns a 500 Internal Server Error instead of displaying a user-friendly validation message.

### Steps to Reproduce

1. Open the patient registration page.
2. Enter valid patient information.
3. Enter an email address that is already registered.
4. Click **Register**.

### Expected Result

Registration should fail gracefully and the UI should display a message such as:

> Email is already registered.

### Actual Result

Django returns a 500 Internal Server Error caused by the database unique constraint. The UI does not display a user-friendly error message.

### Impact

A normal user receives no useful explanation for why registration failed.

### Evidence

Backend/Django log shows a duplicate key violation for the existing email address.

### Suggested Fix

Handle the duplicate email validation before attempting to create the User record and return a proper API validation response (for example, HTTP 400) that the frontend can display to the user.

### Status: Resolved


## DEF-002 — Invalid Phone Number Accepted

| Field | Details |
|---|---|
| Defect ID | DEF-002 |
| Test Case | Invalid Phone Number |
| Requirement | FR-P-001 |
| Severity | Medium |
| Priority | High |
| Module | Patient Registration |
| Status | Open |

### Description

The registration system accepts an invalid phone number and creates a patient record.

### Steps to Reproduce

1. Open the patient registration page.
2. Enter valid patient information.
3. Enter `123` as the phone number.
4. Click **Register**.

### Expected Result

Registration should be rejected and the user should be informed that the phone number is invalid.

### Actual Result

Registration was accepted and a patient record was created with phone number `123`.

### Impact

Invalid patient contact information can be stored in the database.

### Suggested Fix

Add phone-number validation on the frontend and backend.

### Status - Resolved

## DEF-003 — Gender Required Validation Not Displayed

| Field | Details |
|---|---|
| Defect ID | DEF-002 |
| Test Case | Not Selecting Gender |
| Requirement | FR-P-001 |
| Severity | Medium |
| Priority | Medium |
| Module | Patient Registration |
| Status | Open |

### Description

When the user does not select a gender, form submission is blocked, but the UI does not clearly indicate that gender is a required field.

### Steps to Reproduce

1. Open the patient registration page.
2. Enter valid patient information.
3. Leave gender unselected.
4. Click **Create Account**.

### Expected Result

Registration should be prevented and the UI should clearly indicate that gender is required.

### Actual Result

Registration was prevented, but the UI did not clearly indicate that gender is required.

### Impact

The user may not understand why the registration cannot proceed.

### Suggested Fix

Add clear required-field validation for the gender field.

## DEF-004 — Inactive Account Shows Incorrect Login Error

| Field | Details |
|---|---|
| Defect ID | DEF-003 |
| Test Case | TC-LOGIN-004 |
| Requirement | FR-P-002 |
| Severity | Medium |
| Priority | High |
| Module | Patient Login |
| Status | Open |

### Description

When an inactive patient attempts to log in using valid credentials, the login is rejected but the UI displays "Invalid email or password" instead of indicating that the account is inactive.

### Steps to Reproduce

1. Set an existing patient account to inactive.
2. Open the login page.
3. Enter the patient's correct email.
4. Enter the correct password.
5. Click Login.

### Expected Result

Login should fail and the user should be informed that the account is inactive.

### Actual Result

Login failed, but the UI displayed "Invalid email or password."

### Impact

The user receives misleading information about why their login was rejected.

## Observation - If a user is inactive, and we try to create another user with the same email, same user will get active again

## DEF-004 — Inactive Doctor Visible to Patients

| Field | Details |
|---|---|
| Defect ID | DEF-004 |
| Test Case | TC-DOC-007 |
| Requirement | FR-P-003 |
| Severity | High |
| Priority | High |
| Module | Doctor Listing / Booking |
| Status | Open |

### Description

Doctors with inactive status are still visible to patients and their information can be accessed.

### Steps to Reproduce

1. Set a doctor account to inactive.
2. Login as a patient.
3. Open the doctor listing.
4. View the inactive doctor.

### Expected Result

Inactive doctors should not be displayed or available for appointment booking.

### Actual Result

The inactive doctor was still visible and the doctor's information could be viewed.

### Impact

Patients may attempt to book appointments with doctors who are not currently available.

### Suggested Fix

Filter inactive doctors from the patient-facing doctor listing and prevent appointment booking with inactive doctors at the backend.

### Status - Resolved

# DEF-AUTH-001 — Previous User Session Persists After Browser Restart

| Field | Details |
|---|---|
| **Defect ID** | DEF-AUTH-001 |
| **Title** | Previous user remains authenticated after browser restart |
| **Module** | Authentication / Session Management |
| **Severity** | Critical |
| **Priority** | Critical |
| **Related Test Case** | TC-AUTH-006 |
| **Status** | Open |
| **Environment** | Hospital Management Application |

### Description

The application persists the authentication session of the previously logged-in user even after the browser is closed and reopened. When the application is accessed again without performing a new login, the previous user is automatically authenticated.

### Preconditions

- User A has a valid account.
- User A is logged into the application.
- The user closes the browser/application.
- No new login is performed after reopening the application.

### Steps to Reproduce

| Step | Action |
|---:|---|
| 1 | Log in to the application as **User A**. |
| 2 | Close the browser completely. |
| 3 | Reopen the browser. |
| 4 | Open the hospital management application. |
| 5 | Attempt to access a protected module without logging in. |

### Expected Result

The application should require the user to authenticate before granting access to protected functionality.

### Actual Result

The application automatically authenticates the previously logged-in **User A** and allows access to protected functionality without requiring a new login.

### Impact

This creates a serious **authentication and account-isolation risk**. A different person using the same browser/device could potentially gain access to the previous user's patient, doctor, appointment, or other protected information.

### Recommendation

Review session/token persistence and logout/session-expiration handling. Ensure that protected resources cannot be accessed unless a valid authenticated session is intentionally established for the current user.