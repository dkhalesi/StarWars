const axios = require("axios");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
} = require("graphql");

const CharacterType = new GraphQLObjectType({
  name: "Character",
  fields: {
    name: { type: GraphQLString },
    films: {
      type: new GraphQLList(GraphQLString),
      resolve: (parent) => {
        return parent.films.map((url) =>
          axios.get(url).then((res) => res.data.title)
        );
      },
    },
    vehicles: {
      type: new GraphQLList(GraphQLString),
      resolve: (parent) => {
        return parent.vehicles.map((url) =>
          axios.get(url).then((res) => res.data.model)
        );
      },
    },
  },
});

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    characters: {
      type: new GraphQLList(CharacterType),
      args: {
        character_name: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        return axios
          .get(`https://swapi.dev/api/people/?search=${args.character_name}`)
          .then((res) => res.data.results);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQueryType,
});
