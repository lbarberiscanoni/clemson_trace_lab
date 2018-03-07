import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar";
import Student from "./Student";
import Publication from "./Publication";
import ResearchStudy from "./ResearchStudy";
import Publications from "./Publications";
import data from "../data/mcneeseData.json";
import Events from "./Events";

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = data;
        this.state.location = "home";
        console.log(this.state);

    } 

    navigate(newLocation) {
        let a = newLocation.toLowerCase();
        this.setState({"location": a})
    }

    render() {
        switch(this.state.location) {
            case "home":
                return(
                    <div>
                        <NavBar changeLocation = { this.navigate.bind(this) } />
                        <div className="container">
                            <h3>TRACE Research Group</h3>
                            <p>The TRACE (Team Research Analytics in Computational Environments) research group was founded in 2017 at Clemson University's School of Computing by Dr. Nathan J. McNeese. The group conducts research on Team Decision Making, Cognition, Human Computer Interaction, and Computer Supported Collaborative Work. Dr. McNeese and his cross-disciplinary team of faculty, graduate and undergraduate students are exploring the study of team cognition and technology, the study of human-machine teaming, the development and design of human-centered tools and systems, continued development and refinement of cognitive engineering methods, context specific measurement of team cognition, the interplay between team interaction and team cognition, the development and application of unmanned aerial vehicles, and human-robot interaction. Dr. McNeese brings his prior research in healthcare systems, homeland security, command and control, emergency crisis management, and educational learning to the table, augmenting his ability to conduct high quality research and catalyst his assistants' development through mentoring. Recently funded efforts have been supported by the Office of Naval Research (ONR) and the Air Force Office of Scientific Research (AFOSR).</p>
                            <p>The group is growing and a team of approximately 10 graduate and undergraduate students, and over 30 faculty collaborators support the TRACE research group per year. In addition to a large team of support, the group also affords many capabilities to support empirical research in teamwork and collaborative technologies. Specifically, the group has access to two independent research laboratory spaces (each housed in the School of Computing): 
                                <ol>
                                    <li>The empirical research laboratory, supported by a large open concept multimedia conference room and multiple experimental workstations (4) outfitted with multiple teamwork empirical testbeds</li>
                                    <li>A collaborative design studio with space dedicated to the design and development of varying types of collaborative technologies. Additional resources include access to a wide variety of services provided by the Information Technology division of the Clemson School of Computing. Also funded by the School of Computing, the TRACE lab is secured with an electronic safety monitoring system and user access controls.</li>
                                 </ol>
                            </p>

                        </div>
                    </div>
                )
                break;
            case "students":
                let studentList = []
                this.state.students.map((x) => { 
                    let profile = <Student profilePic = {x.pic} studentName = {x.name} studentDesc = {x.description} />
                    studentList.push(profile)
                })
                return(
                    <div>
                        <NavBar changeLocation = { this.navigate.bind(this) } />
                        <div className="container">
                            {studentList}
                        </div>
                    </div>
                )
                break;
            case "publications":
                return(
					<div>
						<NavBar changeLocation = { this.navigate.bind(this) } />
						<div className="container">
							<Publications />
						</div>
                    </div>
				)
                break;
            case "research":
                let currentResearchList = []
                this.state.currentResearch.map((x) => {
                    let researchItem = <ResearchStudy title = {x.title} desc = {x.desc} collaborators = {x.collaborators} />
                    currentResearchList.push(researchItem)
                })
                let pastResearchList = []
                this.state.pastResearch.map((x) => {
                    let researchItem = <ResearchStudy title = {x.title} desc = {x.desc} collaborators = {x.collaborators} />
                    pastResearchList.push(researchItem)
                })
                return(
                    <div>
                        <NavBar changeLocation = { this.navigate.bind(this) } />
                        <div className="container">
                            <h2>Current Projects</h2>
                            <div className="row">
                                { currentResearchList }
                            </div>
                            <h2>Previous Projects</h2>
                            <div className="row">
                                { pastResearchList }
                            </div>
                        </div>
                    </div>
                )
                break;
        }
    }
}

ReactDOM.render(<Main />, document.getElementById("main"))
