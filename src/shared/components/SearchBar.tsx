import { useState } from "react";

interface Props {
  placelholder?: string;

  onQuery: (query: string) => void;
}


export const SearchBar = ({ placelholder = "Buscar", onQuery } : Props) => {

  const [query, setQuery] = useState('');

  const handleQuery = () => {
    onQuery(query);
    setQuery('')
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {

    if(event.key === 'Enter') {
      handleQuery()
    }
  }

  return (
    <div className='search-container'>
        <input
          onChange={(event) => setQuery(event.target.value)} 
          type="text" 
          placeholder={placelholder}
          value={query}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleQuery}>Buscar</button>
    </div>
  )
}
