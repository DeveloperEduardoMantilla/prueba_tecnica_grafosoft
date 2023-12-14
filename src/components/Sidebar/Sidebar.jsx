import { Box, Button, Typography } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          width: "200px",
          maxWidth: "200px",
        }}
      >
        <FontAwesomeIcon
          icon={faBook}
          style={{
            fontSize: "45px",
            color: "#fff",
            padding:"17px",
            boxShadow:"0px 5px 10px #00000037",
            borderRadius:"14px"
          }}
        />
        <Typography
          variant="h6"
          sx={{ fontWeight: "400", fontSize: "17px" }}
        >
          <ul
            style={{
              listStyleType: "none",
              padding: 0,
              textAlign: "center",
              cursor:"pointer",
              color: "#fff"
            }}
          >
            <li>Inicio</li>
            <li>Libros</li>
            <li>Editores</li>
            <li>Lectores</li>
          </ul>
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
        
      </Box>
    </>
  );
}
