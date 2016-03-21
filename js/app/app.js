var React = require('react');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;


var AboutPage = require('./about');
var ContactPage = require('./contact');
var Socials = require('./socials');
var Header = require('./header')
var Footer = require('./footer')

var PageUp = React.createClass({
  render: function () {
    return <div className="hidden-xs" id="pageup"></div>
  }
});

var App = React.createClass({
  render: function () {
    return (
      <div>
        <PageUp/>
        <Header/>
        <Socials/>
        <div className="content">
          <RouteHandler/>
        </div>
        <Footer/>
      </div>
    );
  }
});

var Index = React.createClass({
  render: function () {
    return <AboutPage />
  }
});


var Contact = React.createClass({
  render: function () {
    return <ContactPage url="data/contact.json"/>
  }
});

var Contributions = React.createClass({
  render: function () {
    return <ContributionsPage url="data/contributions.json"/>
  }
});

var routes = (
  <Route handler={App}>
    <DefaultRoute name="index" handler={Index}/>
    <Route name="contributions" path="contributions" handler={Contributions}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
