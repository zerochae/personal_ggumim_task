import React from "react";

import * as S from "./style";

const ItemContainer = (props) => {

  const handleItem = (index) => {
    console.log(index)
    props.setSelected(index);
  }

  return (
    <S.ItemContainer>
      {props.selected}
      <S.InnerContainer>
        {props.data &&
          props.data.productList.map((item,index) => {
            return <Item key={item.productId} data={item} onClick={()=>{handleItem(index)}}/>;
          })}
      </S.InnerContainer>
    </S.ItemContainer>
  );
};

const Item = (props) => {
  return (
    <S.Item>
      <S.ItemInnerContainer imageUrl={props.data.imageUrl} />
    </S.Item>
  );
};

export default ItemContainer;
