function MediaPlayer(config) {
    this.media = config.el
}

MediaPlayer.prototype.play_or_stop = function(){
    if(!this.media.paused){
        this.media.pause()
        button1.firstChild.data = "Play"
        clearInterval(timer)
        // setInterval(() => {player.time_video()}, 0);
    } else{
        this.media.play()
        button1.firstChild.data = "Stop"
        var timer = setInterval(() => {player.time_video()}, 100);
    }
}

MediaPlayer.prototype.time_video = function(){
    button2.firstChild.data = this.media.currentTime.toFixed(2)
}

MediaPlayer.prototype.mute_video = function(){
    if(!this.media.muted == true){
        this.media.muted = true
        button3.firstChild.data = 'Unmute'
    } else {
        this.media.muted = false
        button3.firstChild.data = 'Mute'
    }
}

export default MediaPlayer
