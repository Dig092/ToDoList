import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./actions";

function TaskInput() {
  const [taskName, setTaskName] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskName.trim() !== "") {
      dispatch(addTask(taskName));
      setTaskName("");
    }
  };

  return (
    <>
      <div className="w-11/12 flex h-20 items-center justify-between">
        <input
          type="text"
          className="w-3/4 rounded-lg border-2 bg-secondary border-black px-4 py-2"
          placeholder="Enter task..."
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          onKeyDown={(e) => {
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
        <div className="bg-primary w-12 h-12 flex items-center justify-center rounded-lg md:hidden" // Show on mobile
          onClick={handleAddTask}
        >
          <span className="text-4xl text-black">+</span>
        </div>
      </div>
      <div className="w-[96%] border-2 border-black"></div>
    </>
  );
}

export default TaskInput;
