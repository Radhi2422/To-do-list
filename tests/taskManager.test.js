import TaskManager from "../js/taskManager.js";

describe("TaskManager - Add Task", () => {

    let manager;

    beforeEach(() => {
        manager = new TaskManager();
    });

    test("should create a new task", () => {

        manager.addTask("Learn JavaScript");

        const tasks = manager.getTasks();

        expect(tasks.length).toBe(1);
        expect(tasks[0].title).toBe("Learn JavaScript");
        expect(tasks[0].completed).toBe(false);

    });

   

    test("should add multiple tasks", () => {

        manager.addTask("Task A");
        manager.addTask("Task B");
        manager.addTask("Task C");

        expect(manager.getTasks().length).toBe(3);

    });

    test("new task should be incomplete", () => {

        manager.addTask("Read Book");

        expect(manager.getTasks()[0].completed).toBe(false);

    });

});
