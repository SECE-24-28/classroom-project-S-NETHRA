import styled from "styled-components";
export const GetInTouchStyle=styled.div`

  width: 100%;
  background: #ff4f63;
  padding: 80px 0;

  .container {
    max-width: 1200px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    padding: 0 40px;
  }

  .left h1 {
    font-size: 60px;
    font-weight: 700;
    color: white;
  }

  .subtext {
    color: white;
    font-size: 18px;
    margin-top: 10px;
    line-height: 1.6;
  }

  button {
    margin-top: 30px;
    padding: 12px 30px;
    font-size: 18px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    background: white;
    color: #ff4f63;
    font-weight: 600;
    transition: 0.3s;
  }

  button:hover {
    background: #ffe5e7;
  }

  .right img {
    width: 450px;
    height: auto;
  }

  /* RESPONSIVE */
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }

    .right img {
      width: 300px;
    }

    .left h1 {
      font-size: 40px;
    }
  }

`;