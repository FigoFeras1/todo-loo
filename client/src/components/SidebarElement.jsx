import "../../static/styles.css";
import { useState } from "react";
export default function SidebarElement(props) {
  const [rightClicked, setRightClicked] = useState(false);

  return (
    <a href="#" onContextMenu={handleContextMenu} id="sidebarElement">
      {props.text}
    </a>
  );

  function handleContextMenu(e) {
    e.preventDefault();
    console.log(`x: ${e.pageX}, y: ${e.pageY}`);
  }
}
