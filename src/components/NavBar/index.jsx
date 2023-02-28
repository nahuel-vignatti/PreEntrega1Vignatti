import "./navbar.css";
import CartWidget from "../CartWidget";
import img from "../../media/logo.png";
import Button from 'react-bootstrap/Button';

function NavBar(){
    return (<div>
        <ul className="lista pb-5">
            <li><a href="#">Productos</a></li>
            <li><img src={img} alt="Logo Vivero" /></li>
            <li><a href="#">Quienes somos</a></li>
            <li><a href="#">Contacto</a></li>
            <li><CartWidget /></li>            
        
        </ul>
    </div>)
}

export default NavBar;