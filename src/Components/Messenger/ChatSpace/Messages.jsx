import React from "react";
import styled from "styled-components";
function Messages() {
  return (
    <Wrapper>
      <h2>Message</h2>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* height: 80%; */
  overflow: auto;
  height: 60vh;
`;

export default Messages;
