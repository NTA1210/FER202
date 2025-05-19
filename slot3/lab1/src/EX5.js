function Ex5({employees}) {

    const names = employees.map(employee => employee.name);
    return ( 
        <div>
            <h1> EX5 :  List Name Selection </h1>
            <select>
                {names.map((name, index) => (
                    <option key={index} value={name}>{name}</option>
                ))}
            </select>
        </div>
     );
}

export default Ex5;