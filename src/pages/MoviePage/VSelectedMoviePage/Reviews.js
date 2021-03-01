import styled from 'styled-components'
import {CastTitleSC} from "./CastSC";

export const WrapperSC = styled.div`
     background: ${`rgba(24,23,25,1)`};
    width: 100%;
    display: flex;
    margin: 8px 0;
    justify-content: space-between;
    padding: 10px;
`;

export const AvatarSC = styled.img.attrs(props => ({
    src: props.src,
}))`
    height: 32px;
    min-width: 32px;
    background-size: contain;
    border-radius: 50%;
`;

export const BodySC = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-left: 15px;
`;
export const InfoSC = styled.div`
    display: flex;
`;
export const NameSC = styled.div`
    margin-right: 8px;
    font-weight: 700;
    color: #ffffff;
`;
export const DateSC = styled.div`
    color: #ffffff;
    opacity: 80%;

`;
export const ContentSC = styled.div`
    padding-top: 10px;
    color: #ffffff;
    opacity: 80%;
    font-weight: 500;
    line-height: 22px;
    max-height: ${props => props.isHidden ? '100%' : '220px'};
    overflow: hidden;
`;
export const ToggleSC = styled.div`
    padding: 5px 0;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    width: 100%;
    font-weight: 500;
    color: ${`#cbcbcb`};
    &:hover {
        color: #fff;
        cursor: pointer;        
    }
    background: ${`#2e2d2d`};
`;
export const ReviewSectionSC = styled.div`
    padding: 50px 0;
    width: 700px;
    margin: 0 auto;
`;
export const ReviewTitleSC = styled(CastTitleSC)`
`;
export const PaginationSC = styled.div`
    height: 50px;
    width: 100%;
`;
export const PaginationItemSC = styled.span`
    height: 50px;
    color: ${props => props.isActive};
    font-size: 18px;
    margin: 0 1px;
    font-weight: 500;
`;

export const NoCommSC = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    font-size: 20px;
    color: #fff;
`;
