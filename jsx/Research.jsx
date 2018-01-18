import React from "react";
import ReactDOM from "react-dom";

class Research extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
            	<h3> {this.props.title} </h3>
                <h5> {this.props.collaborators} </h5>
                <p> {this.props.desc} </p>
            </div>
        )
    }
}

export default Research
