#  Django-React-CRUD 

### A simple Create, Read, Update, and Delete (CRUD) application built using Django (with the Django REST framework) on the backend and React on the frontend. This project demonstrates how to set up basic endpoints in Django for managing data and how to consume and interact with those endpoints in a React client.

## Features
### Django REST API for managing Book records:

- Endpoints for creating, listing, updating, and deleting books.

### React frontend that displays the list of books and allows the user to:

1. Add new books.
2. Retrieve added books and display them.
2. Update existing book titles.
3. Delete unwanted books.

## Tech Stack
- Backend:
1. Python 3.11 or 3.12+
2. Django
3. Django REST framework

- Frontend:
1. React
2. CSS
3. JavaScript
   
Project Structure

Django-React-CRUD/

├── backend/

│ ├── /

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

# 

backend/: Houses the Django project and the books app.

books/models.py defines the Book model.

books/serializers.py defines the Django REST framework serializer for the Book model.

books/views.py contains the ViewSets or function-based views to handle CRUD logic.

books/urls.py sets up the URL routing for the API endpoints.

#

frontend/: A standard Create React App (or similar) structure that contains the React code.

App.js implements the fetch calls to the Django REST API and renders the list of books, plus forms/buttons for creating, updating, and deleting.

#

# Getting Started

### Prerequisites

1. Python 3.11 or higher (You can check your Python version with python --version)
2. Node.js and npm (or yarn), to run the React development server.
3. pip (usually comes bundled with Python).

## Steps:
1\. Clone the Repository
```
git clone https://github.com/veeoid/Django-React-CRUD.git
cd Django-React-CRUD
```
2\. Set Up the Django Backend
Create and activate a virtual environment (recommended):
```
python -m venv venv
source venv/bin/activate # On macOS/Linux
.\\venv\\Scripts\\activate # On Windows
```
Install Python dependencies:
```
pip install -r requirements.txt
```
If you don’t have a requirements.txt, you can install packages individually:
```
pip install django djangorestframework corsheaders
```
Run the database migrations:
```
cd backend
python manage.py migrate
```
(Optional) Create a superuser if you need admin access:
```
python manage.py createsuperuser
```

## Start the Django development server:
```
python manage.py runserver
```
Confirm the API is running at http://127.0.0.1:8000/.

3\. Set Up the React Frontend

### In a new terminal window/tab (still within the project folder), go to the frontend folder:
```
cd ../frontend
```
### Install dependencies:
```
npm install
```
### Start the React development server:
```
npm start
```
By default, the React app runs at http://localhost:3000.

4\. Configure CORS (if needed)

If you run into cross-origin errors, you might need to configure django-cors-headers:

Install it:
```
pip install django-cors-headers
```
Add it to INSTALLED_APPS in your settings.py:
```
INSTALLED_APPS = [

# ...

"corsheaders",

# ...

]
```
Add it to your MIDDLEWARE above common middleware:
```
MIDDLEWARE = [
"corsheaders.middleware.CorsMiddleware",

# ...

]
```
Set allowed origins (e.g. allowing requests from localhost:3000) in settings.py:
```
CORS_ALLOWED_ORIGINS = [
"http://localhost:3000",
]
```

## Usage
- List all books: The homepage (React) automatically fetches the list of books from the Django API.
- Add a book: In the React interface, fill out the “Book Title” and “Release Year” fields, then click Add Book.
- Update a book: Type a new title into the “New Title...” field below the book you want to change, and click Change Title.
- Delete a book: Click Delete next to the book.

# 
Endpoints
- Depending on your exact URL config, you might have something like:
- GET /api/books/ – Returns a list of books.
- POST /api/books/create/ – Creates a new book.
- PUT /api/books/<id>/ – Updates an existing book with the given id.
- DELETE /api/books/<id>/ – Deletes an existing book with the given id.
- Make sure your trailing slashes are consistent with your Django settings (e.g., APPEND_SLASH=True by default, I made this mistake and was crying why its not working).
