import "./Navbar.css"
import logo from '../images/reactjs-icon.png'

function Navbar() {
    return(
    <nav className="div-container" >
        <div className="flexbox-container">
            <img src={logo} alt="logo"/>
            <h3>ReactFacts</h3>
        </div>
        <h4>React Course - Project 1</h4>
    </nav>
    )
}

export default Navbar;