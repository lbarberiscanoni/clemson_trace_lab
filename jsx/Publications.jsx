import React from "react";
import ReactDOM from "react-dom";
import Publication from "./Publication";
import data from "../data/publications.json";

class Publications extends React.Component {
    constructor(props) {
        super(props)
		this.state = data;
    }

    render() {
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
      <div className="container">
				<h3>Selected Publications (most up to date list is in CV)</h3>
				<h4><em>Find pdfs of select papers on my <a href="https://www.researchgate.net/profile/Nathan_Mcneese">ResearchGate Profile</a></em></h4>
				<p>* Denotes a student advisee</p>
				<h1>Dissertation (Approved by Committee)</h1>
        <div className="row">
				    {dissertationList}
        </div>
				<h1>Journal Articles & Book Chapters:​</h1>
        <div className="row">
				    {articlesAndChaptersList}
        </div>
				<h1>Refereed Conference Papers</h1>
        <div className="row">
				    {refereedConferencePapersList}
        </div>
				<h1>Workshop Papers (Peer Reviewed)</h1>
        <div className="row">
				    {workshopPapersList}
        </div>
				<h1>Posters & Technical Reports</h1>
        <div className="row">
				    {postersAndTechnicalReportsList}
        </div>
				<h1>Panels</h1>
        <div className="row">
				    {panelsList}
        </div>
      </div>
        )
    }
}

export default Publications
