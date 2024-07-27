    import React, { useState, useEffect } from 'react';
    import axios from 'axios';
    
    export const PersonList = () => {
      const [persons, setPersons] = useState([]);
    
      useEffect(() => { //at the time of loading
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            setPersons(res.data);//set the value
          });
      }, []);
    
      return (
        <ol>
          {persons.map(person => (
            <li key={person.id}>{person.name}</li>
          ))}
        </ol>
      );
    };
    
    export default PersonList;