import styled from 'styled-components'
import {VWrapperSC} from "../styles";
import {NavLink} from "react-router-dom";


export const VWrapperSPSC = styled(VWrapperSC)`
    box-shadow: 1px 1px 50px 20px #000000;
    border-radius: 15px 15px 0 0;
    background: linear-gradient(270deg, rgba(20,20,20,1) 0%, rgba(0,0,0,1) 100%);
    
`;

export const VMainMoviePageTitleSC = styled.h1`
    color: #fff;
    margin: 20px 0 2px 0;
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
    height: 700px;
    background-size: cover;
    max-width: 100%;
    width: 100%;
    position: relative;
    box-shadow: inset 4px -36px 6px -30px #000000;
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
    position: relative;
    border-radius: 5px;
    &:before {
    content:'';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 42px;
    background: rgba(255,255,255,0.1);
    border-radius: 3px;
    transition: all .5s ease;
    }
    &:hover:before {
    width: 100%;
    }
    &:hover {
      cursor: pointer; 
    }
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
export const VoteAvarageSC = styled.div`
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
export const ProductionsSC = styled(GenresSC)`
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

export const SimilarMoviesItemSC = styled(NavLink)`
    margin: 4px 12px;
    background-image: url(${props => props.poster}); 
    background-size: cover;
    height: 270px;
    width: 180px;
    &:hover {
    transform: scale(1.1,1.1);
    transition: .2s ease;
    }
    transition: .2s ease;

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


//video
export const ModalWrappSC = styled.div`
    top: 0;
    position: fixed;
    height: 100vh;
    width: 100%;
    z-index: 999999;
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

export const CollectionContainerSC = styled.div`
        color: white;
        padding-left: 10px;
        margin-top: 4px;
        font-size: 16px;
        opacity: 0.8;
    `;
// FOOTER

export const FooterSC = styled.div`
    background: ${`#292828`};
    padding: 20px;

`;
export const SocialSC = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    color: white;
    max-width: 100px;
    width: 100%;
    justify-content: space-around;
`;
export const LinkSC = styled.a`
    color: white;
    display: block;
`;
export const FooterWrapperSC = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
    height: 100%;
`;
export const FooterInfoSC = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const CreatedSC = styled.span`
    color: white;
    opacity: 80%;
    font-weight: 500;
    margin: 4px 0;
`;
export const MailSC = styled.span`
    color: white;
    font-weight: 500;
`;