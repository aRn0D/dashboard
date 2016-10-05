// namespace react.component.card

let React = require('react');
let classnames = require('classnames');
let Card = require('./card');

module.exports = React.createClass({
   render: function() {
       return (
           <div className={ classnames('ui grid', this.props.size, 'column') }>
               {
                   this.props.cards.map(function (card) {
                       return (
                           <Card {...card} />
                       );
                   })
               }
           </div>
       );
   }
});
