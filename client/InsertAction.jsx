InsertAction = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData: function() {
    var currentUserId = Meteor.userId;
    return {
      items: MyActions.find({
        added_by: currentUserId
      }).fetch()
    }
  },

  addItem: function(e) {
    e.preventDefault();
    var title = React.findDOMNode(this.refs.actionTitle).value;
    var intro = React.findDOMNode(this.refs.actionIntro).value;
    var category = React.findDOMNode(this.refs.actionCat).value;
    var brief = React.findDOMNode(this.refs.actionBrief).value;

    if (Meteor.userId()) {
      Meteor.call('addAction', title, intro, category, brief);
    } else {
      alert('You have to login first');
    }

    React.findDOMNode(this.refs.actionTitle).value = "";
    React.findDOMNode(this.refs.actionIntro).value = "";
    React.findDOMNode(this.refs.actionBrief).value = "";
    // React.Router.transitionTo('the_action', params={id:this._id});
  },
  render: function () {
    return (
      <div className="container">
        <form onSubmit={this.addItem}>
          <div className="input-field">  
            <i className="small material-icons prefix">mode_edit</i>
            <input type="text" id="titleAct" ref="actionTitle"/>
            <label htmlFor="titleAct">title</label>
          </div>
          <div className="input-field">
            <i className="small material-icons prefix">mode_edit</i>
            <textarea ref="actionIntro" id="introAct" className="materialize-textarea" ></textarea>
            <label htmlFor="introAct">short intro</label>
          </div>
          <div className="input-field">
            <select ref="actionCat" className="browser-default">
              <option value="" disabled="disabled">Category</option>
              <option value="animals">Animals</option>
              <option value="environmental">Environmental</option>
              <option value="international">International</option>
              <option value="health">Health</option>
              <option value="educational">Educational</option>
              <option value="cultural">Cultural</option>
            </select>
          </div>
          <div className="input-field">
            <i className="small material-icons prefix">mode_edit</i>
            <textarea ref="actionBrief" id="briefAct" className="materialize-textarea" ></textarea>
            <label htmlFor="briefAct">large description</label>
          </div>
          <button className="btn-large waves-effect waves-light right" type="submit">Add Action
            <i className="material-icons right">send</i>
          </button>
        </form>
        <ReactRouter.Link to="/">Take me back home</ReactRouter.Link>
      </div>
    );
  }
});