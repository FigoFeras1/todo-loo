import SidebarElement from "./SidebarElement";
import "../../static/sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarElement text={"My Day"} />
      <SidebarElement text={"Important"} />
      <SidebarElement text={"Tasks"} />
    </div>
  );
}
