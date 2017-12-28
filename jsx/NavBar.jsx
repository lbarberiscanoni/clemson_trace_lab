import React from "react";
import ReactDOM from "react-dom";

class NavBar extends React.Component {
    constructor(props) {
        super(props)
    } 

    navigate(x) {
        alert(x)
    }

    render() {
        let sections = ["Research", "Publications", "Students", "d"]
        let nav_components = []
        sections.map((x) => { nav_components.push(<li className="btn btn-default" onClick={ this.navigate.bind(this, x) }> { x } </li>) })
        return(
            <nav className="nav nav-tabs nav-justified">
                { nav_components }
            </nav>
        )
    }
}

export default NavBar
