import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";

export default function CustomPagination({ handlePageClick, maxPages, active }) {
  const [pages, setPages] = useState([]);
  useEffect(() => {
    let arr = [];
    console.log(active);
    for (let number = 1; number <= maxPages; number++) {
      arr.push(
        <Pagination.Item key={number} data-page={number} active={number === active}>
          {number}
        </Pagination.Item>
      );
    }
    console.log(arr);
    setPages(arr);
  }, [maxPages, active]);
  return (
    <div>
      <Pagination onClick={(e) => handlePageClick(e)}>
        <Pagination.First key={0} data-page={1} />
        {pages}
        <Pagination.Last key={4} data-page={3} />
      </Pagination>
    </div>
  );
}
