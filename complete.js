const completeTask = document.getElementById('complete');

// const openTask = document.createElement('tbody');



const completed = todo.completed;

completed.map(complete => {
    // console.log(open);
    const tr = document.createElement('tr');
    completeTask.appendChild(tr);
    // console.log(tr);
    const td = document.createElement('td');
    const del = document.createElement('del');
    del.innerText = complete;
    tr.appendChild(td);
    td.appendChild(del);
    // console.log(td);
    // tr.innerHTML = `
    // <td>${complete}</td>`;
    // console.log(tr.innerHTML);
});
