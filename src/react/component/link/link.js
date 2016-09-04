// namespace react.component.link

let React = require('react');
let Icon = require('../icon');

module.exports = React.createClass({
    render: function () {
        return (
            <div className="item">
                <Icon {...this.props.icon} />
                <div className="content">
                    <a className="header" href={ this.props.url }>{ this.props.title }</a>
                    <div className="description">{ this.props.description }</div>
                </div>
            </div>
        );
    }
});
