# Project-Manager

The Project Manager is a simple web application that allows users to manage and track their projects. It provides a user-friendly interface to add new projects, display existing projects, and delete projects as needed. The application also displays the current time and date.


## Features

- **Add New Projects:** Users can easily add new projects by filling out a form with project details such as name, type, and due date.

- **Display Projects:** The application displays a table of existing projects, showing project name, type, due date, and a delete button.

- **Delete Projects:** Users can delete a project by clicking the "X" button associated with each project. This action removes the project from the display and updates local storage.

- **Time and Date Display:** The current time and date are prominently displayed at the top of the page.

- **Highlighting:** Projects are visually highlighted based on their due dates. Projects due today are highlighted in light yellow, and past-due projects are highlighted in light red.

## Technologies Used

- HTML
- CSS
- JavaScript
- Bootstrap (v5.1.3)
- jQuery (v3.5.1)
- dayjs (v1.11.10)

## Usage

1. Open the `index.html` file in a web browser to launch the Project Manager.

2. Click the "Add Project" button to open the project form.

3. Fill in the required project details: Name, Type, and Due Date.

4. Click "Add Project" to add the project to the list.

5. View the list of projects in the table, including their details and a delete button.

6. To delete a project, click the "X" button associated with that project.

## How to Contribute

If you'd like to contribute to the Project Manager, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Description of changes'`.
4. Push to the branch: `git push origin feature-name`.
5. Create a pull request.

## Acknowledgments

- Thanks to [Bootstrap](https://getbootstrap.com/) for providing a responsive and customizable front-end framework.
- Thanks to [dayjs](https://day.js.org/) for simplifying date and time manipulation in JavaScript.
- This project was created as a simple example and may be extended or modified for more advanced use cases.