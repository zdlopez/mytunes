// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('dequeue', function(song) {
      //add to this.songQueue.models

      this.remove(song);
    }, this);

    this.on('add', function(song) {
      if(this.length === 1) {
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
