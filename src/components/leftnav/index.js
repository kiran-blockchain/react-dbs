
import Anchor from "../../anchor"
import "./style.css"
const LeftNav = () => {
    const navLinks =[{
        cssclass:"nav-link",
        linktext:"DBS",
        link:"https://dbs.com"
},
{
    cssclass:"nav-link",
    linktext:"Google",
    link:"https://google.com"
},
{
    cssclass:"nav-link",
    linktext:"Fb",
    link:"https://fb.com"
}];

 const buildLinks = ()=>{
   return navLinks.map((x,index)=>{
        return <li class="nav-item" key={index}>
            <Anchor details={x}/>
        </li>
    })
 }
    return (
        <ul class="nav flex-column nav-color">
          {buildLinks()}
           
        </ul>
    );
}

export default LeftNav;