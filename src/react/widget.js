// namespace react

let React = require('react');
var WidgetRegistry = require('../widget/widget-registry');

module.exports = React.createClass({
    render: function () {
        let widget = WidgetRegistry.get(this.props.type);
        let WidgetComponent = require('./widget/' + widget.getType());

        return React.createElement(WidgetComponent, {data: widget.getData()});
    }
});
