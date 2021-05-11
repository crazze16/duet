import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const HeaderWrapperSC = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    z-index: 300;
`;
export const ModalGenresSC = styled.div`
    background: rgba(0,0,0,0.2);
    backdrop-filter: blur(9px);
    position: absolute;
    padding-right: 12px;
    justify-content: center;
    display: flex;
    left: 0;
    top: 70px;
    flex-direction: column;
    visibility: hidden;
    z-index: 10;
    opacity: 0;
    transform: translateY(35px);
     transition: all .1s linear;
    & ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        text-transform: capitalize;
    };
    & ul li{
    position: relative;
    overflow: hidden;
    };
     & ul li a{
        color: white;
        display: inline-block;
        margin: 5px 0;
        padding-left: 10px;
        }
        &:before{
        content: '';
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 10px 10px 10px;
        border-color: transparent transparent rgba(0,0,0,0.2) transparent;
        position: absolute;
        top: -10px;
        left: 15px;
};
& ul li a:after {
        content: '';
        width: 100%;
        height: 2px;
        background: red;
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translateX(-100%);
        visibility: hidden;
    };
& ul li a:hover::after {
        transform: translateX(0);
        visibility: visible;
        transition: transform .2s linear, visibility .5s linear;
    };
& ul li a:hover {
};

`;
export const LinkSC = styled(NavLink)`
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        color: white;
        font-weight: 500;
        font-size: 18px;
        &:hover ${ModalGenresSC} {
        visibility: visible;
        transform: translateY(0);
        transition: transform .1s linear, opacity .2s linear;
        opacity: 1;
        };
        &.${props => props.activeClassName} {
        color: red;
        }
`;
export const HeaderSC = styled.div`
        max-width: 700px;
        width: 100%;
        display: flex; 
        align-items: center;
        justify-content: space-between;
`;
export const LinkWrapperSC = styled.div`
    display: flex;
    height: 100%;
    text-transform: capitalize;
    color: white;
    font-weight: 500;
        width: 100%;
    & a  {
        margin-right: 30px;

    }
`;
export const ModalSearchSC = styled.div`
    color: white;
    position: absolute;
    width: 420px;
    background: rgba(0,0,0,0.2);
    backdrop-filter: blur(9px);
    top: 51px;
    display: ${props => props.isVisible ? 'flex' : 'none'};
    padding: 10px;
    justify-content: space-between;
    flex-wrap: wrap;
    visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
     visibility: visible;
     &:before{
        content: '';
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 10px 10px 10px;
        border-color: transparent transparent rgba(0,0,0,0.2) transparent;
        position: absolute;
        top: -10px;
        left: 15px;
        };
`;
export const InputWrapperSC = styled.div`
    display: flex;
    height: 32px;
    position: relative;
    & input {
    border: 1px solid rgba(0,0,0,0.2);
    outline: none;
    background: rgba(225,225,225,0.5);
    color: black;
    font-size: 16px;
    width: 150px;
    };
`;
export const SearchIconSC = styled.div`
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    padding-right: 2px;
    border-left: 1px solid rgba(0,0,0,0.2);
    padding: 0 4px;
`;