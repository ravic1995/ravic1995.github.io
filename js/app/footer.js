var React = require('react');
var Social = require('./social');

var Footer = React.createClass({
  render: function() {
    return(
      <div className="footer visible-xs">
        <div className="container">
          <div className="footer-container">
            <div className="menu-container">
            <ul className="menu">
            <li>
            <a href="#/" class="active" >Ravi Chandak</a>
            </li> 
            </ul>
            </div>
            <div className="footer-socials">
              <Social link="mailto:r.c@u.nus.edu" icon="img/email-white.png" />
              <Social link="https://github.com/ravic1995" icon="img/gith-white.png" />
              <Social link="https://sg.linkedin.com/in/ravi-chandak-28825524" icon="img/link-white.png" />
              <Social link="https://www.facebook.com/ravic1995" icon="img/face-white.png" />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Footer;
