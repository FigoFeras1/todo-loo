import Todo from "./Todo";
import "../../static/home.css";

export default function CreateTodo() {
  return (
    <div className="add_todo">
      <Todo text="Add new todo" />
      <div className="todo_button_container">
        <button className="createTodo--add_todo_button">Add</button>
      </div>
    </div>
  );
}
