import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import { colors } from '../../styles/colors';

export const HeaderDropdownContainer = styled.div`
  margin-left: auto;
  margin-right: 10px;
`;
export const ButtonProf = styled(Button)`
  &&{
    color: ${colors.baseGrey75};
    font-weight: 600;
  }
`;
export const ButtonCity = styled(Button)`
  &&{
    color: ${colors.baseGrey75};
    border-color: ${colors.baseGrey75};
    font-weight: 600;
    &:hover,
    &:focus{
      border-color: ${colors.baseGrey75};
    }
  }
`;

export const MainContainer = styled.header`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const HeaderUpperContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
`;

export const BottomLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: ${colors.baseGray30};
`;

export const HeaderSerchContainer = styled.div`
  position: relative;
`;

export const ImageComponentWrap = styled.i`
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translate(0, -50%);
  cursor: pointer;
`;

export const HeaderSearch = styled.input`
  padding: 8px 8px 8px 25px;
  width: 450px;
  font-family: 'Montserrat'; 
  font-size: 14px;
  border: 1px solid ${colors.baseGray30};
  border-radius: 5px;
  color: ${colors.baseGray30};
  text-transform: lowercase;
  &:focus {
    outline: none;
  }
`;

export const HeaderSignInContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;  
`;

export const HeaderSignInText = styled(NavLink)`
  font-family: 'Montserrat';  
  font-size: 14px;
  font-weight: 500;
  color: ${colors.baseGray50};
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
`;

export const HeaderMiddleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 340px;
`;

export const LogoTextContainer = styled.p`
  font-family: 'Montserrat'; 
  font-size: 14px;
  color: black;
  padding-left: 15px;
`;

export const TitleContainer = styled.div`
  margin-bottom: 25px;
`;

export const TitleLinkContainer = styled(NavLink)`
  display: block;
  font-family: 'True Gothic Cyr';
  text-decoration: none;
  text-align: center;
  font-size: 80px;
  line-height: 0.75em;
  color: ${colors.baseGrey80};
`;


export const HeaderLowerContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.baseGrey80};
  padding: 18px;
`;

export const NavListLeft = styled.ul`
  display: flex;
  align-items: center;  
  justify-content: flex-start;  
`;

export const NavListRight = styled.ul`
  display: flex;
  align-items: center;     
`;

export const NavItem = styled.li`  
  margin-right: 20px;
    &:last-child {
    margin-right: 0;
  } 
`;

export const NavigationLink = styled.a` 
  font-size: 14px;
  color: ${colors.white};
  text-decoration: none;  
  border-bottom: 2px solid transparent;
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    // color: ${colors.linkHoverBlue};
    border-bottom: 2px solid ${colors.linkHoverBlue};
  }
`;

export const ImageWrap = styled.div`  
  max-width: 30px;
`;