import React from 'react';
import './App.css';
import {Touppercase} from "./01-hello-tests/01";
import {student, StudentType} from "./02-object-test/02";
import {Filter} from "./04-filter/04";
import {Map} from "./05-map/05";
import Callback from "./06-callBack-onClick-onChange-onBlure/callback";
import AssociativeArray from "./08-associative-array/08-associative-array";
import ReferenceTypeAndMutability from "./08-associative-array/08-associative-array";


function App() {
    console.log(student)
    return (
        <div className="App">
            {/*<Touppercase  value='How are you ?'/>*/}
            {/*<Filter />*/}
            {/*<Map />*/}
            {/*<Callback />*/}
            {/*<AssociativeArray />*/}
            <ReferenceTypeAndMutability/>
        </div>
    );
}

export default App;
