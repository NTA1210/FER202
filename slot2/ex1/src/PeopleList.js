function PeopleList() {
    const people = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 22 },
        { name: "Diana", age: 27 },
        { name: "Ethan", age: 35 },
        { name: "Fiona", age: 28 },
        { name: "George", age: 24 },
        { name: "Hannah", age: 26 },
        { name: "Ian", age: 31 },
        { name: "Jane", age: 29 },
        { name: "Kevin", age: 33 },
        { name: "Laura", age: 23 },
        { name: "Michael", age: 36 },
        { name: "Nina", age: 21 },
        { name: "Oscar", age: 32 },
        { name: "Paula", age: 27 },
        { name: "Quentin", age: 34 },
        { name: "Rachel", age: 30 },
        { name: "Sam", age: 28 },
        { name: "Tina", age: 26 }
      ];
      
    return ( 
        <div>
            <h1>EX4: People List</h1>
            <ul>
                {people.map((person, index) => (
                    <li key={index}> {`${person.name} is ${person.age} years old`}</li>
                ))}
            </ul>
        </div>
     );
}

export default PeopleList;