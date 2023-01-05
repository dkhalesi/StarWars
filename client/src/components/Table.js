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
            <table>
              <thead>
                <tr>
                  <th>Films</th>
                  <th>Vehicle Models</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({
                  length: Math.max(
                    character.films.length,
                    character.vehicles.length
                  ),
                }).map((_, index) => (
                  <tr key={index}>
                    <td>
                      {index < character.films.length
                        ? character.films[index]
                        : ""}
                    </td>
                    <td>
                      {index < character.vehicles.length
                        ? character.vehicles[index]
                        : ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      )}
    </>
  );
};
