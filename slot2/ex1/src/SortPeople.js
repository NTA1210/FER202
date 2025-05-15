function SortPeople() {
    const people = [
        { name: "Alice", age: 25, job: "Designer" },
        { name: "Bob", age: 30, job: "Engineer" },
        { name: "Charlie", age: 25, job: "Architect" },
        { name: "Diana", age: 22, job: "Doctor" },
        { name: "Ethan", age: 30, job: "Chef" }
      ];
      const sortedPeople = people.sort((a, b) => {
        if(a.age !== b.age) {
            return a.age - b.age;
        }else{
            return a.name.localeCompare(b.name);
        }
      });
    return (
        <div>
            <h1>EX8: Sort People</h1>
            <ul>
                {sortedPeople.map((person, index) => (
                    <li key={index}> {`${person.name} is ${person.age} years old and works as a ${person.job}`}</li>
                ))}
            </ul>
        </div>
      );
}

export default SortPeople;
