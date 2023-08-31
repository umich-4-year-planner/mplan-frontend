import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="header">
			<Link to="/">
				<section className="logo">MPlan</section>
			</Link>

			<nav className="nav">
				<Link to="how-to-use" className="nav-item">
					How to Use
				</Link>
			</nav>
		</header>
	);
};
export default Header;
