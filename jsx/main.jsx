import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar";

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            location: "home"
        }
    } 

    render() {
        switch(this.state.location) {
            case "home":
                return(
                    <div>
                        <NavBar />
                        <div className="container">
                        </div>
                    </div>
                )
        }
    }
}

ReactDOM.render(<Main />, document.getElementById("main"))
