import styled from "styled-components";

export const WrapperSC = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,90%);
    display: ${props => props.isShowed ? 'flex' : 'none'};
    align-items: center;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    z-index: 100;
`;
export const ListSC = styled.div`
    margin: auto;
    width: 1000px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: center;
    & a {
        margin-bottom: 30px;
    };
`;
export const CloseModalSC = styled.div`
    top: 0px;
    right: 0px;
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
export const TitleSC = styled.div`

`;
export const InputWrapperSC = styled.div`
        margin: 30px 0;
        width: 600px;
        letter-spacing: 1.3px;
    & div {
        color: white;
        font-weight: 500;
        text-transform: capitalize;
        font-size: 32px;
        margin-bottom: 10px;
        margin-left: 5px;
        };
    & input {
        width: 100%;
        border: none;
        outline: none;
        height: 40px;
        padding-left: 10px;
        font-size: 18px;
        font-weight: 500;
        letter-spacing: .5px;
        border-radius: 30px;

    };
    & input::placeholder{
        font-size: 16px;
        letter-spacing: .3px;
    };
`;
export const BorderSC = styled.div`
    margin: 0 8px;
    position: relative;
    width: 186px;
    &:hover::before{
        position: absolute;
        content: '';
        top: 1px;
        height: 100%;
        width: 100%;
        box-shadow: inset -22px -80px 80px 5px #000000;
        z-index: 10;
    }
    height: 245px;
    &:hover .additional_info{
    display: flex;
    }
`;
export const VoteSC = styled.div`
        font-size: 21px;
        font-weight: 500;
`;
export const MovieInfoSC = styled.div`
        display: none;
        position: absolute;
        width: 185px;
        bottom: 5px;
        right: 5px;
        align-items: flex-end;
        color: ${`#b9b9b9`};
        flex-direction: column;
        z-index: 999;
`;
export const RealeseDateSC = styled.div`
        font-size: 14px;
`;