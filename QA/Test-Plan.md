3.1 Objective
To verify that the Hospital Appointment Management System functions according to the defined requirements and business rules.

3.2 Testing Scope
We will test:
- Patient registration
- Patient login
- Doctor login
- Doctor listing/profile
- Appointment availability
- Appointment booking
- Appointment viewing
- Appointment rescheduling
- Appointment cancellation
- Doctor appointment management
- Admin management functionality
- Input validation
- API/backend error handling
- Basic role/access validation


3.3 Testing Types
We'll use:

Functional Testing
Does the feature work correctly?

Negative Testing
Invalid input?

Boundary Testing
What happens at limits?

Validation Testing
Does the system reject invalid data?

API Testing
Test APIs using Postman

UI Testing
Does the interface behave correctly?

Automation Testing
Can repetitive important tests be executed automatically?


3.4 Testing Approach
We'll use:
Requirements
    ↓
Test Scenarios
    ↓
Test Cases
    ↓
Manual Execution
    ↓
Defect Reporting
    ↓
Bug Fix
    ↓
Retesting
    ↓
Automation


3.5 Tools
Tool	Purpose
Browser	Manual testing
Django API	Backend/API testing
PostgreSQL	Database verification
Playwright	UI automation
Python	Automation language
Git/GitHub	Test/code version control


3.6 Entry Criteria
Testing can begin when:
- Application is running.
- Backend/API is available.
- Database is available.
- Test users/data are available.
- Major features are implemented.


3.7 Exit Criteria
Testing can be considered complete when:
- Critical test cases pass.
- Major defects are resolved.
- Failed cases have been investigated.
- Regression testing is completed.
- Automation for critical flows is completed.