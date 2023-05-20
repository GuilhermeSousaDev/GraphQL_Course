import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache(),
    headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg0NTg3MDU3LCJleHAiOjE2ODQ2NzM0NTd9.6qsIO8MQ3lDUyV2eXg1yUu6HxNs_JTgmoHUiluJhYyA'
    }
});