import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";

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
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Ajouter une tâche"
        className="flex-1 p-2 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 rounded">
        Ajouter
      </button>
    </form>
  );
};

export default AddTask;
