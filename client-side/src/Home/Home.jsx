import TodoContainer from "../components/TodoContainer";
import { useTodoContext } from "../TodoContext/TodoContext";
import { PuffLoader } from "react-spinners";

const Home = () => {
  const { loading } = useTodoContext();

  return (
    <>
      {loading ? (
        <div className="min-h-screen flex justify-center items-center">
          <PuffLoader color="#334155" />
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
