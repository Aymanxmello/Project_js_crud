let tasks = [];

document.querySelector('#zid').onclick = function () {
    const input = document.querySelector('#taskdyali input');
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Entrez votre tâche");
        return;
    }

    tasks.push(taskText);
    input.value = "";

    renderTasks();
};

function renderTasks() {
    const taskList = document.querySelector('#tasks');
    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        const taskHTML = document.createElement('div');
        taskHTML.className = "task";

        taskHTML.innerHTML = `
            <span class="taskname">${tasks[i]}</span>
            <div class="actions">
                <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
                <button class="delete"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `;

        taskHTML.querySelector('.delete').onclick = function () {
            tasks.splice(i, 1); 
            renderTasks();
        };

        taskHTML.querySelector('.edit').onclick = function () {
            const newTask = prompt("Modifier la tâche :", tasks[i]);
            if (newTask && newTask.trim() !== "") {
                tasks[i] = newTask.trim();
                renderTasks();
            }
        };


        taskList.appendChild(taskHTML);
    }
}
