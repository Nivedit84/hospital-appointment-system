# Requirement Traceability Matrix (RTM)
### Connecting requirements → test cases → defects
## 1. Purpose

The Requirement Traceability Matrix (RTM) maps each functional requirement to its corresponding test cases and defects.

It ensures that all identified requirements have corresponding test coverage and that defects can be traced back to the affected requirements.

---

## 2. RTM

| Requirement ID | Requirement | Test Case IDs | Defect ID | Test Status |
|---|---|---|---|---|
| FR-P-001 | Patient Registration | TC-REG-001 to TC-REG-007, TC-API-001 to TC-API-003 | DEF-001, DEF-002 | Tested |
| FR-P-002 | Patient Authentication | TC-AUTH-001 to TC-AUTH-006, TC-API-004 | DEF-AUTH-001 | Defect Identified |
| FR-P-003 | Doctor Listing and Availability | TC-DOC-001 to TC-DOC-007 | DEF-004 | Tested |
| FR-P-006 | Appointment Booking | TC-BOOK-001 to TC-BOOK-008, TC-API-005, TC-API-008 | — | Tested |
| FR-P-007 | View Appointments | TC-APT-001 to TC-APT-004 | — | Tested |
| FR-P-008 | Reschedule Appointment | TC-RES-001 to TC-RES-004, TC-API-007 | — | Tested |
| FR-P-009 | Cancel Appointment | TC-CAN-001 to TC-CAN-002, TC-API-006 | — | Tested |
| FR-D-004 | Doctor Views Appointment Details | TC-DOCFLOW-005 | — | Tested |
| FR-D-005 | Doctor Completes Appointment | TC-DOCFLOW-006 | — | Tested |
| FR-A-001 | Admin Authentication | TC-ADMIN-001 to TC-ADMIN-002 | — | Skipped |
| FR-A-002 | Doctor Management | TC-ADMIN-003 to TC-ADMIN-005 | — | Skipped |
| FR-A-003 | Patient Management | TC-ADMIN-006 onward | — | Skipped |

---

## 3. Defect Traceability

| Defect ID | Requirement ID | Related Test Case | Description | Status |
|---|---|---|---|---|
| DEF-001 | FR-P-001 | TC-REG-007 | Duplicate email caused a 500 error during patient registration | Fixed |
| DEF-002 | FR-P-001 | Patient registration validation test | Invalid phone number was accepted | Fixed |
| DEF-004 | FR-P-003 | Doctor listing test | Inactive doctors were visible to patients | Fixed |
| DEF-AUTH-001 | FR-P-002 | TC-AUTH-006 | User session was retained after browser restart, creating an account isolation risk | Open |

---

## 4. RTM Status Definitions

| Status | Meaning |
|---|---|
| Tested | Requirement has corresponding test coverage |
| Defect Identified | Testing identified a defect related to the requirement |
| Fixed | Identified defect has been corrected and retested |
| Skipped | Requirement was intentionally not tested in the current testing phase |
| Pending | Testing has not yet been completed |