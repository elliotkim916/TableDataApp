import React, { useState } from 'react';
import UpdateDataForm from '../Form/UpdateDataForm';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');

const TableView = ({ match, data, deleteRow, updateRow, history }) => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const rowData = data.find(row => row.id.toString() === match.params.id);

  if (!rowData) {
    return null;
  }

  const { name, age, occupation, favoriteDish, favoriteVacationSpot, favoriteDestination } = rowData;
  
  return (
    <React.Fragment>
      <Modal 
        isOpen={showUpdateForm}
        onRequestClose={() => setShowUpdateForm(false)}
        style={customStyles}
        contentLabel="Update your data below!"
      >
        <UpdateDataForm rowData={rowData} setShowUpdateForm={setShowUpdateForm} updateRow={updateRow} />
      </Modal>
      
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
        onClick={() => deleteRow(Number(match.params.id), history)}
      >
        Delete
      </button>
    </React.Fragment>
  );
};

export default TableView;