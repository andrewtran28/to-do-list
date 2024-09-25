import { Task } from "./task.js";
import {Project, TodoList} from "./project.js";

class DOMController {
    constructor() {
        this.initializeTodoList();
        this.showProjects();
        this.showTasks();
    }

    initializeTodoList() {
        this.todoList = new TodoList();
        this.defaultProject = new Project("Default");
        this.defaultProject.id = TodoList.defaultProjectID;
        this.todoList.projects.push(this.defaultProject);
    }

    getTaskForm(form) {
        const taskForm = new FormData(form);
        return taskForm;
    }

    displayTasks(){
        const taskList = document.querySelector(".task-list");

        taskList.innerHTML = "";

        for (let i = 0; i < todoList.projects.length; i++) {
            const taskCard = document.createElement("div");
            taskCard.className = "task";
        }
    }

    // getProjectForm() {

    // }

    // showProjects() {

    // }
}