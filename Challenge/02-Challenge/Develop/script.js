

// Get current date and time
const currentDate = new Date();
const currentHour = currentDate.getHours(); 

// Generate time blocks for standard business hours (9am–5pm)
const timeBlocks = document.getElementById('timeBlocks'); 

// Display current date at the top of the calendar
document.getElementById('currentDay').textContent = currentDate.toDateString(); 

for (let hour = 9; hour <= 17; hour++) {
  const timeBlock = document.createElement('div');
  timeBlock.className = 'time-block'; 
  
  // Color code time blocks based on past, present, or future
  if (hour < currentHour) {
    timeBlock.classList.add('past');
  } else if (hour === currentHour) {
    timeBlock.classList.add('present');
  } else {
    timeBlock.classList.add('future');
  } 
  
  // Create input field for each time block
  const inputField = document.createElement('input');
  inputField.type = 'text';
  inputField.value = getEvent(hour); // Retrieve event from local storage
  timeBlock.appendChild(inputField); 
  
  // Create save button for each time block
  //   // Create save button for each time block
  //   const saveButton = document.createElement('button');
  //   saveButton.textContent = 'Save';
  //   saveButton.addEventListener('click', function () {
  //     saveEvent(hour, inputField.value); // Save event to local storage
  //   });
  const saveButton = document.createElement('button');
  saveButton.textContent = 'Save';
  // Attach event listener to the save button
  $('.saveBtn').addEventListener('click', function (event) {
    const hourClicked = parseInt(timeBlock.id.split('-')[1]); // Get the hour from the time block ID
    saveEvent(hourClicked, inputField.value); // Save event to local storage
    alert('event added to local storage!')
  });
  timeBlock.appendChild(saveButton);

  timeBlocks.appendChild(timeBlock);
}

// Function to save event to local storage
function saveEvent(hour, eventText) {
  localStorage.setItem(`event_${hour}`, eventText);
} 

// Function to get event from local storage
function getEvent(hour) {
  return localStorage.getItem(`event_${hour}`) || '';
} 

// // Generate time blocks for standard business hours (9am–5pm)
// const timeBlocks = document.getElementById('timeBlocks'); 

// // Display current date at the top of the calendar
// document.getElementById('currentDay').textContent = currentDate.toDateString(); 


// for (let hour = 9; hour <= 17; hour++) {
//   const timeBlock = document.createElement('div');
//   timeBlock.className = 'time-block'; }

//   // Color code time blocks based on past, present, or future
//   if (hour < currentHour) {
//     timeBlock.classList.add('past');
//   } else if (hour === currentHour) {
//     timeBlock.classList.add('present');
//   } else {
//     timeBlock.classList.add('future');
//   } 

//   // Create input field for each time block
//   const inputField = document.createElement('input');
//   inputField.type = 'text';
//   inputField.value = getEvent(hour); // Retrieve event from local storage
//   timeBlock.appendChild(inputField); 

//   inputField.value = getEvent(hour); // Retrieve event from local storage 

//   timeBlock.appendChild(saveButton);

//   timeBlocks.appendChild(timeBlock);



//   const dayjs = require('dayjs')
// //import dayjs from 'dayjs' // ES 2015
// dayjs().format() 


// Function to save event to local storage
// function saveEvent(hour, eventText) {
//   localStorage.setItem(`event_${hour}`, eventText);
// } 

// // Function to get event from local storage
// function getEvent(hour) {
//   return localStorage.getItem(`event_${hour}`) || '';
// } 