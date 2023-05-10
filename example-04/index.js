const { ApolloServer } = require('apollo-server');
const { typeDefs, resolvers } = require('./src/graphql');
const GithubService = require('./src/services/GithubService');
const UserService = require('./src/services/UserService');
const TaskService = require('./src/services/TasksService');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        githubService: GithubService,
        userService: UserService,
        taskService: TaskService,
    }),
});

server.listen()
    .then(() => console.log("Iniciado"))
    .catch(e => console.log(e));