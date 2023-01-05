import { useQuery, gql } from "@apollo/client";
import loadingGif from "../assets/loading.gif";
import "../styles/Table.css";

const GET_INFO = gql`
  query GetInfo($character_name: String!) {
    characters(character_name: $character_name) {
      name
      films
      vehicles
    }
  }
`;

export const Table = (props) => {
  const { loading, error, data } = useQuery(GET_INFO, {
    variables: { character_name: props.characterName },
  });

  if (loading) {
    return <img src={loadingGif} alt="loading..." className="loadingGif" />;
  }

  if (error) {
    return <p>Error : {error.message}</p>;
  }

  return (
    <>
      {data.characters.length === 0 ? (
        <p>Character does not exist. Please try again!</p>
      ) : (
        data.characters.map((character) => (
          <div className="table-container">
            <h2 className="table-title">{character.name}</h2>
            <div className="table-row">
              <table>
                <thead>
                  <tr>
                    <th>Films</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({
                    length: character.films.length,
                  }).map((_, index) => (
                    <tr key={index}>
                      <td>{character.films[index]}</td>
                    </tr>
                  ))}
                  {character.films.length === 0 ? (
                    <tr key={0}>
                      <td>N/A</td>
                    </tr>
                  ) : null}
                </tbody>
              </table>
              <table>
                <thead>
                  <tr>
                    <th>Vehicle Models</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({
                    length: character.vehicles.length,
                  }).map((_, index) => (
                    <tr key={index}>
                      <td>{character.vehicles[index]}</td>
                    </tr>
                  ))}
                  {character.vehicles.length === 0 ? (
                    <tr key={0}>
                      <td>N/A</td>
                    </tr>
                  ) : null}
                </tbody>
              </table>
            </div>
          </div>
        ))
      )}
    </>
  );
};
