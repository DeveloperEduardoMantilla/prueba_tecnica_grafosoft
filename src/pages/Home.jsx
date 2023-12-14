import { Box, CssBaseline } from "@mui/material";

//Components
import Layout from "../components/Layout/Layout";
import Sidebar from "../components/Sidebar/Sidebar";

//Styles Css
import "../assets/css/main.css";

export default function Home() {
  return (
    <>
      <CssBaseline />
      <Box sx={{display:"flex", background:"#7da872"}}>
        <Sidebar />
        <Layout />
      </Box>
    </>
  );
}
