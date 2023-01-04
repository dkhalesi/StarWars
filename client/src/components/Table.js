import { useQuery, gql } from "@apollo/client";

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

  return (
    <div>
      {Object.keys(data.character).map((key) => (
        <div key={key}>
          <span>{key}: </span>
          <span>{data.character[key]}</span>
        </div>
      ))}
    </div>
  );
};
