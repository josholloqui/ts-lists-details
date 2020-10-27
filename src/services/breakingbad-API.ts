export const getCharacters = () => {
  return fetch('https://breakingbadapi.com/api/characters')
    .then(res => res.json())
    .then(json => json.map((character: { char_id: number, name: string, img: string }) => ({
      char_id: character.char_id,
      name: character.name,
      img: character.img
    })));
}

export const getCharacter = (id: string) => {
  return fetch(`https://breakingbadapi.com/api/characters/${id}`)
    .then(res => res.json())
    .then(json => json.map((character: { char_id: number, name: string, img: string, status: string, portrayed: string }) => ({
      char_id: character.char_id,
      name: character.name,
      img: character.img,
      status: character.status,
      portrayed: character.portrayed
    })));
}
