import './App.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import Form from './components/form/form'

function App() {

  /*
  const [entireList, setentireList] = useState([]);
  useEffect(() => {
    Axios.get('http://localhost:3001/api')
    .then(response => {
      setentireList(response.data)
    })
  }, []);
  */
  return (
    <div className="App">
      <Form/>
      {/* {entireList.map((ipData, key) => {
        return (<h1 key={key}> Name {ipData.name} Las  {ipData.last}</h1>)
      })} */}
    </div>
  );
}

export default App;
