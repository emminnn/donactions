Meteor.methods({
  addAction: function(title, intro, category, brief) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    } else {
      MyActions.insert({
  	    'title': title,
  	    'intro': intro,
  	    'category': category,
  	    'brief': brief,
  	    'added_by': Meteor.userId()
      });
    }
  }
});