import React,{ useEffect,useState } from "react";

import { ItemContainer } from "Components/ItemContainer";
import { ImageContainer } from "Components/ImageContainer";

import useFetch from "util/useFetch";

import * as S from "./style";

export const MainContainer = () => {

  const [data,setData] = useState('') 

  const { res , err } = useFetch();

  useEffect(()=>{
    if(data === ''){
      if(err !== undefined) console.log("err: ",err)
      else if(res !== undefined) setData(res);
    }
  })

  return (
    <S.Container>
      <ImageContainer data={data}/>
      <ItemContainer data={data}/>
    </S.Container>
  );
};
