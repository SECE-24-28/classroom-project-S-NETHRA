
import styled from "styled-components";

export const CapsuleContainer = styled.div`
  background-color: red;
 border-radius: 50px;
  padding: 20px 30px;
  text-align: center;
  max-width: 100%;
 margin: 0;
  color: white;
//display:flex;
  justify-content:centre;
  @media (max-width: 768px) {
    max-width: 90%;
    padding: 15px 20px;
  }
`;

export const CapsuleText = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const CapsuleSubText = styled.p`
  font-size: 16px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;