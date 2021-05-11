import styled from "styled-components";

export const RadioWrapperSC = styled.div`
font-weight: 500;
letter-spacing: 1px;
position: relative;
width: 60px;
display: flex;
justify-content: center;
& input {
    position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
};
& input:checked ~ span {
   position: absolute;
  bottom: -15px;
  left: 25px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: red;
    opacity: 80%;
}
& label:hover {
    cursor: pointer;
};
`;