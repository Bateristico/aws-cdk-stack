import {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [allPhotos, setAllPhotos] = useState([]);

  async function fetchPhotos(){
    const {data} = await axios.get(`${baseUri}getAllPhotos`);
    setAllPhotos(data);
  }

  useEffect(()=> {
    fetchPhotos();
  }, [])

  const baseUri: string = process.env.REACT_APP_API_URL!;
  console.log(baseUri);

  return (
    <div className="App">

    </div>
  );
}

export default App;
