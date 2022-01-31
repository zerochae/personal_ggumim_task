import React from 'react';

import * as S from './style';

const ImageContainer = (props) => {
  return <S.IMGContainer>
    <S.Img imageUrl={props.data.imageUrl}>
    </S.Img>
  </S.IMGContainer>;
};

const Modal = () => {
  return <S.ModalContainer></S.ModalContainer>;
}

export default ImageContainer;