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

var _Publications = require("./Publications");

var _Publications2 = _interopRequireDefault(_Publications);

var _Research = require("./Research");

var _Research2 = _interopRequireDefault(_Research);

var _mcneeseData = require("../data/mcneeseData.json");

var _mcneeseData2 = _interopRequireDefault(_mcneeseData);

var _Events = require("./Events");

var _Events2 = _interopRequireDefault(_Events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_React$Component) {
    _inherits(Main, _React$Component);

    function Main(props) {
        _classCallCheck(this, Main);

        var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

        _this.state = _mcneeseData2.default;
        _this.state.location = "home";
        console.log(_this.state);

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
                                "h3",
                                null,
                                "TRACE Research Group"
                            ),
                            _react2.default.createElement(
                                "p",
                                null,
                                "The TRACE (Team Research Analytics in Computational Environments) research group was founded in 2017 at Clemson University's School of Computing by Dr. Nathan J. McNeese. The group conducts research on Team Decision Making, Cognition, Human Computer Interaction, and Computer Supported Collaborative Work. Dr. McNeese and his cross-disciplinary team of faculty, graduate and undergraduate students are exploring the study of team cognition and technology, the study of human-machine teaming, the development and design of human-centered tools and systems, continued development and refinement of cognitive engineering methods, context specific measurement of team cognition, the interplay between team interaction and team cognition, the development and application of unmanned aerial vehicles, and human-robot interaction. Dr. McNeese brings his prior research in healthcare systems, homeland security, command and control, emergency crisis management, and educational learning to the table, augmenting his ability to conduct high quality research and catalyst his assistants' development through mentoring. Recently funded efforts have been supported by the Office of Naval Research (ONR) and the Air Force Office of Scientific Research (AFOSR)."
                            ),
                            _react2.default.createElement(
                                "p",
                                null,
                                "The group is growing and a team of approximately 10 graduate and undergraduate students, and over 30 faculty collaborators support the TRACE research group per year. In addition to a large team of support, the group also affords many capabilities to support empirical research in teamwork and collaborative technologies. Specifically, the group has access to two independent research laboratory spaces (each housed in the School of Computing):",
                                _react2.default.createElement(
                                    "ol",
                                    null,
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        "The empirical research laboratory, supported by a large open concept multimedia conference room and multiple experimental workstations (4) outfitted with multiple teamwork empirical testbeds"
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        "A collaborative design studio with space dedicated to the design and development of varying types of collaborative technologies. Additional resources include access to a wide variety of services provided by the Information Technology division of the Clemson School of Computing. Also funded by the School of Computing, the TRACE lab is secured with an electronic safety monitoring system and user access controls."
                                    )
                                )
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
                    return _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(_NavBar2.default, { changeLocation: this.navigate.bind(this) }),
                        _react2.default.createElement(
                            "div",
                            { className: "container" },
                            _react2.default.createElement(_Publications2.default, null)
                        )
                    );
                    break;
                case "research":
                    var currentResearchList = [];
                    this.state.currentResearch.map(function (x) {
                        var researchItem = _react2.default.createElement(_Research2.default, { title: x.title, desc: x.desc, collaborators: x.collaborators });
                        currentResearchList.push(researchItem);
                    });
                    var pastResearchList = [];
                    this.state.pastResearch.map(function (x) {
                        var researchItem = _react2.default.createElement(_Research2.default, { title: x.title, desc: x.desc, collaborators: x.collaborators });
                        pastResearchList.push(researchItem);
                    });
                    return _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(_NavBar2.default, { changeLocation: this.navigate.bind(this) }),
                        _react2.default.createElement(
                            "div",
                            { className: "container" },
                            _react2.default.createElement(
                                "h2",
                                null,
                                "Current Projects"
                            ),
                            currentResearchList,
                            _react2.default.createElement(
                                "h2",
                                null,
                                "Previous Projects"
                            ),
                            pastResearchList
                        )
                    );
                    break;
            }
        }
    }]);

    return Main;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(Main, null), document.getElementById("main"));