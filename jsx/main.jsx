import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar";
import Student from "./Student";
import Publication from "./Publication";
import Research from "./Research";
import data from "../data/mcneeseData.json";

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

                let articlesAndChaptersList = []
                this.state.articlesAndChapters.map((x) => { 
                    let publication = <Publication title = {x.title} desc = {x.desc} comment = {x.comment}/>
                    articlesAndChaptersList.push(publication)
                })
                let dissertationList = []
                this.state.dissertation.map((x) => { 
                    let publication = <Publication title = {x.title} desc = {x.desc} comment = {x.comment}/>
                    dissertationList.push(publication)
                })
                
                let refereedConferencePapersList = []
                this.state.refereedConferencePapers.map((x) => { 
                    let publication = <Publication title = {x.title} desc = {x.desc} comment = {x.comment}/>
                    refereedConferencePapersList.push(publication)
                })
                
                let workshopPapersList = []
                this.state.workshopPapers.map((x) => { 
                    let publication = <Publication title = {x.title} desc = {x.desc} comment = {x.comment}/>
                    workshopPapersList.push(publication)
                })
                
                let postersAndTechnicalReportsList = []
                this.state.postersAndTechnicalReports.map((x) => { 
                    let publication = <Publication title = {x.title} desc = {x.desc} comment = {x.comment}/>
                    postersAndTechnicalReportsList.push(publication)
                })
                                
                let panelsList = []
                this.state.panels.map((x) => { 
                    let publication = <Publication title = {x.title} desc = {x.desc} comment = {x.comment}/>
                    panelsList.push(publication)
                })
                return(
                    <div>
                        <NavBar changeLocation = { this.navigate.bind(this) } />
                        <div className="container">
                            <h2>Selected Publications (most up to date list is in CV)</h2>
                            <h3><em>Find pdfs of select papers on my <a href="https://www.researchgate.net/profile/Nathan_Mcneese">ResearchGate Profile</a></em></h3>
                            <p>* Denotes a student advisee</p>
                            <h1>Dissertation (Approved by Committee)</h1>
                            {dissertationList}
                            <h1>Journal Articles & Book Chapters:​</h1>
                            {articlesAndChaptersList}
                            <h1>Refereed Conference Papers</h1>
                            {refereedConferencePapersList}
                            <h1>Workshop Papers (Peer Reviewed)</h1>
                            {workshopPapersList}
                            <h1>Posters & Technical Reports</h1>
                            {postersAndTechnicalReportsList}
                            <h1>Panels</h1>
                            {panelsList}
                        </div>
                    </div>
                )
                break;
            case "research":
                let currentResearchList = []
                this.state.currentResearch.map((x) => {
                    let researchItem = <Research title = {x.title} desc = {x.desc} collaborators = {x.collaborators} />
                    currentResearchList.push(researchItem)
                })
                let pastResearchList = []
                this.state.pastResearch.map((x) => {
                    let researchItem = <Research title = {x.title} desc = {x.desc} collaborators = {x.collaborators} />
                    pastResearchList.push(researchItem)
                })
                return(
                    <div>
                        <NavBar changeLocation = { this.navigate.bind(this) } />
                        <div className="container">
                            <h2>Current Projects</h2>
                            {currentResearchList}
                            <h2>Previous Projects</h2>
                            {pastResearchList}
                        </div>
                    </div>
                )
                break;
        }
    }
}

ReactDOM.render(<Main />, document.getElementById("main"))
