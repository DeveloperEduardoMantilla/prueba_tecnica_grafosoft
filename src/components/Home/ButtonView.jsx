import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faPlus } from "@fortawesome/free-solid-svg-icons";


export default function ButtonView() {
    return (
      <>
        {/* <button className="buttonView">Ver Todo</button> */}
        <Button
          variant="contained"
          sx={{
            background: "#7da872c4",
            fontSize: "14px",
            transition: "all ease-in-out .5s",
            borderRadius:"10px",
            fontWeight:"800px",
            padding:"2px",
            textTransform:"capitalize",
            width:"100px",
            "&:hover": {
              background: "#7da872",
            },
          }}
        >
          Ver Todo 
          <FontAwesomeIcon
          icon={faPlus}
          style={{
            fontSize: "12px",
            color: "#fff",
            fontWeight:"900px",
            padding:"0px 0 0 10px"
          }}
        />
        </Button>
      </>
    );
  }
  