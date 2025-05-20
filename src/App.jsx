import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import { ListTodo } from "lucide-react";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 flex items-center justify-center px-4">
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-white drop-shadow flex items-center justify-center gap-2">
          <ListTodo size={28} className="text-white" />
          ToDo App
        </h1>
        <AddTask />
        <ListTask />
      </div>
    </div>
  );
};

export default App;
