import styled from "@emotion/styled";

export const BlogManagementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 500px;
  padding: 25px;
  background: linear-gradient(135deg, #f36dd2 0%, #71ABF1 100%);
  border-radius: 18px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  color: #fff;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const BlogManagementTitle = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: #ffffff;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
`;