import { ApolloClient, InMemoryCache } from '@apollo/client';


export const client:any = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

