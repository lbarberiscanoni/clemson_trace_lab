"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _NavBar = require("./NavBar");

var _NavBar2 = _interopRequireDefault(_NavBar);

var _Student = require("./Student");

var _Student2 = _interopRequireDefault(_Student);

var _Publication = require("./Publication");

var _Publication2 = _interopRequireDefault(_Publication);

var _Research = require("./Research");

var _Research2 = _interopRequireDefault(_Research);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_React$Component) {
    _inherits(Main, _React$Component);

    function Main(props) {
        _classCallCheck(this, Main);

        var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

        _this.state = {
            location: "home",
            students: [{ "name": "Lorenzo", "pic": "http://cdn.cnn.com/cnnnext/dam/assets/161201115958-68-year-in-pictures-2016-restricted-super-169.jpg", "description": "Lorenzo is a nice guy" }],
            publications: [{ "title": "pub 1", "desc": "a desc", "link": "google homepage", "url": "www.google.com" }],
            research: [{ "title": "res 1", "desc": "a desc for res 1", "date": "soon", "contributors": "your name here" }]
        };
        return _this;
    }

    _createClass(Main, [{
        key: "navigate",
        value: function navigate(newLocation) {
            var a = newLocation.toLowerCase();

            this.setState({ "location": a });
        }
    }, {
        key: "render",
        value: function render() {
            switch (this.state.location) {
                case "home":
                    return _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(_NavBar2.default, { changeLocation: this.navigate.bind(this) }),
                        _react2.default.createElement(
                            "div",
                            { className: "container" },
                            _react2.default.createElement(
                                "center",
                                null,
                                _react2.default.createElement(
                                    "h3",
                                    null,
                                    "Assistant Professor of Human-Centered Computing,"
                                ),
                                _react2.default.createElement(
                                    "h3",
                                    null,
                                    "Director of TRACE Research Group,"
                                ),
                                _react2.default.createElement(
                                    "h3",
                                    null,
                                    "Clemson University"
                                ),
                                _react2.default.createElement("img", { src: "https://nathanmcneese.weebly.com/uploads/1/2/6/1/12617833/published/_7200551.jpg" })
                            ),
                            _react2.default.createElement("p", null),
                            _react2.default.createElement(
                                "p",
                                null,
                                "Greetings! I am an Assistant Professor and Director of the Team Research Analytics in Computational Environments (TRACE) Research Group within the division of Human-Centered Computing in the School of Computing at Clemson University. I received my PhD in Information Sciences & Technology with a focus on Team Decision Making, Cognition, and Computer Supported Collaborative Work from The Pennsylvania State University in the fall of 2014."
                            ),
                            _react2.default.createElement(
                                "p",
                                null,
                                "After graduation, I accepted a position to be a Postdoctoral Scholar and Research Associate in Human Systems Engineering at Arizona State University working directly with Dr. Nancy Cooke."
                            ),
                            _react2.default.createElement(
                                "p",
                                null,
                                "My research interests are wide ranging and interdisciplinary, but can be generally linked to the integration of"
                            ),
                            _react2.default.createElement(
                                "em",
                                null,
                                _react2.default.createElement(
                                    "ul",
                                    null,
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        "Human Factors"
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        "Human Computer Interaction"
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        "Computer Supported Cooperative Work"
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        "Information Sciences"
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                "p",
                                null,
                                "For over 10 years, I have conducted research on many topics within a variety of different contexts. My current research interests span across the study of individual and team cognition, the development and design of human-centered tools and systems, continued development and refinement of cognitive engineering methods, context specific measurement of team cognition, the interplay between team interaction and team cognition, the development and application of unmanned aerial vehicles, and human robot interaction. Specific contexts that I have conducted my research in: ",
                                _react2.default.createElement(
                                    "em",
                                    null,
                                    "healthcare systems, homeland security, command and control, emergency crisis management"
                                ),
                                ", and ",
                                _react2.default.createElement(
                                    "em",
                                    null,
                                    "educational learning"
                                ),
                                ". Throughout all of my research, I typically use multiple mixed methods to understand the context, work, and roles specific to the development of individual and team cognition. As a result of my work, my research has been published multiple times in numerous research communities."
                            ),
                            _react2.default.createElement(
                                "p",
                                null,
                                _react2.default.createElement(
                                    "strong",
                                    null,
                                    "Research Interests & Expertise:"
                                ),
                                " Human factors, team decision-making, human-computer interaction, computer-supported cooperative work, team cognition, cognitive science, usability research and design, collaborative system design, human-centered design, team mental models, mental models, collaboration, collaborative information seeking, cognitive task analysis, knowledge elicitation, human autonomy teaming, healthcare systems, big data, simulations, cybersecurity"
                            ),
                            _react2.default.createElement(
                                "p",
                                null,
                                _react2.default.createElement(
                                    "strong",
                                    null,
                                    "Research Methods:"
                                ),
                                " A/B testing, card sorting, cognitive walkthrough, concept mapping, contextual inquiry, ethnography, experimental design, focus groups, heuristic evaluation, interviewing, personas, prototyping, scenarios, surveying, task analysis, usability testing, wireframing"
                            )
                        )
                    );
                    break;
                case "students":
                    var studentList = [];
                    this.state.students.map(function (x) {
                        var profile = _react2.default.createElement(_Student2.default, { profilePic: x.pic, studentName: x.name, studentDesc: x.description });
                        studentList.push(profile);
                    });

                    return _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(_NavBar2.default, { changeLocation: this.navigate.bind(this) }),
                        _react2.default.createElement(
                            "div",
                            { className: "container" },
                            studentList
                        )
                    );
                    break;
                case "publications":
                    var publicationsList = [];
                    this.state.publications.map(function (x) {
                        var publication = _react2.default.createElement(_Publication2.default, { title: x.title, desc: x.desc, link: x.link, url: x.url });
                        publicationsList.push(publication);
                    });
                    return _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(_NavBar2.default, { changeLocation: this.navigate.bind(this) }),
                        _react2.default.createElement(
                            "div",
                            { className: "container" },
                            publicationsList
                        )
                    );
                    break;
                case "research":
                    var researchList = [];
                    this.state.research.map(function (x) {
                        var researchItem = _react2.default.createElement(_Research2.default, { title: x.title, desc: x.desc, date: x.date, contributors: x.contributors });
                        researchList.push(researchItem);
                    });
                    return _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(_NavBar2.default, { changeLocation: this.navigate.bind(this) }),
                        _react2.default.createElement(
                            "div",
                            { className: "container" },
                            researchList
                        )
                    );
                    break;
            }
        }
    }]);

    return Main;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(Main, null), document.getElementById("main"));