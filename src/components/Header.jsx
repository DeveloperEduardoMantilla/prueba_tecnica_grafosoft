import SearchIcon from "@mui/icons-material/Search";

import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import photo from "../assets/img/avatar.jpg";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="search">
          <SearchIcon sx={{ color: "#ccc" }} />
          <input
            type="text"
            placeholder="Buscar por libros, personas ó articulos"
          />
        </div>
        <div className="profile_notifications">
          <div className="notifications">
            <div className="notification">
              <NotificationsIcon />
            </div>
            <div className="email">
              <EmailIcon />
            </div>
          </div>
          <h2>Edgar Mantilla</h2>
          <Avatar
            className="header_avatar"
            alt="Remy Sharp"
            src={photo}
          />
        </div>
      </div>
    </>
  );
}
