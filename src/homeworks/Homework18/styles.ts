import styled from "@emotion/styled";

export const Homework18Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  width: 100%;

  padding: 40px;
  background: linear-gradient(135deg, #cde210 0%, #71ABF1 100%);
  border-radius: 18px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  color: #fff;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const MainCardTitle = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: #ffffff;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
`;