import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const ARTISTS_SCHEMA = gql`
  {
    popular_artists {
      artists {
        id
        name
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
    followArtist(input: { artist_id: "anish-kapoor" }) {
      artist {
        id
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
  //   const { loading, data, error } = useQuery(ARTIST_SCHEMA, {
  //     variables: {
  //       id: "anish-kapoor",
  //     },
  //   });
  //   if (loading) return "loading ...";
  //   if (error) console.log(error, "error");

  //   console.log(data);

  const [setFollow, { loading, error, data }] = useMutation(mutation);

  console.log(data, error)

  return <div onClick={() => {
      setFollow()
  }}>safdfs</div>;
};

export default Test;
