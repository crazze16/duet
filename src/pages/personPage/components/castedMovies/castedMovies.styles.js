import styled from 'styled-components'
import {MainMoviesTitleSC} from "../../person.styles";

export const ListWrapperSC = styled.div`
    width: 100%;
    padding-bottom: 50px;
    position: relative;
`;
export const CastListSC = styled.div`
    height: ${props => props.isHide ? '606px' : '100%'};
    overflow: hidden;
    width: 100%;
`;
export const DateSC = styled.div`
    width: 40px;
`;
export const TotalCastCountSC = styled.div`
    font-size: 14px;
    align-self: flex-end;
    padding-bottom: 4px;
    margin-left: 4px;
    color: #919191;
`;
export const TitleSC = styled.div`
        margin-left: 15px;
        font-size: 18px;
`;
export const ShowMoreSC = styled.div`
        margin-left: 15px;
        font-size: 18px;
        color: white;
        opacity: 85%;
     font-weight: 500;
        &: hover {
            opacity: 1;
            cursor: pointer;
}
width: 150px;
text-align: center;
padding-top: 2px;
border-top: 1px solid white;
letter-spacing: 1px;
`;
export const MainTitleSC = styled(MainMoviesTitleSC)`
    
`;
