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
                <p> {this.props.desc} </p>
            	<p> {this.props.date} </p>
                <h5> {this.props.contributors} </h5>

            </div>
        )
    }
}

export default Research
