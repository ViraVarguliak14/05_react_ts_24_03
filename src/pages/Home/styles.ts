import styled from '@emotion/styled';

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 80px 40px;
  background: linear-gradient(135deg, #e8ecbd 0%, #f9f6c1 100%);
  min-height: 100vh;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.div`
  font-size: 48px;
  font-weight: bold;
  color: #f54c51;
  text-align: center;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;