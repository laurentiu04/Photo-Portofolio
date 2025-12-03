import { Link } from "react-router";
import Logo from "./assets/Logo.png";
import "./Navbar.css";

function Navbar() {
	return (
		<>
			<div className="navbar">
				<div className="elems">
					<Link to="/">ACASĂ</Link>
					<Link to="/about-me">DESPRE MINE</Link>
					<img className="Logo" src={Logo} alt="Logo" />
					<Link to="/gallery">GALERIE</Link>
					<Link to="/contact">CONTACT</Link>
				</div>
			</div>
		</>
	);
}

export default Navbar;
