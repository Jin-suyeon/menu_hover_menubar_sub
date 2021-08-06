import "./App.css";

function App() {
  return (
    <nav className="nav">
      <div className="nav__menu">
        <div className="nav__menu-item">
          <span>Home</span>
        </div>
        <div className="nav__menu-item">
          <span>About</span>
          <Submenu />
        </div>
        <div className="nav__menu-item">
          <span>Contact</span>
        </div>
      </div>
    </nav>
  );
}

function Submenu() {
  return (
    <div className="nav__submenu">
      <div className="nav__submenu-item ">
        <span>Our Company</span>
      </div>
      <div className="nav__submenu-item ">
        <span>Our Team</span>
      </div>
      <div className="nav__submenu-item ">
        <span>Our Portfolio</span>
      </div>
    </div>
  );
}

export default App;
