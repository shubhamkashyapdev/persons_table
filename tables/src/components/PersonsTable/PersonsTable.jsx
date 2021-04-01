import React, { useEffect, useState } from "react";

import "./PersonsTable.css";
import { Data } from "../../utils/faker-data";
// components //
import Person from "./Person/Person";
import Paginate from "./Paginate/Paginate";
import Filter from "./Filter/Filter";

export const PersonsTable = () => {
  useEffect(() => {
    setPersons(Data);
    // eslint-disable-next-line
  }, []);

  const [persons, setPersons] = useState([]);
  const [filterBy, setFilterBy] = useState("");
  const [sort, setSort] = useState({
    sortBy: "id",
    sortOrder: "asc",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [personPerPage, setPersonPerPage] = useState(10);

  const paginate = () => {
    const startIndex = (currentPage - 1) * personPerPage;
    const endIndex = currentPage * personPerPage;
    const newPersons = persons.slice(startIndex, endIndex);
    return newPersons;
  };
  console.log(paginate());
  const paginatedPersons = paginate()
    .sort((a, b) => {
      if (sort.sortBy === "id") {
        a = a.id;
        b = b.id;
        return sort.sortOrder === "asc" ? (a > b ? 1 : -1) : a > b ? -1 : 1;
      } else {
        a = a[sort.sortBy];
        b = b[sort.sortBy];
        return sort.sortOrder === "asc" ? (a > b ? 1 : -1) : a > b ? -1 : 1;
      }
    })
    .filter((person) => {
      const regEx = new RegExp(`${filterBy.toLowerCase()}`);
      return (
        person.id.toString().match(regEx) ||
        person["first_name"].toLowerCase().match(regEx) ||
        person["last_name"].toLowerCase().match(regEx) ||
        person.email.toLowerCase().match(regEx) ||
        person.birthday.match(regEx)
      );
    });

  const filterPersons = (e) => {
    setFilterBy(e.target.value);
  };

  const handleSort = (column) => {
    setSort({
      ...sort,
      sortBy: column,
      sortOrder: sort.sortOrder === "asc" ? "dsc" : "asc",
    });
  };

  const getIcon = (column) => (
    <i
      className={`fas ${
        sort.sortBy === column && sort.sortOrder === "dsc"
          ? "fa-sort-down"
          : "fa-sort-up"
      }  icon-group mx-2`}
    ></i>
  );

  // handler functions //
  const changePageNumber = (number) => {
    setCurrentPage(number);
  };
  const incrementPageNumber = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const decrementPageNumber = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const handlePageCount = (number) => {
    setPersonPerPage(number);
  };

  return (
    <div>
      <h1 className='text-white text-center mb-4'>Fake Person Data</h1>
      <hr />
      <Filter handleChange={filterPersons} />
      <hr />
      <div className='table-container'>
        <table className='table table-dark'>
          <thead>
            <tr>
              <th scope='col' onClick={() => handleSort("id")}>
                #ID
                {getIcon("id")}
              </th>
              <th scope='col' onClick={() => handleSort("first_name")}>
                First
                {getIcon("first_name")}
              </th>
              <th scope='col' onClick={() => handleSort("last_name")}>
                Last
                {getIcon("last_name")}
              </th>
              <th scope='col' onClick={() => handleSort("email")}>
                Email
                {getIcon("email")}
              </th>
              <th scope='col' onClick={() => handleSort("dob")}>
                DOB
                {getIcon("dob")}
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedPersons.map((person) => (
              <Person key={person.id} {...person} />
            ))}
          </tbody>
        </table>
      </div>
      <hr />
      <Paginate
        currentPage={currentPage}
        persons={persons.length}
        personPerPage={personPerPage}
        changePageNum={changePageNumber}
        incrementPageNum={incrementPageNumber}
        decrementPageNum={decrementPageNumber}
        handlePersonPerPage={handlePageCount}
      />
    </div>
  );
};

export default PersonsTable;
