import Users from '../exampleData'

// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
      users: () => Users,
    },
};

export default resolvers
  