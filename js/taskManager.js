/**
 * Contains all business logic.
 * 
 * 
 * addTask()
 * deleteTask()
 * editTask()
 * toggleComplete()
 * searchTask()
 * sortTasks()
 * filterTasks()
 * 
 * The file should not directly manipulate the DOM.
 */


export default class TaskManager{

    constructor(tasks=[]){

        this.tasks=tasks;

    }

    addTask(title){

        const task={

            id:Date.now(),

            title,

            completed:false

        };

        this.tasks.push(task);

    }

    deleteTask(id){

        this.tasks=this.tasks.filter(

            task=>task.id!==id

        );

    }

    toggleTask(id){

        const task=this.tasks.find(

            task=>task.id===id

        );

        if(task){

            task.completed=!task.completed;

        }

    }

    getTasks(){

        return this.tasks;

    }

}