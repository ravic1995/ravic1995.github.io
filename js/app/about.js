var React = require('react');
var LoadJSON = require('./mixins').LoadJSON;
var File = require("../../data/skills.json");

var InfoContainer = React.createClass({
  mixins: [LoadJSON],
  render: function() {
    return(
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 info-container">
          {/*<div className="col-lg-2 col-md-3 col-sm-4 col-xs-12 nopad">*/}
          {/*  <img className="img-responsive" src={this.state.data.thumbnail} />*/}
          {/*</div>*/}
          <div className="col-lg-10 col-md-9 col-sm-8 col-xs-12">
            <p className="myself">{this.state.data.text}</p>
          </div>
        </div>
      </div>
    );
  }
});

var Skills = React.createClass({
  render: function() {
    var data = this.props.skills;
    var skills = [];
    console.log(data);
    for(var key in data) {
      skills.push(<li><img height="100" src={data[key]} alt={key} /></li>);
    }
    return(
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 skills">
        <ul>
          {skills}
        </ul>
      </div>
    );
  }
});

var SkillsContainer = React.createClass({
  mixins: [LoadJSON],
  // var a = fetch("data/skills.json");
  render: function() {
  console.log( "A", File);
    return(
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 skills-container">
        <h2>&#60; Skills &#47;&#62;</h2>
        <Skills skills={File} />
      </div>
    );
  }
});

var AboutContent = React.createClass({
  render: function() {
    return(
      <div className="container" id="aboutcontainer">
        <InfoContainer url="data/about.json" />
        <SkillsContainer url="data/skills.json" />
      </div>
    );
  }
});

module.exports = AboutContent;
