/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <MenuWrapper isOpen={isOpen} onDismiss={onDismiss}>
      <Menu aria-label="Menu">
      <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Close menu</VisuallyHidden>
      </CloseButton>
      <Filler/>
      <Nav>
        <NavLink href="/sale">Sale</NavLink>
        <NavLink href="/new">New&nbsp;Releases</NavLink>
        <NavLink href="/men">Men</NavLink>
        <NavLink href="/women">Women</NavLink>
        <NavLink href="/kids">Kids</NavLink>
        <NavLink href="/collections">Collections</NavLink>
      </Nav>
      <Footer>
        <FooterLink href="/terms">Terms and Conditions</FooterLink>
        <FooterLink href="/privacy">Privacy Policy</FooterLink>
        <FooterLink href="/contact">Contact Us</FooterLink>
      </Footer>
    </Menu>
    </MenuWrapper>
  );
};

const MenuWrapper = styled(DialogOverlay)`
  position: fixed;
  inset: 0;
  display: flex;
  background: rgba(96, 100, 108, 0.8);
  justify-content: flex-end;
`;
  
const Menu = styled(DialogContent)`
  width: 300px;
  height: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  background: var(--color-white);
`;

const Nav = styled.nav`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;
  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Footer = styled.footer`
  display: flex;
  flex: 1;
  gap: 16px;
  flex-direction: column;
  justify-content: flex-end;
`;

const FooterLink = styled.a`
  color: var(--color-gray-500);
  text-decoration: none;
`;

const Filler = styled.div`
  flex: 1;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 16px;
`;

export default MobileMenu;
