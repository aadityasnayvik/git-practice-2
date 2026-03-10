import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
// import logo from "./assets/images/logo.svg";

export default function App() {
  return (
    <>
      <nav className="navbar navbar-expand-xl navbar-light shadow">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            {/* <img src={logo} alt="Site logo" className="img-fluid" /> */}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarLight"
            aria-controls="navbarLight"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarLight">
            <ul className="navbar-nav mx-auto gap-md-5 gap-3 gap-lx-5 mb-2 mb-xl-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/service">
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/news-event">
                  News & Event
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <form className="d-flex my-3">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

// count component
export function Count() {
  const [count, setCount] = useState(2);
  return (
    <>
        <div>
            <button onClick={() => setCount(count + 1)} className="btn btn-primary">
                Add to card
            </button>
          &nbsp; &nbsp;{count}
        </div>
    </>
  );
}

// increase count
export function Increase() {
  const [count, setCount] = useState(10);
  return (
    <>
      <div>the final count is {count}</div>
      <button onClick={() => setCount(count * 100)}>final count</button>
      <div>the final count is {count}</div>
      <h2>fine {count + 50}</h2>
    </>
  );
}

// decrease count
export function Decrease() {
  const [DCount, DecreaseCount] = useState(50);
  return (
    <>
    <div>This is the final counting that we have for our decerice </div>
      <div>the final list is the function is {DCount}</div>
      <button onClick={() => DecreaseCount(DCount - 1000)}>Decrease</button>
    </>
  );
}

//multiply
export function Multiply() {
  const [MCount, MultiplyCount] = useState(50);
  return (
    <>
    <div> {MCount} Multiply</div>
    <button onClick={() => MultiplyCount(MCount * 2)}>Click</button>
    </>
  )
}
