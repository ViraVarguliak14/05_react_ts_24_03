import { useContext } from "react";
import { HomeWrapper, Title } from "./styles";
import { JokeContext } from "../../components/Layout/Layout";
import Button from "../../components/Button/Button";

function Home() {
  const {error, isLoading, getJoke} = useContext(JokeContext)
  
  return (
    <HomeWrapper>
      <Title>Welcome to React Project</Title>
      <Button name='GET JOKE' onClick={getJoke}/>
    </HomeWrapper>
  )
}

export default Home;