import styled from 'styled-components'

export const PosterSC = styled.div`
`;
export const InfoItemSC = styled.div`
    font-weight: 400;
            color: ${`#bababa`};
`;
export const InfoContainerSC = styled.div`
    margin-left: 12px;
    letter-spacing: 0.6px;
`;
export const TitlesSC = styled.span`
    color: ${`#eeeeee`};
    font-size: 16px;
    font-weight: 500;
    opacity: 90%;
`;
export const AdditionalInfoContainerSC = styled.div`
    display: ${props => props.showed ? 'flex' : 'none'};
    width: 100%;
    padding: 10px;
`;
export const ShowAdditionalInfoSC = styled.div`
    margin-left: 10px;
    &:hover {
        border-color: white;
        cursor: pointer;
    }
`;