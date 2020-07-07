import React from "react";
import StackGrid from "react-stack-grid";

export default function MyStackGrid({ exp }) {
  console.log(exp.images);
  return (
    <div>
      <StackGrid columnWidth={340} duration={0} gutterWidth={10}>
        {exp.images.map((e) => (
          <div>
            <img alt="" src={e.url} width="340" height="460"></img>
          </div>
        ))}

        {exp.images.length === 5 && (
          <div>
            <img alt="" src={exp.images[2].url} width="170" height="230"></img>
            <img alt="" src={exp.images[3].url} width="170" height="230"></img>
            <img alt="" src={exp.images[4].url} width="340" height="230"></img>
          </div>
        )}
      </StackGrid>
    </div>
  );
}
