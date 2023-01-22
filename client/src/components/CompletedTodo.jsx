import { useState } from "react";
import Todo from "./Todo";

export default function CompletedTodo() {
  const [expanded, setExpanded] = useState(false);
  const collapsedStyle = {};

  const expandedStyle = {
    border: "none",
  };

  return (
    <div className="completed">
      <div className="completed--header" style={expanded ? expandedStyle : collapsedStyle}>
        <button className="completed--button" onClick={expand}>
          +
        </button>
        <label>Completed Tasks</label>
      </div>
      {expanded && (
        <div className="completed--todos">
          <Todo text={"Completed Task 1"} />
          <Todo text={"Completed Task 2"} />
          <Todo text={"Completed Task 3"} />
          <Todo text={"Completed Task 4"} />
          <Todo text={"Completed Task 5"} />
          <Todo text={"Completed Task 6"} />
          <Todo text={"Completed Task 7"} />
        </div>
      )}
    </div>
  );

  function expand() {
    setExpanded((prevState) => !prevState);
  }
}
