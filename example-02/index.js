const { ApolloServer } = require('apollo-server');
const { typeDefs, resolvers } = require('./src/graphql');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    formatError: (err) => {
        if (err.message.startsWith('This User Already Exists')) {
            return err.message;
        } 

        return err;
    },
});

server.listen();