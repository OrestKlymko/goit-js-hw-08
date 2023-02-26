import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const playVideo = function (data){
	localStorage.setItem('second',JSON.stringify(data.seconds))
}

player.on('timeupdate', throttle(playVideo,1000));

player.setCurrentTime(localStorage.getItem('second')).then(player.on('play', function (data){
	data.seconds = Number(localStorage.getItem('second'));
}))