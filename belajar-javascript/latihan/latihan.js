console.log("to do list")

console.log("")

let todos = [];

function addTask(task){
    todos.push(task)
}

function showTodo(){
    todos.forEach((todo, index) => {
        console.log(`${index + 1}. ${todo}`)
    })
}

addTask("Hello")
addTask("Word")
showTodo()