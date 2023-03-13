import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;
const books = [
    {
        title: 'hello_world',
        author: 'aahad',
    },
    {
        title: 'hello_word1',
        author: 'aahad',
    },
];
const resolvers = {
    Query: {
        books: () => books,
    },
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, { listen: { port: 4000 },
});
console.log(`Server ready at: ${url}`);
