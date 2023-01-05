import { useQuery, gql } from "@apollo/client";
import "../styles/Table.css";

const GET_INFO = gql`
  query GetInfo($character_name: String!) {
    character(character_name: $character_name) {
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const rowCount = Math.max(
    data.character.films.length,
    data.character.vehicles.length
  );

  return (
    <div className="table-container">
      <h2 className="table-title">{data.character.name}</h2>
      <table>
        <thead>
          <tr>
            <th>Films</th>
            <th>Vehicle Models</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rowCount }).map((_, index) => (
            <tr key={index}>
              <td>
                {index < data.character.films.length
                  ? data.character.films[index]
                  : ""}
              </td>
              <td>
                {index < data.character.vehicles.length
                  ? data.character.vehicles[index]
                  : ""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
