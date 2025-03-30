/** Import des librairies */
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import "reflect-metadata";
import { dataSource } from "./DB/client";
import { buildSchema } from "type-graphql";

import CartoonResolvers from "./resolvers/cartoon.resolver";

/** Fonction auto appellée (évite la mise en constante) permettant de lancer le serveur */
(async () => {

  const schema = await buildSchema({
    resolvers: [CartoonResolvers],
  });

  const server = new ApolloServer({
    schema,
  });

  await dataSource.initialize();
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
})();