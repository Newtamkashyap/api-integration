import logo from './logo.svg';
import './App.css';
import { PersonList } from './personList';
import PersonAdd from './personAdd';
import PersonRemove from './personRemove';

function App() {
  return (
    <>
    <PersonList/>
    <PersonAdd/>
    <PersonRemove/>
    </>
  );
}

export default App;
