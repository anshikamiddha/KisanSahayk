import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Layout from './components/Layout';
import Home from './components/Home';
import Front from './components/front';
import Agrosmart from './components/agrosmart';
import Serv from './components/services/shop'; // ✅ Fixed import
// import ServiceDetailPage from './components/ServiceDetailPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="front" element={<Front />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="agrosmart" element={<Agrosmart />} />
          <Route path="shop" element={<Serv/>} />
          

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
