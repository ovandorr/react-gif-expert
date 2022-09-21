import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifts";



export const useFetchGifs = ( category ) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifts( category );
        setImages(newImages);
        setIsLoading(false);

    }
    
    //se ejecuta para cierto comportamiento
    useEffect( () => {
        getImages();
    }, []);  

    

        return {
            images,
            isLoading
        }
    }