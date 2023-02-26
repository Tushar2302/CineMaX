import React from "react";
import  "./Header.css"
import {Link} from "react-router-dom"



const Header =() =>{
    return (
    <div className="header">
        <div className="headerLeft">
            <Link to="/"><img className="header__icon" src="https://ik.imagekit.io/Amazon124/My_project.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677393363147" alt="true" /></Link>
            <Link to="/movies/popular" style={{textDecoration:"none"}}><span>Popular</span></Link>
            <Link to="/movies/top_rated" style={{textDecoration:"none"}}><span>Top Rated</span></Link>
            <Link to="/movies/upcoming" style={{textDecoration:"none"}}><span>Upcoming</span></Link>
        </div>
    </div>
    )
}
export default Header