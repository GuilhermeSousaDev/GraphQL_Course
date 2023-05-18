import { gql } from "apollo-server";

export default gql`
    type User {
        id: String
        name: String
        email: String
    }

    type Query {
        users: [User]
    }
`;