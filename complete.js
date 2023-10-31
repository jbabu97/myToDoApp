const completeTask = document.getElementById('complete');

// const openTask = document.createElement('tbody');



const completed = todo.completed;

completed.map(complete => {
    console.log(open);
    const tr = document.createElement('tr');
    completeTask.appendChild(tr);
    console.log(tr);
    // const td = document.createElement('td');
    // tr.appendChild(td);
    // console.log(td);
    tr.innerHTML = `
    <td>${complete}</td>`;
    console.log(tr.innerHTML);
});
