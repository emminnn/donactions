Index = React.createClass({
  getInitialState: function() {
    return {};
  },
  render: function () {
    return (
      <BlazeTemplate template={Template.loginButtons} btp-index='organisations' btp-test='hi' />
    );
  }
});
