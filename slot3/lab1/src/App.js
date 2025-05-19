// import './App.css';
import Ex1 from './EX1';
import Ex2 from './EX2';
import Ex3 from './EX3';
import Ex4 from './EX4';
import Ex5 from './EX5';
import Ex6 from './EX6';
import Ex7 from './EX7';
import Ex8 from './EX8';
import Ex9 from './EX9';
import Ex10 from './EX10';

function App() {

   const employees = [
  { id: 1, name: "Anna", department: "HR", age: 50 },
  { id: 2, name: "Brian", department: "IT", age: 40 },
  { id: 3, name: "Clara", department: "Finance", age: 19 },
  { name: "Ann", department: "Finance", age: 22 },
  { name: "Elisabeth", department: "HR", age: 16 }
];
  return (
    <div className="App">
      <Ex1/>
      <Ex2 employees={employees}/>
      <Ex3 employees={employees}/>
      <Ex4 employees={employees}/>
      <Ex5 employees={employees}/>
      <Ex6 employees={employees}/>
      <Ex7 employees={employees}/>
      <Ex8 employees={employees}/>
      <Ex9 employees={employees}/>
      <Ex10 employees={employees}/>
    </div>
  );
}

export default App;
