import {
  gql,
} from "@apollo/client";

export const GET_ALL_CARTOONS = gql`
  query GetCartoons {
    getCartoons {
      author
      description
      id
    }
  }
`;