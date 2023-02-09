import styled from "styled-components";
import { FiLoader } from "react-icons/fi";

const INPUT_PADDING = 8;

export const NoteForm = styled.form`
height: 100%;
display: flex;
flex-direction: column;
align-items: stretch;
`;

export const NoteTitle = styled.input`
height: 40px;
border: none;
background-color: ${({ theme }) => theme.mainBackgroundColor};
padding: ${INPUT_PADDING}px;
font-size: 20px;
color: inherit;
background: transparent;
border-bottom: 5px solid ${({ theme }) => theme.asideBackgroundColor};
`;

export const TextArea = styled.textarea`
padding: ${INPUT_PADDING}px;
flex: 1;
border: none;
color: ${({ theme }) => theme.mainTextColor};
font-family: inherit;
background: transparent; 
  `;

export const SaveAndStatus = styled.div`
height: 60px;
display: flex;
color: green;
align-items: center;
border-top: 1px solid  ${({ theme }) => theme.asideBackgroundColor};
`;

export const SaveButton = styled.button`
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

export const DeleteButton = styled.button`
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


export const Loader = styled(FiLoader)`
  -webkit-animation: icon-spin 2s infinite linear;
          animation: icon-spin 2s infinite linear;

@-webkit-keyframes icon-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
  }
}

@keyframes icon-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
  }
}`;

export const ErrorMessage = styled.div`
color: red;
`;
