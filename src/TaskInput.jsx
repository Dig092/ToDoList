import { useState } from "react"; 
import { useDispatch } from "react-redux"; 
import { addTask } from "./actions"; 

function TaskInput() {
  const [taskName, setTaskName] = useState(""); // State for storing the task name
  const dispatch = useDispatch(); // Dispatch function for Redux actions

  // Function to handle adding a new task
  const handleAddTask = () => {
    // Check if task name is not empty
    if (taskName.trim() !== "") {
      // Dispatch addTask action with the task name
      dispatch(addTask(taskName));
      // Clear the input field
      setTaskName("");
    }
  };

  return (
    <>
      {/* Container for task input field and button */}
      <div className="w-11/12 flex h-20 items-center justify-between">
        {/* Task input field */}
        <input
          type="text"
          className="w-3/4 rounded-lg border-2 bg-secondary border-black px-4 py-2"
          placeholder="Enter task..."
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          onKeyDown={(e) => {
            // Handle Enter key press to add task
            if (e.key === "Enter") {
              handleAddTask();
            }
          }}
        />
        {/* Render button or plus sign based on screen size */}
        <button
          className="bg-primary w-36 text-sm font-medium border-2 border-black px-4 py-2 rounded-lg hidden md:block" // Hide on mobile
          onClick={handleAddTask}
        >
          Create New Task
        </button>
        {/* Plus sign icon for mobile */}
        <div className="bg-primary w-12 h-12 flex items-center justify-center rounded-lg md:hidden"
          onClick={handleAddTask}
        >
          <span className="text-4xl text-black">+</span>
        </div>
      </div>
      {/* Divider line */}
      <div className="w-[96%] border-2 border-black"></div>
    </>
  );
}

export default TaskInput;
