/* eslint-disable react/prop-types */
import TodoCard from "./TodoCard";

const TodoContainer = ({ category }) => {
  // Get color class for specific category
  const getCategory = (category) => {
    switch (category) {
      case "Incomplete":
        return "bg-red-500";
      case "To Do":
        return "bg-cyan-400";
      case "Doing":
        return "bg-yellow-400";
      case "Under Review":
        return "bg-violet-400";
      case "Complete":
        return "bg-green-400";
      default:
        return "";
    }
  };

  return (
    <div className="bg-slate-200 w-fit p-3 rounded-lg">
      <div className="flex items-center justify-between font-semibold">
        <div className="flex items-center gap-2">
          <div
            className={`h-5 w-5 ${getCategory(category)} rounded-l-full`}
          ></div>
          <h4 className="text-xl">{category}</h4>
        </div>
        <div className="w-8 h-8 bg-slate-300 text-xl flex justify-center items-center rounded">
          0
        </div>
      </div>
      <div className="mt-5 grid gap-5 h-screen overflow-y-auto">
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </div>
    </div>
  );
};

export default TodoContainer;
