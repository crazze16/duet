import styled from "styled-components";

export const WrapperSC = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 200px;
    width: 100%;
    & div {
    display: flex;
    }
    letter-spacing: 0.5px;
    position: relative;
    & a {
    font-weight: 600;
    color: white;
    };
`;

export const TitleSC = styled.div`
    color: black;
    font-weight: 500;
    font-size: 16px;
`;
export const VoteSC = styled.div`
position: absolute;
right: 0;
font-size: 12px;
`;

export const DateSC = styled.div`
    margin-right: 6px;
`;
export const TypeSC = styled.div`
    
`;
