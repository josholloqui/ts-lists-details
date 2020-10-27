import * as React from 'react';
import ListItem from '../list/ListItem'
import { getCharacters } from '../../services/breakingbad-API';
 
const Home: React.FunctionComponent = () => {
  const [characters, setCharacters] = React.useState([]);

  React.useEffect(() => {
    getCharacters()
      .then(characters => setCharacters(characters));
  }, []);

  return (
    <ListItem
      characters={characters}
    />
  );
}
 
export default Home;
