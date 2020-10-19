// import styled, { css } from "styled-components";
import styled from "styled-components";
import { Link } from "react-router-dom";

// since we have the option style on more than one element
// we can create a block of css with css from styled component
// and pass it to any of the styled components that requires same css styles
// this helps in reusability
// const OptionContainerStyles = css`
//   padding: 10px 15px;
//   cursor: pointer;
// `;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

// since logo is wrapped in a Link component to enable routing
// we convert it to a styled component as below
// basically we are extending Link component and then making it a styled component
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

// since we are using OptionLink in Place of OptionDiv with render as Div
// so css block and the below component is not needed
// export const OptionDiv = styled.div`
//   ${OptionContainerStyles}
// `;
