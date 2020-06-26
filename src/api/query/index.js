import { gql } from "apollo-boost";

export const ARTISTS_SCHEMA = gql`
  query GetArtists($exclude_followed_artists: Boolean!) {
    popular_artists(exclude_followed_artists: $exclude_followed_artists) {
      artists {
        id
        name
        is_followed
      }
    }
  }
`;

export const ARTIST_SCHEMA = gql`
  query Artist($id: String!) {
    artist(id: $id) {
      name
      bio
      is_followed
    }
  }
`;
