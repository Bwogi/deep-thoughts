const express = require('express');
// import ApolloServer
const { ApolloServer } = require('apollo-server-express')

// import our typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas')

const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

const startServer = async () => {
  // lets create a new apollo server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
  });

  // start the apollo server
  await server.start();

  // lets integrate the apollo server with express as a middleware
  server.applyMiddleware({ app })

  // log where we can go test our GQL API server
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

// initialise the Apollo Server
startServer();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
