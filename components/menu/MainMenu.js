import React from "react";
import styled from "styled-components";
import { Drawer } from "@material-ui/core";

const StyledDrawer = styled(Drawer)`
  & .MuiDrawer-paper {
    background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
    border: 3px;
    color: white;
  }
`;

const MainMenu = ({ children }) => (
  <StyledDrawer open anchor="left" variant="permanent">
    {children}
  </StyledDrawer>
);

export default MainMenu;
