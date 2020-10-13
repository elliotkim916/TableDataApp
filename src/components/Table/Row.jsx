import React from 'react';
import './Row.module.css';
import { useHistory } from "react-router-dom";

const Row = ({ rowData }) => {
  const history = useHistory();
  const { id, name, age, occupation, favoriteDish, favoriteVacationSpot, favoriteDestination } = rowData;

  return (
    <tr onClick={() => history.push(`/${id}`)}>
      <td>{name}</td>
      <td>{age}</td>
      <td>{occupation}</td>
      <td>{favoriteDish}</td>
      <td>{favoriteVacationSpot}</td>
      <td>{favoriteDestination}</td>
    </tr>
  );
};

export default Row;