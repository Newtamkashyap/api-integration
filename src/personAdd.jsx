import React, { useState } from 'react';
import axios from 'axios';

const PersonAdd = () => {
  const [name, setName] = useState('');

  const handleChange = event => {
    setName(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const user = { name };

    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Person Name:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default PersonAdd;