import { useEffect, useState } from "react";
import { getImages } from "../services/catsImages";

const CAT_IMAGE_URL = 'https://cataas.com';

export const useCatImage = ({ fact }) => {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    if(!fact) return
    const firstThreeWords = fact.split(' ', 3).join(' ');
    getImages(firstThreeWords).then(setImageUrl);
  }, [fact])

  return {
    imageUrl: `${CAT_IMAGE_URL}/${imageUrl}`
  }
}