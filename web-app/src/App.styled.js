import styled from "styled-components"
import { css } from "styled-components";

export const Side = styled.aside`
  position: fixed;
  width: 240px;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.asideBackgroundColor};
`;
export const Main = styled.main`
  height: 100vh;
  margin-inline-start: 240px;

`;

const CENTERED = css`
display:flex;
justify-content: center;
align-items :center;
`;


export const MessageNoNoteSelected = styled.div`
height: 100%;
font-size: 4vh;
${CENTERED}
`;

export const LoaderWrapper = styled.div`
height: 40px;
${CENTERED}
`;

export const FullHeightAndWidthCentered = styled.div`
height: 100%;
${CENTERED}
`;