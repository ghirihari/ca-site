import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import NavBarContent from "./navBarV1";
import { Container } from "@mui/material";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: trigger
      ? {
          ...children.props.sx,
          background: "#fff",
          backdropFilter: "blur(50px)",
        }
      : {
          ...children.props.sx,
          background: "transparent",
          backdropFilter: "blur(10px)",
        },
  });
}

export default function Navbar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          sx={{
            transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          }}
        >
          <Toolbar>
            <NavBarContent {...props} />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}
