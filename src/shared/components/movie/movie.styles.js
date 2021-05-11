import styled from 'styled-components'



export const MovieSC = styled.div`
    height: ${props => props.height}px;
    border: 1px solid black;
    position: relative;
    width: ${props => props.width}px;
`;
export const TitleSC = styled.div`
    position: absolute;
    color: white;
    width: ${props => props.width}px;
    ${props => props.elipsis ? 
    `white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    ` : ''};
`;
