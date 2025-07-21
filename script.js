   document.getElementById("addTaskButton").addEventListener("click", function () {
            const taskInput = document.getElementById("taskInput");
            const taskList = document.getElementById("taskList");
            if (taskInput.value.trim() !== "") {
              const newTask = document.createElement("div");
              newTask.textContent = taskInput.value;
              taskList.appendChild(newTask);
              taskInput.value = ""; 
            }
   });
// on enter key press, add the task
    document.getElementById("taskInput").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("addTaskButton").click();
        }
    });
    