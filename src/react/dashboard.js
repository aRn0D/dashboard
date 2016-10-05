// namespace react

let React = require('react');
let Widget = require('./widget');

module.exports = React.createClass({
    render: function () {
        return (
            <div className="ui grid padded">
                <div className="ui row three column">
                    <Widget type="useful-link" />
                    <Widget type="pim-installation" />
                    <Widget type="github-repository" />
                </div>
            </div>
        )
    }
});
