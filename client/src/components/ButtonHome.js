import { ReactComponent as StarWars } from "../assets/launch.svg";
import "../styles/ButtonHome.css";
export const ButtonHome = (props) => {
  const goHome = () => {
    props.setCharacterName("");
  };

  return (
    <button className="home" onClick={goHome}>
      <StarWars />
    </button>
  );
};
