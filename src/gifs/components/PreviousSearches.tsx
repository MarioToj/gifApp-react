interface Props {
  previousSearches: string[],

  onLabelClicked: (term: string) => void;
}


export const PreviousSearches = ({ previousSearches, onLabelClicked }: Props) => {
  return (
            <div className="previous-searches">
            <h2>Busquedas previas</h2>
            
            <ul className="previous-searches-list">
                {
                  previousSearches.map((term) => (
                    <li onClick={() => onLabelClicked(term)} key={term}>{term}</li>
                  ))
                }
            </ul>
            </div>
  )
}
