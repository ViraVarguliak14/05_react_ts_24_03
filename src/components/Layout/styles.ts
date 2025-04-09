import styled from "@emotion/styled";
import { NavLink } from "react-router-dom"

export const LayoutComponent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #f9f9f9; 
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #F5B0BC;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #f3a3b5; 
  }
`;

export const LogoImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1); 
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 24px;
  color: #38121f;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s ease;

  &.active {
    color: #d4165a; 
  }

  &:hover {
    color: #d4165a; 
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  background-color: #8a1e30;
  color: white;
  font-size: 16px;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
`;

export const LogoText = styled.div`
  font-size: 28px;
  font-weight: bold;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: white;
  transition: color 0.3s ease;

  &:hover {
    color: #f5b0bc;
  }
`;