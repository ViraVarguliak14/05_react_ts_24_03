import { useNavigate } from "react-router-dom";
import { FacebookWrapper, JobTitle, Image, InfoText, ButtonContainer } from "./styles";
import Button from "../../../../components/Button/Button";


function Facebook() {
  const navigate = useNavigate();
  
  const goToInstagram = () => {
    navigate("/clients/instagram");
  };
  return (
    <FacebookWrapper>
      <JobTitle>Facebook</JobTitle>
      <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg" />
      <ButtonContainer>
         <InfoText> For more detailed information, you can visit the Instagram page.</InfoText>
         <Button name="Go Instagram" onClick={goToInstagram}></Button>
         </ButtonContainer>

    </FacebookWrapper>

  )
}

export default Facebook;