import { Avatar } from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { getMsg, sendMsg } from "../../../utils/api";
import Logout from "../../Auth/Logout";
import ChatInput from "./ChatInput";
import { v4 as uuidv4 } from "uuid";

export default function ChatContainer({ currentChat, currentUser, socket }) {
  const [messages, setMessages] = useState([]);
  const [arrivedMsg, setArrivedMsg] = useState(null);
  var userId = currentUser._id;
  const scrollRef = useRef();
  useEffect(async () => {
    if (currentChat) {
      const response = await axios.post(getMsg, {
        from: userId,
        to: currentChat._id,
      });
      console.log(currentChat);
      setMessages(response.data);
    }
  }, [currentChat]);

  const handleSendMsg = async (msg) => {
    await axios.post(sendMsg, {
      from: userId,
      to: currentChat._id,
      message: msg,
    });
    socket.current.emit("send-msg", {
      to: currentChat._id,
      from: userId,
      message: msg,
    });

    const msgs = [...messages];
    msgs.push({ fromUser: true, message: msg });
    setMessages(msgs);
  };

  useEffect(() => {
    if (socket.current) {
      socket.current.on("receive-msg", (msg) => {
        setArrivedMsg({
          formUser: false,
          message: msg,
        });
      });
    }
  }, []);
  useEffect(() => {
    arrivedMsg && setMessages((prev) => [...prev, arrivedMsg]);
  }, [arrivedMsg]);

  useEffect(() => {
    // scrollRef.current.scrollIntoView({ behaviour: "smooth" });
    console.log(messages);
  }, [messages]);

  return (
    <div>
      {currentChat && (
        <Chatcontainer>
          <div className="chat-header">
            <div className="user-details">
              <div className="avatar">
                <Avatar />
              </div>
              <div className="username">
                <h3>{currentChat.username}</h3>
              </div>
            </div>
            <Logout />
          </div>
          <div className="chat-messages">
            {messages.map((message) => {
              return (
                <div ref={scrollRef} key={uuidv4()}>
                  <div
                    className={`message ${
                      message.fromUser ? "sent" : "received"
                    }`}
                  >
                    <div className="content">
                      <p>{message.message}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="chat-input">
            <ChatInput handleSendMsg={handleSendMsg} />
          </div>
        </Chatcontainer>
      )}
    </div>
  );
}

const Chatcontainer = styled.div`
  height: 100%;
  max-height: 85vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  .chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem;
    height: 15%;
    .user-details {
      display: flex;
      align-items: center;
      padding: 1rem;
      .avatar {
        svg {
          height: 3rem;
        }
      }
      .username {
        h3 {
          color: #fff;
        }
      }
    }
  }
  .chat-messages {
    height: 65%;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .message {
      display: flex;
      align-items: center;
      /* flex-direction: row; */
      .content {
        max-width: 40%;
        overflow-wrap: break-word;
        padding: 1rem;
        font-size: 1.1rem;
        border-radius: 1rem;
        color: #d1d1d1;
      }
    }
    .sent {
      justify-content: flex-end;
      .content {
        background: #4f04ff21;
      }
    }
    .received {
      justify-content: flex-start;
      .content {
        background: #9900ff20;
      }
    }
  }
  .chat-input {
    height: 20%;
  }
`;
