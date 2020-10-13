import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Table from './components/Table/Table';
import TableView from './components/Table/TableView';
import './App.css';

const App = (props) => {
  const [data, setData] = useState([
    {
      id: Math.random(),
      name: 'Elliot', 
      age: 30, 
      occupation: 'Engineer', 
      favoriteDish: 'Sushi', 
      favoriteVacationSpot: 'Japan', 
      favoriteDestination: 'Korea'
    },
    {
      id: Math.random(),
      name: 'Dave', 
      age: 33, 
      occupation: 'Producer', 
      favoriteDish: 'Vegetables', 
      favoriteVacationSpot: 'Japan', 
      favoriteDestination: 'Hawaii'
    },
    {
      id: Math.random(),
      name: 'Teresa', 
      age: 43, 
      occupation: 'Chef', 
      favoriteDish: 'Caviar with chips', 
      favoriteVacationSpot: 'Europe', 
      favoriteDestination: 'Mexico City'
    },
    {
      id: Math.random(),
      name: 'Janice', 
      age: 40, 
      occupation: 'Pastor', 
      favoriteDish: 'Kimchee Fried Rice', 
      favoriteVacationSpot: 'Korea', 
      favoriteDestination: 'Netherlands'
    },
    {
      id: Math.random(),
      name: 'Dasyel', 
      age: 26, 
      occupation: 'Engineer', 
      favoriteDish: 'Sandwiches', 
      favoriteVacationSpot: 'Hermosa Beach', 
      favoriteDestination: 'California'
    },
    {
      id: Math.random(),
      name: 'Pablo', 
      age: 30, 
      occupation: 'Artist', 
      favoriteDish: 'Ramen', 
      favoriteVacationSpot: 'Mexico', 
      favoriteDestination: 'Disneyland'
    },
  ]);
  
  const deleteRow = (id) => {
    let copyData = data;
    copyData = copyData.filter(data => data.id.toString() !== id);
    setData(copyData);
  };

  const addRow = (newData) => {
    let copyData = data;
    copyData = [newData, ...copyData];
    setData(copyData);
    alert('You have successfully added data!');
  };

  const updateRow = (newData) => {
    let copyData = data;
    let dataToUpdate = copyData.find(data => data.id === newData.id);
    const index = copyData.findIndex(item => item.id === newData.id);

    dataToUpdate = {...newData};
    copyData.splice(index, 1, dataToUpdate);
    setData(copyData);

    alert('You have successfully updated your data!');
  }

  return (
    <div className="App">
      <h1>Table App</h1>
  
      <Router>
        <Switch>
          <Route exact path="/" render={(props) => <Table data={data} addRow={addRow} {...props} /> } />
          <Route exact path="/:id" render={(props) => <TableView data={data} {...props} deleteRow={deleteRow} updateRow={updateRow} /> } /> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
