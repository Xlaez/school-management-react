import React from "react";
import { BiServer } from "react-icons/bi";
import styled from "styled-components";
function Drafts() {
  let draftState = false;
  const changeState = (e) => {
    e.preventDefault();
    draftState = true;
  };
  return (
    <DraftWrapper>
      {draftState === false ? (
        <div className="no-drafts">
          <div>
            <h3>Save your important information</h3>
            <p>Your drafts are encrypted for security reasons</p>
          </div>
          <div className="btn">
            <button onClick={(e) => changeState(e)}>
              <div className="small">Add new draft</div>
              <div className="icon">
                <BiServer />
              </div>
            </button>
          </div>
        </div>
      ) : (
        <div>Hello</div>
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
`;

export default Drafts;
