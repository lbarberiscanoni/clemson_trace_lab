"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResearchStudy = function (_React$Component) {
    _inherits(ResearchStudy, _React$Component);

    function ResearchStudy(props) {
        _classCallCheck(this, ResearchStudy);

        return _possibleConstructorReturn(this, (ResearchStudy.__proto__ || Object.getPrototypeOf(ResearchStudy)).call(this, props));
    }

    _createClass(ResearchStudy, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "card" },
                _react2.default.createElement(
                    "div",
                    { className: "card-body" },
                    _react2.default.createElement(
                        "h5",
                        { className: "card-title" },
                        " ",
                        this.props.title,
                        " "
                    ),
                    _react2.default.createElement(
                        "h6",
                        { className: "card-subtitle text-muted" },
                        " ",
                        this.props.collaborators,
                        " "
                    ),
                    _react2.default.createElement(
                        "p",
                        { className: "card-text" },
                        " ",
                        this.props.desc,
                        " "
                    )
                )
            );
        }
    }]);

    return ResearchStudy;
}(_react2.default.Component);

exports.default = ResearchStudy;