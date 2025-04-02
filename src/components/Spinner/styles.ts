import styled from '@emotion/styled';

export const SpinnerComponent = styled.div`
   display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 60px;
  height: 60px;

  &::before, &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 4px solid transparent;
  }

  &::before {
    border-top-color: rgb(32, 224, 7);
    animation: spinRight 1s linear infinite;
  }

  &::after {
    border-bottom-color: rgb(138, 16, 238);
    animation: spinLeft 1.5s linear infinite;
  }

  @keyframes spinRight {
    100% { transform: rotate(360deg); }
  }

  @keyframes spinLeft {
    100% { transform: rotate(-360deg); }
  }
`;