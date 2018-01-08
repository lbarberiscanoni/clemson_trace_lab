import React from "react";
import ReactDOM from "react-dom";

class Student extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
            	<img src={this.props.profilePic} />
            	<h3> {this.props.studentName} </h3>
            	<p> {this.props.studentDesc} </p>
            </div>
        )
    }
}

export default Student