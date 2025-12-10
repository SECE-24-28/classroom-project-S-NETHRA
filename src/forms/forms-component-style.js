import styled from "styled-components";

export const FormComponentStyle = styled.div`
  width: 60%;
  margin: auto;
  padding: 20px;
  text-align: center;

  form {
    margin-top: 20px;
    background: #f8f8f8;
    padding: 25px;
    border-radius: 10px;
  }

  .row {
    display: flex;
    gap: 20px;
    margin-bottom: 15px;
  }

  .field {
    display: flex;
    flex-direction: column;
    width: 50%;
    text-align: left;
  }

  button {
    padding: 10px 20px;
    background: red;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 10px;
  }
`;



