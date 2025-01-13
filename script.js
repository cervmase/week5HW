var addButton = document.getElementById('add-btn');
var input = document.getElementById('task-input');
var taskList = document.getElementById('tasks-list');

addButton.onclick = function() {
    var taskText = input.value;

    if (taskText !== "") {
        var li = document.createElement('li');
        li.textContent = taskText;

        var completeBtn = document.createElement('button');
        completeBtn.textContent = "Done";
        completeBtn.onclick = function() {
            li.style.textDecoration = "line-through";
        };
        li.appendChild(completeBtn);

        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = function() {
            li.remove();
        };
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
        input.value = "";
    }
};
