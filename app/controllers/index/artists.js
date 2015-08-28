import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['artistName'],
  artistName: '',
  actions: {
    select(id) {
      this.transitionToRoute('index.related', {
        queryParams: {id: id}
      });
    }
  }
});
