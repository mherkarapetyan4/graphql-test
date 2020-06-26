import React from "react";
import { FetchingList, ListItem } from "../../components";
import { gql } from "apollo-boost";
import { Link } from "react-router-dom";
const ARTISTS_SCHEMA = gql`
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
const ArtistsPage = () => {
  return (
    <div>
      <FetchingList
        schema={ARTISTS_SCHEMA}
        renderItem={(item) => (
          <ListItem key={item.id}>
            <Link to={`/${item.id}`}>{item.name}</Link>
          </ListItem>
        )}
        contentKey={"popular_artists.artists"}
        params={{ exclude_followed_artists: true }}
      />
    </div>
  );
};

export default ArtistsPage;
