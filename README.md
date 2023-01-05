# Star Wars Trivia
In a metaverse far far away... A Star Wars super fan has to prepare for their weekly trivia night. Here is the tool that will help you unlock supreme Star Wars knowledge that will send your opponents to another dimension!

# How it Works

## Run the project
Before running the project, make sure to install all dependencies with `npm i` at the root and `/client` directories. 

```
npm run dev
```
This will start both the GraphQL API server at `http://localhost:4000/graphql` and React application at `http://localhost:3000`. 

## How to use
You simply need to enter a Star Wars character's name and it will return to you a list of films that this character has appeared in, as well as a list of vehicle models this character has driven. 

# Tech Stack
## Client Side
- React.js 
- Apollo GraphQL Client 

## Server Side 
- [Star Wars API](https://swapi.dev/)
- Node.js
- Express.js GraphQL Server
