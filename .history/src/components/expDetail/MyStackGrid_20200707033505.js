import React from "react";
import StackGrid from "react-stack-grid";
import { Image } from "react-bootstrap";

export default function MyStackGrid({ exp }) {
  return (
    <div>
      <StackGrid columnWidth={340} duration={0} gutterWidth={10}>
        {exp.images.map((e, indx) => (
          <div key={indx}>
            <Image fluid alt="" src={e.url} width="340" height="460"></Image>
          </div>
        ))}

        {/* {exp.images.length === 5 && (
          <div>
            <img alt="" src={exp.images[2].url} width="170" height="230"></img>
            <img alt="" src={exp.images[3].url} width="170" height="230"></img>
            <img alt="" src={exp.images[4].url} width="340" height="230"></img>
          </div>
        )} */}
      </StackGrid>
    </div>
  );
}
