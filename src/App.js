import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AffTableCategories from './compents/AffTableCategories';
import axios from 'axios';
import Home from './compents/Home';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/menus/").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <Router>
        <Routes>
          <Route path="/admin" element={<AffTableCategories categories={data} />} />
          {/* Add more routes as needed */}
          <Route path="/" element={<Home menus={data} />} />
        </Routes>
    </Router>
  );
}

export default App;
