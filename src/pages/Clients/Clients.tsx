import { Title, StyledLink, ClientsWrapper } from "./styles"

function Clients() {
    return (
      <ClientsWrapper>
        <Title> Clients pages</Title>
        <StyledLink to='/clients/facebook'>Facebook</StyledLink>
        <StyledLink to='/clients/instagram'>Instagram</StyledLink>
        <StyledLink to='/clients/telegram'>Telegram</StyledLink>
      </ClientsWrapper>
    )
  }
  
  export default Clients