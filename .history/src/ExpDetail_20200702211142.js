import React from "react";

export default function ExpDetail() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}
