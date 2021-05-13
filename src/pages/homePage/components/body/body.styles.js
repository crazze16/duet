import styled from "styled-components";
import {NavLink} from "react-router-dom";



export const WrapperSC = styled(NavLink)`
    display: block;
    max-width: 210px;
    width: 100%;
`;
export const OverviewSC = styled.div`
    max-width: 180px;
    width: 100%;
    font-size: 14px;
    display: flex;
    justify-content: center;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    color: ${`#c5c5c5`};
    padding-top: 10px;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;
export const HoverInfoSC = styled.div`
    position: absolute;
    top: 0; 
    opacity: 0;
    padding: 10px;
    font-size: 1em;
    width: 100%;
`;
export const PosterSC = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    // height: 320px;
    border-radius: 20px;
    transition: all .5s ease;
        &:hover ${HoverInfoSC} {
        opacity: 1;
    };
    &:hover {
        transition: all .3s ease;
        transform: scale(1.1,1.1);
        box-shadow: 0px 15px 15px 5px rgba(0,0,0,.5);

    };
    &:hover::before {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      backdrop-filter: blur(15px);
    };

`;
export const InfoSC = styled.div`
    display: flex;
`;


export const TitleSC = styled.div`
  width: 180px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  letter-spacing: .8px;
  color: white;
`;
export const MovieTitleSC = styled.div`
     width: 100%;
     color: white;
     & + div {
     font-weight: 500;
     color: orange;
     }
`;
export const DateSC = styled.div`
     width: 100%;
     opacity: 50%;
     font-size: 15px;
`;