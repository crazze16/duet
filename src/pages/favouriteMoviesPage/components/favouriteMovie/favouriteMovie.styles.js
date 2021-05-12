import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const BackdropSC = styled(NavLink)`
    display: block;
    width: 400px;
    height: 220px;
    background: url(${props => props.bg});
    background-size: cover;
`;
export const HoveredSC = styled.div`
    display: ${props => props.flag ? 'block' : 'none'};
    position: absolute;
    top: 2px;
    right: 2px;
    opacity: 80%;
    &:hover {
    opacity: 100%;
    cursor: pointer;
    }
    &:hover::before{
        top: -30px;
        display: block;
        background: #2e2d2d;
        width: 150px;
        text-align: center;
        border-radius: 4px; 
        content: '${props => props.content ? 'Remove from the list' : 'Add to the list'}';
        position: absolute;
    } 
    &:hover::after{
        top: -12px;
        left: 3px;
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 9px 8px 0 8px;
        border-color: #2e2d2d transparent transparent transparent;
        content: '';
        position: absolute;
    }
`;
export const TitleSC = styled.div`
color: white;
`;
export const WrapperItemSC = styled.div`
    display: block;
    margin: 20px 2px;
    color: #fff;    
    position: relative;
`;