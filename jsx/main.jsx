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
