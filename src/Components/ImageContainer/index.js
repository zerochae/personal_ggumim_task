import React from "react";

import * as S from "./style";

const ImageContainer = (props) => {
  const detail = (
    <img
      src="//cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png"
      alt="detail"
    />
  );

  const close = (
    <img
      src="//cdn.ggumim.co.kr/storage/20211029145330GwwumnWNSs.png"
      alt="close"
    />
  );

  const handleSearch = (index) => {
    props.selected !== index ? props.setSelected(index) : props.setSelected();
  }

  return (
    <S.IMGContainer>
      <S.Img imageUrl={props.data.imageUrl}>
        {props.data &&
          props.data.productList.map((item, index) => {
            return (
              <S.Btn
                key={item.productId}
                X={item.pointX}
                Y={item.pointY}
                onClick={()=>{handleSearch(index)}}
              >
                {props.selected !== index ? detail : close}
              </S.Btn>
            );
          })}
        <Modal />
      </S.Img>
    </S.IMGContainer>
  );
};

const Modal = () => {
  return <S.ModalContainer></S.ModalContainer>;
};

export default ImageContainer;
