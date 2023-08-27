import { useTodoContext } from "../TodoContext/TodoContext";
import TodoCard from "./TodoCard";

const TodoContainer = ({ category }) => {
  const { allTodos } = useTodoContext();
  // convert into lowercase
  const categoryName = category.toLowerCase().replace(/\s+/g, "");
  // find specific category
  const todosForCategory = allTodos.filter(
    (todo) => todo.category == categoryName
  );
  const todos = todosForCategory[0]?.todos;
  console.log("allTodos", allTodos);
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
      <div className="flex items-center justify-between gap-5 font-semibold">
        <div className="flex items-center gap-2">
          <div
            className={`h-5 w-5 ${getCategory(category)} rounded-l-full`}
          ></div>
          <h4 className="text-xl">{category}</h4>
        </div>
        <div className="w-8 h-8 bg-slate-300 text-xl flex justify-center items-center rounded">
          {todos?.length}
        </div>
      </div>
      <div className="mt-5 space-y-5 h-[calc(100vh-160px)] overflow-y-auto overflow-x-hidden">
        {todos?.map((todo) => (
          <TodoCard key={todo?.id} todo={todo} category={categoryName} />
        ))}
      </div>
    </div>
  );
};

export default TodoContainer;
