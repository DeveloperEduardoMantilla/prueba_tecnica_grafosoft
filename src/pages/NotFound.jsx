import { Box, Typography } from "@mui/material";

export default function NotFound() {
  return (
    <Box
      sx={{
        width: "80%",
        height: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "60px",
        fontWeight: "800",
        color: "#333",
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        paddingTop:"100px"
      }}
    >
        <Typography sx={{fontSize:"100px", fontWeight:"600", color:"#B1B1B1"}}>
            404
        </Typography>
        <Typography sx={{fontSize:"30px", fontWeight:"600", color:"#444444"}}>
            Not Found
        </Typography>
        <Typography sx={{fontSize:"20px", fontWeight:"300", color:"#1B1B1B"}}>
            The resource requested could not be found on this server!
        </Typography>
      
    </Box>
  );
}
