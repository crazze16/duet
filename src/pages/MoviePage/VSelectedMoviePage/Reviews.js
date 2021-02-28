import styled from 'styled-components'

export const WrapperSC = styled.div`
     background: ${`rgba(24,23,25,1)`};
    width: 550px;
    display: flex;
    margin: 4px auto;
    justify-content: space-between;
    
`;

export const AvatarSC = styled.img.attrs(props => ({
    src: props.src,
}))`
    height: 32px;
    min-width: 32px;
    background: red;
    background-size: contain;
    border-radius: 50%;
`;

export const BodySC = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding-left: 10px;
`;
export const InfoSC = styled.div`
    display: flex;
    
`;
export const NameSC = styled.div`
    margin-right: 7px;
    font-weight: 500;
    
`;
export const DateSC = styled.div`

`;
export const ContentSC = styled.div`

`;
export const RatedSC = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 10px;
`;