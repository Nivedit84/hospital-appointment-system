Registration
ID	Scenario
TS-REG-001	Register with valid information
TS-REG-002	Register with missing required information
TS-REG-003	Register with invalid email
TS-REG-004	Register with duplicate email
TS-REG-005	Register with invalid password


Login
ID	Scenario
TS-LOGIN-001	Login with valid credentials
TS-LOGIN-002	Login with incorrect password
TS-LOGIN-003	Login with non-existent email
TS-LOGIN-004	Login with inactive account
TS-LOGIN-005	Login with empty credentials


Doctor
ID	Scenario
TS-DOC-001	View doctor list
TS-DOC-002	View doctor profile
TS-DOC-003	View doctor schedule
TS-DOC-004	Select available appointment slot
TS-DOC-005	Attempt to select unavailable slot


Booking
ID	Scenario
TS-BOOK-001	Book available appointment
TS-BOOK-002	Attempt to book occupied slot
TS-BOOK-003	Attempt to book outside doctor's schedule
TS-BOOK-004	Book without selecting date
TS-BOOK-005	Book without selecting time
TS-BOOK-006	Book with invalid appointment data


Appointment Management
ID	Scenario
TS-APT-001	View booked appointment
TS-APT-002	Reschedule appointment
TS-APT-003	Reschedule to occupied slot
TS-APT-004	Cancel appointment
TS-APT-005	Verify cancelled slot becomes available
TS-APT-006	Complete appointment as doctor
TS-APT-007	Cancel appointment as doctor


Admin
ID	Scenario
TS-ADM-001	Admin login
TS-ADM-002	Manage doctors
TS-ADM-003	Manage patients
TS-ADM-004	Manage appointments