import { BrowserRouter , Routes, Route } from "react-router-dom";

//Pages
import Home from "../pages/Home.jsx";

//Fonts Roboto
import '../assets/js/Fonts.jsx';

export default function Router() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}