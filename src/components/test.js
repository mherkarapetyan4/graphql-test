import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const ARTISTS_SCHEMA = gql`
  {
    popular_artists(exclude_followed_artists: false) {
      artists {
        id
        name
        is_followed
      }
    }
  }
`;

const ARTIST_SCHEMA = gql`
  query Artist($id: String!) {
    artist(id: $id) {
      name
      bio
    }
  }
`;

const mutation = gql`
  mutation {
    followArtist(input: { artist_id: "anish-kapoor", unfollow: false }) {
      artist {
        id
        is_followed
      }
    }
  }
`;

// mutation {
//   followArtist(input: {artist_id: "anish-kapoor", clientMutationId: "123"}) {
//     artist {
//       id
//     }
//   }
// }

const Test = () => {
  const { loading, data, error } = useQuery(ARTISTS_SCHEMA);
  const [setFollow] = useMutation(mutation);

  if (loading) return "loading ...";
  if (error) console.log(error, "error");

    console.log(data);

  // console.log(data, error)

  return (
    <div
      onClick={() => {
        setFollow();
      }}
    >
      safdfs
    </div>
  );
};

export default Test;
