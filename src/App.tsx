import React from 'react';
import './App.css';
import {Touppercase} from "./01-hello-tests/01";
import {student, StudentType} from "./02-object-test/02";
import {Filter} from "./04-filter/04";

function App() {
    console.log(student)
  return (
    <div className="App">
<Touppercase  value='How are you ?'/>
        <Filter />
    </div>
  );
}

export default App;
