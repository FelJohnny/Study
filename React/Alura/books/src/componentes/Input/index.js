import styled from "styled-components";

const Input = styled.input`
    border: none;
    outline: none;
    min-width: 70%;
    border-radius: 8px;
    padding: 1em;
    background-color: #ccc;
    box-shadow: inset 2px 5px 10px rgba(0,0,0,0.3);
    transition: 300ms ease-in-out;
  
  &:focus {
    background-color: #e7e7e7;
    transform: scale(1.05);
    box-shadow: 13px 13px 100px #969696,
  }
`

export default Input;