console.log("This is project.js!");

//Project module
class Project {
    constructor(name) {
        this.name = name;
        this.task = [];
        this.id = Date.now();
    }

    addTask(newTask){
        //Check if task name already exists; If so, don't add
        const taskExists = this.task.some((task) => task.title === newTask.title);

        if (taskExists) {
            return false;
        }

        this.task.push(newTask);
        return true;
    }

    getTask(id) {
        return this.task.find((task) => task.id === id) || null;
    }

    removeTask(id) {
        this.task = this.task.filter((task) => task.id !== id);
    }

}

export { Project };