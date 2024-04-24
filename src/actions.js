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

export const TOGGLE_TASK_COMPLETED = "TOGGLE_TASK_COMPLETED";

// Action creator
export const toggleTaskCompleted = (taskId) => ({
  type: TOGGLE_TASK_COMPLETED,
  payload: taskId,
});
