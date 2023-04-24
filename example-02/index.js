const { gql, ApolloServer } = require('apollo-server');

const db = [
    {
        id: 1,
        name: 'Paulo',
        email: 'paulo@gmail.com',
        fixPhoneNumber: 77999887766,
        profile: 1,
    },
    {
        id: 2,
        name: 'Diego',
        email: 'diego@gmail.com',
        fixPhoneNumber: 77999554433,
        profile: 2,
    },
    {
        id: 3,
        name: 'Iago',
        email: 'iago@gmail.com',
        fixPhoneNumber: 77999776655,
        profile: 3,
    }
];

const profiles = [
    { id: 1, description: 'ADMIN' },
    { id: 2, description: 'NORMAL' },
    { id: 3, description: 'EMPLOYEER' },
]

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
    }
`;

const resolvers = {
    User: {
        phoneNumber(obj) {
            return obj.fixPhoneNumber;
        },
        profile(obj) {
            return profiles.find(profile => profile.id === obj.id);
        }
    },
    Query: {
        user(_, args) {
            return db.find(user => user.id === args.id);
        },
        profiles() {
            return profiles;
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen();