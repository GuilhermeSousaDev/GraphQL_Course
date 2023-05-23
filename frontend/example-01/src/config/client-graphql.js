import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache(),
    headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg0ODQ2Mjg4LCJleHAiOjE2ODQ5MzI2ODh9.6CAv3FGfIgYUsVx3vhIQMh4ZLG9ZiID5n_R0awrcWm8'
    }
});