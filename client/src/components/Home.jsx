import Sidebar from "./Sidebar";
import "../../static/sidebar.css";
import MainContent from "./MainContent";
import "../../static/home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home--sidebar">
        <Sidebar />
      </div>
      <div className="home--main_content">
        <MainContent />
      </div>
    </div>
  );
}
