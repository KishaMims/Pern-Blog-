import React from "react";
import { Nav, NavLink, NavMenu } from "./NavBarElements.js";


const Navbar = () => {
    return (
    <> 
    <Nav>
        <NavMenu>
            <h2 className='title-tag'>🍹Sip Me Baby One More Time🍹</h2>
            <NavLink to="/about" activeStyle>
                About 🎉 
            </NavLink>
            <NavLink to="/home" activeStyle>
               Home 🖥
            </NavLink>
            <NavLink to="/contact" activeStyle>
                Contact Me 📱
            </NavLink>
            <NavLink to="/blogs" activeStyle>
                Blogs  📝 
            </NavLink>
            <NavLink to="/sign-up" activeStyle>
                Sign Up 📧 
            </NavLink>
            <NavLink to="/search" activeStyle>
                Search 🔍
            </NavLink>
            <NavLink to="/create-new-blog-post" activeStyle>
                Create New Blog Post 🖋 
            </NavLink>
        </NavMenu>
    </Nav>
    </>
)
}

export default Navbar;