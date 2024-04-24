import { createStore } from 'redux';
import rootReducer from './reducers';

// Load state from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('tasks');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Save state to local storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('tasks', serializedState);
  } catch {
    // Ignore write errors
  }
};

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState // Load initial state from local storage
);

// Subscribe to store changes and save state to local storage
store.subscribe(() => {
  saveState({
    tasks: store.getState().tasks // Save only the tasks slice of state
  });
});

export default store;