import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: import.meta.env.VITE_APOLLO_SERVER, // Pense à mettre en place un fichier d'environnement, (ajout au .gitignore) avec l'url de ton serveur Graph
  cache: new InMemoryCache(), // Implémentation classique du cache coté client (en mémoire: le cache est perdu en cas de rafraichissement)
});

export default client;