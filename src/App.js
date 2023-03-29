import { useState, useEffect } from 'react';
import { getMovie } from './services/omdbapi';

import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';
import NavBar from './components/NavBar';

import './App.css';


function App() {
  //Store the data about a movie
  const [movie, setMovie] = useState(null);


  //to start page with movie poster
  useEffect(() => {
    const fetchData = async () => {
      const data =  await getMovie("Clueless");
      console.log(data);
      setMovie(data)
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <NavBar /> 
      <Form movieSearch={getMovie} setMovie={setMovie} />
      <MovieDisplay movie={movie}/>
    </div>
  );
}

export default App;
