Session.set('rendered', false);
Session.set('launch', false);

Template.groupsWorldmapCached.events({
  'click #meteorIconG': function() {
    Session.set('launch', true);
  },

  'click #groupsLink': function() {
    if (Session.get('launch')) {
      window.open('http://group.meteor.com', '_blank');
    }
  }
});

Template.groupsWorldmapCached.rendered = function() {
  Session.set('rendered', true);
};

Deps.autorun(function() {
  // Syncronize data and rendering.
  if (Session.get('rendered') && Session.get('launch')) {
    var launches = document.querySelectorAll("svg .launch");

    for (var i in launches) {
      var launch = launches[i];
      if (launch.beginElement)
        launches[i].beginElement();
    }
  }
});
