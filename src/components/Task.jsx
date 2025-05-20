import { useDispatch } from "react-redux";
import { updateTask, deleteTask } from "../redux/tasksSlice";
import { CheckCircle, Circle, Trash2 } from "lucide-react"; // Icônes modernes

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const toggleDone = () => {
    dispatch(updateTask({ ...task, isDone: !task.isDone }));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <li className="flex items-center justify-between bg-white/10 hover:bg-white/20 transition duration-300 rounded-xl p-4 mb-4 shadow-lg backdrop-blur-md border border-white/20">
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleDone}
          className="text-green-400 hover:text-green-500 transition transform hover:scale-110"
        >
          {task.isDone ? <CheckCircle size={24} /> : <Circle size={24} />}
        </button>

        <span
          onClick={toggleDone}
          className={`cursor-pointer text-white text-lg transition-all duration-300 ${
            task.isDone ? "line-through text-gray-400 italic" : ""
          }`}
        >
          {task.description}
        </span>
      </div>

      <button
        type="button"
        onClick={handleDelete}
        className="text-red-400 hover:text-red-600 transition transform hover:scale-110"
        title="Supprimer la tâche"
      >
        <Trash2 size={20} />
      </button>
    </li>
  );
};

export default Task;
