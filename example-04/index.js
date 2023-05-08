const { ApolloServer } = require('apollo-server');
const { typeDefs, resolvers } = require('./src/graphql');
const GithubService = require('./src/services/GithubService');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        githubService: GithubService,
    }),
});

server.listen()
    .then(() => console.log("Iniciado"))
    .catch(e => console.log(e));