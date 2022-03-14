import './App.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';

function App() {


  const [entireList, setentireList] = useState([]);
  useEffect(() => {
    Axios.get('http://localhost:3001/api')
    .then(response => {
      setentireList(response.data)
    })
  })
  
  return (
    <div className="App">
      {entireList.map((ipData, key) => {
        return (<h1 key={key}> {ipData.name}  {ipData.last}</h1>)
      })}
    </div>
  );
}

export default App;
