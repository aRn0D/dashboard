// namespace react

let React = require('react');
let Widget = require('./widget');

module.exports = React.createClass({
    render: function () {
        return (
            <div className="ui grid padded">
                <div className="row sixtenn column">
                    <Widget type="pim-installation" />
                </div>
                <div className="row three column">
                    <Widget type="github-repository"/>
                    <Widget type="github-issue"/>
                    <Widget type="github-pull-request"/>
                </div>
            </div>
        )
    }
});
