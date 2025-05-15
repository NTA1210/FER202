function CheckTeenager() {

    const people = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 22 },
        { name: "Diana", age: 27 },
        { name: "Ethan", age: 35 },
        { name: "Fiona", age: 20 },
        { name: "George", age: 24 },
        { name: "Hannah", age: 26 },
        { name: "Ian", age: 12 },
        { name: "Jane", age: 29 },
        { name: "Kevin", age: 17 },
        { name: "Laura", age: 23 },
        { name: "Michael", age: 36 },
        { name: "Nina", age: 21 },
        { name: "Oscar", age: 10 },
        { name: "Paula", age: 27 },
        { name: "Quentin", age: 34 },
        { name: "Rachel", age: 9 },
        { name: "Sam", age: 28 },
        { name: "Tina", age: 11 }
      ];

    const check = people.every(people=> people.age >= 13 && people.age <= 19);
    return ( 
        <div>
            <h1>EX7: Check Teenager</h1>
            <p style={{color: "red", fontSize: "20px", fontWeight: "bold"}}>{check ? "All people are teenagers" : "Not all people are teenagers"}</p>
        </div>
     );
}

export default CheckTeenager;