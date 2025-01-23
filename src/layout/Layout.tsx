import React, { useState } from "react";
import {
  Box,
  List,
  ListItemText,
  Typography,
  Drawer,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import "./Layout.scss";
import ProfileCard from "../components/ProfileCard.tsx";
import TrendingCard from "../components/TrendingCard.tsx";
import Navbar from "../components/Navbar.tsx";
import DrawerContent from "../components/DrawerContent.tsx";

/**
 * Layout Component
 *
 * Main layout wrapper for the application.
 * Provides consistent structure with navigation, sidebar, and content area.
 * Handles responsive behavior for different screen sizes.
 *
 * @component
 * @param {LayoutProps} props - Component props
 * @param {ReactNode} props.children - Content to be rendered within the layout
 * @param {Function} props.onCreatePost - Callback for creating new posts
 */

interface LayoutProps {
  children: React.ReactNode;
  onCreatePost: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onCreatePost }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box>
      <Navbar onMenuClick={handleDrawerToggle} isMobile={isMobile} />

      <div className="main-container">
        <div className="side-content">
          <div className="sidebar">
            <div className="card">
              <Typography className="section-title">COMMUNITIES</Typography>
              <List sx={{ p: 0 }}>
                {[
                  {
                    name: "@weloveanalog",
                    image:
                      "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=500",
                  },
                  {
                    name: "@35mm",
                    image:
                      "https://images.unsplash.com/photo-1452796907770-ad6cd374b12d?w=500",
                  },
                  {
                    name: "@ishootfilm",
                    image:
                      "https://images.unsplash.com/photo-1500634245200-e5245c7574ef?w=500",
                  },
                ].map((community) => (
                  <div className="sidebar-list-item">
                    <img
                      src={community.image}
                      alt={community.name}
                      className="sidebar-profile-image"
                    />
                    <ListItemText
                      primary={community.name}
                      primaryTypographyProps={{
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    />
                  </div>
                ))}
              </List>
            </div>

            <div className="card">
              <Typography className="section-title">RECENT</Typography>
              <List sx={{ p: 0 }}>
                {[
                  {
                    title: "Wow! So amazing!",
                    image:
                      "https://images.unsplash.com/photo-1531804055935-76f44d7c3621?w=500",
                  },
                  {
                    title: "My trip to Spain: 2 photos",
                    image:
                      "https://images.unsplash.com/photo-1504387432042-8aca7c138087?w=500",
                  },
                  {
                    title: "Around the World: Scotland",
                    image:
                      "https://images.unsplash.com/photo-1506377585622-bedcbb027afc?w=500",
                  },
                ].map((item) => (
                  <div className="sidebar-list-item">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="sidebar-image"
                    />
                    <ListItemText
                      primary={item.title}
                      sx={{ fontSize: "14px" }}
                    />
                  </div>
                ))}
              </List>
            </div>

            <div className="card sticky">
              <Typography className="section-title">COMPETITIONS</Typography>
              <List sx={{ p: 0 }}>
                {[
                  {
                    name: "Beyond the horizon",
                    status: "ONGOING",
                    image:
                      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=500",
                  },
                  {
                    name: "Under the sea",
                    status: "ONGOING",
                    image:
                      "https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=500",
                  },
                  {
                    name: "My little forest",
                    status: "COMPLETE",
                    image:
                      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=500",
                  },
                  {
                    name: "Less is more",
                    status: "COMPLETE",
                    image:
                      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=500",
                  },
                ].map((comp) => (
                  <div className="sidebar-list-item">
                    <img
                      src={comp.image}
                      alt={comp.name}
                      className="sidebar-image"
                    />
                    <Box sx={{ flex: 1 }}>
                      <ListItemText
                        primary={comp.name}
                        secondary={
                          <div
                            className={`status-pill ${comp.status.toLowerCase()}`}
                          >
                            {comp.status}
                          </div>
                        }
                        primaryTypographyProps={{
                          fontSize: "14px",
                          fontWeight: 500,
                          mb: 0.5,
                        }}
                      />
                    </Box>
                  </div>
                ))}
              </List>
            </div>
          </div>
        </div>

        {isMobile && <ProfileCard onCreatePost={onCreatePost} />}
        {children}

        <div className="side-content">
          <ProfileCard onCreatePost={onCreatePost} />
          <TrendingCard />
        </div>
      </div>

      {isMobile && (
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <DrawerContent />
        </Drawer>
      )}
    </Box>
  );
};

export default Layout;
