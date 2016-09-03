// namespace react.component

let React = require('react');
let classnames = require('classnames');

module.exports = React.createClass({
    render: function () {
        return (
            <div className={ classnames('wide column', this.props.size) }>
                <h3 className="ui top attached header">
                    { this.props.title }
                </h3>
                <div className="ui attached segment">
                    { this.props.children }
                </div>
            </div>
        );
    }
});
