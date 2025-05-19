function Ex8({employees}) {


    const employeeGroupByDepartment = employees.reduce((acc, employee) => {
        if (!acc[employee.department]) {
            acc[employee.department] = [];
        }
        acc[employee.department].push(employee);
        return acc;
    }
    , {});
    const departmentNames = Object.keys(employeeGroupByDepartment);



    return ( 
        <div>
            <h1>EX8 : Employee List</h1>
            <ul>
                {departmentNames.map((department, index) => (
                    <li key={index}>
                        <h2>{department}</h2>
                        <ul>
                            {employeeGroupByDepartment[department].map((employee, index) => (
                                <li key={employee.id || index + 1}>
                                    {employee.name} - {employee.age}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
     );
}

export default Ex8;
