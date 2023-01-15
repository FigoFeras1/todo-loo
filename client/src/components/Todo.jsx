import "../../static/home.css";

export default function Todo(props) {
  return (
    <div className="todo_container">
      <div className="checkbox_container">
        <input type="checkbox" className="todo_checkbox" />
      </div>
      <div className="todo_input_container">
        <input type="text" className="todo_input" placeholder={props.text} />
      </div>
    </div>
  );
}
