import { useState, useEffect } from "react";
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {

   const [images, setImage] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   const getImages = async () => {
      const newImage = await getGifs(category);
      setImage(newImage);
      setIsLoading(false);
   }

   useEffect(() => {
      getImages();
   }, []);

   return{
      images,
      isLoading
   }
}
