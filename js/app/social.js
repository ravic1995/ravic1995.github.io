var React = require('react');

var Social = React.createClass({
  render: function() {
    return (
      <a target="_blank" href={this.props.link}><img src={this.props.icon} /></a>
    );
  }
});

module.exports = Social;
