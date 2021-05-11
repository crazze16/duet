import styled from "styled-components";

const SlideButtonSC = styled.div`
    position: absolute;
    top: 36%;
    height: 80px;
    width: 40px;
    z-index: 10;
    opacity: 1;
    transition: all .1s ease;
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
`;

export const BodySC = styled.div`
    position: relative;
    background: black;
    width: 100%;
    min-height: 480px;
    color: white;
    & > div {
        margin: 0 auto;
    };
        &:hover ${SlideButtonSC}{
        visibility: visible;
        opacity: 1;
    };
    overflow: hidden;
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

export const SwiperBodySC = styled.div`
    height: 100%;
    padding: 50px 0;
    position: relative;
    & > div{
    overflow: visible;
    position: relative;
    left: 8.5%;
    };
    &:before {
    content: '';
    height: 100%;
    box-shadow: 40px 0px 25px 70px rgba(0,0,0,0.9);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;

};
&:after {
    content: '';
    height: 100%;
    box-shadow: -35px 0px 25px 70px rgba(0,0,0,0.9);
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;
};
`;