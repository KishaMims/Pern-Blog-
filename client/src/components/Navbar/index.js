import React from "react";
import { Nav, NavLink, NavMenu } from "./NavBarElements.js";


const Navbar = () => {
    return (
    <>
    <Nav>
        <NavMenu>
            <NavLink to="/about" activeStyle>
                About
            </NavLink>
            <NavLink to="/contact" activeStyle>
                Contact Me
            </NavLink>
            <NavLink to="/blogs" activeStyle>
                Blogs
            </NavLink>
            <NavLink to="/sign-up" activeStyle>
                Sign Up
            </NavLink>
            <NavLink to="/create-new-blog-post" activeStyle>
                Create New Blog Post
            </NavLink>
        </NavMenu>
    </Nav>
    </>
)
}

export default Navbar;