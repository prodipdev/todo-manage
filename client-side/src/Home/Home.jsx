import { useEffect, useState } from "react";
import TodoContainer from "../components/TodoContainer";
import { useTodoContext } from "../TodoContext/TodoContext";
import { HashLoader } from "react-spinners";

const Home = () => {
  const { loading, setLoading } = useTodoContext();
  const [allTodos, setAllTodos] = useState([]);
  useEffect(() => {
    setLoading(true);

    fetch("https://todo-prodipdev.vercel.app/todos")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setAllTodos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [setLoading]);

  console.log(allTodos);
  return (
    <>
      {loading ? (
        <div className="min-h-screen flex justify-center items-center">
          <HashLoader color="#334155" />
        </div>
      ) : (
        <div className="p-5">
          <div className="flex overflow-y-auto gap-8 relative">
            <TodoContainer category={"Incomplete"} />
            <TodoContainer category={"To Do"} />
            <TodoContainer category={"Doing"} />
            <TodoContainer category={"Under Review"} />
            <TodoContainer category={"Complete"} />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
