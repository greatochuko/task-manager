import Detail from "./Details";
import Menu from "./Menu";
import TaskList from "./TaskList";

export default function App() {
  return (
    <div className="App">
      <Menu />
      <TaskList />
      <Detail />
    </div>
  );
}
