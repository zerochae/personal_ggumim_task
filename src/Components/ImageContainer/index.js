import React from "react";

import * as S from "./style";

const ImageContainer = (props) => {
  const search = (
    <img
      src="//cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png"
      alt="search"
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
              <S.Search
                key={item.productId}
                top={item.pointX}
                left={item.pointY}
                onClick={()=>{handleSearch(index)}}
              >
                {props.selected !== index ? search : close}
              </S.Search>
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
