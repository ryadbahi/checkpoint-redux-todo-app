import { useDispatch } from "react-redux";
import { updateTask, deleteTask } from "../redux/tasksSlice";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const toggleDone = () => {
    dispatch(updateTask({ ...task, isDone: !task.isDone }));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div className="flex items-center justify-between p-2 border-b">
      <div
        className={`flex-1 cursor-pointer ${
          task.isDone ? "line-through text-gray-500" : ""
        }`}
        onClick={toggleDone}
      >
        {task.description}
      </div>
      <button type="button" onClick={handleDelete} className="text-red-500">
        Supprimer
      </button>
    </div>
  );
};

export default Task;
