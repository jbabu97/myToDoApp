
class ToDo {
    constructor(){
        this.open = [];
        // console.log(this.open);
        this.completed = [];
        // console.log(this.completed);
    };

    create(text){
        this.open.push(text);
    };

    complete(index){
        this.completed.push(this.open[index])
        this.open.splice(index, 1)
    };

};

const todo = new ToDo();

todo.create('I need to wake up at 4:55 am')
todo.create('I need to go for fazor salah at 5:15 am')
todo.create('I need to go for office  at 6:25 am')
todo.create('I will back from office  at 2:10 pm')
// todo.complete(taskInput.value)
todo.complete(1)
todo.complete(2)

