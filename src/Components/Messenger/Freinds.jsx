import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import image from "../../../public/assets/facebook.png";

function Freinds({ currentUser, friends, changeChat }) {
  const [currentUsername, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);
  useEffect(() => {
    if (currentUser) {
      setCurrentUserImage(image);
      setCurrentUserName(currentUser.username);
    }
  }, [currentUser]);
  const changeCurrentChat = (i, friend) => {
    setCurrentSelected(i);
    changeChat(friend);
  };
  return (
    <div>
      {currentUsername && currentUserImage && (
        <Wrapper>
          <div className="brand">
            <img src={image} alt="" />
            <h3>Messify</h3>
          </div>
          <div className="friends">
            {friends.map((friend, i) => {
              return (
                <div
                  className={`friend ${
                    i === currentSelected ? "selected" : ""
                  }`}
                  key={i}
                  onClick={() => changeCurrentChat(i, friend)}
                >
                  <div className="avatar">
                    <Avatar />
                  </div>
                  <div className="username">
                    <h3>{friend.username}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="current-user">
            <div className="avatar">
              <Avatar />
            </div>
            <div className="username">
              <h2>{currentUsername}</h2>
            </div>
          </div>
        </Wrapper>
      )}
    </div>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 10% 75% 15%;
  overflow: hidden;
  background: #080420;
  height: 85vh;
  .brand {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    padding: 2rem 0.1rem;
    img {
      height: 2rem;
      padding-right: 0.6rem;
    }
    h3 {
      color: #fff;
      text-transform: uppercase;
    }
  }
  .friends {
    display: flex;
    flex-direction: column;
    overflow: auto;
    align-items: center;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background: #ffffff39;
        width: 0.1rem;
        border-radius: 0.5rem;
      }
      &-button {
        width: 0.2rem;
        background: #131324;
        color: #131324;
      }
    }
    .friend {
      background: #ffffff39;
      min-height: 5rem;
      width: 90%;
      cursor: pointer;
      border-radius: 0.3rem;
      padding: 0.4rem;
      align-items: center;
      display: flex;
      flex-direction: row;
      transition: all 0.5s ease-out;
      margin-bottom: 0.7rem;
      .avatar {
        img {
          height: 3rem;
          padding-right: 1rem;
        }
      }
      .username {
        h3 {
          color: #fff;
        }
      }
    }
    .selected {
      background: #9186f3;
    }
  }
  .current-user {
    background: #0d0d30;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    .avatar {
      img {
        height: 4rem;
        max-inline-size: 100%;
        padding-right: 1rem;
      }
    }
    .username {
      h2 {
        color: #fff;
      }
    }
  }
`;

export default Freinds;
