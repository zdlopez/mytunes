// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function() {

  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function() {
    //triggers an enqueue event, which our SongQueue collection will be listening for
    this.trigger('enqueue', this);
    this.trigger('add', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  },

  //we don't know when this is being invoked, but assume it is functioning correctly.
  ended: function() {
    this.trigger('ended', this);
  }

});
