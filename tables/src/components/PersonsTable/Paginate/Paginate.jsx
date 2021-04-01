import React, { useState } from "react";
import PropTypes from "prop-types";

export const Paginate = ({
  currentPage,
  personPerPage,
  persons,
  changePageNum,
  incrementPageNum,
  decrementPageNum,
  handlePersonPerPage,
}) => {
  const [pageCount, setPageCount] = useState(1);
  const pages = Math.ceil(persons / personPerPage);
  const pagesArr = new Array(pages).fill(1);
  const arrForSelect = new Array(persons / 10).fill(1);

  const handlePageNumber = (e) => {
    changePageNum(+e.target.textContent.trim());
    setPageCount(+e.target.textContent.trim());
  };
  const handlePageChange = (e) => {
    if (e.target.textContent === "Previous") {
      decrementPageNum();
      setPageCount((prev) => prev - 1);
    } else if (e.target.textContent === "Next") {
      incrementPageNum();
      setPageCount((prev) => prev + 1);
    }
  };
  const handlePersonPerPageChange = (e) => {
    handlePersonPerPage(+e.target.value);
  };
  return (
    <div style={{ display: "flex" }}>
      <button
        className='btn btn-primary mx-3'
        onClick={handlePageChange}
        disabled={+pageCount <= 1}
      >
        Previous
      </button>
      {pagesArr.map((page, i) => (
        <a
          key={i}
          href='#'
          className={`btn mx-1 ${
            currentPage === i + 1 ? "btn-primary" : "btn-light"
          }`}
          value={i + 1}
          onClick={handlePageNumber}
        >
          {" "}
          {i + 1}{" "}
        </a>
      ))}
      <button
        className='btn btn-success mx-3'
        onClick={handlePageChange}
        disabled={+pageCount === pagesArr.length}
      >
        Next
      </button>
      <select
        className='form-select'
        onChange={handlePersonPerPageChange}
        defaultValue={10}
      >
        {arrForSelect.map((page, i) => (
          <option key={i} value={(i + 1) * 10}>
            {" "}
            {(i + 1) * 10}{" "}
          </option>
        ))}
      </select>
    </div>
  );
};

Paginate.prototype = {
  personPerPage: PropTypes.number.isRequired,
  persons: PropTypes.number.isRequired,
};

export default Paginate;
