import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    this.store.findRecord('department', params.department_id, {include: 'products'});
  }

});
