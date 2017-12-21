import React from "react";
import ReactDOM from "react-dom";

class Title extends React.Component {
    constructor(props) {
        super(props)
    } 

    render() {
        return(
            <div>
                <h1> Welcome to { this.props.message } </h1>
            </div>
        )
    }
}

export default Title
