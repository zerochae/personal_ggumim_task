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
`;

export const ModalContainer = styled.div``;
