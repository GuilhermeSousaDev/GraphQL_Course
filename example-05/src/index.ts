import { createServer } from 'http';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import { PubSub } from 'graphql-subscriptions';
import resolvers from './resolvers';
import typeDefs from './typeDefs';

const httpServer = createServer();

const wsServer = new WebSocketServer({
    server: httpServer,
    path: '/graphql',
  });

const schema = makeExecutableSchema({ resolvers, typeDefs });
const serverCleanup = useServer({ schema }, wsServer);
const pub = new PubSub();

const server = new ApolloServer({
    schema,
    plugins: [
        ApolloServerPluginDrainHttpServer({ httpServer }),
        {
            async serverWillStart() {
                return {
                    async drainServer() {
                        await serverCleanup.dispose();
                    }
                }
            }
        }
    ]
});

httpServer.listen(3000, () => console.log("Iniciado"));

startStandaloneServer(server, {
    context: async () => ({
        pub,
    }),
}).then((url) => console.log(`Server is Running at ${url.url}`))

