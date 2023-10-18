let timeDisplayEl = $('#time-display'); //a variable that defines where content will be displayed on HTML
let projectDisplayEl = $('#project-display');
let projectFormEl = $('#project-form');
let projectNameInputEl = $('#project-name-input');
let projectTypeInputEl = $('#project-type-input');
let projectDateInputEl = $('#project-due-date-input');

function displayTime() { // function to display the date and time right now
    let rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a'); // what to display/show- the current date and time
    timeDisplayEl.text(rightNow);// showing the date and time (rightNow) as text in the timeDisplayEl variable
};

    let projectsArray = localStorage.getItem('projects') ? JSON.parse(localStorage.getItem('projects')) : [];

    
    function displayProjects() {
        //clear existing projects

        projectDisplayEl.empty();

        // Loop through the projectsArray and display each project
        for (let project of projectsArray) {
            const displayString = `
                <tr>
                    <td>${project.name}</td>
                    <td>${project.type}</td>
                    <td>${project.dueDate}</td>
                    <td>X</td>
                </tr>
            `;
            projectDisplayEl.append(displayString);
        }
    }

    function addProject (event){
        event.preventDefault();

        //Get the input values
        const projectName = projectNameInputEl.val();
        const projectType = projectTypeInputEl.val();
        const projectDueDate = projectDateInputEl.val();

    // Create a project object
        const project = {
            name: projectName,
            type: projectType,
            dueDate: projectDueDate
    };

    //Add the project (object) to the array
    projectsArray.push(project);

    // Update localStorage
    localStorage.setItem('projects', JSON.stringify(projectsArray));

    // Display the updated projects
    displayProjects();

    // Clear input values
    projectNameInputEl.val('');
    projectTypeInputEl.val('');
    projectDateInputEl.val('');
    }

    function deleteProjects() {
        // Clear localStorage and the display
        localStorage.removeItem('projects');
        projectsArray.length = 0;  // Empty the array
        projectDisplayEl.empty();  // Clear the display
    }

    projectFormEl.on('submit', addProject);
    // Add a button click event to delete projects
    $('#delete-projects').on('click', deleteProjects);


    displayProjects();



displayTime(); // calling the function to display the current time
setInterval(displayTime, 1000); // calling setInterval method to show the current time (displayTime) in 1 second intervals.

