import styled from "styled-components";

export const ItemContainer =  styled.div`
width: 100%;
height: 160px;
padding: 0 10px;
`;

export const InnerContainer = styled.div`
overflow-x: auto;
display: flex;
`;

export const Item = styled.div`
width: 100%;
height: 100%;
border-radius: 16px;
border: 0.5px solid #aaafb9;
margin:28px 6px;
`;

export const ItemInnerContainer = styled.div`
width: 106px;
height: 106px;
background: url(${(props) => props.imageUrl});
border-radius: 16px;
cursor: pointer;
`