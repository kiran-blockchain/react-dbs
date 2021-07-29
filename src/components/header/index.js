import Anchor from "../../anchor";
import "./style.css";
const Header = () => {
  const companyName = "DBS";
  const menuItems = [{
    cssclass:"nav-link",
    linktext:"Home",
    link:"#home"
},
{
  cssclass:"nav-link",
  linktext:"Login",
  link:"#login"
}

];

  const buildMenuItems = () => {
    const result = menuItems.map((x,index) => {
      return <li key={index}>
        <Anchor details ={x}/>
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
