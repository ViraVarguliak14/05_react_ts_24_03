import { useContext } from "react";
import { JokeContext } from "../../components/Layout/Layout";
import { ErrorTitle, HomeWrapper, Title } from "./styles";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";


function Home() {
const {error, isLoading, getJoke} = useContext(JokeContext)
const navigate = useNavigate();
const getJokeAndRedirect = ()=>{
  getJoke()
  navigate('/about')
}
  return (
    <HomeWrapper>
       <Title>Welcome to React Project</Title>
      <Button name='GET JOKE' onClick={getJokeAndRedirect}/>
      {isLoading? <Spinner/> : null}
      <ErrorTitle>Oops! Something broke{error}</ErrorTitle> 
    </HomeWrapper>
  )
}
export default Home;