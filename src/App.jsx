import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, navigate } from '@reach/router';


function App() {

  const [ amount, setAmount ] = useState("");
  const categories = [ "", "horse", "cat", "snail", "dog"];
  const [ category, setCategory ] = useState("");

  const handleQuery = e => {
    e.preventDefault();
    navigate(`/${ category }/${ amount }`);
    setCategory("");
    setAmount(0);
  }

  return (
    <div className="App">

      <form className="col-3 mx-auto" onSubmit={ handleQuery }>

        <div className="form-group">
          <label>Category:</label>
          <select value={ category } className="form-control" onChange={(e) => setCategory(e.target.value)}>
            {
              categories.map((cat, i) => <option value={ cat } key={ i }>{ i === 0 ? "-----------Select Animal-----------" : cat }</option>)
            }
          </select>

        </div>

        <div className="form-group">
          <label>Amount:</label>
          <input 
            className="form-control" 
            type="text" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <input 
          type="submit" 
          value="Get Facts" 
          className="btn btn-primary"
        />
      </form>

      <Router>
        <Display path="/:category/:amount"/>
      </Router>

      
    </div>
  );
}

export default App;