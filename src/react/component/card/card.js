// namespace react.component.card

let React = require('react');
let classnames = require('classnames');
let Link = require('./link');
let Icon = require('../icon');

module.exports = React.createClass({
    render: function () {
        return (
            <div className="column">
                <div className={ classnames('ui card', this.props.color) }>
                    <div className="content">
                        <div className="header">
                            <Icon icon={ this.props.icon }/>{ this.props.title }
                        </div>
                    </div>
                    <div className="extra content">
                        <Link { ...this.props.links[0] } position="left" />
                        <Link { ...this.props.links[1] } position="right" />
                    </div>
                </div>
            </div>
        );
    }
});
