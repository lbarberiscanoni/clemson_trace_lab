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
                        _react2.default.createElement("div", { className: "container" })
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