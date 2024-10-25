 // Function to add new task
 function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskValue = taskInput.value.trim();
    
    if (taskValue) {
        // Create new task item
        const newTask = document.createElement('li');
        
        // Create checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        
        // Create task span
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskValue;

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = '×';
        deleteButton.onclick = function() {
            deleteTask(deleteButton);
        };

        // Add checkbox, task span, and delete button to the new list item
        newTask.appendChild(checkbox);
        newTask.appendChild(taskSpan);
        newTask.appendChild(deleteButton);

        // Add the new task to the list
        document.getElementById('todo-list').appendChild(newTask);

        // Clear input
        taskInput.value = '';
    }
}

// Function to delete task
function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}