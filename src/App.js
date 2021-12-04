import React, { useState, useEffect } from 'react';
import './style.css';
import ReactJson from 'react-json-view';

export default function App() {
  const [username, setUsername] = useState('aakashbilly');
  const [json, setJson] = useState({});

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setJson(data));
  }, [username]);

  function handleChange(e) {
    console.log(e);
  }
  return (
    <div>
      <h1>React json tree viewer example ({username})</h1>
      <input
        value={username}
        name="username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <hr />
      <ReactJson src={json} theme={"summerfruit"} enableClipboard={false} displayDataTypes={false} displayObjectSize={false}/>
    </div>
  );
}
