/**
 * Handles saving and loading data from local storage
 * 
 * Functions:
 * saveTasks()
 * loadTasks()
 * clearStorage() 
 * 
 */

import { STORAGE_KEY } from "./constants.js";

export function saveTasks(tasks){

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(tasks)
    );

}

export function loadTasks(){

    const data =
        localStorage.getItem(STORAGE_KEY);

    return data
        ? JSON.parse(data)
        : [];

}