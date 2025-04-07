

import styled from "@emotion/styled";

export const Lesson13Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  flex: 1;
  padding: 50px;
  background: linear-gradient(135deg, #807ea1, #fad0c4);
  min-height: 100vh;
  justify-content: center;
  `
  export const ButtonContainer = styled.div`
 display: flex;
 gap: 20px;
 width: 500px;
`
export const ImageWrapper = styled.img`
 width: 400px;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  margin: 0 auto
`;
export const ImageContainer = styled.div`
max-height: 700px; 
  overflow-y: auto; 
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; 
  gap: 10px;
  padding-right: 20px;
`;
export const Image = styled.img`
width: 400px;
`
export const Error = styled.div`
  font-size: 20px;
  color: red;
  font-weight: bold;
  margin-top: 10px;
`;