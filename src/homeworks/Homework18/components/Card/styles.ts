import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 100%;
  max-width: 520px;
  padding: 36px 40px;
  background: linear-gradient(135deg, #C2FFD8 0%, #c7da25 100%);
  border-radius: 20px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
  color: #fff;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const CardTitle = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #ffffff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;