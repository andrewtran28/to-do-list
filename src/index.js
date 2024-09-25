console.log("This is index.js!");

// function createToDo (title, description, due, priority, note, check) {
//     const newToDo = New ToDo (title, description, due, priority, note, check);
//     return { newToDo };
// }


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