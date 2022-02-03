# 집 꾸미기 과제 - 집 소개 페이지 

## [GO DEMO🚀][]

## Developer

|권영채|
|---|
|![zerochae](https://user-images.githubusercontent.com/84373490/149466662-281cf4cb-4a7c-4856-8aab-111904d645f3.jpg)|

## Architecture

![ggumimArchitecture](https://user-images.githubusercontent.com/84373490/151760198-0af1ee3a-a76a-4e3a-b56b-4f522e00a6e4.png)

```js
- src/
--- App/
----- MainContainer/
------- ImageContainer/
--------- Modal/
------- ItemContainer/
--------- Item/
```

## Issue

### Event Bubbling

메인 사진을 클릭시 선택된 가구를 초기화해주는 클릭이벤트를 작성하던 도중 이벤트 버블링 현상을 경험했습니다.

```jsx
  <Img onClick={()=>{console.log("Image")}}>
    <Btn onClick={()=>{console.log("Button")}}>
    <Btn/>
  </Img>
```

![bubbling](https://user-images.githubusercontent.com/84373490/152382735-361941a0-fd3c-478d-a56d-d1199217de62.gif)


Btn의 클릭 이벤트 발생 시 상위 부모 요소까지 이벤트가 전파되기 때문이였습니다. `stopPropagation()` 메소드로 해당 현상을 해결하였습니다.
```jsx
  <Img onClick={()=>{console.log("Image")}}>
    <Btn onClick={(e)=>{
    e.stopPropagation();
    console.log("Button")
    }}>
    <Btn/>
  </Img>
```
![solve](https://user-images.githubusercontent.com/84373490/152382741-b8d6c714-5ec3-47ba-931a-748eaed599b0.gif)

## Requirements

![Animation](https://user-images.githubusercontent.com/84373490/152384049-6940f2c4-5f24-47e3-b911-1aa28a7f27d3.gif)

✔️ 사진과 가구에 대한 정보는 API(cdn.ggumim.co.kr/test/image_product_link.json)를 통해서 호출

✔️ 가구 정보가 있는 곳에 돋보기 모양의 버튼을 표시

✔️ 돋보기를 클릭하면 상품정보 ToolTip이 출력되면서 돋보기모양이 닫기 버튼으로 변경

✔️ ToolTip은 하나만 노출, ToolTip이 노출되고 있는 상태에서 다른 가구를 선택하면 노출되고 있던 ToolTip은 닫히고 새로 클릭한 가구 ToolTip만 노출

✔️ 하단에 있는 상품목록에서 해당 가구가 선택되었으면 ToolTip 출력

✔️ 선택된 가구는 선택되었으면 표시

✔️ 할인율이 존재하는 경우에는 상단에 할인율 표시

✔️ 입점되어 있는 가구

**표시 목록**

- 상품 이미지
- 상품명
- 할인율
- 가격

✔️ 입점되지 않는 가구

**표시목록**

- 상품 이미지
- 상풍명
- 예상 가격
  
## Review

이슈 항목의 이벤트 버블링 현상을 해결하려다가, 이벤트 전달 방식에 궁금증이 생겨서 이벤트 캡처, 이벤트 델리게이션 까지 공부하게 되는 좋은 기회가 되었습니다.

[GO DEMO🚀]: https://loving-leakey-c46b8f.netlify.app
