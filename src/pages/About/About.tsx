import { useContext } from "react";
import { JokeContext } from "../../components/Layout/Layout";
import { AboutWrapper, Title } from "./styles";

function About() {
  const { joke } = useContext(JokeContext)
  return (
    <AboutWrapper>
       <Title>{joke}</Title>
    </AboutWrapper>
  )
}

export default About;