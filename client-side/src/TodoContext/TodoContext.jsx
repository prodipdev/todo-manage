/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";

const TodoContext = createContext();

export function useTodoContext() {
  return useContext(TodoContext);
}

export function TodoProvider({ children }) {
  const [allTodos, setAllTodos] = useState([]);
  const [refetch, setRefetch] = useState(new Date());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let intervalId;

    if (allTodos.length === 0) {
      setLoading(true);
      intervalId = setInterval(() => {
        console.log("call");
        fetch("https://todo-dip.onrender.com/todos")
          .then((res) => {
            if (!res.ok) {
              throw new Error("Network response was not ok");
            }
            return res.json();
          })
          .then((data) => {
            if (data.length > 0) {
              clearInterval(intervalId); // Stop fetching once data is received
              setAllTodos(data);
              setLoading(false);
            }
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
            setLoading(false);
          });
      }, 2000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [allTodos, refetch]);

  const updateTodos = (updatedTodo) => {
    setAllTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  };

  const contextValue = {
    allTodos,
    updateTodos,
    setRefetch,
    loading,
    setLoading,
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
}
