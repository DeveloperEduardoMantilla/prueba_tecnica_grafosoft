import {CssBaseline } from "@mui/material";

//Components
import Sidebar from "../components/Sidebar.jsx";
import Header from "./Header.jsx";
import RecentPosts from "../components/Home/RecentPosts.jsx";

//Styles Css
import "../assets/css/main.css";

export default function Layout({children}) {
  return (
    <>
      <CssBaseline/>
      <div className="layout">
        <Sidebar/>
        <div className="content_wrapper">
          <Header/>
          <div className="content_main">
            {children}
            <RecentPosts />
          </div>
        </div>
      </div>
    </>
  );
}

