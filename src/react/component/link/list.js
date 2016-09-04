// namespace react.component.link

let React = require('react');
let Link = require('./link');

module.exports = React.createClass({
    render: function () {
        return (
            <div className="ui relaxed divided large selection list">
                { this._renderLinks() }
            </div>
        );
    },

    _renderLinks: function () {
        if (0 === this.props.links.length) {
            return (
                <p>Nothing to display</p>
            );
        }

        return this.props.links.map(function (link) {
            return (
                <Link {...link} />
            );
        })
    }
});
