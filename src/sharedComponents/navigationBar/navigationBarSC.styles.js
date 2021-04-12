import styled from 'styled-components';
import {NavLink} from "react-router-dom";


export const NavigationContainerSC = styled.nav`
position: fixed;
display: flex;
flex-direction: column;
justify-content: center;
height: 100%;
align-items: center;
width: 90px;
border-right: 1px solid white;
z-index: 10;
background: black;
`;

export const NavigationLinkSC = styled(NavLink)`

`;

export const LinkContentSC = styled.span`
color:#fff
`;