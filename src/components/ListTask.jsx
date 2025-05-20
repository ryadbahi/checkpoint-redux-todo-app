import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks } from "../redux/tasksSlice";
import Task from "./Task";
import { ListChecks, CheckCircle2, CircleOff } from "lucide-react";

const ListTask = () => {
  const [filter, setFilter] = useState("all");
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "done") return task.isDone;
    if (filter === "notDone") return !task.isDone;
    return true;
  });

  const getButtonStyle = (current) =>
    `flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-200 
     ${
       filter === current
         ? "bg-white text-black border-white shadow-md"
         : "bg-transparent text-white border-white hover:bg-white/10"
     }`;

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setFilter("all")}
          className={getButtonStyle("all")}
        >
          <ListChecks size={18} />
          Toutes
        </button>
        <button
          onClick={() => setFilter("done")}
          className={getButtonStyle("done")}
        >
          <CheckCircle2 size={18} />
          Faites
        </button>
        <button
          onClick={() => setFilter("notDone")}
          className={getButtonStyle("notDone")}
        >
          <CircleOff size={18} />
          Non faites
        </button>
      </div>

      <div className="space-y-3">
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default ListTask;
