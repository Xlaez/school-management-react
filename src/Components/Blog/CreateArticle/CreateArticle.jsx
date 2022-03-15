import React from "react";
import styled from "styled-components";
import EditorApp from "../../Editor/Editor";
import Form from "./CreateForm";
function CreateArticle() {
  return (
    <Container>
      <Form />
      <EditorApp />
      <div className="btn-publish"></div>
    </Container>
  );
}

const Container = styled.div`
  width: 1100px;
  margin: 0 auto;
  padding: 0.1rem;
  overflow-x: hidden;
  .btn-publish {
    text-align: center;
  }
  button {
    cursor: pointer;
    padding: 20px 40px;
    background: #131324;
    color: #fff;
    border-radius: 5px;
    border: 1px solid #131324;
  }
`;

export default CreateArticle;
