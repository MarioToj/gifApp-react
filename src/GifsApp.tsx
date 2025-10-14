import { useState } from 'react';
import { GifList } from './gifs/components/GifList';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { mockGifs } from './mock-data/gisfs.mock';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';


export function GifsApp() {

    const [previousSearches, setpreviousSearches] = useState<string[]>([])

    const onLabelClicked = (term: string) => {
        console.log(term);
    }

    const handleSearch = (query: string) => {
        // 1. Validar que el query no esté vacío  
        // 2. Convertir el query a minúsculas y eliminar espacios en blanco
        let procesedQuery = query.toLocaleLowerCase().replace(/\s+/g, "");
        if(procesedQuery === '') return;
        
        // 3. Evitar búsquedas duplicadas verificando si el término ya existe en previousTerms ( si existe, no hacer nada )
        let duplicated = previousSearches.find((q) => q === procesedQuery);
        if(duplicated) return;

        // 4. Actualizar previousTerms agregando el nuevo término al inicio y limitando a 8 elementos máximo
        //  es decir no puede ser un arreglo de más de 8.
        if (previousSearches.length >= 8) return;
        setpreviousSearches((prev) => [query, ...prev]);

    }

    return (
        <>
            {/* header */}
            <CustomHeader title='Buscador de Gifs' description='Descubre y comparte el gif perfecto'/>

            {/* search */}
            <SearchBar placelholder="Busca lo que quieras" onQuery={handleSearch} />

            {/* mostrar busquedas previas */}

            <PreviousSearches previousSearches={previousSearches} onLabelClicked={onLabelClicked}/>

            {/* GifList */}
            <GifList gifs={mockGifs} />
        </>
    )
}