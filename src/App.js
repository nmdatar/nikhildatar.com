import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Resume from './pages/Resume';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/resume' exact element={<Resume />} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
