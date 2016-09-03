let React = require('react');
let ReactDOM = require('react-dom');

let Dashboard = require('./react/dashboard');
let WidgetRegistry = require('./widget/widget-registry');

let widgetCodes = ['pim-installation', 'github-repository', 'github-pull-request', 'github-issue'];
for (let widgetCode of widgetCodes) {
    let Widget = require('./widget/'+widgetCode+'-widget');
    WidgetRegistry.register(Widget.getType(), Widget);
}

ReactDOM.render(<Dashboard />, document.getElementById('dashboard'));
