import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { ARTIST_SCHEMA } from "api/query";
import { FOLLOW_MUTATION } from "api/mutations";
import { get } from "utils/helper";
import { Button } from "components";

const CurrentArtist = () => { 
  const { id } = useParams();
  const { loading, data, error } = useQuery(ARTIST_SCHEMA, {
    variables: { id },
    notifyOnNetworkStatusChange: true,
    awaitRefetchQueries: true,
  });
  const [setFollow] = useMutation(FOLLOW_MUTATION, {
    refetchQueries: [`Artist`],
  });
  if (loading) return "loading ...";
  if (error) console.log(error);
  const isFollowed = get(data, "artist.is_followed", false);

  return (
    <div>
      <h2>{get(data, "artist.name", "")}</h2>
      <p>{get(data, "artist.is_followed", "")}</p>
      <Button
        classes={isFollowed ? "btn-danger" : "btn-success"}
        onClick={(e) => {
          if (!data) return false;
          e.target.disabled = true;
          setFollow({
            variables: {
              id,
              status: isFollowed,
            },
          });
        }}
      >
        {isFollowed ? "Unfollow" : "Follow"}
      </Button>
    </div>
  );
};

export default CurrentArtist;
