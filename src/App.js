import React from "react";
import styled, { css } from "styled-components";
import "./style.css";
const css1 = css`
  width: 100px;
  height: 100px;
  background: #000;
`;
const css2 = css`
  ${css1};
  background: red;
`;
const StyledDiv = styled.div`
  ${css2}
`;

export default function App() {
  return <StyledDiv> </StyledDiv>;
}
