import React from "react";
import styled from "styled-components";
const StyledButton = styled.button`
    margin-top: 2px;
    background-color: yellow;
    color: black;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    display: flex;
    &:hover{
        background-color:orange;
        color:violet;
    }
`;
function Buttonnn({text})
{
 return (<StyledButton>{text}</StyledButton>);
}

export default Buttonnn;