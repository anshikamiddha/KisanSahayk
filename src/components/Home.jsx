// components/Home.js
import React from 'react';
import weather from './weather'
function Home() {
  return (
    <div   className="min-h-screen flex items-center justify-center"
    style={{
        background: "radial-gradient(circle, rgba(228,255,199,1) 100%, rgba(230,242,235,1) 100%, rgba(164,214,135,1) 100%)"
      }}>
        <div>
        <weather />
        </div>
      
      {/* Add your homepage content here */}
    </div>
  );
}

export default Home;