import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('departments', function() {
    this.route('show', {
      path: ':department_id'
    });
    this.route('new');
  });

  this.route('products', function() {
    this.route('show', {
      path: ':product_id'
    });
    this.route('new');
  });
});

export default Router;
