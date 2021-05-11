import styled from "styled-components";

export const WrapperSC = styled.div`
    position: relative;
    margin: 20px auto 0;
    color: white;
    width: calc(100% - 300px);
`;
export const SliderElementSC = styled.div`
    background: ${props => props.active ? '#9b090e' : '#292929'};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 180px;
    border-radius: 20px;
    text-transform: capitalize;
    font-weight: 500;
    color: white;
`;
