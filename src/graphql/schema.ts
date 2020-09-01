import {gql} from 'apollo-server-express'

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type User{
    name: String
    email: String
    password: String
  }

  type Query {
    users: [User]
  }
`;

export default typeDefs