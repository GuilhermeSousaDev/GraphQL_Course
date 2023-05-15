const { ApolloServer } = require('apollo-server');
const graphql = require('./src/graphql');
const config = require('./src/config');

const server = new ApolloServer({
    ...graphql,
    ...config,
});

server.listen()
    .then(() => console.log("Iniciado"))
    .catch(e => console.log(e));