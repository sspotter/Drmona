import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="/about" activeStyle>
						About
					</NavLink>
					<NavLink to="/contact" activeStyle>
						Contact Us
					</NavLink>
					<NavLink to="/blogs" activeStyle>
						Blogs
					</NavLink>
                    <NavLink to="/Experience" activeStyle>
                    Experience
					</NavLink>
					<NavLink to="/sign-up" activeStyle>
						Sign Up
					</NavLink>

                    <NavLink to="/signin" activeStyle>
						Sign in
					</NavLink>
					<NavLink to="/AdminDocumentPage" activeStyle>
					AdminDocumentPage
					</NavLink>
					<NavLink to="/ViewerDocumentPage" activeStyle>
					ViewerDocumentPage
					</NavLink>
					<NavLink to="/ViewerCalendar" activeStyle>
						Calender
					</NavLink>
					<NavLink to="/AdminCalendar" activeStyle>
					AdminCalendar
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
