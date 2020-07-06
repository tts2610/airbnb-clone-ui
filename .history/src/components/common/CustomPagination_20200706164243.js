import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";

export default function CustomPagination({ handlePageClick, maxPages, active }) {
  const [pages, setPages] = useState([]);
  useEffect(() => {
    for (let number = 1; number < maxPages; number++) {
      setPages([
        ...pages,
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>,
      ]);
    }
  }, [maxPages, pages, active]);
  return (
    <div>
      <Pagination onClick={handlePageClick}>
        <Pagination.First key={0} data-page={1} />
        {pages}
        <Pagination.Last key={4} data-page={3} />
      </Pagination>
    </div>
  );
}
