import ReactLogo from "../images/React-icon.svg.png"

function Navbar (){
    return (

    <nav className="navBar" >
        <div className="Logo">
        <img src={ReactLogo} className="reactLogo" alt="react logo"/>
        <p><b>ReactFacts</b></p>
        </div>
        <p className="extraTitle">React Course - Project 1</p>
        </nav>
    )
}

export default Navbar;