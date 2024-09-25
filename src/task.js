console.log("This is project.js!");

//Project module
class Task {
    constructor(name) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.originProjectName = originProjectName;
        this.isDone = false;
        this.id = Date.now();
    }

    checkTask() {
        this.isDone = !this.isDone;
    }

}

class TodoList {
    constructor() {
        this.projects = [];
    }

    addProject(newProject) {
        const projectExists = this.projects.some((project) => project.name === newProject.name);

        if (projectExists) {
            return false;
        }

        this.projects.push(newProject);
        return true;
    }

    getProject(id) {
        return this.projects.find((project) => project.id === id) || null;
    }

    removeProject(id) {
        this.projects = this.projects.filter((project) => project.id !== id);
    }

    addTask(task, projectID) {
        if (this.getProject(projectID).addTask(task)) {
            return true;
        }

        return false;
    }

    getTask(taskID) {
        for (let project of this.projects) {
            let task = project.getTask(taskID);
            if (task) {
                return true;
            }
        }
    }

    removeTask(taskID) {
        for (let project of this.projects) {
            let task = project.getTask(taskID);
            if (task) {
                project.deleteTask(taskID);
            }
        }
    }
}

export { Task, TodoList };