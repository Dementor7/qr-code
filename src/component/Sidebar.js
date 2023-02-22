import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import QrCodeIcon from "@mui/icons-material/QrCode";

export default function Sidebar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <HomeIcon /> <span>SASTRA</span>
          </Typography>
          <Button color="inherit">
            <GroupAddIcon />
            <Link to={"/form"} className="text-white link">
              Form
            </Link>
          </Button>
          <Button color="inherit">
            <FormatListBulletedIcon />
            <Link to={"/table"} className="text-white link">
              Table
            </Link>
          </Button>
          <Button color="inherit">
            <QrCodeIcon />
            <Link to={"/code"} className="text-white link">
              QrCode
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
