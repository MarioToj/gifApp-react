import type { Gif } from "../../mock-data/gisfs.mock"

interface Props {
    gifs: Gif[]
}

export const GifList = ({ gifs }: Props) => {
  return (
            <div className="gifs-container">
                {
                gifs.map((gif) => (
                    <div key={gif.id} className='gif-card'>
                        <img src={gif.url} alt={gif.title} />
                        <h3>{gif.title}</h3>
                        <p>
                            {gif.width}*{gif.height} (1.5mb)
                        </p>
                    </div>
                ))
                }
            </div>
  )
}
