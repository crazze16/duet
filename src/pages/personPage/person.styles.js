import styled from 'styled-components'

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
& > div {
display: flex;
justify-content: center;
margin-top: 8px;
& a {
    margin: 0 6px;
}
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
        border-top: 3px solid #919191;
        border-left: 3px solid #919191;
        transform: rotate(45deg);
    };
    &:hover{
    opacity: 100%;
    }
    &:hover::before{
        border-color: white;
    }
`;