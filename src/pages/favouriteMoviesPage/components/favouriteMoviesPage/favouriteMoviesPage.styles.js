import styled from 'styled-components'

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
export const SortSC = styled.div`
    color: #fff;
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
export const EmptyListSC = styled.p`
color: white;
`;