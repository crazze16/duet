import styled from 'styled-components'

export const MoviesListSC = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
`;

export const MoviesPagesSC = styled.span`
    font-weight: ${props => props.isActive};
    margin-left: 2px;
    color: #fff;
`;

export const Page = styled.span`
color: #fff;
`;