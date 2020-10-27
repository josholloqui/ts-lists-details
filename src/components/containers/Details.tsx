import * as React from 'react';
import CharacterDetails from '../details/CharacterDetails';
import { getCharacter } from '../../services/breakingbad-API';

interface IdProps {
  match: { params: { id: string } }
}

const Details: React.FunctionComponent<IdProps> = ({ match }) => {
  const [character, setCharacter] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const id: string = match.params.id;

  React.useEffect(() => {
    getCharacter(id)
      .then(character => setCharacter(character))
      .finally(() => setLoading(false));
  }, [id]);

  if(loading) return <h1 data-testid='loading'>Loading...</h1>

  return (
    <CharacterDetails
      character={character[0]}
    />
  )
}

export default Details;
