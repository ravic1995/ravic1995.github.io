var React = require('react');
var Link = require('react-router').Link;

var MenuItem = React.createClass({
  handleClick: function(event) {
    this.props.onSelect(this.props.uid);
  },
  collapseMenu: function() {
    $('.navbar-collapse').removeClass('in');
  },
  render: function() {
    var className = this.props.active ? 'active' : null;
    return (
      <li className={className} onClick={this.collapseMenu}>
        <Link to={this.props.uid} onClick={this.handleClick}>{this.props.name}</Link>
      </li>
    );
  }
});

var Menu = React.createClass({
  getDefaultProps: function() {
    return {
      menuItems: [
        {uid: 'index', name: 'About Me'}
      ]
    };
  },
  getInitialState: function() {
    return {
      activeLink: 'index'
    };
  },
  componentDidMount: function() {
    $('.collapse').click(function(e) {
      $(this).toggleClass('open')
      e.preventDefault()
      $('.menu').slideToggle(150)
    })
    if(window.matchMedia("(max-width: 767px)").matches) {
      $('.menu a').click(function(e) {
        $('.menu').slideUp(150)
        $('.collapse').removeClass('open')
      })
    }
  },
  setActiveMenuItem: function(uid) {
    this.setState({activeLink: uid});
  },
  render: function() {
    var menuItems = this.props.menuItems.map(function(menuItem) {
      return (
        <MenuItem
          active={this.state.activeMenuItemUid === menuItem.uid}
          key={menuItem.uid}
          onSelect={this.setActiveMenuItem}
          uid={menuItem.uid}
          name={menuItem.name}
        />
      );
    }.bind(this));
    return (
      <div className="menu-container">
        <ul className="menu">
          {menuItems}
          <li><a href="data/CV_Raviprakash_Chandak.pdf" target="_blank">Resume</a></li>
        </ul>
      </div>
    )
  }
});

var Header = React.createClass({
  render: function() {
    return(
      <nav>
        <div className="container">
          <div>
            <div className="menu-container">
            <ul className="menu"><li><a href="#/" class="active" >Raviprakash Chandak</a></li> </ul>
            </div>
            <a href="#" className="collapse visible-xs"><span></span></a>
            <Menu/>
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = Header;
