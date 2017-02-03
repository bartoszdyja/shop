import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  products: DS.hasMany('product'),
  productsLength: Ember.computed(function() {
    return this.get('products.length');
  })
});
