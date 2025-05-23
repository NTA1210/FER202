import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TablePeople from './TablePeople';
import FirstTeenager from './FirstTeenager';
import CheckTeenager from './CheckTeenager';
import SortPeople from './SortPeople';
import GroupPeople from './GroupPeople';
import FindAge from './FindAge';
import FindAvg from './FindAvg';
import NamePerson from './NamePerson';
import PeopleList from './PeopleList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <NamePerson/>
    <PeopleList/>
    <TablePeople/>
    <FirstTeenager/>
    <CheckTeenager/>
    <SortPeople/>
    <GroupPeople/>
    <FindAge/>
    <FindAvg/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
