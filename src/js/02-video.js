// Obtén una referencia al elemento de video utilizando player.js

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

const timeThrottled = _.throttle(function(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
  }, 1000);
  
  player.on('timeupdate', function(data) {
    timeThrottled(data); 
  });

let seconds = localStorage.getItem("videoplayer-current-time");


player.setCurrentTime(seconds).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});


