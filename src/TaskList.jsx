import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTaskCompleted } from "./actions"; // Assuming you have an action to toggle task completion
import { FaTrash } from "react-icons/fa"; // Import delete icon from react-icons

function TaskList({ tasks }) {
  const dispatch = useDispatch();

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleCheckboxChange = (taskId) => {
    dispatch(toggleTaskCompleted(taskId)); // Dispatch action to toggle task completion
  };

  return (
    <div className="w-11/12 m-4 justify-center items-center">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="w-full flex items-center justify-between border-2 border-black rounded-lg mb-6"
        >
          <div className="flex items-center">
            <div className="w-16 m-2">
              <input
                className="w-full h-8 border-4 border-black rounded-lg"
                type="checkbox"
                checked={task.completed}
                onChange={() => handleCheckboxChange(task.id)}
              />
            </div>
            <h1
              className={`text-lg font-normal ${
                task.completed ? "line-through" : ""
              }`}
            >
              {task.name}
            </h1>
          </div>
          {/* Render button or delete icon based on screen size */}
          <button
            className="w-32 hidden md:inline-block bg-primary font-medium border-2 border-black px-4 py-1 rounded-lg m-2" // Hide on mobile
            onClick={() => handleDeleteTask(task.id)}
          >
            Delete Task
          </button>
          <FaTrash
            className="w-12 block md:hidden text-red-500 text-xl m-2 cursor-pointer" // Show on mobile
            onClick={() => handleDeleteTask(task.id)}
          />
        </div>
      ))}
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default TaskList;
