import styled from 'styled-components'

const arrowDisabled = 'rgba(145, 145, 145, 0.45)';
const arrowActive = '#919191';

export const ContainerSC = styled.div`
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    background: ${`#0a090b`};
    padding: 30px 30px 0;
`;

export const PersonInfoContainerSC = styled.div`
    display: flex;
    letter-spacing: .8px;
`;
export const WrapperSC = styled.div`
    overflow: hidden;
    position: relative;
`;

export const PhotoSC = styled.div`
display: flex;
flex-direction: column;

`;
export const SocialLinksCS = styled.div`
display: flex;
justify-content: center;
margin-top: 8px;
& a {
    margin: 0 6px;
}
`;
export const BiographySC = styled.div`
    margin: 10px 0 5px 0;
    font-size: 16px;
    line-height: 21px;
    height: ${props => props.showAll ? '170px' : '100%'};
    overflow: hidden;
`;
export const BirthDateSC = styled.div`
    margin: 10px 0;
`;
export const ShowMoreSC = styled.div`
    width: 120px;
    &:hover {
        color: white;
        cursor: pointer;
    }
`;
export const BirthPlaceSC = styled.div`
`;
export const DetailsSC = styled.div`
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    color: #919191;
    width: 900px;
`;
export const NameSC = styled.div`
    color: white;
    font-weight: 500;
    font-size: 32px;
    letter-spacing: 1.2px;
    margin: 0 0 10px;
`;

export const PersonMoviesContainerSC = styled.div`
    display: flex;
    height: 300px;
    justify-content: center;
`;

export const SliderWheelWrapperSC = styled.div`
    display: flex;
    width: 1015px;
    overflow: hidden;
    position: relative;
    height: 100%;
`;

export const BorderSC = styled.div`
    margin: 0 8px;
    position: relative;
    &:hover::before{
        position: absolute;
        content: '';
        top: 1px;
        height: 100%;
        width: 100%;
        box-shadow: inset -22px -80px 80px 5px #000000;
        z-index: 10;
    }
    height: 245px;
    &:hover .test{
    display: flex;
    }
`;
export const SliderSC = styled.div`
        position: relative;
`;
export const VoteSC = styled.div`
        font-size: 21px;
        font-weight: 500;
`;
export const RealeseDateSC = styled.div`
        font-size: 14px;
`;
export const CharacterSC = styled.div`
        width: 100px;
        text-align: end;
`;
export const MovieInfoSC = styled.div`
        display: none;
        position: absolute;
        height: 30px;
        width: 200px;
        height: 100px;
        width: 100%;
        bottom: 5px;
        right: 10px;
        color: ${`#b9b9b9`};
        justify-content: flex-end;
        align-items: flex-end;
        flex-direction: column;
        z-index: 999;
`;
export const SliderWheelSC = styled.div`
    transition: 3s;
    display: flex;
    width: 1040px;
    transition: .2s;
    position: absolute;
    left: 0;
`;
export const ArrowSC = styled.div`
background: transparent;
position: absolute;
width: 32px;
height: 32px;
top: 120px;
transform: rotate(45deg);
&:hover {
    border-color: white;
    cursor: pointer;
}
`;
export const MainMoviesTitleSC = styled.div`
font-weight: 500px;
font-size: 26px;
color: white;
display: flex;
margin: 20px 0;
letter-spacing: 1px;
`;
export const ArrowLeftSC = styled(ArrowSC)`
left: -50px;
border-bottom: 2px solid ${props => props.disabled ?
    arrowDisabled : arrowActive};
border-left: 2px solid ${props => props.disabled ?
    arrowDisabled : arrowActive};
&:hover {
    border-color: ${props => props.disabled ?
    arrowDisabled :
    '#fff'};
    cursor: ${props => props.disabled ?
    'auto' :
    'pointer'};
}
`;
export const ArrowRightSC = styled(ArrowSC)`
right: -50px;
border-top: 2px solid ${props => props.disabled ?
    arrowDisabled : arrowActive};
border-right: 2px solid ${props => props.disabled ?
    arrowDisabled : arrowActive};
&:hover {
    border-color: ${props => props.disabled ?
    arrowDisabled :
    '#fff'};
    cursor: ${props => props.disabled ?
    'auto' :
    'pointer'};
}
`;
export const ScrollToTopSC = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 150px;
    background: ${'#292929'};
    opacity: 80%;
    right: 50px;
    &:before {
        content: '';
        width: 20px;
        height: 20px;
        position: absolute;
        top: 26px;
        border-top: 3px solid ${arrowActive};
        border-left: 3px solid ${arrowActive};
        transform: rotate(45deg);
    };
    &:hover{
    opacity: 100%;
    }
    &:hover::before{
        border-color: white;
    }
`;
