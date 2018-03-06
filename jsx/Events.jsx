import React from "react";
import ReactDOM from "react-dom";

class Events extends React.Component {
    constructor(props) {
        super(props)
    } 

    render() {
        let components = []
        this.props.events.map((ev) => { 
            let component = <a className="list-group-item"><div className="d-flex w-100 justify-content-between"><h5 className="mb-1">{ ev["name"] }</h5><small> { ev["date"] }</small></div><p className="mb-1"> { ev["description"] }</p></a>
            components.push(component)
        })
        return(
            <div className="list-group">
                { components }
            </div>
        )
    }
}

export default Events
