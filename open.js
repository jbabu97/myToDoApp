const openTask = document.getElementById('open');

const taskInput = document.getElementById('task_input');


function addTask(){
    if (taskInput.value === '') {
        alert('You need to write something')
    } else {
        // allOpen.push(taskInput.value)
        console.log(todo.create())
        console.log(taskInput.value);
        taskInput.value = ''
    }
}

const allOpen = todo.open;

allOpen.map(open => {
    // console.log(open);
    const tr = document.createElement('tr');
    openTask.appendChild(tr);
    // console.log(tr);
    // const td = document.createElement('td');
    // tr.appendChild(td);
    // console.log(td);
    tr.innerHTML = `
    <td>${open}</td>`;
    // console.log(tr.innerHTML);
});

