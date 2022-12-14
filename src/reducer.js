import _ from "lodash";

const initialValue = {
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "getTodo":
      return {
        todos: action.data,
      };

    case "addTodo":
      const copyTodos = _.cloneDeep(state.todos);
      copyTodos.unshift(action.todo);
      localStorage.setItem("todos", JSON.stringify(copyTodos));
      return {
        todos: [...copyTodos],
      };

    case "upDateStatus":
      let copiedTodo = _.cloneDeep(state.todos);
      let todo = copiedTodo.filter((todo) => todo.id === action.todoId);
      todo[0].completed = !todo[0].completed;
      localStorage.setItem("todos", JSON.stringify(copiedTodo));
      return {
        todos: [...copiedTodo],
      };

    case "deleteTodo":
      let copiedTodos = _.cloneDeep(state.todos);
      let selectedTodo = copiedTodos.filter(
        (todo) => todo.id !== action.todoId
      );
      localStorage.setItem("todos", JSON.stringify(selectedTodo));
      return {
        todos: [...selectedTodo],
      };

    default:
      return {
        todos: [...state.todos],
      };
  }
};

export { initialValue, reducer };
