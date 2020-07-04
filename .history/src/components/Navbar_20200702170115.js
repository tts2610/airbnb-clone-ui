import React from "react";
import { Navbar } from "react-bootstrap";

export default function CustomNavbar() {
    return ( <
        div >
        <
        Navbar bg = "light"
        style = {
            { display: "flex", textAlign: "center" } } >
        <
        Navbar.Brand href = "#home"
        style = {
            { color: "rgb(245, 89, 95)", display: "flex", alignItems: "center" } } >
        <
        img alt = ""
        src = "/icon.png"
        width = "40"
        height = "40" / > < h3 className = "ml-2" > airbnb < /h3> <
        /Navbar.Brand> <
        Nav className = "mr-auto" >
        <
        Nav.Link href = "#home" > Home < /Nav.Link> <
        Nav.Link href = "#features" > Features < /Nav.Link> <
        Nav.Link href = "#pricing" > Pricing < /Nav.Link> <
        /Nav> <
        /Navbar> <
        /div>
    );
}