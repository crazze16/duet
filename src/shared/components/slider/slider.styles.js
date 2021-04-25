import styled from "styled-components";
import {ArrowSC} from "../../../pages/personPage/person.styles";

const arrowDisabled = 'rgba(145, 145, 145, 0.45)';
const arrowActive = '#919191';

export const ArrowLeftSC = styled(ArrowSC)`
left: -50px;
border-bottom: 2px solid ${props => props.disabled ?
    arrowDisabled : arrowActive};
border-left: 2px solid ${props => props.disabled ?
    arrowDisabled : arrowActive};
&:hover {
    border-color: ${props => props.disabled ?
    arrowDisabled :
    '#fff'};
    cursor: ${props => props.disabled ?
    'auto' :
    'pointer'};
}
`;
export const ArrowRightSC = styled(ArrowSC)`
right: -50px;
border-top: 2px solid ${props => props.disabled ?
    arrowDisabled : arrowActive};
border-right: 2px solid ${props => props.disabled ?
    arrowDisabled : arrowActive};
&:hover {
    border-color: ${props => props.disabled ?
    arrowDisabled :
    '#fff'};
    cursor: ${props => props.disabled ?
    'auto' :
    'pointer'};
}
`;
export const BorderSC = styled.div`
    margin: 0 8px;
    position: relative;
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
    &:hover .test{
    display: flex;
    }
`;
export const SliderSC = styled.div`
        position: relative;
`;
export const VoteSC = styled.div`
        font-size: 21px;
        font-weight: 500;
`;
export const CharacterSC = styled.div`
        width: 100px;
        text-align: end;
`;
export const MovieInfoSC = styled.div`
        display: none;
        position: absolute;
        height: 30px;
        width: 200px;
        height: 100px;
        width: 100%;
        bottom: 5px;
        right: 10px;
        color: ${`#b9b9b9`};
        justify-content: flex-end;
        align-items: flex-end;
        flex-direction: column;
        z-index: 999;
`;
export const RealeseDateSC = styled.div`
        font-size: 14px;
`;
export const SliderWheelWrapperSC = styled.div`
    display: flex;
    width: 1015px;
    overflow: hidden;
    position: relative;
    height: 320px;
    & > div {
            transition: 3s;
    display: flex;
    width: 1040px;
    transition: .2s;
    position: absolute;
    left: 0;
    }
`;