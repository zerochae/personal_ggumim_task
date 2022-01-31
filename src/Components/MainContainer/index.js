import React,{ useEffect,useState } from "react";

import ItemContainer from "Components/ItemContainer";
import ImageContainer from "Components/ImageContainer";

import useFetch from "util/useFetch";

import * as S from "./style";

const MainContainer = () => {

  const [data,setData] = useState('') // API 로 받은 데이터 저장

  const { res , err } = useFetch(); // API 통신 성공시 res , 실패시 err

  const [selected,setSelected] = useState(null) // 현재 선택한 Item

  useEffect(()=>{
    if(data === ''){
      if(err !== undefined) console.log("err: ",err)
      else if(res !== undefined) setData(res);
    }
  },[res,err,data])

  return (
    <S.Container>
      <ImageContainer data={data} />
      <ItemContainer data={data} setSelected={setSelected} selected={selected}/>
    </S.Container>
  );
};

export default MainContainer;