class ToDo {
    constructor(description) {
        this.description = description;
        this.completed = false;
    }

    markComplete() {
        this.completed = true;
        console.log(`${this.description} marked as complete!`);
    }
}

class ToDoList {
    constructor() {
        this.todos = [];
    }

    addToDo(description){
        const newTodo = new ToDo(description);
        this.todos.push(newTodo);
        this.renderToDoList();
    }

    listTodos() {
        return this.todos;
    }

    markTodoComplete(index) {
        if (index >=0 && index < this.todos.length) {
            this.todos[index].markComplete();
            this.renderToDoList();
        }
    }

    renderToDoList() {
        const todoListElement = document.getElementById('todoList');
        todoListElement.innerHTML = '';
        this.todos.forEach((todo,index) => {
            const listItem = document.createElement('li');
            listItem.textContent = todo.description;
            if (todo.completed) {
                listItem.classList.add('completed'); // Add CSS class for completed items
            }

            // Create a "Complete" button for each to-do
            const completeButton = document.createElement('button');
            completeButton.textContent = 'Complete';
            completeButton.className = 'completeButton';
            completeButton.addEventListener('click', () => this.markTodoComplete(index));
            listItem.appendChild(completeButton);
            todoListElement.appendChild(listItem);
        });
    }
}

const myToDoList = new ToDoList();

const addButton = document.getElementById("addButton");

const todoInput = document.getElementById("todoInput");

addButton.addEventListener("click", () => {
    const todoText = todoInput.value.trim();

    if (todoText) {
        myToDoList.addToDo(todoText);
        todoInput.value = "";
    }
});

myToDoList.renderToDoList();