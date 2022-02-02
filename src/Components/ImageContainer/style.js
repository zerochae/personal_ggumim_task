import styled from "styled-components";

export const IMGContainer = styled.div`
  width: 100%;
`;

export const Img = styled.div`
  background: url(${(props) => props.imageUrl});
  width: 100%;
  height: 998px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
`;

export const BtnContainer = styled.div`
  top: ${(props) => props.X * 1.6}px;
  left: ${(props) => props.Y * 1.6}px;
  position: absolute;
`;

export const Btn = styled.div`
  width: 40px;
  height: 40px;
  z-index: 5;
  cursor: pointer;

  img {
    width: 32px;
    height: 32px;
  }
`;
export const ModalContainer = styled.div`

  /* top props.X * 1.6 */
  /* left props.Y * 1.66 */

  top : ${props => props.X * 1.6 <= 500 ? `28px` : `unset`};
  bottom : ${props => props.X * 1.6 <= 500 ? `0` : `52px`};
  left: ${props => props.Y * 1.66 <= 400 ? `-20px` : `-160px`};

  width: 220px;
  height: 86px;
  position: absolute;
  background: #fffffff2;
  padding: 8px 0 8px 8px;
  margin-top: 16px;
  border-radius: 7px;
  z-index: 999;
  display: flex;
  box-shadow: 3px 3px 8px 0 rgb(0 0 0 / 20%);

  & .btnArrow {
    height: 20px;
    width: 20px;
    align-self: end;
  }
`;

export const ModalImg = styled.div`
  background: url(${(props) => props.imageUrl});
  width: 70px;
  height: 70px;
  background-size: cover;
  background-position: center;
  margin: 0 8px 0 0;
  border-radius: 4px;
`;

export const ModalContent = styled.div`
  flex: 1;
  padding: 0 0 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  font-size: 14px;
  max-width: 112px;

  p {
    line-height: 1.2em;
  }

  & .productName {
    color: #333c45;
    line-height: 1.3em;
    text-overflow: ellipsis;
  }

  & .discountRate {
    font-size: 16px;
    color: #ff585d;
    margin: 0 4px 0 0;
    font-weight: bold;
  }

  & .noDiscount {
    color: #898f94;
    font-size: 11px;
    font-weight: bold;
    margin: 0 4px 0 0;
  }

  & .price {
    color: #181d1f;
    font-size: 16px;
    font-weight: bold;
  }
`;
