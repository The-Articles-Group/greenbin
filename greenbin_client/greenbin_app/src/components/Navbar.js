import '../styles/navbar.css'; 


const Navbar = () => {
  return (
    <nav className="desktop-nav">   
    <div className="container">
      <a href="/" className="logo">
          <b id="green">Green</b>bin
      </a>
      <div id="profile">
        <p id="name">name</p>
        <div id="photo">
        </div>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;