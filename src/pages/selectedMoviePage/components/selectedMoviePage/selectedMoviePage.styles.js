import styled from 'styled-components'
import {WrapperSC} from "../../../moviePage/moviePage.styles";
import {NavLink} from "react-router-dom";


export const WrapperSPSC = styled(WrapperSC)`
    box-shadow: 1px 1px 50px 20px #000000;
    border-radius: 15px 15px 0 0;
    background: linear-gradient(270deg, rgba(20,20,20,1) 0%, rgba(0,0,0,1) 100%);
`;
export const MainTitleSC = styled.h1`
    color: #fff;
    margin: 20px 0 2px 0;
    padding: 0;
`;
export const SubTitleSC = styled.div`
    font-size: 18px;
    color: #fff;
    opacity: 80%;
    padding-left: 5px;
`;
export const BackDropSC = styled.div`
    border-radius: 2px 15px 0 0;
    background: url(${props => props.src ? props.src : ''}) center center;
    height: 700px;
    background-size: cover;
    max-width: 100%;
    width: 100%;
    position: relative;
    box-shadow: inset 4px -36px 6px -30px #000000;
`;
export const InfoWrapperSC = styled.div`
    display: flex;
    flex-direction: column;
    width: 470px;
    background: black;
    position: relative;
    z-index: 1;
`;
export const InfoContentSC = styled.div`
    position: absolute;
    padding: 20px;
    width: 600px;
    margin: 0;
`;
export const GradientSC = styled.div`
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0, 0, 0, 1) 20%, rgba(255, 255, 255, 0) 60%);
    height: 100%;
    width: 900px;   
    position: absolute;
    left: 0;
    top: 0;
`;
export const WatchTrailerButtonSC = styled.button`
    width: 150px;
    outline: none;
    border: 1px solid ${`#a90000`};
    background: transparent;
    color: white;
    height: 45px;
    margin-top: 40px;
    margin-left: 40px;
    position: relative;
    border-radius: 5px;
    &:hover {
      cursor: pointer; 
    }
`;
export const ToggleFavouriteSC = styled(WatchTrailerButtonSC)`
    color: ${props => props.disabled ? 'rgba(255,255,255,0.5)' : 'white'};
`;
export const DescriptionSC = styled.div`
      color: #fff;  
      font-size: 20px;
      text-shadow: 5px 3px 9px rgba(0, 0, 0, 1);
      padding-left: 5px;
      font-weight: 500;
`;
export const BackdropSectionSC = styled.div`
    display: flex;
    max-width: 100%;
    width: 100%;
    box-shadow: 1px 13px 20px 5px #000000;
`;
export const VoteContainerSC = styled.div`
    margin: 10px 0;
    color: white;
    font-weight: bold;
    font-size: 20px;
    padding-left: 5px;
`;
export const VoteScoreCS = styled.span`
    color: ${props => {
    if (props.score <= 3.9) {
        return '#FF0000'
    } else if (props.score >= 4 && props.score <= 5.9) {
        return '#FF6600'
    } else if (props.score >= 6 && props.score <= 7.9) {
        return '#FFFF00'
    } else if (props.score >= 8 && props.score <= 9.9) {
        return '#66E100'
    } else {
        return '#00CC00'
    }
}}
`;
export const GenresSC = styled.div`
    padding-left: 5px;
    margin-top: 10px;
`;
export const GenreSC = styled(NavLink)`
    opacity: 80%;
    padding-left: 5px;
    color: #ffffff;
    &:hover {
    opacity: 100%;
    color: ${`#a90000`};
    }
`;
export const ProductionSC = styled.span`
    font-size: 12px;
    margin-left: 4px;
    color: #fff;
    opacity: 80%;
`;
export const ProductionContainerSC = styled(GenresSC)`
    margin-bottom: 10px;
`;
export const RecommendedMoviesListSC = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
    max-width: 1700px;
    width: 100%;
    margin: 0 auto;
`;


export const RecommendedTitleSC = styled.div`
    color: #ffffff;
    font-size: 24px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    margin-bottom: 30px;
`;
// FOOTER
