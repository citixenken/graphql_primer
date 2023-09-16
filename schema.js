export const typeDefs = `#graphql
  type Game {
      id: ID!
      title: String!
      platform: [String!]!

      reviews: [Review!]
  }

  type Review {
    id: ID!
    rating: Int!
    content: String!

    author: Author!
    game: Game!
  }

  type Author {
    id: ID!
    name: String!
    verified: Boolean!

    reviews: [Review!]
  }

  # special type => entry point to graph
  type Query {
    games: [Game]
    reviews: [Review]
    authors: [Author]

    game(id: ID!): Game
    review(id: ID!): Review
    author(id: ID!): Author
  }

  type Mutation {
    addGame(game: AddGameInput!): Game
    updateGame(id: ID!, edits: EditGameInput!): Game
    deleteGame(id: ID!): [Game]
  }

  input AddGameInput {
    title: String!
    platform: [String!]!
  }
  input EditGameInput {
    title: String
    platform: [String!]
  }
`;
