import styled from '@emotion/styled';

export const DesignerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 60px 24px;
  background: linear-gradient(135deg, #c2e9fb 0%, #a1c4fd 100%);
  min-height: 100vh;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
`;

export const JobTitle = styled.div`
  font-size: 42px;
  font-weight: 700;
  color: #1c3d5a;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.4);
`;

export const Image = styled.img`
  width: 360px;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;