var React = require('react');
var LoadJSON = require('./mixins').LoadJSON;

var Contact = React.createClass({
  render: function() {
    return(
      <div>
        <div className="part1">{this.props.title}</div>
        <div className="part3">:</div>
        <div className="part2">
        <a href={this.props.url} target="_blank">{this.props.text}</a>
        </div>
      </div>
    );
  }
});

var ContactContainer = React.createClass({
  mixins: [LoadJSON],
  render: function() {
    return(
      <div className="container">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 contact-container">
          <h2>&#60; Contact Me &#47;&#62;</h2>
          <div className="contact-outer">
            {
              this.state.data.map(function(contact, index) {
                return <Contact title={contact.title} url={contact.url} text={contact.text} key={index} />
              })
            }
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ContactContainer;
