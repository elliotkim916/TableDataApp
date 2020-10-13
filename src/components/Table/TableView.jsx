import React, { useState } from 'react';
import UpdateDataForm from '../Form/UpdateDataForm';

const TableView = ({ match, data, deleteRow, updateRow, history }) => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const rowData = data.find(row => row.id.toString() === match.params.id);
  const { name, age, occupation, favoriteDish, favoriteVacationSpot, favoriteDestination } = rowData;

  return (
    <React.Fragment>
      { showUpdateForm ? <UpdateDataForm rowData={rowData} setShowUpdateForm={setShowUpdateForm} updateRow={updateRow} /> : null }

      <table>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{age}</td>
            <td>{occupation}</td>
            <td>{favoriteDish}</td>
            <td>{favoriteVacationSpot}</td>
            <td>{favoriteDestination}</td>
          </tr>
        </tbody>
      </table>

      <button type="button" onClick={() => setShowUpdateForm(true)}>Update</button>
      <button 
        type="button" 
        onClick={() => {
          deleteRow(match.params.id);
          history.push('/');
        }}
      >
        Delete
      </button>
    </React.Fragment>
  );
};

export default TableView;