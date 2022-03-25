import './App.css';
import Homepage from './pages/HomePage';
import Bookpage from './pages/BookPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/books" element={<Homepage/>} />
            <Route path="/book/:id" element={<Bookpage/>} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
