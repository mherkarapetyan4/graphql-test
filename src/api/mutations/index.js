import { gql } from "apollo-boost";

export const FOLLOW_MUTATION = gql`
  mutation followMutation( $id: String!, $status: Boolean! ){
    followArtist(input: { artist_id: $id, unfollow: $status }) {
      artist {
        id
        is_followed
      }
    }
  }
`;
