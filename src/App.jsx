import React from 'react';
import NewScreen from './views/screen/NewScreen'
import './App.css';
import Table from './views/screen/TableProduct';

function App() {
  let arr = ['Bandung','Garut','Cirebon']
  return (
    <div className="App">
     <h1>Hello World</h1>
     <h2 style={{color:"red"}}>WAAAAAAAAAAAAAA</h2>
     <div id="kota">
       {
         arr.map(val=>{
           return(
           <p>{val}</p>
           )
         })
       }
     </div>
          <NewScreen />
          <br></br>
          <center>
          <Table/>
          </center>
    </div>
  );
}

export default App;
