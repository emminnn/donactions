EditAction = React.createClass({
	mixins: [ReactMeteorData],
  getMeteorData: function() {
    var id = this.props.params.id;
    // var currentUserId = Meteor.userId;
    return {
      theActionToUpd: MyActions.find({
        '_id': id
      }).fetch()
    };  
  },

  updateItem: function(e) {
    e.preventDefault();
    var title = React.findDOMNode(this.refs.actionTitleUpd).value;
    var intro = React.findDOMNode(this.refs.actionIntroUpd).value;
    var brief = React.findDOMNode(this.refs.actionBriefUpd).value;
    var id = this.props.params.id;
    console.log(id);
    MyActions.update({'_id':id}, {$set: {
      'title': title,
      'intro': intro,
      'brief': brief,
    }});
    console.log(id);
  },

  render: function () {
    var id = this.props.params.id;
    return (
      <div className="container">
        {this.data.theActionToUpd.map((act) => {
          return  (
            <form onSubmit={this.updateItem} key={act._id}>
              <div className="input-field">  
                <i className="tiny material-icons prefix">mode_edit</i>
                <input type="text" id="titleActUpd"  defaultValue={`${act.title}`} ref="actionTitleUpd"/>
                <label htmlFor="titleActUpd">title</label>
              </div>
              <div className="input-field">
                <i className="tiny material-icons prefix">mode_edit</i>
                <textarea ref="actionIntroUpd" id="introActUpd" className="materialize-textarea" defaultValue={`${act.intro}`}></textarea>
                <label htmlFor="introActUpd">short intro</label>
              </div>
              <div className="input-field">
                <i className="tiny material-icons prefix">mode_edit</i>
                <textarea ref="actionBriefUpd" id="briefActUpd" className="materialize-textarea" defaultValue={`${act.brief}`}></textarea>
                <label htmlFor="briefActUpd">large description</label>
              </div>
              <button className="btn-large waves-effect waves-light right" type="submit">Update the Action
                <i className="material-icons right">send</i>
              </button>
            </form>

          )
        })}
        <ReactRouter.Link to={`/action/${id}`}>Back to the action</ReactRouter.Link>
      </div>
    ); 
  }

});