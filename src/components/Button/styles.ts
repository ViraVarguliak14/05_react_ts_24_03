import styled from "@emotion/styled";

interface ButtonStyledProps {
  danger?: boolean;
}

export const MainButton = styled.button<ButtonStyledProps>`
  margin-top: 10px;
  padding: 12px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ danger }) => (danger ? '#DB110A' : '#F5F30A')}; 
  color: black;
  font-weight: bold;
`;