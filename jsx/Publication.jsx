import React from "react";
import ReactDOM from "react-dom";

class Publication extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
            	<h3> {this.props.title} </h3>
            	<p> {this.props.desc} </p>
            </div>
        )
    }
}

export default Publication
