import styled from "@emotion/styled";

interface ButtonStyledProps {
  danger?: boolean;
}

export const MainButton = styled.button<ButtonStyledProps>`
  margin-top: 10px;
  width: 100%;
  padding: 12px 20px;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background: ${({ danger }) => (danger ? '#DB110A' : '#360dee')};
  color: white;
  font-weight: bold;
  transition: 0.3s ease, transform 0.2s ease;

  &:hover {
    background: ${({ danger }) => (danger ? '#A30D08' : '#0f00dd')};
    transform: scale(1.1);
  }

  &:disabled {
    background: gray;
    cursor: not-allowed;
  }
  `;