function Ex6({employees}) {


    const ITEmployees = employees.filter(employee => employee.department === "IT");
    return ( 
        <div> 
            <h1> EX6 : IT Employee List</h1>
            <ul>
                {ITEmployees.map((employee, index) => (
                    <li key={employee.id || index}>
                        {employee.name} - {employee.department} - {employee.age}
                    </li>
                ))}
            </ul>
        </div>
     );
}

export default Ex6;