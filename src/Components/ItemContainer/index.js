import React, { useRef, useState } from "react";

import * as S from "./style";

const ItemContainer = (props) => {
  const innerContainer = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [X, setX] = useState();

  const onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setX(e.pageX + innerContainer.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e) => {
    if (isDrag) {
      innerContainer.current.scrollLeft = X - e.pageX;
    }
  };

  return (
    <S.ItemContainer>
      <S.InnerContainer
        ref={innerContainer}
        onMouseDown={(e) => {
          onDragStart(e);
        }}
        onMouseUp={() => {
          onDragEnd();
        }}
        onMouseMove={(e) => {
          onDragMove(e);
        }}
        onMouseLeave={() => {
          onDragEnd();
        }}
      >
        {props.data &&
          props.data.productList.map((item, index) => {
            return (
              <Item
                setSelected={props.setSelected}
                selected={props.selected}
                index={index}
                key={item.productId}
                data={item}
              />
            );
          })}
      </S.InnerContainer>
    </S.ItemContainer>
  );
};

const Item = (props) => {
  const handleItem = (index) => {
    props.selected !== index ? props.setSelected(index) : props.setSelected();
  };

  return (
    <S.Item
      onClick={() => {
        handleItem(props.index);
      }}
      selected={props.selected}
    >
      <S.ItemInnerContainer
        imageUrl={props.data.imageUrl}
        selected={props.selected}
      >
        {props.data.discountRate !== 0 && <S.Badge>{props.data.discountRate}<span>%</span></S.Badge> }
      </S.ItemInnerContainer>
    </S.Item>
  );
};

export default ItemContainer;
