import MediaPlayer from '../js/mediaPlayer.js '

const video = document.querySelector('video')
const button1 = document.getElementById('button_1')
const button2 = document.getElementById('button_2')
const button3 = document.getElementById('button_3')

const player = new MediaPlayer({el: video})

button1.onclick = () => player.play_or_stop()
button2.onclick = () => player.time_video()
button3.onclick = () => player.mute_video()

player.time_video()
