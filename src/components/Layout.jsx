import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
// import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
    
    </div>
  );
};

export default Layout;