/**
 * acts as the entry point:
 * Responsibilities:
 * 
 * Initialize the application
 * Load saved tasks
 * Attach event listeners
 * Render the initial UI * 
 */

import TaskManager from "./taskManager.js";

import { renderTasks } from "./ui.js";

import {
saveTasks,
loadTasks
} from "./storage.js";

import {
validateTask
} from "./validation.js";

const manager=new TaskManager(loadTasks());

renderTasks(manager.getTasks());

const addBtn=document.getElementById("addBtn");

addBtn.addEventListener("click",()=>{

    const input=document.getElementById("taskTitle");

    const title=input.value;

    if(!validateTask(title))
        return;

    manager.addTask(title);

    saveTasks(manager.getTasks());

    renderTasks(manager.getTasks());

    input.value="";

});

document.addEventListener("click",(e)=>{

    if(e.target.classList.contains("delete")){

        manager.deleteTask(

            Number(e.target.dataset.id)

        );

        saveTasks(manager.getTasks());

        renderTasks(manager.getTasks());

    }

    if(e.target.classList.contains("complete")){

        manager.toggleTask(

            Number(e.target.dataset.id)

        );

        saveTasks(manager.getTasks());

        renderTasks(manager.getTasks());

    }

});