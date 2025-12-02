import styled from "styled-components";
export const HelloWorldStyle = styled.div`
  .parent {
    display: flex;
    flex-direction: row;
    background-color: green;
    //align-items: flex-start;
    //align-items: center;
    //align-items: flex-start;
    //justify-content: flex-end;
    align-items: flex-end;
    //justify-content: space-evenly;
    //justify-content: space-between;
  // justify-content: space-around;
    gap: 20px;
    height: 100vh;
  }
  .square__child {
    width: 50px;
    height: 50px;
    background-color: yellow;
  }
`;