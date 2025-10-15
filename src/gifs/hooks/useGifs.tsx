import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { GetGifsByQuery } from "../actions/get-gifs-by-query.action";



export const useGifs = () => {

    const [previousSearches, setpreviousSearches] = useState<string[]>([]);

    const [gifs, setGifs] = useState<Gif[]>([]);

    const gifsCache = useRef<Record<string, Gif[]>>({});

    const onLabelClicked = async (term: string) => {

        if(gifsCache.current[term]) {
            setGifs(gifsCache.current[term])
            return;
        };
        //Por si no existen el termino guardado en el record cache
        const gifs = await GetGifsByQuery(term);
        setGifs(gifs)
    }

    const handleSearch = async (query: string) => {
        // 1. Validar que el query no esté vacío  
        // 2. Convertir el query a minúsculas y eliminar espacios en blanco
        let procesedQuery = query.toLocaleLowerCase().replace(/\s+/g, "");
        if(procesedQuery === '') return;
        
        // 3. Evitar búsquedas duplicadas verificando si el término ya existe en previousTerms ( si existe, no hacer nada )
        let duplicated = previousSearches.find((q) => q === query);
        if(duplicated) return;

        // 4. Actualizar previousTerms agregando el nuevo término al inicio y limitando a 8 elementos máximo
        //  es decir no puede ser un arreglo de más de 8.
        // if (previousSearches.length >= 8) return;
        setpreviousSearches((prev) => [query, ...prev].slice(0,8));

        let apiGifs = await GetGifsByQuery(query); 

        setGifs(apiGifs)

        gifsCache.current[query] = apiGifs;
    }

  return {
    // Props
    gifs,
    // Methods
    previousSearches,
    onLabelClicked,
    handleSearch,
  }
}
