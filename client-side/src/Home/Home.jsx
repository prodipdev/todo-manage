import { useEffect, useState } from "react";
import TodoContainer from "../components/TodoContainer";

const Home = () => {
  const [allTodos, setAllTodos] = useState([]);
  useEffect(() => {
    fetch("https://todo-prodipdev.vercel.app/todos")
      .then((res) => res.json())
      .then((data) => setAllTodos(data));
  }, []);
  console.log(allTodos);
  return (
    <div className="p-5">
      <div className="flex overflow-y-auto gap-8 relative">
        <TodoContainer category={"Incomplete"} />
        <TodoContainer category={"To Do"} />
        <TodoContainer category={"Doing"} />
        <TodoContainer category={"Under Review"} />
        <TodoContainer category={"Complete"} />
      </div>
    </div>
  );
};

export default Home;
