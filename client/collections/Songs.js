// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({
  //when you set the model like we are below, it will automatically convert what you pass in the hash into models of the type you specify.
  model: SongModel,
  initialize: function(songData) {
  }


});
