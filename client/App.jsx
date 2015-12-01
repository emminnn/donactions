App = React.createClass({
  getInitialState: function() {
    return {};
  },
  render: function () {
    return (
      <div className="container">
        <nav>
          <div className="nav-wrapper col s12 m8 l6">
            <div className="brand-logo"><ReactRouter.Link to="/">DonActions</ReactRouter.Link></div>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><ReactRouter.Link to="/actions">All Actions</ReactRouter.Link></li>
              <li><ReactRouter.Link to="/insert">New Action</ReactRouter.Link></li>
            </ul>
          </div>
        </nav>

        <div className="col s12 m8 l6">              
          {this.props.children}
        </div>
      </div>
    );
  }
});
