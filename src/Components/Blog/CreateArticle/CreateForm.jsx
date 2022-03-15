import React from "react";
import styled from "styled-components";
function CreateForm() {
  return (
    <FormBody>
      <div className="form-body">
        <div className="form-element">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Article title"
          />
        </div>
        <div className="form-element">
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Article description"
          />
        </div>
        <div className="form-element">
          <input type="file" name="image" id="file" />
        </div>
      </div>
    </FormBody>
  );
}

const FormBody = styled.div`
  .form-body {
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    .form-element {
      /* padding: 1rem 0; */
      margin-bottom: 2px;
      #title,
      #description {
        width: 100%;
        border: 1px solid #ddd;
        border-radius: 5px;
        height: 30px;
        padding: 3px 10px;
        &:focus {
          outline: none;
        }
      }
      #file {
        width: 100%;
        height: 30px;
        border: none;
        border-radius: none;
      }
    }
  }
`;

export default CreateForm;
