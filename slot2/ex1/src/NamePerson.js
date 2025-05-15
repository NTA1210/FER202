function NamePerson() {
      const names = [
        {
            name: "Alice",
            age: 20,
            occupation: "Engineer"
        },
        {
            name: "Bob",
            age: 25,
            occupation: "Designer"
        },
        {
            name: "Charlie",
            age: 30,
            occupation: "Manager"
        }
    ]
      return (
        <div>
          <h1>EX3: Names and Ages</h1>
          <ul>
            {names.map((name, index) => (
              <li key={index}> {`${name.name} is ${name.age} years old and works as a ${name.occupation}`}</li>
            ))}
          </ul>
        </div>
      );
    }
    export default NamePerson;