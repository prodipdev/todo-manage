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
        <div className="p-5 m-5 h-[calc(100vh-40px)] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-xl">
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
