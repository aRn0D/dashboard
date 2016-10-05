// namespace react/widget

let React = require('react');
let Box = require('../component/box');
let CardList = require('../component/card/list');

module.exports = React.createClass({
    render: function() {
        return (
            <Box title="Useful links">
                <CardList cards={ this.props.data } size="two" />
            </Box>
        )
    }
});

