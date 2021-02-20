import styled from 'styled-components'
import {VWrapperSC} from "../styles";


export const VWrapperSPSC = styled(VWrapperSC)`
    background: linear-gradient(to right, #47474c, #313136);
    height: 1000px;
    box-shadow: 1px 1px 50px 20px #000000;
    border-radius: 15px 15px 0 0;

`;

export const VMainMoviePageTitleSC = styled.h1`
    color: #fff;
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
    padding: 20px;
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
`;
export const VGradientSC = styled.div`
    background: linear-gradient(270deg, rgba(0,0,0,0) 43%, rgba(0,0,0,0.5914740896358543) 70%);
    height: 100%;
    width: 100%;   
`;
export const DescriptionSC = styled.div`
      margin-top: 20px;
      color: #fff;  
      font-size: 20px;
      text-shadow: 5px 3px 9px rgba(0, 0, 0, 1);
      padding-left: 5px;
`;
export const VoteSC = styled.div`
    
`;
export const VoteAvarageSC = styled.div`
    
`;
export const TotalVoteSC = styled.div`
    
`;