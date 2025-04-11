import styled from '@emotion/styled'

export const MessageComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 30px 40px;
  border-radius: 16px;
  background: linear-gradient(135deg, #841dd8 0%, #FAFFD1 100%);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  max-width: 600px;
  margin: 40px auto;
`

export const DataItem = styled.div`
   font-size: 18px;
  font-weight: 500;
  color: #190225;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 12px 18px;
  border-radius: 12px;
  width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(4px);
  }
`;