import React from "react";
import ReactDOM from "react-dom";

class ResearchStudy extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title"> { this.props.title } </h5>
                    <h6 className="card-subtitle text-muted"> { this.props.collaborators } </h6>
                    <p className="card-text"> { this.props.desc } </p>
                </div>
            </div>
        )
    }
}

export default ResearchStudy
