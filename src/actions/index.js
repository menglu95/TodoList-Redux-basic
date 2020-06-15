// import { filter } from "minimatch";

/**
 *  action creators
 *
 */

let nextTodoId = 0;

// export const addTodo = text => ({
//   type: "ADD_TODO",
//   id: nextTodoId++,
//   text
// });

// export const setVisibilityFilter = filter => ({
//   type: "SET_VISIBILITY_FILTER",
//   filter
// });

// export const toggleTodo = id => ({
//   type: "TOGGLE_TODO",
//   id
// });

// export const VisibilityFilters = {
//   SHOW_ALL: "SHOW_ALL",
//   SHOW_COMPLETED: "SHOW_COMPLETED",
//   SHOW_ACTIVE: "SHOW_ACTIVE"
// };

const addTodo = text => {
  const obj = {
    type: "ADD_TODO",
    id: nextTodoId++,
    text
  };
  return obj;
};

const setVisibilityFilter = filter => {
  const obj = {
    type: "SET_VISIBILITY_FILTER",
    filter
  };
  return obj;
};

const toggleTodo = id => {
  const obj = {
    type: "TOGGLE_TODO",
    id
  };
  return obj;
};

const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

export { addTodo, setVisibilityFilter, toggleTodo, VisibilityFilters };
