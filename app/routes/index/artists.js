import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    artistName: {
      refreshModel: true
    }
  },
  model(queryParams){
    console.log(queryParams);
    var a =  $.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
          query: queryParams.artistName,
          type: 'artist'
        }
      }).then(function(res){
        return {artists: res.artists.items}
      });
    return a;

    // $.ajax({
    //     url: 'https://api.spotify.com/v1/search/' + artistName
    //   });
    }
});
