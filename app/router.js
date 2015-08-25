import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('index', { path: '/' }, function() {
    this.route('artists');
  });
  this.route('artist', function() {
    this.route(':id', function() {
      this.route('songs');
    });
  });
});

export default Router;
