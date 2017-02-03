import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('department');
  },

  actions: {

    saveDepartment(newDepartment) {
      newDepartment.save().then(() => this.transitionTo('departments'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
