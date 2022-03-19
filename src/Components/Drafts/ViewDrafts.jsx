import React, { useState } from "react";
import styled from "styled-components";

function ViewDrafts({ text, studentData }) {
  const [id, setDraftId] = useState(undefined);
  const getDraftId = (e) => {
    setDraftId(e.target.value);
  };
  console.log(id);
  const deleteDraft = (e) => {
    e.preventDefault();
  };
  return (
    <Body>
      <div className="display-drafts">
        {text.length === 0 ? (
          <div className="no-draft-entry">
            <h1>Dear {studentData.fullname}, You have no drafts yet</h1>
            <button>Add drafts</button>
          </div>
        ) : (
          <div className="show-drafts">
            <h2>{studentData.fullname} Your Drafts are encrypted</h2>
            <p className="p">
              Because of this, you can save delicate data on your draft space.
            </p>
            <div className="view">
              {text.map((t) => {
                return (
                  <div className="draft" key={t._id}>
                    <h4>{t.header}</h4>
                    <p>{t.content}</p>
                    <form onSubmit={(e) => deleteDraft(e)}>
                      <button
                        type="submit"
                        value={t._id}
                        onClick={(e) => getDraftId(e)}
                      >
                        Delete
                      </button>
                    </form>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </Body>
  );
}

const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  .no-draft-entry {
    width: 100%;
    padding-top: 4rem;
    height: 78vh;

    text-align: center;
    background: #fff;
    h1 {
      padding: 2rem;
      font-size: 1.4rem;
      color: #131324;
      margin-bottom: 2rem;
    }
    button {
      padding: 20px 40px;
      color: #fff;
      background: green;
      border: 1px solid green;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
    }
  }
  .show-drafts {
    /* margin: 2rem auto; */
    padding: 1rem 3rem;
    background: #fff;
    height: 78vh;
    color: #131324;
    h2 {
      padding: 1rem;
      text-align: center;
      margin-bottom: 0.3rem;
    }
    .p {
      line-height: 1.6;
      text-align: center;
      color: #131324;
      font-size: 1.2rem;
      padding-bottom: 2rem;
    }
    .view {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      .draft {
        display: flex;
        flex-direction: column;
        border: 1px solid #131324;
        padding: 1rem;
        margin: 0 0.3rem;
        text-align: center;
        justify-content: center;
        h4 {
          padding-bottom: 0.4rem;
        }
        p {
          line-height: 1.5;
          color: #131324;
        }
        form {
          button {
            margin-top: 0.4rem;
            color: #fff;
            border: 1px solid green;
            background: green;
            padding: 10px 15px;
            cursor: pointer;
          }
        }
      }
    }
  }
`;

export default ViewDrafts;
