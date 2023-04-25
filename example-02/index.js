const { gql, ApolloServer } = require('apollo-server');

const db = {
    users: [
        {
            id: 1,
            name: 'Paulo',
            email: 'paulo@gmail.com',
            phoneNumber: 77999887766,
            profile: 1,
        },
        {
            id: 2,
            name: 'Diego',
            email: 'diego@gmail.com',
            phoneNumber: 77999554433,
            profile: 2,
        },
        {
            id: 3,
            name: 'Iago',
            email: 'iago@gmail.com',
            phoneNumber: 77999776655,
            profile: 3,
        },
    ],
    profiles: [
        { id: 1, description: 'ADMIN' },
        { id: 2, description: 'NORMAL' },
        { id: 3, description: 'EMPLOYEER' },
    ]
};

const typeDefs = gql`
    type User {
        id: ID
        name: String
        email: String
        phoneNumber: String
        profile: Profile
    }
    type Profile {
        id: Int
        description: String
    }
    type Query {
        user(id: Int): User,
        profiles: [Profile],
        users: [User]
    }
`;

const resolvers = {
    User: {
        profile: (obj) => db.profiles.find(profile => profile.id === obj.id),
    },
    Query: {
        user: (_, args) => db.users.find(user => user.id === args.id),
        profiles: () => db.profiles,
        users: () => db.users,
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen();