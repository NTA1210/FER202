let results = [];

let search = '';

function Ex10({employees}) {

    const handleSearch = () => {
        results = [];
        const result = employees.filter(employee => employee.name.toLowerCase().includes(search.toLowerCase()));
        results = [...result]
        console.log(results , search);
        
    }

    const result = () =>{
        const results =  employees.filter(employee => employee.name.toLowerCase().includes(search.toLowerCase()));
        return results.map((employee, index) => (
            <li key={employee.id || index + 1}>
                {employee.name} - {employee.department} - {employee.age}
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