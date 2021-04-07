import styled from 'styled-components'


export const CastAvatarSC = styled.div`
  width: 140px;
  border-radius: 50%;
  height: 140px;
  background: url(${props => props.src}) center center;
  background-size: cover;
`;
export const AvatarWrapper = styled(CastAvatarSC)`
    background: ${`#131313`};
`;
export const AvatarsListSC = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
`;
export const CastItemSC = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 20px;
    width: 140px;
    align-items: center;
`;
export const NameSC = styled.div`
    color: #ffffff;
    font-weight: 500;
    text-align: center;
    padding-top: 3px;
`;
export const CharacterSC = styled.div`
    color: #ffffff;
    width: 120px;
    font-size: 14px;
    text-align: center;
    opacity: 0.8;
`;
export const CastTitleSC = styled.div`
    color: #ffffff;
    font-size: 24px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    margin-bottom: 30px;
`;
export const CastWrapperSC = styled.div`
    padding: 50px 0;
    max-width: 1500px;
    width: 100%;
    margin: 0 auto;
    `;