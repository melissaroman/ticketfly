import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    artistName: {
      refreshModel: true
    }
  },
  model(queryParams){
    return $.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
          query: queryParams.artistName,
          type: 'artist',
          limit: 8
        }
      }).then(function(res){
        return {artists: res.artists.items}
      });
    }
});
