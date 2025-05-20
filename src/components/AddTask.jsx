import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";
import { PlusCircle } from "lucide-react";

const AddTask = () => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      dispatch(addTask({ description, isDone: false }));
      setDescription("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6 shadow-md focus-within:ring-2 focus-within:ring-white/30 transition"
    >
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Ajouter une tâche..."
        className="flex-grow bg-transparent text-white placeholder-white/70 focus:outline-none px-2"
      />
      <button
        type="submit"
        className="text-green-400 hover:text-green-500 transition transform hover:scale-110"
        title="Ajouter une tâche"
      >
        <PlusCircle size={24} />
      </button>
    </form>
  );
};

export default AddTask;
