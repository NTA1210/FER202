function Ex2({employees}) {

 
    return ( 

        <div>
            <h1>EX2 : Employee List</h1>
            <ul>
                {employees.map((employee, index) => (
                    <li key={employee.id || index +1}>
                        {employee.name} - {employee.department} - {employee.age}
                    </li>
                ))}
            </ul>
        </div>
     );
}

export default Ex2;