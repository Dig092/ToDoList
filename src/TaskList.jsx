import PropTypes from "prop-types"; // Import PropTypes

import { useDispatch } from "react-redux";
import { deleteTask } from "./actions";

function TaskList({ tasks }) {
  const dispatch = useDispatch();

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div className="w-[96%] border-2 border-black">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="w-11/12 flex items-center justify-between border-2 border-black rounded-lg mb-6"
        >
          <div className="flex items-center">
            <div className="h-4 w-4 bg-blue-400 border-2 border-black p-4 m-2 rounded-md"></div>
            <h1 className="text-lg font-normal">{task.name}</h1>
          </div>
          <button
            className="bg-primary border-2 border-black px-4 py-1 rounded-lg m-2"
            onClick={() => handleDeleteTask(task.id)}
          >
            Delete Task
          </button>
        </div>
      ))}
    </div>
  );
}

// Add prop types validation
TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TaskList;
