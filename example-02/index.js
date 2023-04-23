const { gql, ApolloServer } = require('apollo-server');

const db = [
    {
        id: 1,
        name: 'Paulo',
        email: 'paulo@gmail.com',
        fixPhoneNumber: 77999887766,
    },
    {
        id: 2,
        name: 'Diego',
        email: 'diego@gmail.com',
        fixPhoneNumber: 77999554433,
    },
    {
        id: 1,
        name: 'Iago',
        email: 'iago@gmail.com',
        fixPhoneNumber: 77999776655,
    }
];

const typeDefs = gql`
    type User {
        id: ID
        name: String
        email: String
        phoneNumber: String
    }
    type Query {
        user: User,
    }
`;

const resolvers = {
    User: {
        phoneNumber(obj) {
            return obj.fixPhoneNumber;
        }
    },
    Query: {
        user() {
            return db[0];
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen();