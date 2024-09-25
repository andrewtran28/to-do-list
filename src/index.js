console.log("This is index.js!");

import { Task } from "./task.js";

//Project module
const manageProject = () => {

    function Project(name) {
        this.name = name;
    
        //This function is only for console logging and is not necessary.
        this.info = function() {
            return ("The name of the project is: " + name);
        }
        console.log(this.info());
    }

    return { Project };
}

const manageTask = () => {
    function ToDo(name) {
        this.title = title;
        this.description = description;
        this.due = due;
        this.priority = priority;
        this.checklist = checklist;

            //This function is only for console logging and is not necessary.
            this.info = function() {
                return ("The name of the task is: " + title);
            }
            console.log(this.info());
    }
        // return { ALL FUNCTIONS WITHIN};
}