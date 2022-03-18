import React from "react";
import { BiPowerOff } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
function Logout() {
  const Navigate = useNavigate();
  const handleClick = async () => {
    localStorage.clear("chat-user");
    Navigate("/");
  };
  return (
    <Button onClick={handleClick}>
      <BiPowerOff />
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: #9a86f3;
  border: none;
  cursor: pointer;
  svg {
    font-size: 1.3rem;
    color: #ebe7ff;
  }
`;
export default Logout;
