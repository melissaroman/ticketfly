import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    id: {
      refreshModel: true
    }
  },
  model(queryParams){
    var related =  $.ajax({
        url: 'https://api.spotify.com/v1/artists/' + id + '/related-artists',
        data: {
          query: queryParams.id,
          type: 'artist'
        }
      }).then(function(res){
        return {artists: res.artists.items}
      });
    return a;
    }
});
