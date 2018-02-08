import React from "react";
import ReactDOM from "react-dom";

class Publication extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                { this.props.title && <h3> {this.props.title} </h3> }
                <p> { this.props.desc } </p>
                { this.props.comment && <p> {this.props.comment} </p> }
                <p></p>
            </div>
        )
    }
}

export default Publication
