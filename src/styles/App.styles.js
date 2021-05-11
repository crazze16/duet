import styled from 'styled-components'

export const BodySC = styled.div`
display: flex;
width: 100%;
height: 100%;
position: relative;
overflow: hidden;
`;
export const ContentSC = styled.div`
// width:  ${props => props.navigationVisibility ? 'calc(100% - 90px);' : '100%' };
width: 100%;
`;
export const NavigationWrapperSC = styled.div`
position: relative;
min-width: 90px;
${props => props.navigationVisibility ? 
'' : `transform: translateX(-91px);
transition: all .3s linear;`}
z-index: 10;
top: 0;
left: 0;

`;
