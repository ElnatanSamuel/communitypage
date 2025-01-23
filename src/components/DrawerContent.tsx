import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
} from "@mui/material";
import { Mail, NotificationsNone } from "@mui/icons-material";

const DrawerContent = () => {
  const navItems = ["FEED", "EVENTS", "SHOP", "ABOUT", "EXPLORE"];
  const currentUser = {
    avatar: "https://i.pravatar.cc/150?img=1",
  };

  return (
    <Box className="mobile-menu">
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item}
            className={`mobile-menu-item ${item === "FEED" ? "active" : ""}`}
          >
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>

      <Divider />

      <Box className="mobile-action-icons">
        <IconButton>
          <Mail sx={{ color: "#666" }} />
        </IconButton>
        <IconButton>
          <NotificationsNone sx={{ color: "#666" }} />
        </IconButton>
        <IconButton>
          <Box
            component="img"
            src={currentUser.avatar}
            className="mobile-menu-avatar"
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default DrawerContent;
