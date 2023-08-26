import TodoContainer from "../components/TodoContainer";

const Home = () => {
  return (
    <div className="min-h-screen px-10">
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
