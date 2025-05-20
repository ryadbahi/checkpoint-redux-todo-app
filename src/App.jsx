import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";

const App = () => {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">📝 ToDo App</h1>
      <AddTask />
      <ListTask />
    </div>
  );
};

export default App;
