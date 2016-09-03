// namespace react.component.card

let React = require('react');
let classnames = require('classnames');
let Icon = require('../icon');

module.exports =  React.createClass({
    render: function() {
        return (
            <span className={ classnames(this.props.position, 'floated') }>
                <a href={ this.props.url }>
                    <Icon icon={ this.props.icon } /> { this.props.label }
                </a>
            </span>
        );
    }
});
