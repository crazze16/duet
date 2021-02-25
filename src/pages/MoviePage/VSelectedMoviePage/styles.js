import styled from 'styled-components'
import {VWrapperSC} from "../styles";
import {NavLink} from "react-router-dom";


export const VWrapperSPSC = styled(VWrapperSC)`
    background: linear-gradient(to right, #47474c, #313136);
    height: 1000px;
    box-shadow: 1px 1px 50px 20px #000000;
    border-radius: 15px 15px 0 0;

`;

export const VMainMoviePageTitleSC = styled.h1`
    color: #fff;
    margin: 20px 0 10px 0;
    padding: 0;
`;
export const VSubMoviePageTitleSC = styled.div`
    font-size: 18px;
    color: #fff;
    opacity: 80%;
    padding-left: 5px;

`;
export const VBackDropSC = styled.div`
    border-radius: 2px 15px 0 0;
    background-image: url(${props => props.src});
    height: 800px;
    background-size: cover;
    max-width: 1400px;
    width: 100%;
    position: relative;
    box-shadow: inset -1px -50px 29px -30px rgba(0,0,0,0.42);
`;
export const InfoSC = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    margin: 20px;
`;
export const VGradientSC = styled.div`
    background: linear-gradient(270deg, rgba(0,0,0,0) 33%, rgba(0,0,0,0.5914740896358543) 60%);
    height: 100%;
    width: 1350px;   
`;
export const DescriptionSC = styled.div`
      color: #fff;  
      font-size: 20px;
      text-shadow: 5px 3px 9px rgba(0, 0, 0, 1);
      padding-left: 5px;
      
`;
export const VoteSC = styled.div`
    
`;
export const VoteAvarageSC = styled.div`
    margin: 20px 0;
    color: white;
    font-weight: bold;
    font-size: 20px;
    padding-left: 5px;

`;
export const VoteScoreCS = styled.span`

    color: ${props => {
        if(props.score <= 3.9){
            return '#FF0000'
        } else if(props.score >= 4 && props.score <= 5.9){
            return '#FF6600'
        } else if(props.score >= 6 && props.score <= 7.9){
            return '#FFFF00'
        }else if(props.score >= 8 && props.score <= 9.9){
            return '#66E100'
        }else {
            return '#00CC00'
        }
    }}
`;

export const GenresSC = styled.span`
    margin-top: 10px;
    opacity: 80%;
    padding-left: 5px;
    color: #ffffff;
    &.a {
        color: red;
    }
`;
export const GenreSC = styled(NavLink)`
    margin-top: 10px;
    opacity: 80%;
    padding-left: 5px;
    color: #ffffff;
    &:hover {
    opacity: 100%;
    }
`;
export const SimilarMoviesListSC = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const SimilarMoviesItemSC = styled(NavLink)`
    margin: 4px 6px;
     background-image: url(${props => props.poster}); 
    background-size: cover;
    height: 270px;
    width: 180px;
    &:hover {
    background-color: red;
    background-image: null; 
    }
`;
