import React from "react";
import { BiRocket } from "react-icons/bi";
import styled from "styled-components";
export default function DefaultScreen({ currentUser }) {
  return (
    <Welcome>
      <div className="img">
        <BiRocket />
      </div>
      <div className="txt">
        <h1>
          {/* Welcome, <span>{currentUser.username}</span> */}
          Welcome User
        </h1>
        <h3>Select a friend to begin a chat</h3>
      </div>
    </Welcome>
  );
}

const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #ffffff39;
  font-family: "poppins", san-serif;

  .img {
    text-align: center;
    padding-bottom: 2rem;
    svg {
      width: 200px;
      height: 160px;
      color: #ffffff39;
    }
  }
  .txt {
    text-align: center;
  }
`;
