/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { WEIGHTS, QUERIES, COLORS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <OverlayContent>
        <CloseWrapper>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <Icon id="close" onClick={onDismiss} />
        </CloseWrapper>
        <Filler />
        <Nav>
          <NavItem href="/sale">Sale</NavItem>
          <NavItem href="/new">New&nbsp;Releases</NavItem>
          <NavItem href="/men">Men</NavItem>
          <NavItem href="/women">Women</NavItem>
          <NavItem href="/kids">Kids</NavItem>
          <NavItem href="/collections">Collections</NavItem>
        </Nav>
        <Filler />
        <Footer>
          <FooterItem href="/terms">Terms and Conditions</FooterItem>
          <FooterItem href="/privacy">Privacy Policy</FooterItem>
          <FooterItem href="/contact">Contact Us</FooterItem>
        </Footer>
      </OverlayContent>
    </Overlay>
  );
};

export default MobileMenu;

const Filler = styled.div`
  flex: 1;
`;
const CloseWrapper = styled.div`
  position: absolute;
  right: calc(22px - 16px);
  top: calc(32px - 16px);
  padding: 16px;
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;
`;

const OverlayContent = styled(DialogContent)`
  height: 100%;
  width: 300px;
  display: flex;
  flex-direction: column;
  background-color: white;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;
const NavItem = styled.a`
  padding: 0 32px;
  text-decoration: none;
  text-transform: uppercase;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  font-size: 1.125rem;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px 32px;
`;
const FooterItem = styled.a`
  font-size: ${14 / 16}rem;
  text-decoration: none;
  color: var(--color-gray-700);
  font-weight: ${WEIGHTS.normal};
  line-height: 1.7;
`;
