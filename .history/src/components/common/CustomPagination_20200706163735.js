import React from "react";
import { Pagination } from "react-bootstrap";

export default function CustomPagination() {
  return (
    <div>
      <Pagination onClick={handlePageClick}>
        <Pagination.First key={0} data-page={1} />
        <Pagination.Item key={1} data-page={1}>
          {1}
        </Pagination.Item>
        <Pagination.Item key={2} data-page={2}>
          {2}
        </Pagination.Item>
        <Pagination.Item key={3} data-page={3}>
          {3}
        </Pagination.Item>
        <Pagination.Last key={4} data-page={3} />
      </Pagination>
    </div>
  );
}
