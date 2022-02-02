import React from "react";

import * as S from "./style";

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

const arrow = (
  <img
    className="btnArrow"
    src="//cdn.ggumim.co.kr/storage/20211102181936xqHzyWAmb8.png"
    alt="arrow"
  />
);

const ImageContainer = (props) => {
  const handleSearch = (index) => {
    props.selected !== index ? props.setSelected(index) : props.setSelected();
  };

  return (
    <S.IMGContainer>
      <S.Img imageUrl={props.data.imageUrl} onClick={() => {}}>
        {props.data &&
          props.data.productList.map((item, index) => {
            return (
              <S.BtnContainer X={item.pointX} Y={item.pointY}>
                <S.Btn
                  key={item.productId}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSearch(index);
                  }}
                >
                  {props.selected !== index ? detail : close}
                </S.Btn>
                {props.selected === index ? (
                  <Modal X={item.pointX} Y={item.pointY} data={item} />
                ) : null}
              </S.BtnContainer>
            );
          })}
      </S.Img>
    </S.IMGContainer>
  );
};

const Modal = (props) => {
  return (
    <S.ModalContainer X={props.X} Y={props.Y}>
      <S.ModalImg imageUrl={props.data.imageUrl}></S.ModalImg>
      <S.ModalContent>
        <h4 className="productName">{props.data.productName}</h4>
        <p>
          {props.data.discountRate !== 0 ? (
            <span className="discountRate">{props.data.discountRate}%</span>
          ) : (
            <span className="noDiscount">예상가</span>
          )}
          <span className="price">
            {props.data.priceDiscount
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
        </p>
      </S.ModalContent>
      {arrow}
    </S.ModalContainer>
  );
};

export default ImageContainer;
