const openTask = document.getElementById('open');

// const openTask = document.createElement('tbody');



const allOpen = todo.open;

allOpen.map(open => {
    console.log(open);
    const tr = document.createElement('tr');
    openTask.appendChild(tr);
    console.log(tr);
    // const td = document.createElement('td');
    // tr.appendChild(td);
    // console.log(td);
    tr.innerHTML = `
    <td>${open}</td>`;
    console.log(tr.innerHTML);
});

