import CreateTodo from "./CreateTodo";
import Todo from "./Todo";
import "../../static/home.css";
import CompletedTodo from "./CompletedTodo";

export default function MainContent() {
  return (
    <>
      <div className="home--header">
        <h2>MainContent</h2>
      </div>
      <div>
        <CreateTodo />
      </div>
      <br />
      <div className="add_todo">
        <Todo text="Task 1" />
        <Todo text="Task 2" />
        <Todo text="Task 3" />
        <Todo text="Task 4" />
        <Todo text="Task 5" />
        <Todo text="Task 6" />
        <Todo text="Task 7" />
        <Todo text="Task 8" />
      </div>
      <CompletedTodo />
    </>
  );
}
