// actions.js

export const addTask = (taskName) => ({
    type: "ADD_TASK",
    payload: {
      name: taskName,
      id: new Date().getTime(), // Generate unique task ID
    },
  });
  
  export const deleteTask = (taskId) => ({
    type: "DELETE_TASK",
    payload: {
      id: taskId,
    },
  });
  