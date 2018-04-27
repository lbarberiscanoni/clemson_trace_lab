import React from "react";
import ReactDOM from "react-dom";

class Publication extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="card">
              <div className="card-body">
                  { this.props.title && <h5 className="card-title"> {this.props.title} </h5> }
                  <p className="card-text"> { this.props.desc } </p>
                  { this.props.comment && <p className="card-subtitle text-muted"> {this.props.comment} </p> }
                </div>
            </div>
        )
    }
}

export default Publication
