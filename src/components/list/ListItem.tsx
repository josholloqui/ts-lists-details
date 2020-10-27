import * as React from 'react';
import { Link } from 'react-router-dom';


interface Props {
  characters: {char_id: number, name: string}[]
}

const ListItem: React.FunctionComponent<Props> = ({ characters }) => {
  return (
    <ul>
      {characters.map(character => (
        <li key={character.char_id}>
          <Link to={`/details/${character.char_id}`} >
            <h2>{character.name}</h2>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default ListItem;
