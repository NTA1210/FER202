import React, { useState } from 'react';

function Ex10({employees}) {

    const [results, setResults] = useState([]);
    let search = "";
    const handleSearch = () => {
        const filteredResults = employees.filter(employee => 
            employee.name.toLowerCase().includes(search.toLowerCase())
        );
        setResults(filteredResults);
    }
    const result = () => {
        return results.map((employee, index) => (
            <li key={index}>
                <h1>Name: {employee.name}</h1>
                <p>Age: {employee.age}</p>
                <p>Department: {employee.department}</p>
            </li>
        ));
    }
    


    return ( 
        <div>
            <h1> EX10 : Search Employee</h1>
            <input type="text" placeholder="Search by name" onInput = {(e) => {
                console.log(e.target.value);
                search = e.target.value}}/>
            <button onClick={handleSearch}>Search</button>
            <ul>
                {result()}
            </ul>
            <p>{results.length === 0 ? "No results found" : `${results.length} result(s) found`}</p>
        </div>
     );
}

export default Ex10;