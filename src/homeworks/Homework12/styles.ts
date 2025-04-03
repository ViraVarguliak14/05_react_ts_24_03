
import styled from "@emotion/styled";
import backImage from '../../assets/background-image.jpg'

export const Homework12Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  flex: 1;
  padding: 60px;
  background: linear-gradient(135deg, #FFD700, #FFA500);
  min-height: 100vh;
  justify-content: center;
  background-image: url(${backImage});
  background-position: center;
  background-size: cover;
`;

export const FactWrapper = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 500px;
  min-height: 400px;
  padding: 30px;
  background: white;
  border-radius: 20px;
  font-size: 24px;
  color: rgb(241, 10, 222);
  font-weight: bold;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
`

export const Error = styled.div`
 font-size: 28px;
 color: red;
 font-weight: bold;
`