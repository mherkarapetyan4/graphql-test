import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { ARTIST_SCHEMA } from "api/query";
import { FOLLOW_MUTATION } from "../../api/mutations";
import { get } from "utils/helper";

const CurrentArtist = () => {
  const { id } = useParams();
  const { loading, data, error } = useQuery(ARTIST_SCHEMA, {
    variables: { id },
  });
  const [setFollow] = useMutation(FOLLOW_MUTATION, {
    refetchQueries: [`Artist`],
  });

  if (loading) return "loading ...";
  if (error) console.log(error);
  const is_followed = get(data, "artist.is_followed", false);

  return (
    <div>
      <h2>{get(data, "artist.name", "")}</h2>
      <p>{get(data, "artist.is_followed", "")}</p>
      <button
        onClick={() => {
          if (!data) return false;
          setFollow({
            variables: {
              id,
              status: is_followed,
            },
          });
        }}
      >
        {is_followed ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default CurrentArtist;
