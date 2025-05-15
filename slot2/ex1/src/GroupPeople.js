function GroupPeople() {

    const people = [
        { name: "Alice", age: 25, job: "Designer" },
        { name: "Bob", age: 30, job: "Engineer" },
        { name: "Charlie", age: 25, job: "Designer" },
        { name: "Diana", age: 22, job: "Doctor" },
        { name: "Ethan", age: 30, job: "Chef" },
        { name: "Fiona", age: 28, job: "Engineer" },
        { name: "George", age: 24, job: "Doctor" },
        { name: "Hannah", age: 26, job: "Chef" },
        { name: "Ian", age: 29, job: "Teacher" },
        { name: "Jane", age: 27, job: "Teacher" },
        { name: "Kevin", age: 35, job: "Engineer" },
        { name: "Laura", age: 23, job: "Designer" },
        { name: "Michael", age: 31, job: "Chef" },
        { name: "Nina", age: 21, job: "Doctor" },
        { name: "Oscar", age: 32, job: "Architect" },
        { name: "Paula", age: 27, job: "Engineer" },
        { name: "Quentin", age: 33, job: "Architect" },
        { name: "Rachel", age: 29, job: "Designer" },
        { name: "Sam", age: 28, job: "Chef" },
        { name: "Tina", age: 26, job: "Doctor" }
      ];
    const groupPeople = people.reduce((acc, person)=>{
        if(!acc[person.job]){
            acc[person.job] = [];
        }
        acc[person.job].push(person);
        return acc
    },{})
    return ( 
        <div>
            <h1>EX9: Group People</h1>
        <div className="wrapper" style={{display: "flex", justifyContent: "center", gap:"20px"}}>    
            <div className="peopleList" style={{border: "1px solid black"}}>
            <ul>
                {people.map((person, index) => (
                    <li key={index}> {`${person.name} is ${person.age} years old and works as a ${person.job}`}</li>
                ))}
            </ul>
            </div>

            <div className="groupPeople">
            {Object.entries(groupPeople).map(([job, people]) => (
                <div key={job}>
                    <h2>{job}</h2>
                    <ul>
                        {people.map((person, index) => (
                            <li key={index}> {`${person.name} is ${person.age} years old and works as a ${person.job}`}</li>
                        ))}
                    </ul>
                </div>
            ))}
            </div>
            </div>
        </div>
     );
}

export default GroupPeople;