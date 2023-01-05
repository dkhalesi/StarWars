import "../styles/Title.css";

export const Title = (props) => {
  const goHome = () => {
    props.setCharacterName("");
  };

  return (
    <button className="home" onClick={goHome}>
      <h1 className="texth1">Star Wars Trivia</h1>
    </button>
  );
};
