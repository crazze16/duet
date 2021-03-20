import styled from 'styled-components'

export const VMoviesListSC = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
`;

export const VMoviesPages = styled.span`
    font-weight: ${props => props.isActive};
    margin-left: 2px;
    color: #fff;
`;

export const Page = styled.span`
color: #fff;
`;