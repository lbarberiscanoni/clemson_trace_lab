import React from "react";
import ReactDOM from "react-dom";
import Title from "./Title";

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            location: "home"
        }
    } 

    navigate() {
        if (this.state.location == "bro") {
            this.setState({"location": "home"})
        } else {
            this.setState({"location": "bro"})
        }
    }

    render() {
        return(
                <div>
                    <Title message={ this.state.location } />
                    <button onClick={ this.navigate.bind(this) }>Go to Bro </button>
                </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById("main"))
