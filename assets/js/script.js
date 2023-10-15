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

function storeProjectLocal () {
    //get the values form the form inputs
    const projectName = projectNameInputEl.val();
    const projectType = projectTypeInputEl.val();
    const projectDueDate = projectDateInputEl.val();
 
    // create an objec to store the project data  
    const projectData = {
        name: projectName,
        type: projectType,
        dueDate: projectDueDate
    };

    //convert the project data to a JSON string and store it in local storage
    localStorage.setItem('project', JSON.stringify(projectData));
};

function displayStoredProjects () {
    let projectInfo = localStorage.getItem('project');
    // document.getElementById('project-display').innerHTML = JSON.parse(projectInfo);
    
};

 // let project = document.getElementById("project-form")
    // localStorage.setItem('project', project.value );

// on clicking "add project" - project is saved to local storage
// then saved project from local storage is displayed in table
displayStoredProjects();

displayTime(); // calling the function to display the current time
setInterval(displayTime, 1000); // calling setInterval method to show the current time (displayTime) in 1 second intervals.

