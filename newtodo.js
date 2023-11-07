const app = document.getElementById('app');

const open = document.createElement('h1');
open.innerHTML = 'Open Tasks';
app.appendChild(open);
const ulOpen = document.createElement('ul');
app.appendChild(ulOpen);

const complete = document.createElement('h1');
complete.innerHTML = 'Completed Tasks';
app.appendChild(complete);
const ulComplete = document.createElement('ul');
app.appendChild(ulComplete);

function getTaskList(open, completed){
    const openList = open.map((task, i)=> {
        return `<li onclick='handleComplete(${i})'>${task}</li>`
    });
    ulOpen.innerHTML = openList;

    const completeList = completed.map((task, i)=> {
        return `<li onclick='handleOpen(${i})'><del>${task}</del></li>`
    });
    ulComplete.innerHTML = completeList;
};

class ToDo{
    constructor(){
        this.open = [];
        this.completed = [];
    };

    create(text){
        this.open.push(text);
    };

    completeTask(index){
        this.completed.push(this.open[index]);
        this.open.splice(index, 1);
        getTaskList(this.open, this.completed)
    };

    openTask(index){
        this.open.push(this.completed[index]);
        this.completed.splice(index, 1);
        getTaskList(this.open, this.completed)
    };
};

const todoList = new ToDo();

todoList.create('I will take dinner at 9pm')
todoList.create('I will go for sleep at 11pm')
todoList.create('I will will wake at 4.30am')
todoList.create('I will go for office at 6.30am')

todoList.completeTask(2)
todoList.completeTask(0)

const handleComplete = (i)=> {
    todoList.completeTask(i)
};
const handleOpen = (i)=> {
    todoList.openTask(i)
};