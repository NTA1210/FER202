function Ex1() {

    const employee = { name: "John Doe", age: 30, department: "IT" }

    const {name, age, department} = employee;

    return ( 
        <div>
            <h1>EX1 : Employee Details</h1>
            <h1>Name: {name}</h1>
            <p>Age: {age}</p>
            <p>Department: {department}</p>
        </div>           

     );
}

export default Ex1;

