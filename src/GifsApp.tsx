import { GifList } from './gifs/components/GifList';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { useGifs } from './gifs/hooks/useGifs';


export function GifsApp() {
    
    const { gifs, handleSearch, onLabelClicked, previousSearches } = useGifs();
 
    return (
        <>
            {/* header */}
            <CustomHeader title='Buscador de Gifs' description='Descubre y comparte el gif perfecto'/>

            {/* search */}
            <SearchBar placelholder="Busca lo que quieras" onQuery={handleSearch} />

            {/* mostrar busquedas previas */}
            <PreviousSearches previousSearches={previousSearches} onLabelClicked={onLabelClicked}/>

            {/* GifList */}
            <GifList gifs={gifs} />
        </>
    )
}