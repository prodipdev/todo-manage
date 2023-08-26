/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";

const TodoContext = createContext();

export function useTodoContext() {
  return useContext(TodoContext);
}

export function TodoProvider({ children }) {
  const [allTodos, setAllTodos] = useState([]);
  const [refetch, setRefetch] = useState(new Date());

  useEffect(() => {
    fetch("https://todo-prodipdev.vercel.app/todos")
      .then((res) => res.json())
      .then((data) => setAllTodos(data));
  }, [refetch]);

  const updateTodos = (updatedTodo) => {
    setAllTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  };

  const contextValue = {
    allTodos,
    updateTodos,
    setRefetch,
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
}
