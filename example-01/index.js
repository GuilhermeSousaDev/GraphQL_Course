const { gql, ApolloServer } = require('apollo-server');

const typeDefs = gql`
    type Query {
        age: Int,
        money: Float,
        name: String,
        active: Boolean,
        id: ID,
    }
`;

const resolvers = {
    Query: {
        age() {
            return 18;
        },
        money() {
            return 1580.90;
        },
        name() {
            return 'Walter';
        },
        active() {
            return true;
        },
        id() {
            return 12345235;
        },
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen();