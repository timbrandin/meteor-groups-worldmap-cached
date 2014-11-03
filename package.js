Package.describe({
  name: 'timbrandin:groups-worldmap-cached',
  summary: 'A worldmap of Meteor Meetup Groups',
  version: '1.0.0',
  git: 'http://github.com/timbrandin/meteor-groups-worldmap-cached'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('standard-app-packages');
  api.use('templating');

  api.addFiles('timbrandin:groups-worldmap-cached.html', 'client');
  api.addFiles('timbrandin:groups-worldmap-cached.js', 'client');
});
