import styled from "@emotion/styled";

interface InputComponentStyledProps {
  isSearch?: boolean
}

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const InputComponent = styled.input<InputComponentStyledProps>`
 padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;
  margin-bottom: 8px;
  width: 100%;
  box-sizing: border-box;
  
  &:focus {
    border-color: #57a7f1;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 8px;
  color: #333;
`;

export const ErrorMessage = styled.div`
 height: 20px;
 font-size: 18px;
 color: red;
 margin-top: 4px;
`;