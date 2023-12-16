import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Layout from "../components/Layout.jsx";
import Home from "../pages/Home.jsx";
import Books from "../pages/Books.jsx";
import Editors from "../pages/Editors.jsx";
import Readers from "../pages/Readers.jsx";
import NotFound from "../pages/NotFound.jsx";

//Fonts Roboto
import "../assets/js/Fonts.jsx";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/books"
              element={<Books />}
            />
            <Route
              path="/editors"
              element={<Editors />}
            /> Readers
            <Route
              path="/readers"
              element={<Readers />}
            />
            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}
