import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";

export default function CustomPagination({ handlePageClick, maxPages, active }) {
  const [pages, setPages] = useState([]);
  useEffect(() => {
    let arr = [];
    for (let number = 1; number <= maxPages; number++) {
      arr.push(
        <Pagination.Item key={number} data-page={number} active={number === parseInt(active)}>
          {number}
        </Pagination.Item>
      );
    }
    setPages(arr);
  }, [maxPages, active]);
  return (
    <div>
      <Pagination style={{ justifyContent: "center" }} onClick={(e) => handlePageClick(e)}>
        <Pagination.First key={1} data-page={1} />
        {pages}
        <Pagination.Last key={maxPages} data-page={3} />
      </Pagination>
    </div>
  );
}
