import React from 'react'
import styled, { useTheme } from 'styled-components';
import {Link as LinkR} from "react-router-dom";
import {Bio} from "../data/constants";
import {MenuRounded} from "@mui/icons-material";
import { useState } from 'react';
import { GitHub } from '@mui/icons-material';

const Nav = styled.div`
    background-color: ${({theme}) => theme.bg};
    height: 80px;
    display:flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 10;
    font-size: 1rem;
    color:white;
`


const NavbarContainer = styled.div`
    max-width: 1200px;
    padding: 0 24px;
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
`;
const NavLogo = styled(LinkR)`
    width: 80%;
    color: inherit;
    padding: 0 6px;
    text-decoration: none;
    font-weight: 500;
    font-size: 18px;
`;

const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0 6px;
    justify-content: center;
    gap:32px;
     @media screen and (max-width : 768px){
        display: none;  /* Hide for small screens */
    }
`;

const NavLink = styled.a`
    color: ${({theme}) => theme.text_primary};
    text-decoration: none;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    &: hover{ 
        color: ${({theme}) => theme.primary};
    }
`;

const ButtonContainer = styled.div`
    width:100%;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 0 6px;
    &: hover{
        transform: translateY(-1px);
    }
    @media screen and (max-width : 768px){
        display: none;  /* Hide for small screens */
    }
`;

const GitHubIcon = styled.a`
    cursor: pointer;
    color: ${({theme}) => theme.text_primary};
    margin-top: -10px;
    &: hover{
        color: ${({theme}) => theme.primary};
        transform: scale(0.9);

    }
`

const GitHubButton = styled.a`
//    border: 1px solid ${({theme}) => theme.primary};
//    color: ${({theme}) => theme.primary};
   justify-content: center;
   display: flex;
   align-items: center;
   border-radius: 20px;
   cursor: pointer;
   padding: 8px 20px;
   font-size: 16px;
   font-weight: 500;
   transition: all 0.4s ease-in-out;
   text-decoration: none;
     &: hover{
        color: ${({theme}) => theme.primary};
        transform: scale(0.9);
    }
`

const MobileIcon = styled.div`
    height: 100%;
    display:flex;
    align-items: center;
    display: none;
    color: ${({theme}) => theme.text_primary};
    @media screen and (max-width: 768px) {
        display: block;
    }
` 
const MobileMenu = styled.ul`
    width: 100%;
    display: flex;
    align-items: start;
    flex-direction: column;
    list-style: none;
    padding: 0 6px;
    justify-content: center;
    gap:16px;
    top: 80px;
    position: absolute;
    right: 0;
    background: ${({theme}) => theme.card_light + 99};
    padding: 12px 40px 24px 40px;    

     transition: all 0.6s ease-in-out;
    transform: ${({ isOpen }) =>
        isOpen ? "translateY(0)" : "translateY(-100%)"};
    // border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme();
  return <Nav>
        <NavbarContainer>
        <NavLogo to='/'>Portfolio</NavLogo>
        <MobileIcon onClick={()=> setIsOpen(!isOpen)}> 
            <MenuRounded style={{color: "inherit"}}/> 
        </MobileIcon>
        <NavItems>
            <NavLink href="#About">About</NavLink>
            <NavLink href="#Skills">Skills</NavLink>
            <NavLink href="#Education">Education</NavLink>

            <NavLink href="#Projects">Projects</NavLink>
            <NavLink href="#Experience">Experience</NavLink>

        </NavItems> 

        {
            isOpen && <MobileMenu isOpen = {isOpen}>
                <NavLink href="#About" onClick={() => setIsOpen(!isOpen)}>About</NavLink>
                <NavLink href="#Skills"  onClick={() => setIsOpen(!isOpen)}>Skills</NavLink>
                <NavLink href="#Education" onClick={() => setIsOpen(!isOpen)}>Education</NavLink>
                <NavLink href="#Projects" onClick={() => setIsOpen(!isOpen)}>Projects</NavLink>
                <NavLink href="#Experience" onClick={() => setIsOpen(!isOpen)}>Experience</NavLink>

                <GitHubButton href={Bio.github} target="_blank" style={{
                    background: theme.primary,
                    color: theme.text_primary
                }}> <GitHub/> </GitHubButton>

            </MobileMenu>
        }



        <ButtonContainer> 
            <GitHubIcon href={Bio.github} target='display'> <GitHub/> </GitHubIcon>
        </ButtonContainer>    
    </NavbarContainer>
  </Nav>
}

export default Navbar