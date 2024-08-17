import { Container, Navbar } from "react-bootstrap";
import styled from "styled-components";

export const NavContainerStyled = styled(Container)`
  margin: 0 !important;
  padding: 0 !important;
  max-width: unset !important;
`;

export const NavbarCollapseStyled = styled(Navbar.Collapse)`
  display: flex !important;
  justify-content: center;
`;
