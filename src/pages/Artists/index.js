import React from "react";
import { FetchingList, ListItem } from "components";
import { Link } from "react-router-dom";
import { ARTISTS_SCHEMA } from "api/query";

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
        params={{ exclude_followed_artists: false }}
      />
    </div>
  );
};

export default ArtistsPage;
