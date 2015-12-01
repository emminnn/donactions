const {
  Router,
  Route,
  IndexRoute,
  history
} = ReactRouter;

const browserHistory = history.createHistory()

Routes = React.createClass({
  getInitialState: function() {
    return {};
  },
  render: function () {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute name="index" component={Index}/>
          <Route name="all_actions" path="actions" component={Actions} />
          <Route name="the_action" path="action/:id" component={AnAction} />
          <Route name="insert_action" path="insert" component={InsertAction} />
          <Route name="edit_action" path="edit/action/:id" component={EditAction} />
        </Route>
      </Router>
    );
  }
});
