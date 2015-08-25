import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return $.ajax({
        url: 'https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE/related-artists'
      });
    }
});
