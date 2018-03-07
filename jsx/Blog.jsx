import React from "react";
import ReactDOM from "react-dom";

class Events extends React.Component {
    constructor(props) {
        super(props)
    } 

    render() {
        let components = []
        this.props.blogList.map((ev) => { 
            let component = <a className="list-group-item" href={ ev["link"] } target="_blank">{ ev["name"] }</a>
            components.push(component)
        })
        return(
            <ul className="list-group">
                <li className="list-group-item disabled"> Blog Posts </li>
                { components }
            </ul>
        )
    }
}

export default Events
