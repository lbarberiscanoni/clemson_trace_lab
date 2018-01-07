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
            	<a href={this.props.url}>
                    <p> {this.props.link} </p>
                </a>
            </div>
        )
    }
}

export default Publication
