import React, { useState } from "react";
import styled from "styled-components";
import EditorApp from "../../Editor/Editor";
import Navigation from "./Navigation";
function Tools() {
  const [appState, setAppState] = useState(undefined);
  const toggleNoteEditor = () => {
    setAppState("editor");
  };
  return (
    <Wrapper>
      <Navigation toggleNoteEditor={toggleNoteEditor} />
      {appState === "editor" && (
        <div className="editor">
          <EditorApp />
        </div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .editor {
    margin: 2rem 0;
  }
`;
export default Tools;
