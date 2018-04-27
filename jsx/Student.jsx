import React from "react";
import ReactDOM from "react-dom";

class Student extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="col-md-4">
                <div className="thumbnail">
                    <img src={this.props.profilePic} />
                    <div className="caption">
                        <h3> {this.props.studentName} </h3>
                        <p> {this.props.studentDesc} </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Student
