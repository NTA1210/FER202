function FindAge() {
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
    const oldestPerson = people.reduce((acc, person)=>{
        if(acc.age < person.age){
            acc = person;
        }
        return acc;
    });
    const youngestPerson = people.reduce((acc, person)=>{
        if(acc.age > person.age){
            acc = person;
        }
        return acc;
    });
    return ( 
        <div>
            <h1>EX9-B: Find Oldest and Youngest Person</h1>
            <p style={{color: "red", fontSize: "20px", fontWeight: "bold"}}>{oldestPerson.name} is the oldest person</p>
            <p style={{color: "blue", fontSize: "20px", fontWeight: "bold"}}>{youngestPerson.name} is the youngest person</p>
        </div>
     );
}

export default FindAge;