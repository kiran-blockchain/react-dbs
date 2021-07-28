import "./style.css";
const Header = () => {
  const companyName = "DBS";
  const menuItems = ["Home", "Features", "Pricing","About","Contact","Apparels"];

  const buildMenuItems = () => {
    const result = menuItems.map(x => {
      return <li>
        <a class="nav-link" href="#">{x}</a>
      </li>
    });
    return <ul class="navbar-nav">{result}</ul>
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">{companyName}</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          {buildMenuItems()}
        </div>
      </div>
    </nav>

  );
}

export default Header;
