import React, { useState } from 'react';
import Header from '../Header/Header';
import Row from './Row';
import AddDataForm from '../Form/AddDataForm';
import Modal from 'react-modal';
import './Table.module.css';

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

const Table = ({ data, addRow }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <React.Fragment>
      <button type="button" onClick={() => setShowForm(true)}>Add Data</button>
      <br/>
      <br/>

      <Modal 
        isOpen={showForm}
        onRequestClose={() => setShowForm(false)}
        style={customStyles}
        contentLabel="Add new data!"
      >
        <AddDataForm addRow={addRow} setShowForm={setShowForm} /> 
      </Modal>

      <table>
        <Header />

        <tbody>
          { data.map((rowData, index) => <Row rowData={rowData} key={index}/>) }
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default Table;