const { ApolloServer } = require('apollo-server');
const { typeDefs, resolvers } = require('./src/graphql');

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen()
.then(() => console.log("Iniciado"))
.catch(e => console.log(e));