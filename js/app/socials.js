var React = require('react');
var Social = require('./social');

var SocialsContainer = React.createClass({
  componentDidMount: function() {
    $(".socials").find("a").each(function(index, element) {
      $(element).delay(index*180).animate({ 'marginLeft': '0'}, {duration:230, easing: 'swing'});
    })
  },
  render: function() {
    return (
      <div className="socials">
        <Social link="mailto:r.c@u.nus.edu" icon="img/email.png" />
        <Social link="https://github.com/ravic1995" icon="img/gith.png" />
        <Social link="https://sg.linkedin.com/in/ravi-chandak-28825524" icon="img/link.png" />
        <Social link="https://www.facebook.com/ravic1995" icon="img/face.png" />
        <Social link="tel:+6593705603" icon="img/phone.png" />
      </div>
    );
  }
});

module.exports = SocialsContainer;
