import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const SimilarMoviesItemSC = styled(NavLink)`
    margin: 4px 12px;
    background: url(${props => props.poster}); 
    background-size: cover;
    height: 270px;
    width: 180px;
    &:hover {
    transform: scale(1.1,1.1);
    transition: .2s ease;
    }
    transition: .2s ease;
`;