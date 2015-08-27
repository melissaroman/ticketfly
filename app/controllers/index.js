import Ember from 'ember';

export default Ember.Controller.extend({
  artistName: '',


  actions: {
    search() {
      this.transitionToRoute('index.artists', {
        queryParams: {artistName: this.get('artistName')}
      });
    }
  }
});
