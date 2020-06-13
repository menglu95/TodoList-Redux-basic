/**
 *  reducers are pure functions
 *
 *  A reducer for every part of the state
 */

import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import TodoList from "../components/TodoList";
import { VisibilityFilters } from "../actions";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);

    default:
      throw new Error("Unknown filter: " + filter);
  }
};

/**
 * To use connect(), you need to define a special function called mapStateToProps
 * that describes how to transform the current Redux store state into the props you want to pass to a presentational component you are wrapping.
 * For example, VisibleTodoList needs to calculate todos to pass to the TodoList, so we define a function that filters the state.todos according to the state.visibilityFilter,
 * and use it in its mapStateToProps:
 */

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

/**
 * In addition to reading the state, container components can dispatch actions.
 * In a similar fashion, you can define a function called mapDispatchToProps() that
 * receives the dispatch() method and returns callback props that you want to inject into the presentational component.
 * For example, we want the VisibleTodoList to inject a prop called onTodoClick into the TodoList component,
 * and we want onTodoClick to dispatch a TOGGLE_TODO action:
 */
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
