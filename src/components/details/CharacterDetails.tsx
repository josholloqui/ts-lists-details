import * as React from 'react';

interface DetailProps {
  character: { name: string, birthday: string, img: string, status: string }
}

const CharacterDetails: React.FunctionComponent<DetailProps> = ({ character }) => { 
  return (
  <>
    <h1>{character.name}</h1>
    <p>{character.status}</p>
    <h3>Birthday</h3>
    <p>{character.birthday}</p>
    <img src={character.img} alt={character.name}/>
  </>
  )
}

export default CharacterDetails;
