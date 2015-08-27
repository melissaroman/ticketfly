import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['artistName'],
  artistName: '',
  select(id) {
    this.transitionToRoute('index.related', {
      queryParams: {id: this.get('id')}
    });
      console.log(id);
      console.log(queryParams);
  }
});
