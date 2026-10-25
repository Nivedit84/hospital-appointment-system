\# Hospital Appointment Management System



A full-stack hospital appointment management system built with HTML, CSS, JavaScript, Django REST Framework, and PostgreSQL.



\## Features



\### Patient

\- Patient registration and login

\- View doctors

\- View doctor profiles

\- View available appointment slots

\- Book appointments

\- View appointments

\- Reschedule appointments

\- Cancel appointments



\### Doctor

\- Doctor login

\- Doctor dashboard

\- View appointments

\- View appointment details

\- Complete or cancel appointments



\### Admin

\- Admin login

\- Manage doctors

\- Manage patients

\- Manage appointments



\## Tech Stack



\### Frontend

\- HTML

\- CSS

\- JavaScript



\### Backend

\- Python

\- Django

\- Django REST Framework



\### Database

\- PostgreSQL



\## Project Structure



```text

Appointment-Management/

│

├── frontend/

│   ├── HTML files

│   ├── JavaScript files

│   └── style.css

│

├── django-backend/

│   ├── manage.py

│   ├── hospital/

│   └── hospital\_backend/

│

└── README.md


Setup Instructions
1. Clone the repository
git clone https://github.com/Nivedit84/hospital-appointment-system.git
cd hospital-appointment-system

2. Backend Setup
Go to the backend:
cd django-backend

Create a virtual environment:
python -m venv venv

Activate it on Windows:
venv\Scripts\activate

Install dependencies:
pip install -r requirements.txt

Configure PostgreSQL in:
hospital_backend/settings.py

Run migrations:
python manage.py migrate

Start the backend:
python manage.py runserver

Backend:
http://127.0.0.1:8000/

3. Frontend Setup
Open the frontend directory using a local development server.
The frontend communicates with the Django backend at:
http://127.0.0.1:8000/

API Endpoints
/api/auth/login/
/api/auth/register/
/api/doctors/
/api/patients/
/api/appointments/
/api/schedules/
