import React from "react";

export const Person = ({ id, first_name, last_name, email, birthday }) => {
  return (
    <tr>
      <th scope='row'>{id}</th>
      <td>{first_name}</td>
      <td>{last_name}</td>
      <td>{email}</td>
      <td>{birthday}</td>
    </tr>
  );
};

export default Person;
