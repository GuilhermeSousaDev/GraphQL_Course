import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache(),
    headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg0NzA4NzIwLCJleHAiOjE2ODQ3OTUxMjB9.YmAHO7Os0c46-oZIvQV3mOJQ6IGLV3ehT7AbacR2uZM'
    }
});