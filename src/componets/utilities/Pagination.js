import React, { useState } from "react";
import ReactPaginate from "react-paginate";

function Items({ currentItems, columns, Table }) {
  return (
    <>
      <Table data={currentItems} columns={columns} />
    </>
  );
}

function Pagination({ data, itemsPerPage, columns, Table }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0); // Simulate fetching items from another resources. // (This could be items from props; or items loaded in a local state // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage); // Invoke when user click to request another page.

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length; // console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items
        currentItems={currentItems}
        columns={columns}
        Table={Table}
      />
      <div className="mt-5 d-flex justify-content-center">
        <ReactPaginate
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
}

export default Pagination;
