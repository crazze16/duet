import styled from 'styled-components';
import {NavLink} from "react-router-dom";


export const NavSC = styled.nav`
position: fixed;
display: flex;
flex-direction: column;
justify-content: center;
height: 100%;
align-items: center;
width: 90px;
border-right: 1px solid white;
z-index: 9999;
background: black;
`;

export const NavItemSC = styled(NavLink)`

`;

export const SpanSC = styled.span`
color:#fff
`;