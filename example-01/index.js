const { gql, ApolloServer } = require('apollo-server');

const products = [
    {
        id: 1,
        name: 'Notebook',
        price: 5000.00,
    },
    {
        id: 2,
        name: 'TV',
        price: 10000.00,
    },
    {
        id: 3,
        name: 'Tablet',
        price: 3000.00,
    }
]

const users = [
    {
        id: 1,
        name: 'Bruno',
        money: 1500.00,
        active: true,
        age: 18,
    },
    {
        id: 2,
        name: 'Cleber',
        money: 2000.00,
        active: true,
        age: 21,
    }
]

const typeDefs = gql`
    type Product {
        id: ID,
        name: String,
        price: Float,
    }
    type User {
        age: Int,
        money: Float,
        name: String,
        active: Boolean,
        id: ID,
    }
    type Query {
        users: [User],
        products: [Product],
        user(id: Int, name: String): User,
        product(id: Int, name: String): Product,
    }
`;

const resolvers = {
    Query: {
        users() {
            return users;
        },
        products() {
            return products;
        },
        user(_, { id, name }) {
            if (id) {
                return users.find(user => user.id === id);
            }
            
            return users.find(user => user.name === name);
        },
        product(_, { id, name }) {
            if (id) {
                return products.find(product => product.id === id);
            }

            return products.find(product => product.name === name);
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen();