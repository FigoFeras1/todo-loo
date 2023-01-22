import Sidebar from "./Sidebar";
import "../../static/sidebar.css";
import MainContent from "./MainContent";
import "../../static/home.css";
import { useState } from "react";
import Navbar from "./Navbar";

export default function Home() {
  const [state, setState] = useState();
  return (
    <>
    <Navbar />
    <div className="home">
      <div className="home--sidebar">
        <Sidebar />
      </div>
      <div className="home--main_content">
        <MainContent />
      </div>
    </div>
    
    </>
  );
}
