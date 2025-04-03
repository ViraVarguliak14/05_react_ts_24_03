import axios from "axios"
import Button from "../../components/Button/Button";
import { ImageWrapper, Lesson13Container,Error, ImageContainer } from "./styles";
import { ChangeEvent, useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import Spinner from "../../components/Spinner/Spinner";



function Lesson13(){
    const[imageUrl, setImageUrl]=useState<string|undefined>(undefined);
    const[err, setError]=useState<string|undefined>(undefined);
    const[isLoading, setIsLoading]=useState<boolean>(false);
    const[breed, setBreed]=useState<string>(" ");


    const getImage = async() => {
        setError(undefined);
        setIsLoading(true)


        try{
        setIsLoading(true);
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        setImageUrl(response.data.message);

    }catch(err: any){
        setError(err.message)

    }finally{
        setIsLoading(false)

    };
    }
    useEffect(() => {
         getImage()}, []);

    const changeBred = (event:ChangeEvent<HTMLInputElement>) => {
        setBreed(event.target.value);
    };
    const handleSearch = () => {
        getImage();
    };
    const handleDeleteAll = () => {
        getImage();
    };
    
    return (
        <Lesson13Container>
            <Input type="text" placeholder={"Введите породу"} value={breed} onChange={changeBred} name={""}
             onKeyDown={(e) => e.key === "Enter" && handleSearch()}/>
            <Button name="GET MORE IMAGES" onClick={getImage} disabled={isLoading}/>
            <Button name="DELETE ALL DATA" onClick={handleDeleteAll} disabled={isLoading} />
            {isLoading && <Spinner/> } 
            <ImageContainer>
                <ImageWrapper src={imageUrl} alt='Dog' />
              
            </ImageContainer>
            <Error>{err}</Error>

        </Lesson13Container> 
    )
}
export default Lesson13