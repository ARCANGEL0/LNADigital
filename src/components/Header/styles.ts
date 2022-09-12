import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

export const HeaderSection = styled("header")`
  padding: 1rem 0.5rem;

  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const ContactWrapper = styled("div")<any>`
  cursor: pointer;
  width: ${(p) => (p.width ? "100%" : "110px")};
  font-weight: 700;
  text-align: center;
  border-radius: 1.25rem;
  display: inline-block;
`;

export const Burger = styled("div")`
  @media only screen and (max-width: 890px) {
    display: block;
  }

  display: none;
margin-left: 85%;
  svg {
    fill: #fff;
  }
`;

export const NotHidden = styled("div")`
  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1.2rem;
  color: #212738;
  transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Label = styled("span")`
  font-weight: 500;
  color: #404041;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Outline = styled(MenuOutlined)<any>`
  font-size: 22px;
`;

export const Span = styled("span")`

@media only screen and (max-width: 768px) {
    color: #404041
  }

  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: #fff;
  &:hover,
  &:active,
  &:focus {
    color: #B64F50;
    text-underline-position: under;
    text-shadow: #bc3a3a 0 2.5px 3.5px;;
  }
`;
export const LanguageSwitch = styled("div")<any>`
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }

 
`;

export const LanguageSwitchContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 85px;

   @media only screen and (max-width: 768px) {
  align-self: center;
  justify-content:center;
  }

              @media only screen and (max-width: 890px) {
  align-self: center;
  justify-content:center;

        }
      
        @media only screen and (max-width: 414px) {
  align-self: center;
  justify-content:center;

        }

`;
