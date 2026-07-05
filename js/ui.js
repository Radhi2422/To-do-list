/**
 * Responsible for updating the interface.
 * Function like:
 * 
 * renderTasks()
 * enderTask()
 * updateCounter()
 * showEmptyState()
 * showToast()
 * openEditModal()
 * 
 * Only this file should create or update HTML elements.
 */

export function renderTasks(tasks){

    const list=document.getElementById("taskList");

    list.innerHTML="";

    tasks.forEach(task=>{

        const li=document.createElement("li");

        li.innerHTML=`

            <span>

            ${task.completed ? "✔️" : ""}

            ${task.title}

            </span>

            <button class="complete"

            data-id="${task.id}">

            Complete

            </button>

            <button class="delete"

            data-id="${task.id}">

            Delete

            </button>

        `;

        list.appendChild(li);

    });

}