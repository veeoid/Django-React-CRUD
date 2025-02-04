#Django-React-CRUD

##A simple Create, Read, Update, and Delete (CRUD) application built using Django (with the Django REST framework) on the backend and React on the frontend. This project demonstrates how to set up basic endpoints in Django for managing data and how to consume and interact with those endpoints in a React client.

Features
Django REST API for managing Book records:
Endpoints for creating, listing, updating, and deleting books.
React frontend that displays the list of books and allows the user to:
Add new books (title and release year).
Update existing book titles.
Delete books.
Tech Stack
Backend:
Python 3.11 or 3.12+
Django
Django REST framework
Frontend:
React
fetch API for HTTP requests
Project Structure
css
Copy
Django-React-CRUD/
├── backend/
│ ├── <your_django_project>/
│ │ ├── settings.py
│ │ ├── urls.py
│ │ ├── ...
│ ├── books/
│ │ ├── models.py
│ │ ├── views.py
│ │ ├── serializers.py
│ │ ├── urls.py
│ │ └── ...
│ └── manage.py
└── frontend/
├── src/
│ ├── App.js
│ ├── ...
└── package.json
backend/: Houses the Django project and the books app.
books/models.py defines the Book model.
books/serializers.py defines the Django REST framework serializer for the Book model.
books/views.py contains the ViewSets or function-based views to handle CRUD logic.
books/urls.py sets up the URL routing for the API endpoints.
frontend/: A standard Create React App (or similar) structure that contains the React code.
App.js implements the fetch calls to the Django REST API and renders the list of books, plus forms/buttons for creating, updating, and deleting.
Getting Started
Prerequisites
Python 3.11 or higher (You can check your Python version with python --version)
Node.js and npm (or yarn), to run the React development server.
pip (usually comes bundled with Python).

1. Clone the Repository
   bash
   Copy
   git clone https://github.com/veeoid/Django-React-CRUD.git
   cd Django-React-CRUD
2. Set Up the Django Backend
   Create and activate a virtual environment (recommended):
   bash
   Copy
   python -m venv venv
   source venv/bin/activate # On macOS/Linux
   .\venv\Scripts\activate # On Windows
   Install Python dependencies:
   bash
   Copy
   pip install -r requirements.txt
   If you don’t have a requirements.txt, you can install packages individually:
   bash
   Copy
   pip install django djangorestframework corsheaders
   Run the database migrations:
   bash
   Copy
   cd backend
   python manage.py migrate
   (Optional) Create a superuser if you need admin access:
   bash
   Copy
   python manage.py createsuperuser
   Start the Django development server:
   bash
   Copy
   python manage.py runserver
   Confirm the API is running at http://127.0.0.1:8000/.
3. Set Up the React Frontend
   In a new terminal window/tab (still within the project folder), go to the frontend folder:
   bash
   Copy
   cd ../frontend
   Install dependencies:
   bash
   Copy
   npm install
   Start the React development server:
   bash
   Copy
   npm start
   By default, the React app runs at http://localhost:3000.
4. Configure CORS (if needed)
   If you run into cross-origin errors, you might need to configure django-cors-headers:

Install it:
bash
Copy
pip install django-cors-headers
Add it to INSTALLED_APPS in your settings.py:
python
Copy
INSTALLED_APPS = [

# ...

"corsheaders",

# ...

]
Add it to your MIDDLEWARE above common middleware:
python
Copy
MIDDLEWARE = [
"corsheaders.middleware.CorsMiddleware",

# ...

]
Set allowed origins (e.g. allowing requests from localhost:3000) in settings.py:
python
Copy
CORS_ALLOWED_ORIGINS = [
"http://localhost:3000",
]
Usage
List all books: The homepage (React) automatically fetches the list of books from the Django API.
Add a book: In the React interface, fill out the “Book Title” and “Release Year” fields, then click Add Book.
Update a book: Type a new title into the “New Title...” field below the book you want to change, and click Change Title.
Delete a book: Click Delete next to the book.
Endpoints
Depending on your exact URL config, you might have something like:

GET /api/books/ – Returns a list of books.
POST /api/books/create/ – Creates a new book.
PUT /api/books/<id>/ – Updates an existing book with the given id.
DELETE /api/books/<id>/ – Deletes an existing book with the given id.
Make sure your trailing slashes are consistent with your Django settings (e.g., APPEND_SLASH=True by default).

Troubleshooting
“You called this URL via PUT, but the URL doesn’t end in a slash…”
Make sure that your fetch URL includes the trailing slash (e.g., books/1/ rather than books/1). Alternatively, set APPEND_SLASH=False in settings.py.
CORS errors
Make sure django-cors-headers is configured properly in settings.py.
