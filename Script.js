// Toggle Sidebar visibility for mobile screens
const sidebar = document.querySelector('.sidebar');
const toggleButton = document.querySelector('.toggle-btn');

// Function to toggle sidebar visibility
function toggleSidebar() {
    sidebar.classList.toggle('active');
}

// Event listener for the toggle button
toggleButton.addEventListener('click', toggleSidebar);

// Add task button functionality
const addTaskButton = document.querySelector('.btn');

// Function to handle Add Task button click
function handleAddTask() {
    alert('Add New Task button clicked!');
}

// Event listener for the Add Task button
addTaskButton.addEventListener('click', handleAddTask);
