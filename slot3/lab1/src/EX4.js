function Ex4({employees}) {


    const ages = employees.map(employee => employee.age);
    const averageAge = (...ages) => {
        const total = ages.reduce((acc, age) => acc + age, 0);
        return total / ages.length;
    }
    return ( 
        <div>
            <h1>EX4 : Employee List</h1>
            
            <p>Average Age: {averageAge(...ages)}</p>
        </div>
     );
}

export default Ex4;