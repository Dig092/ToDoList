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
    <div className="w-11/12 px-12 h-20 items-center justify-between">
      <input
        type="text"
        className="w-full h-full border-2 border-black px-4"
        placeholder="Enter task..."
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTask();
          }
        }}
      />
      <button
        className="bg-primary shadow-custom px-4 py-2 rounded-lg"
        onClick={handleAddTask}
      >
        Create New Task
      </button>
    </div>
  );
}

export default TaskInput;
