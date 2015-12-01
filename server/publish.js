Meteor.publish("actions", function () {
  return MyActions.find();
});