import styled from 'styled-components'
import {VWrapperSC} from "../styles";
import {NavLink} from "react-router-dom";


export const VWrapperSPSC = styled(VWrapperSC)`
    box-shadow: 1px 1px 50px 20px #000000;
    border-radius: 15px 15px 0 0;
    background: black;
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
    background: url(${props => props.src}) center center;
    height: 600px;
    background-size: cover;
    max-width: 100%;
    width: 100%;
    position: relative;
    box-shadow: inset 4px -36px 8px -30px #000000;
`;
export const InfoSC = styled.div`
    display: flex;
    flex-direction: column;
    width: 470px;
    background: black;
    position: relative;
    z-index: 999;
    
`;

export const InfoContentSC = styled.div`
    position: absolute;
    padding: 20px;
    width: 600px;
    margin: 0;
    
`;
export const VGradientSC = styled.div`
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0, 0, 0, 1) 20%, rgba(255, 255, 255, 0) 60%);
    height: 100%;
    width: 900px;   
    position: absolute;
    left: 0;
    top: 0;
`;
export const WatchMovieSC = styled.button`
    width: 150px;
    background: transparent;
    outline: none;
    border: 1px solid ${`#a90000`};
    color: white;
    height: 45px;
    margin-top: 40px;
    margin-left: 40px;
`;
export const DescriptionSC = styled.div`
      color: #fff;  
      font-size: 20px;
      text-shadow: 5px 3px 9px rgba(0, 0, 0, 1);
      padding-left: 5px;
      
`;
export const BackdropSectionSC = styled.div`
    display: flex;
    max-width: 100%;
    width: 100%;
`;
export const VoteAvarageSC = styled.div`
    margin: 10px 0;
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
    }
`;
export const ProductionSC = styled(GenreSC)`
    font-size: 12px;
`;
export const ProductionsSC = styled(GenresSC)`
    margin-bottom: 10px;
`;
export const SimilarMoviesListSC = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 15px;
`;

export const SimilarMoviesItemSC = styled(NavLink)`
    margin: 4px 12px;
    background-image: url(${props => props.poster}); 
    background-size: cover;
    height: 270px;
    width: 180px;
    &:hover {
    transform: scale(1.1,1.1);
    transition: .2s;
    }
    transition: .2s;
`;
export const FooterSC = styled.div`
    height: 100px;
    background: black;
`;
