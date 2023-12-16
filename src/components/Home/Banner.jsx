import { Box, Typography } from "@mui/material";

export default function Banner({ data, children }) {
  return (
    <>
    <div className="banner_home" style={{backgroundColor:data.color}}>
      <div className="banner_content">
        <h1> {data.title}</h1>
        <div className="children_banner">
          {children}
        </div>
      </div>
      <div className="banner_img">
        <img
          src={data.img}
          alt="Img Banner"
        />
      </div>
    </div>
    </>
  );
}
