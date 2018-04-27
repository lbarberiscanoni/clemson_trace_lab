"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Publication = require("./Publication");

var _Publication2 = _interopRequireDefault(_Publication);

var _publications = require("../data/publications.json");

var _publications2 = _interopRequireDefault(_publications);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Publications = function (_React$Component) {
    _inherits(Publications, _React$Component);

    function Publications(props) {
        _classCallCheck(this, Publications);

        var _this = _possibleConstructorReturn(this, (Publications.__proto__ || Object.getPrototypeOf(Publications)).call(this, props));

        _this.state = _publications2.default;
        return _this;
    }

    _createClass(Publications, [{
        key: "render",
        value: function render() {
            var articlesAndChaptersList = [];
            this.state.articlesAndChapters.map(function (x) {
                var publication = _react2.default.createElement(_Publication2.default, { title: x.title, desc: x.desc, comment: x.comment });
                articlesAndChaptersList.push(publication);
            });
            var dissertationList = [];
            this.state.dissertation.map(function (x) {
                var publication = _react2.default.createElement(_Publication2.default, { title: x.title, desc: x.desc, comment: x.comment });
                dissertationList.push(publication);
            });

            var refereedConferencePapersList = [];
            this.state.refereedConferencePapers.map(function (x) {
                var publication = _react2.default.createElement(_Publication2.default, { title: x.title, desc: x.desc, comment: x.comment });
                refereedConferencePapersList.push(publication);
            });

            var workshopPapersList = [];
            this.state.workshopPapers.map(function (x) {
                var publication = _react2.default.createElement(_Publication2.default, { title: x.title, desc: x.desc, comment: x.comment });
                workshopPapersList.push(publication);
            });

            var postersAndTechnicalReportsList = [];
            this.state.postersAndTechnicalReports.map(function (x) {
                var publication = _react2.default.createElement(_Publication2.default, { title: x.title, desc: x.desc, comment: x.comment });
                postersAndTechnicalReportsList.push(publication);
            });
            var panelsList = [];
            this.state.panels.map(function (x) {
                var publication = _react2.default.createElement(_Publication2.default, { title: x.title, desc: x.desc, comment: x.comment });
                panelsList.push(publication);
            });
            return _react2.default.createElement(
                "div",
                { className: "container" },
                _react2.default.createElement(
                    "h3",
                    null,
                    "Selected Publications (most up to date list is in CV)"
                ),
                _react2.default.createElement(
                    "h4",
                    null,
                    _react2.default.createElement(
                        "em",
                        null,
                        "Find pdfs of select papers on my ",
                        _react2.default.createElement(
                            "a",
                            { href: "https://www.researchgate.net/profile/Nathan_Mcneese" },
                            "ResearchGate Profile"
                        )
                    )
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "* Denotes a student advisee"
                ),
                _react2.default.createElement(
                    "h1",
                    null,
                    "Dissertation (Approved by Committee)"
                ),
                _react2.default.createElement(
                    "div",
                    { className: "row" },
                    dissertationList
                ),
                _react2.default.createElement(
                    "h1",
                    null,
                    "Journal Articles & Book Chapters:\u200B"
                ),
                _react2.default.createElement(
                    "div",
                    { className: "row" },
                    articlesAndChaptersList
                ),
                _react2.default.createElement(
                    "h1",
                    null,
                    "Refereed Conference Papers"
                ),
                _react2.default.createElement(
                    "div",
                    { className: "row" },
                    refereedConferencePapersList
                ),
                _react2.default.createElement(
                    "h1",
                    null,
                    "Workshop Papers (Peer Reviewed)"
                ),
                _react2.default.createElement(
                    "div",
                    { className: "row" },
                    workshopPapersList
                ),
                _react2.default.createElement(
                    "h1",
                    null,
                    "Posters & Technical Reports"
                ),
                _react2.default.createElement(
                    "div",
                    { className: "row" },
                    postersAndTechnicalReportsList
                ),
                _react2.default.createElement(
                    "h1",
                    null,
                    "Panels"
                ),
                _react2.default.createElement(
                    "div",
                    { className: "row" },
                    panelsList
                )
            );
        }
    }]);

    return Publications;
}(_react2.default.Component);

exports.default = Publications;