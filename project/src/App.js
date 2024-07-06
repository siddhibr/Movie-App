import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import MovieApp from './Components/MovieApp';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/movie-app" element={<MovieApp />}/>
        
      </Routes>
    </div>
  );
}

export default App;
