import styled from "@emotion/styled";

interface ButtonStyledProps {
  danger?: boolean;
}

export const MainButton = styled.button<ButtonStyledProps>`

    padding: 12px 25px;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  background-color: #1410e0;

  margin-top: 10px;
  padding: 12px 20px;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background: ${({ danger }) => (danger ? '#DB110A' : '#4102d4')};

  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease,  0.3s ease;

  &:hover {

    background-color: #ff4141;
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(255, 88, 88, 0.4);

    background: ${({ danger }) => (danger ? '#A30D08' : '#4378eb')};
    transform: scale(1.1);

  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;