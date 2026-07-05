/**
 * Keeps validation seprate from business logic:
 * 
 * Functions:
 * validateTitle()
 * validateDate()
 * validatePriority()
 */

export function validateTask(title){

    if(title.trim()===""){

        alert("Task cannot be empty");

        return false;

    }

    return true;

}