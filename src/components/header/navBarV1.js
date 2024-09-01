import React from "react";
import "./navbar.css";
import { useLocation } from "react-router-dom";
import Logo from "../../assets/JVSLogo.png";
import InfoBar from "./infoBar";
import { Box, IconButton, Menu } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavBarContent = (props) => {
  const location = useLocation();

  const scrollToSection = (id) => {
    const ID = id === "/" ? "carouselExampleCaptions" : id;
    console.log(ID);
    const element = document.getElementById(ID);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const NavButtons = ({ isMenu = true }) => {
    return (
      <>
        {props.navigation.map((item, index) => {
          const classes =
            location.pathname === item.link
              ? "nav-item nav-item-current"
              : "nav-item";
          return (
            <div
              className={isMenu ? classes : "navPopup"}
              key={index}
              to={item.link}
              onClick={() => scrollToSection(item.link)}
            >
              {item.text}
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className="navContainer">
      <a className="navbar-brand" href="/">
        <img src={Logo} alt="Logo" style={{ width: "280px", height: "42px" }} />
      </a>
      <div>
        <Box
          id="headerItems"
          className="navbar-headerItem"
          sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
        >
          <NavButtons />
        </Box>
      </div>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <InfoBar
          data={props.data}
          link={props.link}
          scrollToSection={scrollToSection}
        />
      </Box>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
          sx={{ marginLeft: "auto" }}
        >
          <MenuIcon sx={{ fill: "green" }} />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <NavButtons isMenu={false} />
        </Menu>
      </Box>
    </div>
  );
};

export default NavBarContent;
