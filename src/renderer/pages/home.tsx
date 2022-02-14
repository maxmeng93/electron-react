import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  useEffect(() => {
    console.log('useEffect', 'home');
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <p>首页</p>
      <Link to="/about">About</Link>
    </div>
  );
}
