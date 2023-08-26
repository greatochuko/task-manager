import Detail from "./Details";
import Menu from "./Menu";
import TaskList from "./TaskList";

export default function App() {
  return (
    <div className="app">
      <Menu />
      <TaskList />
      <Detail />
    </div>
  );
}
