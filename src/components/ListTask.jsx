import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks } from "../redux/tasksSlice";
import Task from "./Task";

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

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <button
          type="button"
          onClick={() => setFilter("all")}
          className="px-2 py-1 border rounded"
        >
          Toutes
        </button>
        <button
          type="button"
          onClick={() => setFilter("done")}
          className="px-2 py-1 border rounded"
        >
          Faites
        </button>
        <button
          type="button"
          onClick={() => setFilter("notDone")}
          className="px-2 py-1 border rounded"
        >
          Non faites
        </button>
      </div>
      <div>
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default ListTask;
