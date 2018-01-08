import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar";
import Student from "./Student";
import Publication from "./Publication";
import Research from "./Research";

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            location: "home",
            students: [
                {"name": "Lorenzo","pic": "http://cdn.cnn.com/cnnnext/dam/assets/161201115958-68-year-in-pictures-2016-restricted-super-169.jpg", "description": "Lorenzo is a nice guy"}
            ],
            publications: [
                {"title": "pub 1", "desc": "a desc", "link": "google homepage", "url": "www.google.com"}
            ],
            research: [
                {"title": "res 1", "desc": "a desc for res 1", "date": "soon", "contributors": "your name here"}
            ]
        }
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
                            <center>
                                <h3>Assistant Professor of Human-Centered Computing,</h3>
                                <h3>Director of TRACE Research Group,</h3>
                                <h3>Clemson University</h3>
                                <img src="https://nathanmcneese.weebly.com/uploads/1/2/6/1/12617833/published/_7200551.jpg" />
                            </center>
                            <p></p>
                            
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
                        <div className="container">
                            {studentList}
                        </div>
                    </div>
                )
                break;
            case "publications":
                let publicationsList = []
                this.state.publications.map((x) => { 
                    let publication = <Publication title = {x.title} desc = {x.desc} link = {x.link} url = {x.url} />
                    publicationsList.push(publication)
                })
                return(
                    <div>
                        <NavBar changeLocation = { this.navigate.bind(this) } />
                        <div className="container">
                            {publicationsList}
                        </div>
                    </div>
                )
                break;
            case "research":
                let researchList = []
                this.state.research.map((x) => {
                    let researchItem = <Research title = {x.title} desc = {x.desc} date = {x.date} contributors = {x.contributors}/>
                    researchList.push(researchItem)
                })
                return(
                    <div>
                        <NavBar changeLocation = { this.navigate.bind(this) } />
                        <div className="container">
                            {researchList}
                        </div>
                    </div>
                )
                break;
        }
    }
}

ReactDOM.render(<Main />, document.getElementById("main"))
