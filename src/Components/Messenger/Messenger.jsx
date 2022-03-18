import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getFriends, apiHostL } from "../../utils/api";
import Friends from "./Freinds";
import DefaultScreen from "./DefaultScreen";
import ChatContainer from "./ChatSpace/ChatContainer";
import { io } from "socket.io-client";
export default function Messenger() {
  const socket = useRef();
  const Navigate = useNavigate();
  const [friends, setFriends] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [isLoaded, setIsloaded] = useState(false);
  useEffect(async () => {
    if (!localStorage.getItem("chat-user")) {
      Navigate("/chatl");
    } else {
      setCurrentUser(await JSON.parse(localStorage.getItem("chat-user")));
      setIsloaded(true);
      console.log(isLoaded);
    }
  }, []);
  useEffect(() => {
    if (currentUser) {
      socket.current = io(apiHostL);
      socket.current.emit("add-user", currentUser._id);
    }
  });
  useEffect(() => {
    if (currentUser) {
      axios
        .get(`${getFriends}/${currentUser._id}`)
        .then((res) => {
          setFriends(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      //   Navigate("/");
    }
  }, [currentUser]);
  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };
  return (
    <Container>
      <div className="messenger">
        <Friends
          friends={friends}
          currentUser={currentUser}
          changeChat={handleChatChange}
        />
        {currentChat === undefined ? (
          <DefaultScreen currentUser={currentUser} />
        ) : (
          <ChatContainer
            currentChat={currentChat}
            currentUser={currentUser}
            socket={socket}
          />
        )}
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #131324;

  .messenger {
    height: 85vh;
    width: 85vw;
    background: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
  }
`;
