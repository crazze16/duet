import styled from 'styled-components'
import {NavLink} from "react-router-dom";

export const ListWrapperSC = styled.div`
padding: 0 15px;
`;
export const PageTitleSC = styled.h1`
color: white;
margin: 0;
padding: 0;
font-weight: 300;
`;
export const ListSC = styled.div`
display: flex;
max-width: 1700px;
margin: 0 auto;
flex-wrap: wrap;
flex-start: left;
`;
export const BackdropSC = styled(NavLink)`
    display: block;
    width: 400px;
    height: 220px;
    background: url(${props => props.bg});
    background-size: cover;
`;
export const TitleSC = styled.div`
color: white;
`;
export const WrapperSC = styled.div`

`;
export const SortSC = styled.div`
    color: #fff;
`;
export const WrapperItemSC = styled.div`
    display: block;
    margin: 20px 2px;
    color: #fff;    
    position: relative;
`;
export const HoveredSC = styled.div`
    display: ${props => props.flag ? 'block' : 'none'};
    position: absolute;
    top: 2px;
    right: 2px;
    opacity: 80%;
    &:hover {
    opacity: 100%;
    cursor: pointer;
    }
    &:hover::before{
        top: -30px;
        display: block;
        background: #2e2d2d;
        width: 150px;
        text-align: center;
        border-radius: 4px; 
        content: '${props => props.content ? 'Remove from the list' : 'Add to the list'}';
        position: absolute;
    } 
    &:hover::after{
        top: -12px;
        left: 3px;
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 9px 8px 0 8px;
        border-color: #2e2d2d transparent transparent transparent;
        content: '';
        position: absolute;
    }
`;
export const EmptyListSC = styled.p`
color: white;
`;
export const SearchInputSC = styled.input`

`;
export const InputWrapper = styled.div`
    display: flex;
`;

export const ClearInputSC = styled.div`
   margin-left: 5px;
   position: relative;
   width: 18px;
   height: 18px;
   opacity: 80%;
   cursor: pointer;
      &:before {
        top: 1px;
        left: 7px;
        content: '';
        width: 2px;
        height: 18px;
        background: white;
        position: absolute;
        transform: rotate(45deg);
   }
   &:after {
        content: '';
        top: 1px;
        left: 7px;
        width: 2px;
        height: 18px;
        background: white;
        position: absolute;
        transform: rotate(-45deg);
   }
   &:hover {
        opacity: 100%;
        
   }
`;