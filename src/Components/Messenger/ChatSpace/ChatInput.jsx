import React, { useState } from "react";
import styled from "styled-components";
import EmojiPicker from "emoji-picker-react";
import { IoMdSend } from "react-icons/io";
import { BsEmojiSmileFill } from "react-icons/bs";
function ChatInput({ handleSendMsg }) {
  let [showEmojis, setShowEmojis] = useState(false);
  const [msg, setMsg] = useState("");

  const handleEmojiDisplay = () => {
    setShowEmojis(!showEmojis);
  };
  const handleEmojiClick = (e, emoji) => {
    let msgs = msg;
    msgs += emoji.emoji;
    setMsg(msgs);
  };
  const sendChat = (e) => {
    e.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  };
  return (
    <Container>
      <div className="button-container">
        <div className="emoji">
          <BsEmojiSmileFill onClick={handleEmojiDisplay} />
          {showEmojis && <EmojiPicker onEmojiClick={handleEmojiClick} />}
        </div>
      </div>
      <form className="input-container" onSubmit={(e) => sendChat(e)}>
        <input
          type="text"
          placeholder="type messages here"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button type="submit">
          <IoMdSend />
        </button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  position:relative;
  grid-template-columns: 5% 95%;
  height:100%;
  align-items: center;
  background: #080420;
  padding: 0 2rem;
  padding-bottom: 0.34rem;

  .button-container {
    display: flex;
    align-items: center;
    color: #fff;
    padding: 1rem;
    .emoji {
      position: relative;
      svg {
        font-size: 1.5rem;
        color: #fff000c8;
        cursor: pointer;
      }
      .emoji-picker-react{
          /* position:absolute: */
          top:-350px;    
          background:#080429;
          box-shadow:0 5px 2px #9a86f3;
            border-color:#9186f3;
            .emoji-categories{
                button{
                    filter:contrast(0)
                }
            }
            .emoji-searc{
                    background:transparent;
                    border-color:#9186f3;
            }
            .emoji-group{
                &:before{
                    background:#080420;
                }
            }
      }
    }
  }
  .input-container {
      height:100%
    width: 100%;
    background: transparent;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    background: #ffffff34;
    padding: 0.1rem;
    gap: 2rem;
    position:sticky;
    input {
      width: 90%;
      height: 40px;
      background: transparent;
      color: #fff;
      border: none;
      padding-left: 1rem;
      font-size: 1.2rem;
      &::selection {
        background: #9a86f3;
      }
      &:focus {
        outline: none;
      }
      button {
        padding: 0.3rem 2rem;
        border-radius: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #9a86f3;
        border:none;
         svg {
          font-size: 2rem;
          color: #fff;
        }
      }
    }
  }
`;

export default ChatInput;
