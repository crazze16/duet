import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const ListItemSC = styled.div`
    display: flex;
    flex-direction: column;
    margin: 4px 0;
    color: #919191;
    font-weight: 500;
    position: relative;
`;
export const MainMovieInfoSC = styled.div`
    display: flex;
    position:relative;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;
export const LinkWrapperSC = styled(NavLink)`
    display: flex;
    color: inherit;
     &: hover {
    color: white;
    }
`;