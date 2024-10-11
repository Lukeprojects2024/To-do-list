Task Management App
This is a simple Task Management App that allows users to add, edit, delete, and mark tasks as completed. 

The app is built using vanilla JavaScript, HTML, and CSS, and it utilizes localStorage to save tasks locally in the browser.

Features
Add Tasks: Users can add new tasks with a title and an automatically generated date.
Delete Tasks: Remove tasks from the task list permanently.
Edit Tasks: Modify the title of a task.
Mark as Completed: Toggle tasks between completed and incomplete states with a visual indication.
Task Saving: Tasks are saved in the browser using localStorage, so they persist even after refreshing the page.

Technologies Used
HTML: For structuring the app layout.
CSS: For styling, using custom fonts from Google Fonts and icons from Material Symbols.
JavaScript: For the interactive features, such as adding, deleting, and editing tasks, as well as saving them in localStorage.

Open the project folder and launch the index.html file in your browser.

File Structure
index.html: Contains the HTML structure and embedded CSS for the app layout and style.
Main Script: The JavaScript code to handle the task operations like adding, editing, deleting, and marking tasks as done.
LocalStorage
This app uses localStorage to store the tasks, allowing the user to refresh the page without losing their data.

Tasks are stored under the key savedTask.
Each task has the following properties:
title: The task's name.
date: The date the task was added.
isDone: Boolean indicating if the task is marked as completed.
Future Improvements
Add task prioritization (high, medium, low).
Allow the user to specify a due date for each task.
Add categories or tags to organize tasks.
Implement filtering options (e.g., show only completed or pending tasks).
License
This project is open-source and available under the MIT License.

