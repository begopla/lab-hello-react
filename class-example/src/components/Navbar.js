import Logo from '../assets/ironhack-logo-xs.png';
import Bar from '../assets/barmenu.png'
//scr/components/Navbar
function Navbar(){
    return(
        <nav id='nav-bar'>
            <div><img id="logo-nav" src={Logo} alt='logo'/></div>
            <div><img id="logo-bar" src={Bar} alt='bar menu'/></div>
        </nav>
    )
}

export default Navbar;