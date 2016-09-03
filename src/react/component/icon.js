// namespace react.component

let React = require('react');
let classnames = require('classnames');

module.exports = React.createClass({
    render: function () {
        return (
            <i className={ classnames('ui icon', this.props.icon, this.props.size, this.props.color) }/>
        );
    }
});
