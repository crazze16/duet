import styled from "styled-components";

export const ModalWrappSC = styled.div`
    top: 0;
    position: fixed;
    height: 100vh;
    width: 100%;
    z-index: 10;
    background: rgba(0,0,0, 0.9);
`;
export const VideoFrameSC = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
`;
export const VideoCloseSC = styled.div`
    top: 14px;
    right: -54px;
   width: 32px;
   height: 32px;
   position: absolute;
   opacity: 70%;
   &:before {
        content: '';
        width: 2px;
        height: 33px;
        background: white;
        left: 15px;
        position: absolute;
        transform: rotate(45deg);
   }
   &:after {
        content: '';
        width: 2px;
        height: 33px;
                left: 15px;
        background: white;
        position: absolute;
        transform: rotate(-45deg);
   }
   &:hover{
    opacity: 1;
    }
`;