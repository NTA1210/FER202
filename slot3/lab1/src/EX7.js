function Ex7({employees}) {


    const sortedEmployees = employees.sort((a, b) => {
        if(a.department.localeCompare(b.department) !== 0) {
            return a.department.localeCompare(b.department);
        }else{
            return a.name.localeCompare(b.name);
        }
    });
    return ( 
        <div>
            <h1>EX7 : Sorted Employee List By Department Then Name</h1>
            <ul>
                {sortedEmployees.map((employee, index) => (
                    <li key={employee.id || index + 1}>
                        {employee.name} - {employee.department} - {employee.age}
                    </li>
                ))}
            </ul>
        </div>
     );
}

export default Ex7;