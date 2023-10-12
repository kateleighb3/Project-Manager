let timeDisplayEl = $('#time-display'); //a variable that defines where content will be displayed on HTML

function displayTime() { // function to display the date and time right now
    let rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a'); // what to display/show- the current date and time
    timeDisplayEl.text(rightNow);// showing the date and time (rightNow) as text in the timeDisplayEl variable
};



displayTime(); // calling the function to display the current time
setInterval(displayTime, 1000); // calling setInterval method to show the current time (displayTime) in 1 second intervals.

