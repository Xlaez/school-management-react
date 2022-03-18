import axios from "axios";
import React, { useState, useEffect } from "react";
import { BiServer } from "react-icons/bi";
import styled from "styled-components";
import { draftsRoute } from "../../utils/api";
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
        res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log(text);
  return (
    <DraftWrapper>
      {toggleDraft === "change" ? (
        <div className="drafts">
          <div className="recent-drafts">
            <div className="recent-drafts-body">
              <h4>Your Drafts Will Be Shown Hear</h4>
              <ul>
                {/* {text.map((t) => {
                  return <li>{t.header}</li>;
                })} */}
              </ul>
            </div>
          </div>
          <div className="add-drafts">
            <h4>Tip: Create a draft title that will be easily remebered</h4>
            <form className="darft-form" onSubmit={(e) => handleDraftSubmit(e)}>
              <div className="elements">
                <input
                  type="text"
                  name="header"
                  placeholder="Draft Name"
                  onChange={(e) => {
                    handleTextChange(e);
                  }}
                />
              </div>
              <div className="elements">
                <textarea
                  name="content"
                  cols="30"
                  rows="10"
                  onChange={(e) => {
                    handleTextChange(e);
                  }}
                ></textarea>
              </div>
              <div className="button">
                <button type="submit">Add to drafts</button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="no-drafts">
          <div>
            <h3>Save your important Document {studentData.fullname}</h3>
            <p>Your drafts are encrypted for security reasons</p>
          </div>
          <div className="btn">
            <button onClick={() => toggleChangeDraft()}>
              <div className="small">Add new draft</div>
              <div className="icon">
                <BiServer />
              </div>
            </button>
          </div>
        </div>
      )}
    </DraftWrapper>
  );
}

const DraftWrapper = styled.div`
  padding: 1rem 2rem;
  font-family: "poppins", sans-serif;
  .no-drafts {
    width: 500px;
    margin: 0 auto;
    padding: 5rem 0.2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      font-size: 1.5rem;
      padding-bottom: 2rem;
    }
    p {
      font-size: 1rem;
      padding-bottom: 4rem;
    }
    .btn {
    }
    button {
      padding: 20px 40px;
      color: #fff;
      background: #131324;
      border: 1px solid #131324;
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
  }
  .drafts {
    display: grid;
    margin-top: 4rem;
    grid-template-columns: 45% 50%;
    grid-gap: 3rem;
    .recent-drafts {
      border: 1px solid #ccc;
      border-radius: 3px;
      background: #ccc;
      &-body {
        padding: 1rem;
        h4 {
          padding: 1rem;
          text-align: center;
        }
        ul {
          display: flex;
          flex-direction: column;
          li {
            width: 100%;
            list-style: none;
            font-weight: 600;
            padding: 5px;
            border-bottom: 1px dashed #131324;
          }
        }
      }
    }
    .add-drafts {
      margin-top: 2rem;
      .elements {
        padding: 5px 10px;
      }
      h4 {
        text-align: center;
        padding: 1rem;
      }
      input {
        width: 100%;
        padding-left: 10px;
        border: 1px solid #00000076;
        height: 30px;
        color: #131324;
        border-radius: 3px;
        &:focus {
          outline: none;
        }
      }
      textarea {
        width: 100%;
        color: #131324;
        border: 1px solid #00000076;
        border-radius: 3px;
        padding: 5px;
        &:focus {
          outline: none;
        }
      }
      .button {
        padding: 1rem;
        button {
          width: 100%;
          padding: 10px 40px;
          border-radius: 3px;
          border: #00000076;
          color: #fff;
          background: #131324;
        }
      }
    }
  }
`;

export default Drafts;
