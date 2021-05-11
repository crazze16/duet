import styled from "styled-components";

export const WrapperSC = styled.div`
width: calc(100% - 300px);
margin: 20px auto 0;
display: flex;
flex-direction: column;
align-items: center;
padding-bottom: 50px;
`;
export const ElementContainerSC = styled.div`
    margin-bottom: 40px;  
`;
export const FeedListSC = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`;
export const UploadBTNSC = styled.button`
background: #292929;
width: 40px;
height: 40px;
border: none;
position: relative;
border-radius: 30px;
cursor: pointer;
opacity: 70%;
&:before {
    width: 2px; 
    height: 18px;
    background: white;
    content: '';
    position: absolute;
    top: 11px;
    left: 19px;
};
&:after {
    width: 18px; 
    height: 2px;
    background: white;
    content: '';
    position: absolute;
    top: 19px;
    left: 11px;
};
&:hover{
opacity: 100%;
};
`;
export const NoResultsSC = styled.div`
color: white;
`;
