import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    id: {
      refreshModel: true
    }
  },
  model(queryParams){
    return $.ajax({
        url: 'https://api.spotify.com/v1/artists/' + queryParams.id + '/related-artists',
        data: {
          query: queryParams.id,
          type: 'artist'
        }
      }).then(function(res){
        return {artists: res.artists.items}
      });
    }
});
