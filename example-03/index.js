const { ApolloServer } = require('apollo-server');
const { typeDefs, resolvers } = require('./src/graphql');
const UserService = require('./src/graphql/modules/Contact/services/UserService');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({
        UserService,
    })
});

server.listen()
.then(() => console.log("Iniciado"))
.catch(e => console.log(e));