import React from "react";
import { Nav, NavLink, NavMenu } from "./NavBarElements.js";


const Navbar = () => {
    return (
    <> 
    <Nav>
        <NavMenu>
            <h2 className='title-tag'>πΉSip Me Baby One More TimeπΉ</h2>
            <NavLink to="/about" activeStyle>
                About π 
            </NavLink>
            <NavLink to="/home" activeStyle>
               Home π₯
            </NavLink>
            <NavLink to="/contact" activeStyle>
                Contact Me π±
            </NavLink>
            <NavLink to="/blogs" activeStyle>
                Blogs  π 
            </NavLink>
            <NavLink to="/sign-up" activeStyle>
                Sign Up π§ 
            </NavLink>
            <NavLink to="/search" activeStyle>
                Search π
            </NavLink>
            <NavLink to="/create-new-blog-post" activeStyle>
                Create New Blog Post π 
            </NavLink>
        </NavMenu>
    </Nav>
    </>
)
}

export default Navbar;