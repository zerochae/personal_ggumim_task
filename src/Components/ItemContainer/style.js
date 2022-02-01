import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 100%;
  height: 160px;
  padding: 0 10px;
`;

export const InnerContainer = styled.div`
  overflow-x: auto;
  display: flex;
`;

export const ItemInnerContainer = styled.div`
  width: 106px;
  height: 106px;
  background: url(${(props) => props.imageUrl});
  border-radius: 16px;
  cursor: pointer;
  position: relative;
  background-size: cover;
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  border: 0.5px solid #aaafb9;
  margin: 28px 6px;

  &:nth-child(${(props) => props.selected + 1}) {
    background: linear-gradient(163.54deg, #ff659e 8.22%, #f56b30 94.1%);
    border-radius: 18px;
    padding: 2px;
    margin: 26px 4px;
    & ${ItemInnerContainer} {
      /* border: 1px solid #fff; */
    }
  }
`;

export const Badge = styled.div`
  background: url("//cdn.ggumim.co.kr/storage/20211117191419RW6JS6bjRm.png");
  position: absolute;
  top: 0;
  right: 5px;
  width: 24px;
  height: 28px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  font-size: 11px;
  font-weight: bold;
  line-height: 25px;
  text-align: center;
  padding-left: 1px;
  color: #fff;
  span {
    font-size: 8px;
  }
`;
