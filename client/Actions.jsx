Actions = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData: function() {
    return {
      items: MyActions.find({

      }).fetch()
    };
  },

  render: function () {
    return (
      <div>
        <ul>
          {this.data.items.map((item) => {
            return 	(
              <li className="card small hoverable" key={item._id}>
                <ReactRouter.Link to={`/action/${item._id}`} params={{id:item._id}}>
                  <div className="chip center-align">
                    {item.category}
                  </div>
                  <div className="card-image">
                    <img src='http://placekitten.com/g/600/220' />
                    <span className="card-title">{item.title}</span>
                  </div>
                  <div className="card-content">
                    {item.intro} 
                  </div>
                  <div className="card-action right-align">
                    <a href="#">Read more...</a>
                    <a href="#" className="waves-effect waves-light btn">Donate $5</a>
                  </div>
                </ReactRouter.Link>
              </li>
        		);
          })}
        </ul>
        <ReactRouter.Link to="/">Home</ReactRouter.Link>
      </div>
    );
  }
});
