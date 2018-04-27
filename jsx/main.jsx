import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar";
import Student from "./Student";
import Publication from "./Publication";
import ResearchStudy from "./ResearchStudy";
import AboutMcNeese from "./AboutMcNeese";
import Publications from "./Publications";
import data from "../data/mcneeseData.json";
import mcneeseAbout from "../data/mcneeseAbout.json";
import Events from "./Events";
import Blog from "./Blog";

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
                            <h2 className="text-center">TRACE Research Group</h2>
                            <div className="col-md-3">
                                <h4 className="text-center">Events Coming Up</h4>
                                <Events eventList={ data["events"] } />
                            </div>
                            <div className="col-md-6">
                                <img src="https://i.imgur.com/vOSylvW.png" class="center"/>
                                <p>The TRACE (Team Research Analytics in Computational Environments) research group was founded in 2017 at Clemson University's School of Computing by Dr. Nathan J. McNeese. The group conducts research on Team Decision Making, Cognition, Human Computer Interaction, and Computer Supported Collaborative Work. Dr. McNeese and his cross-disciplinary team of faculty, graduate and undergraduate students are exploring the study of team cognition and technology, the study of human-machine teaming, the development and design of human-centered tools and systems, continued development and refinement of cognitive engineering methods, context specific measurement of team cognition, the interplay between team interaction and team cognition, the development and application of unmanned aerial vehicles, and human-robot interaction. Dr. McNeese brings his prior research in healthcare systems, homeland security, command and control, emergency crisis management, and educational learning to the table, augmenting his ability to conduct high quality research and catalyst his assistants' development through mentoring. Recently funded efforts have been supported by the Office of Naval Research (ONR) and the Air Force Office of Scientific Research (AFOSR).</p>
                                <p>The group is growing and a team of approximately 10 graduate and undergraduate students, and over 30 faculty collaborators support the TRACE research group per year. In addition to a large team of support, the group also affords many capabilities to support empirical research in teamwork and collaborative technologies. Specifically, the group has access to two independent research laboratory spaces (each housed in the School of Computing):
                                    <ol>
                                        <li>The empirical research laboratory, supported by a large open concept multimedia conference room and multiple experimental workstations (4) outfitted with multiple teamwork empirical testbeds</li>
                                        <li>A collaborative design studio with space dedicated to the design and development of varying types of collaborative technologies. Additional resources include access to a wide variety of services provided by the Information Technology division of the Clemson School of Computing. Also funded by the School of Computing, the TRACE lab is secured with an electronic safety monitoring system and user access controls.</li>
                                     </ol>
                                </p>
                            </div>
                            <div className="col-md-3">
                                <Blog blogList={ data["blog_posts"] } />
                            </div>
                        </div>
                    </div>
                )
                break;
            case "dr. mcneese":
                return(
                    <div>
                        <NavBar changeLocation = { this.navigate.bind(this) } />
                        <div className="container">
                            <center>
                                <h2 className="mcneese-title">Assistant Professor of Human-Centered Computing,</h2>
                                <h2 className="mcneese-title">Director of TRACE Research Group,</h2>
                                <h2 className="mcneese-title">Clemson University</h2>
                                <h2></h2>
                            </center>
                            <p></p>
                            <img src="https://nathanmcneese.weebly.com/uploads/1/2/6/1/12617833/published/_7200551.jpg" className="face" />
                            <p>Greetings! I am an Assistant Professor and Director of the Team Research Analytics in Computational Environments (TRACE) Research Group within the division of Human-Centered Computing in the School of Computing at Clemson University. I received my PhD in Information Sciences & Technology with a focus on Team Decision Making, Cognition, and Computer Supported Collaborative Work from The Pennsylvania State University in the fall of 2014.</p>
                            <p>After graduation, I accepted a position to be a Postdoctoral Scholar and Research Associate in Human Systems Engineering at Arizona State University working directly with Dr. Nancy Cooke.</p>
                            <p>My research interests are wide ranging and interdisciplinary, but can be generally linked to the integration of</p>
                            <em><ul>
                              <li>Human Factors</li>
                              <li>Human Computer Interaction</li>
                              <li>Computer Supported Cooperative Work</li>
                              <li>Information Sciences</li>
                            </ul></em>
                            <p>For over 10 years, I have conducted research on many topics within a variety of different contexts. My current research interests span across the study of individual and team cognition, the development and design of human-centered tools and systems, continued development and refinement of cognitive engineering methods, context specific measurement of team cognition, the interplay between team interaction and team cognition, the development and application of unmanned aerial vehicles, and human robot interaction. Specific contexts that I have conducted my research in: <em>healthcare systems, homeland security, command and control, emergency crisis management</em>, and <em>educational learning</em>. Throughout all of my research, I typically use multiple mixed methods to understand the context, work, and roles specific to the development of individual and team cognition. As a result of my work, my research has been published multiple times in numerous research communities.</p>
                            <p><strong>Research Interests & Expertise:</strong> Human factors, team decision-making, human-computer interaction, computer-supported cooperative work, team cognition, cognitive science, usability research and design, collaborative system design, human-centered design, team mental models, mental models, collaboration, collaborative information seeking, cognitive task analysis, knowledge elicitation, human autonomy teaming, healthcare systems, big data, simulations, cybersecurity</p>
                            <p><strong>Research Methods:</strong> A/B testing, card sorting, cognitive walkthrough, concept mapping, contextual inquiry, ethnography, experimental design, focus groups, heuristic evaluation, interviewing, personas, prototyping, scenarios, surveying, task analysis, usability testing, wireframing</p>
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
                        <p></p>
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
                });
                let pastResearchList = []
                this.state.pastResearch.map((x) => {
                    let researchItem = <ResearchStudy title = {x.title} desc = {x.desc} collaborators = {x.collaborators} />
                    pastResearchList.push(researchItem)
                });
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
