import {
  gql,
} from "@apollo/client";

export const GET_ALL_CARTOONS = gql`
  query GetCartoons {
    getCartoons {
      author
      description
      ft_diffusion
      genres
      id
      name
      nb_of_episodes
      nb_of_seasons
      personnages {
        short_description
        id
        name
        role
      }
      realisator
    }
  }
`;