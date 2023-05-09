const { ApolloServer } = require('apollo-server');
const { typeDefs, resolvers } = require('./src/graphql');
const GithubService = require('./src/services/GithubService');
const UserService = require('./src/services/UserService');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        githubService: GithubService,
        userService: UserService,
    }),
});

server.listen()
    .then(() => console.log("Iniciado"))
    .catch(e => console.log(e));