import { Character } from "../type/CharacterTypes";
import CardView from "./CardView";

const CharacterList = ({ characters }: { characters: Character[] }) => {
  return (
    <>
      {characters.map((character: Character) => (
        <CardView {...character} />
      ))}
    </>
  );
};

export default CharacterList;
