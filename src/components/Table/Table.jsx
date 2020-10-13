import React, { useState } from 'react';
import Header from '../Header/Header';
import Row from './Row';
import AddDataForm from '../Form/AddDataForm';
import './Table.module.css';

const Table = ({ data, addRow }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <React.Fragment>
      <button type="button" onClick={() => setShowForm(true)}>Add Data</button>
      <br/>
      <br/>

      { showForm ? <AddDataForm setShowForm={setShowForm} addRow={addRow} /> : null }
      
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