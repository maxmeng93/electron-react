import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  useEffect(() => {
    console.log('useEffect');
  }, []);

  return (
    <div>
      <h1>about</h1>
      <p>关于页面</p>
      <Link to="/">Home</Link>
    </div>
  );
}
