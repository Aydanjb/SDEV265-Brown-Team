# SDEV265-Brown-Team

## About The Project

This project is a collaborative effort by the SDEV265 Brown Team. It is a web application bulit with HTML/CSS, JavaScript, and Django. With this web application you can create, edit, delete, and view flashcards. The application also features a Pomodoro timer to improve time management.


## Getting Started

### Prerequisites
    
    1. Install Python 3
    2. Install the Python extension for VSCode
    
### Installation

Windows

1. Clone the repository
   ```sh
   git clone https://github.com/your_username_/CSCI202-Brown-Team.git
   ```
2. Setup project environment
    ```sh
    Set-ExecutionPolicy Unrestricted -Scope Process
    py -3 -m venv .venv
    .venv\scripts\activate
    ```
3. Change directories
    ```
    cd .\SDEV265-Brown-Team\
    ```
4. Install project dependencies
   ```
   python -m pip install --upgrade pip
   python -m pip install -r .\requirements.txt
   ```
5. Run development server
   ```
   python manage.py runserver
   ```
6. Go to 127.0.0.1:8000 in your browser
