document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.add');
    const input = document.querySelector('input[name="add"]');
    const list = document.querySelector('.todos');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        if (input.value.trim() !== '') {
            addTask(input.value);
            input.value = '';
        } else {
            alert('Please input task');
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
            ${taskText}
            <i class="fa fa-pencil edit" onclick="editTask(this)"></i>
            <i class="fa fa-trash-o delete" onclick="deleteTask(this)"></i>
        `;
        list.appendChild(li);
    }

    window.deleteTask = function (el) {
        el.parentElement.remove();
    };

    window.editTask = function (el) {
        const newText = prompt('Edit task:', el.parentElement.firstChild.textContent);
        if (newText !== null && newText.trim() !== '') {
            el.parentElement.firstChild.textContent = newText;
        }
    };
});
