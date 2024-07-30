// Get DOM elements
const inputField = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');
const addButton = document.querySelector('#add-task');
const removeButton = document.querySelector('#remove-task');
setTaskCount();
// Event listener for adding tasks
addButton.addEventListener('click', function () {
    const taskText = inputField.value.trim();
    if (taskText) {
      const listItem = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      listItem.appendChild(checkbox);
      const label = document.createElement('label');
      label.textContent = taskText;
      listItem.appendChild(label);
      taskList.appendChild(listItem);
      inputField.value = '';

      // Create a delete button
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.setAttribute("class", "delete-button");
        deleteButton.setAttribute("id", "remove-task");
        listItem.appendChild(deleteButton);
    }
    setTaskCount();
  });


document.getElementById("task-list").addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-button")) {
        const listItem = event.target.closest("li");
        if (listItem) {
            listItem.remove();
        }
    }
    setTaskCount();
});

// Click on a task to mark it as completed
taskList.addEventListener('click', function (event) {
    if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') {
      const listItem = event.target.closest('li');
      listItem.classList.toggle('checked');
    }
  });


  function setTaskCount() {
    taskCount = taskList.querySelectorAll('li').length;
    taskCountDiv = document.getElementById('task-count');
    taskCountDiv.innerHTML = `<b>Task Count: ${taskCount} </b>`
  }
