import React, { useEffect } from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import { get } from "utils/helper";

//  props
/// schema - gql schema - required
/// renderItem - funciton -  which returns component for an element for list
/// params - object - params for graphql variables\ -
/// contentKey - string
export const FetchingList = ({ schema, renderItem, contentKey, params }) => {
  // const { loading, data, error } = useQuery(schema, {
  //   variables: params,
  //   awaitRefetchQueries: true,
  // });
  const [execute, { loading, data, error }] = useLazyQuery(schema, {
    variables: params,
    awaitRefetchQueries: true,
  });

  useEffect(() => {
    execute();
  }, []);

  if (loading) return "loader ....";
  if (error) console.log(error);
  return (
    <div className={"list-group"}>
      {get(data, contentKey, []).map(renderItem)}
    </div>
  );
};
