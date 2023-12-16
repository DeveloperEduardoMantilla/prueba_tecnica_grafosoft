import { Box, Button, Typography } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <FontAwesomeIcon
          icon={faBook}
          className="icon_sidebar"/>
        <Typography
          variant="h6"
          sx={{ fontWeight: "400", fontSize: "17px" }}
        >
          <div className="routes_style">
            <Link className="route_style" to="/">Inicio</Link>
            <Link className="route_style" to="/books">Libros</Link>
            <Link className="route_style" to="/editors">Editores</Link>
            <Link className="route_style" to="/readers">Lectores</Link>
          </div>
        </Typography>
        <Button
          variant="contained"
          sx={{
            background: "#ffffff38",
            fontSize: "15px",
            transition: "all ease-in-out .5s",
            borderRadius:"10px",
            fontWeight:"800px",
            width:"130px",
            "&:hover": {
              background: "#ffffff58",
            },
          }}
        >
          Crear 
          <FontAwesomeIcon
          icon={faPlus}
          style={{
            fontSize: "20px",
            color: "#fff",
            fontWeight:"900px",
            padding:"0px 0 0 10px"
          }}
        />
        </Button>
      </div>
    </>
  );
}
