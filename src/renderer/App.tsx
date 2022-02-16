import { HashRouter, Routes, Route, Outlet, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import './App.css';

const Hello = () => {
  return (
    <div>
      <h1>Hello</h1>
      <nav>
        <Link to="/about">about</Link>
        <Link to="/home">home</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default function App() {
  return (
    <div>
      <div>app router</div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Hello />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route
              path="*"
              element={
                <main>
                  <p>404</p>
                </main>
              }
            />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}
