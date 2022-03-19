import axios from "axios";
import React, { useState, useEffect } from "react";
import { BiServer } from "react-icons/bi";
import styled from "styled-components";
import { draftsRoute } from "../../utils/api";
import ViewDrafts from "./ViewDrafts";
function Drafts({ studentData }) {
  let [toggleDraft, setToggleDraft] = useState(undefined);
  const [draft, setDraft] = useState({
    header: "",
    content: "",
  });
  const [text, setText] = useState([]);
  const AccessToken = localStorage.getItem("x-access-token");
  const userId = localStorage.getItem("app-user");
  const toggleChangeDraft = () => {
    setToggleDraft("change");
  };
  const toggleViewDraft = () => {
    setToggleDraft("view");
  };
  let message;
  useEffect(() => {
    axios
      .get(draftsRoute, {
        headers: {
          Authorization: AccessToken,
          userAccess: userId,
        },
      })
      .then((res) => {
        if (res.status === 400) {
          message = "You don't have any drafts yet.";
        }
        if (res.status === 200 || res.status === 201) {
          setText(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [toggleDraft]);
  const handleTextChange = (e) => {
    setDraft({ ...draft, [e.target.name]: e.target.value });
  };
  const handleDraftSubmit = (e) => {
    e.preventDefault();
    const { header, content } = draft;
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: AccessToken,
        userAccess: userId,
      },
      body: JSON.stringify({
        header,
        content,
      }),
    };
    fetch(draftsRoute, requestOptions)
      .then((res) => {
        res.json().then((res) => {
          setToggleDraft("view");
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log(text);
  return (
    <DraftWrapper>
      {toggleDraft === "view" ? (
        <ViewDrafts text={text} studentData={studentData} />
      ) : (
        <div>
          {toggleDraft === "change" ? (
            <div className="drafts">
              <form onSubmit={(e) => handleDraftSubmit(e)}>
                <h3>Tip: Make your drafts descriptive enough</h3>
                <div className="draft-element">
                  <input
                    type="text"
                    name="header"
                    placeholder="Draft title"
                    onChange={(e) => {
                      handleTextChange(e);
                    }}
                  />
                </div>
                <div className="draft-element">
                  <textarea
                    name="content"
                    cols="30"
                    rows="10"
                    onChange={(e) => {
                      handleTextChange(e);
                    }}
                  ></textarea>
                </div>
                <div className="draft-button">
                  <button type="submit">Add to drafts</button>
                </div>
              </form>
            </div>
          ) : (
            <div className="draft-body">
              <div className="no-drafts">
                <div>
                  <h3>Save your important Document {studentData.fullname}</h3>
                  <p>
                    Adding drafts ensures quick access to essential information
                  </p>
                </div>
                <div className="btn">
                  <button onClick={() => toggleChangeDraft()}>
                    <div className="small">New draft</div>
                  </button>
                  <button className="sec-btn" onClick={() => toggleViewDraft()}>
                    <div className="small">View draft</div>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </DraftWrapper>
  );
}

const DraftWrapper = styled.div`
  padding: 0;
  height: 100%;
  overflow-y: auto;
  background: #131313;
  border-top: 1px solid #fff;
  font-family: "poppins", sans-serif;
  .draft-body {
    background: #fff;
  }
  .no-drafts {
    margin: 0 auto;
    overflow-y: auto;
    overflow-x: hidden;
    background: #fff;
    padding: 5rem 0.2rem;
    height: 78vh;
    overflow-y: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      font-size: 1.5rem;
      text-transform: capitalize;
      padding-bottom: 2rem;
    }
    p {
      font-size: 1.1rem;
      padding-bottom: 4rem;
    }
    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    button {
      padding: 20px 40px;
      color: #fff;
      background: rgb(228, 52, 52);
      border: 1px solid rgb(228, 52, 52);
      margin: 0 1rem;
      border-radius: 5px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      &:hover {
        opacity: 0.8;
        cursor: pointer;
      }
      .small {
        font-size: 19px;
        padding-right: 0.5rem;
      }
      svg {
        font-size: 25px;
        color: purple;
      }
    }
    .sec-btn {
      background: rgb(10, 10, 141);
      border: rgb(10, 10, 141);
    }
  }
  .drafts {
    width: 900px;
    overflow-y: auto;
    overflow-x: hidden;
    margin: 2rem auto;
    padding: 1rem;
    background: #fff;
    color: #131324;
    h3 {
      text-align: center;
      padding: 1rem;
    }
    .draft-element {
      padding: 1rem;
      width: 100%;
      input {
        width: 100%;
        height: 40px;
        background: transparent;
        border: 1px solid #333;
        color: #222;
        border-radius: 3px;
        padding: 1px 5px;
        &:focus {
          outline: none;
        }
      }
      textarea {
        width: 100%;
        border-radius: 3px;
        border: 1px solid #333;
        color: #222;
        background: transparent;
        padding: 7px 5px;
        &:focus {
          outline: none;
        }
      }
    }
    .draft-button {
      margin-top: 1rem;
      padding: 1rem;
      width: 100%;
      button {
        cursor: pointer;
        width: 100%;
        padding: 20px 40px;
        color: #fff;
        background: green;
        border: 1px solid green;
        border-radius: 2px;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`;

export default Drafts;
