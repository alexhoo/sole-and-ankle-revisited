import React from "react";
import styled from "styled-components";

import { COLORS, WEIGHTS, MEDIAQUERY } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNavigation>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNavigation>
        <MenuActions>
          <UnstyledButton>
            <Icon id="shopping-bag" />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <Icon id="menu" />
          </UnstyledButton>
        </MenuActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  ${MEDIAQUERY.table} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid ${COLORS.gray[900]};
  }
`;

const DesktopNavigation = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  ${MEDIAQUERY.tablet} {
    display: none;
  }
`;

const MenuActions = styled.div`
  display: none;
  ${MEDIAQUERY.tablet} {
    display: flex;
    gap: 32px;
    margin-left: auto;
  }
  ${MEDIAQUERY.phone} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;
  ${MEDIAQUERY.tablet} {
    flex: revert;
  }
`;

const Filler = styled.div`
  flex: 1;
  ${MEDIAQUERY.tablet} {
    flex: 0;
  }
`;
const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
