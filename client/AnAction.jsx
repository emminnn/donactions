AnAction = React.createClass({

	mixins: [ReactMeteorData],
  getMeteorData: function() {
    var id = this.props.params.id;
    // var currentUserId = Meteor.userId;
    return {
      theAction: MyActions.find({
        _id: id
      }).fetch()
    };  
  },
  render: function () {
    var id = this.props.params.id;
    return (
      <div>
        {this.data.theAction.map((act) => {
          return  (
            <div>
              <div className="chip right-align">
                {act.category}
              </div>
              <div className="card large" key={act._id}>
                <div className="card-image">
                  <img src='http://placekitten.com/750/350' />
                  <span className="card-title">{act.title}</span>
                </div>

                <div className="card-content">
                  <p>{act.intro}</p>  
                </div>

                <div className="card-action right-align center-align">
                  <a href="#" className="waves-effect waves-light btn">Donate $5</a>
                </div>
              </div>

              <div className="">
                <p>{act.brief}</p>
              </div>
            </div>
          );
        })}

        <ReactRouter.Link to="/">Take me back home</ReactRouter.Link>     
      </div>
    );
  }
});