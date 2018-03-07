import React from "react";
import ReactDOM from "react-dom";

class Events extends React.Component {
    constructor(props) {
        super(props)
    } 

    render() {
        let components = []
        this.props.eventList.map((ev) => { 
            let component = <a className="list-group-item"><div className="d-flex w-100 justify-content-between"><h4 className="mb-1">{ ev["name"] }</h4><small> { ev["date"] }</small></div><p className="mb-1"> { ev["desc"] }</p></a>
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
