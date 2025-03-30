import styled from "@emotion/styled";

interface BoxInfoCardProps {
  vip?: boolean;
}
export const Container = styled.div`
  display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 40px;
    height: 100vh; 
    width: 223vh; 
    background: linear-gradient(135deg, #6e8efb, #a777e3);
`;
export const Card = styled.div<BoxInfoCardProps>`
  width: ${(props) => (props.vip ? "350px" : "300px")};
  height: ${(props) => (props.vip ? "250px" : "200px")};
  background-color: ${(props) => (props.vip ? "black" : "#D1D1B6")};
  color: ${(props) => (props.vip ? "#F7CD39" : "#292923")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  font-size: 20px;
`;
export const AvatarImg = styled.img`
  width: 50px;
`;
export const BoxInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
export const Title = styled.h2`
  margin-bottom: 10px;
`;
