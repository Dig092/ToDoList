import { useSelector } from "react-redux";
import TaskInput from "./TaskInput"; // Importing TaskInput component
import TaskList from "./TaskList"; // Importing TaskList component

function App() {
  // Selecting tasks from the Redux store state
  const tasks = useSelector((state) => state.tasks);

  return (
    <>
      {/* Main container for the entire application */}
      <div className="w-full flex flex-col justify-center items-center">
        {/* Header section */}
        <div className="flex justify-center items-center w-[95%] md:w-11/12 p-4 m-8 bg-primary rounded-lg shadow-custom">
          <h1 className="text-3xl font-bold ">ToDo List</h1>{" "}
          {/* Application title */}
        </div>
        {/* Main content section */}
        <div className="flex flex-col bg-secondary w-[95%] md:w-11/12 rounded-lg items-center justify-center shadow-custom">
          {/* Task input component */}
          <TaskInput /> {/* Renders input field for adding tasks */}
          {/* Task list component */}
          <TaskList tasks={tasks} /> {/* Renders list of tasks */}
        </div>
      </div>
    </>
  );
}

export default App;
