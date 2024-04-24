import { useSelector } from "react-redux";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

function App() {
  const tasks = useSelector((state) => state.tasks);

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex justify-center items-center w-[95%] md:w-11/12 p-4 m-8 bg-primary rounded-lg shadow-custom">
          <h1 className="text-3xl font-bold ">ToDo List</h1>
        </div>
        <div className="flex flex-col bg-secondary w-[95%] md:w-11/12 rounded-lg items-center justify-center shadow-custom">
          <TaskInput />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </>
  );
}

export default App;
