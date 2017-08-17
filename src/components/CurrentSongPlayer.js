import React from 'react';

class CurrentSongPlayer extends React.Component {


    handlePlay(){
        if(this.props.play){
            this.audioplayer.play()
        }
    }
    render(){
        console.log(this.props.currentSong.title)
        let songSRC = this.props.currentSong.title + '.mp3'
        return(
            <audio id={this.props.currentSong.id} ref={(element)=>{this.audioplayer = element}} >
                <source src={songSRC} type="audio/mp3"/>
            </audio>
        )
    }
}

export default CurrentSongPlayer;