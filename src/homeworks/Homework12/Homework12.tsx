import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { FactWrapper, Homework12Container, Error } from "./styles"
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";


function Homework12() {
    const [fact, setFact] = useState<string | undefined>(undefined);
    const [error, setError] = useState<string | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(false);



    const FACT_URL: string = 'https://catfact.ninja/fact';

    const getFact = async () => {
        setError(undefined);

        try {
            setIsLoading(true);
            const response = await axios.get(FACT_URL)
            setFact(`${response.data.fact}`)
        } catch (error: any) {
            setError(error.message);
        } finally {
            console.log('Результат получен');
            setIsLoading(false);
        }
    }
 useEffect(() => { getFact() }, [])



    return (
        <Homework12Container>
            <Button name='GET MORE FACTS' onClick={getFact} disabled={isLoading}/>
            <FactWrapper>{isLoading? <Spinner/> : fact}</FactWrapper>
            <Error>{error}</Error>

        </Homework12Container>

    )
}

export default Homework12