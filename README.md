# 집 꾸미기 과제 - 집 소개 페이지 

## <a href="https://loving-leakey-c46b8f.netlify.app" target="_blank">GO DEMO🚀</a>

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

### Slide

### Position Absolute

## Requirements

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
