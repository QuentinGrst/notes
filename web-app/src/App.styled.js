import styled from "styled-components"
import { css } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { HiPlusCircle, IconName, HiX } from "react-icons/hi";

export const Side = styled.aside`
  position: fixed;
  width: 240px;
  top: 0;
  left: 0;
  bottom: 0;
  overflow: auto;
  background-color: ${({ theme }) => theme.asideBackgroundColor};
`;
export const Main = styled.main`
  height: 100vh;
  margin-inline-start: 240px;

`;

export const CreateButton = styled.button`
 background-color:white;
  height: 40px;
  width: 200px;
  margin: 20px;
  gap: 20px;
  border-radius: 5px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.asideBackgroundColor};
  color: ${({ theme }) => theme.mainTextColor};
  border: ${({ theme }) => theme.asideBackgroundColor}; 
`;

export const ChangeTheme = styled.button`
display: flex;
align-items: center;
font-size: 3vh;
justify-content: space-around;
background-color: transparent;
border: none;
height: 40px;
width: 40px;
color: ${({ theme }) => theme.mainTextColor};
`;



export const AddCircle = styled.div`
display:flex;
align-items:flex-end;
justify-content: flex-end;
font-size: 3vh;
`;

export const AddText = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
font-weight: bold;
`;

export const AddSearch = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 15px;
align-items: stretch;
`;

export const DeleteSearch = styled.button`
font-size: 1.2vh;
background: transparent;
border-radius: 50px;
display: flex;
align-items: center;
justify-content: center;
color: ${({ theme }) => theme.mainTextColor};
`;

export const Search = styled.input`
border-radius: 50px;
background: transparent;
width: 100%;
color: ${({ theme }) => theme.mainTextColor};
font-weight: bold;
height: 25px;
padding: 5px;
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
width: 100%;
${CENTERED}
`;
