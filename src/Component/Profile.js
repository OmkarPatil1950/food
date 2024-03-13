import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Person2Icon from "@mui/icons-material/Person2";
import { Navigate, useNavigate } from "react-router-dom";

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate=useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout=()=>{
    sessionStorage.removeItem("email");
    sessionStorage.removeItem('plan_id');
    navigate("/");
    window.location.reload();
    setAnchorEl(null);
  }
  const handlePlan = () => {
    navigate('/showPlan')
  }
const handleProfile = () => {
  navigate('/showProfile')
}
  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Person2Icon />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleProfile}>Profile</MenuItem>
        <MenuItem onClick={handlePlan}>My Plan</MenuItem>
        {/* <MenuItem onClick={handleLogout}>Logout</MenuItem> */}
      </Menu>
    </div>
  );
}

/*
import Person2Icon from "@mui/icons-material/Person2";

 <Person2Icon />

*/
