// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('dequeue', function(song) {
      //add to this.songQueue.models

      this.remove(song);
    }, this);

    //we are using an add listener, but we want to do this for a change in the length property
    this.on('add', function(song) {
      if(this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function(song) {
      this.remove(song);
      if(this.length > 0) {
        this.playFirst();
      }
    }, this);

  },

  playFirst: function() {
    this.at(0).play();
  },

  //if only song, play it:
  //check the length of SongQueue, and if the length is 1, invoke playFirst()
  //


  //listen for ended event

});
