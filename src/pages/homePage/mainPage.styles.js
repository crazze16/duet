import styled from "styled-components";
import {NavLink} from "react-router-dom";

const headerHeight = 65;

export const WrapperHomeSC = styled.div`
position: relative;
background: black;
`;
export const SelectorSectionSC = styled.div`
padding: 30px 0;
border-bottom: 1px solid red;
display: flex;
height: 80px;
color: white;
width: calc(100% - 300px);
margin: 0 auto;
& h2{
padding: 0;
margin: 0;
width: 200px;
};
& h2 + div{
margin: 0 auto;
display: flex;
align-items: center;
width: 400px;
justify-content: space-around;
padding-right: 200px;
height: 100%;
};
& + div {
color: white;
}
`;
const SlideButtonSC = styled.div`
    position: absolute;
    background: rgba(0,0,0,.5);
    top: 48%;
    height: 80px;
    width: 40px;
    z-index: 10;
    opacity: 0;
    transition: all .1s ease;
    border: .1px solid rgba(255,255,255,0.5);
    &:before {
        height: 15px;
        width: 15px;
        content: '';
        border-top: 4px solid white;
        border-left: 4px solid white;
        border-radius: 10%;
        position: absolute;
        transform: rotate(-45deg);
        left: 15px;
        top: 31px;
        opacity: 60%;
    };
    &:hover{
        cursor: pointer;
    };
    &:hover::before{
        opacity: 100%;
    };
    visibility: hidden;
`;
export const SliderWrapperSC = styled.div`
width: 100%;
position: relative;
    &:before {
    content: '';
    height: 100%;
    box-shadow: 0px 0px 200px 350px #000000;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
};
&:after {
    content: '';
    height: 100%;
    box-shadow: 0px 0px 200px 350px #000000;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;
};
&:hover ${SlideButtonSC}{
        visibility: visible;
        opacity: 1;
    }
;
overflow: hidden;
`;
export const BackDropSC = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 0 auto;
    height: 650px;
    width: calc(100% - 200px);
    background: url('${props => props.poster}') center center  no-repeat;
    background-size: cover;
    border-radius: 25px;
    box-shadow:  inset 0px -30px 50px 25px rgba(0,0,0,90%);
    & > div {
        color: white;
        font-weight: 700;
        letter-spacing: 2px;
        font-size: 32px;
        padding-bottom: 12px;
        text-shadow: 2px 2px 10px rgba(0, 0, 0, 1);
    };
`;

export const HeaderWrapperSC = styled.div`
    position: fixed;
    height: ${headerHeight}px;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    box-shadow: inset 0px 32px 25px 5px rgba(0,0,0,0.5);
    border-bottom: 1px solid rgba(225,225,225, 0.2);
    &:before{
    ${props => props.headerVisibility ?
        `height: 100%;
         width: 100%;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        z-index: 101;
        backdrop-filter: blur(2px);
        background: rgba(0,0,0,0.1);` : ``};
   }
`;

export const PrevSlideSC = styled(SlideButtonSC)`
    left: 50px;
`;
export const NextSlideSC = styled(SlideButtonSC)`
    right: 50px;
    &:before{
            transform: rotate(135deg);
            left: 6px;
    };
`;

