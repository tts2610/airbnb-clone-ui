import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function AddExperiences() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "ADDNAVIGATOR", payload: { url: "" } });
  });
  return (
    <div>
      <h1>This is add new exp page</h1>
    </div>
  );
}
