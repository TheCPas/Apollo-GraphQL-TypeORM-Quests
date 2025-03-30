/** Import des librairies */
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import CartoonResolvers from "./resolvers/cartoon.resolver";
import { Genre, GenreInput } from "./schemas/genre.schema";
import { Personnage, PersonnageInput } from "./schemas/personnage.schema";
import { Cartoon, CartoonInput } from "./schemas/cartoon.schema";
import "reflect-metadata";
import { dataSource } from "./DB/client";

const CartoonResolverss = new CartoonResolvers();

const typeDefs = `#graphql
  # This "Cartoon" type defines the queryable fields for every cartoon in our data source.
  type Cartoon ${Cartoon}
  type Personnage ${Personnage}
  type Genre ${Genre}
  type Mutation {
    createCartoon(cartoon: CartoonInput): ID,
    deleteCartoon(id: ID!): Boolean
  }

  input PersonnageInput ${PersonnageInput}
  input CartoonInput ${CartoonInput}
  input GenreInput ${GenreInput}

  # The "Query" type is special: it lists all of the available queries
  type Query {
    getCartoons: [Cartoon],
    getOneCartoonById(id: ID!): Cartoon,
  }
`;

// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    getCartoons: CartoonResolverss.getCartoons,
    getOneCartoonById: CartoonResolverss.getOneCartoonById,
  },
  Mutation: {
    createCartoon: CartoonResolverss.createCartoon,
    deleteCartoon: CartoonResolverss.deleteCartoon,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

/** Fonction auto appellée (évite la mise en constante) permettant de lancer le serveur */
(async () => {
  await dataSource.initialize();
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
})();