function Ex9({ employees }) {


    const isTeenager = employees.some(e => e.age >= 10 && e.age <= 20);

    return ( 
        <div>
            <h1>EX9 : Employee List</h1>
            
            <p>{isTeenager ? "There are teenagers in the list" : "There are no teenagers in the list"}</p>
        </div>
     );
}

export default Ex9;