import styled from "styled-components";

export const IMGContainer = styled.div`
  width: 100%;
`;

export const Img = styled.div`
  background: url(${(props) => props.imageUrl});
  width: 100%;
  height: 998px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
`;

export const ModalContainer = styled.div``;

export const Btn = styled.div`
width: 40px;
height: 40px;
position: absolute;
cursor: pointer;
top: ${props => props.X * 1.66}px;
left: ${props => props.Y * 1.66}px;

img{
  width: 32px;
  height: 32px;
}
`