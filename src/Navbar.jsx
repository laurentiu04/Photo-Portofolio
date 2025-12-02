import Logo from "./assets/Logo.png";
import "./Navbar.css";

function Navbar() {
	return (
		<>
			<div className="navbar">
				<img className="Logo" src={Logo} alt="Logo" />
			</div>
		</>
	);
}

export default Navbar;
