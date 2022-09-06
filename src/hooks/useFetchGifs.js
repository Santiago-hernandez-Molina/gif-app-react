import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {
    const [isLoading, setIsLoading] = useState(true)
    const [images, setImages] = useState([])

    const getImages = async () => {
        const newIamges = await getGifs(category);
        setImages(newIamges);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading: isLoading
    }
}
