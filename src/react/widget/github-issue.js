// namespace react/widget

let React = require('react');
let Box = require('../component/box');
let LinkList = require('../component/link/list');

module.exports = React.createClass({
   render: function() {
       return (
           <Box title="Github Issues">
               <LinkList links={ this.props.data } />
           </Box>
       )
   }
});

