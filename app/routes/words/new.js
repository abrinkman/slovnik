import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return {word: '', definition: ''};
  },
  setupController: function(controller, model) {
    controller.set('model', model);
  }
});
