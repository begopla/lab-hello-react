//scr/components/Gallerie
import Logo1 from "../assets/logo1.png";
import Logo2 from "../assets/logo2.png";
import Logo3 from "../assets/logo3.png";
import Logo4 from "../assets/logo4.png";


function Galerie(){
    return(
        <div className="container">
            <div className="card-wrapper">
            <div className="card-container">
                <img id="card-image" src={Logo1} alt="logo1"/>
                <h3>Declarative</h3>
                <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div className="card-container">
                <img id="card-image2" src={Logo2} alt="logo2"/>
                <h3>Components</h3>
                <p>Build encapsulated components that manage their style</p>
            </div>
            <div className="card-container">
                <img id="card-image" src={Logo3} alt="logo3"/>
                <h3>Single-Way</h3>
                <p>A set of immutable values are passed to the component's</p>
            </div>
            <div className="card-container">
                <img id="card-image" src={Logo4} alt="logo4"/>
                <h3>JSX</h3>
                <p>Statically-typed, designed to run on modern browsers.</p>
            </div>
            </div>
        </div>
    )
}

export default Galerie;