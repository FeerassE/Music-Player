import React, { Component } from 'react';
import StaticPlayBar from './components/StaticPlayBar.js';
// import CurrentSongPlayer from './components/CurrentSongPlayer.js';

class App extends Component {
      constructor(props){
        super(props);
        this.state = {
          current: this.props.route.songs[0],
          play: false,
          songList: this.props.route.songs
        }
      }


  componentDidUpdate(){
      if(this.state.play == true){
        this.audioplayer.play();
      } else {
        this.audioplayer.pause();
      }
  }

  playSong(){
    if(this.state.play == false){
      this.setState({play: true})
    }
    else (this.setState({play: false}))
  }

  playFromSongList(){
    if(this.state.play == false){
      this.setState({play:true})
    }
  }

  setParticularSong(newCurrent) {
    this.setState({current: newCurrent})
  }

  songSelector(command){

    if(command === "next"){
      if(this.state.current.id < (this.props.route.songs.length -1 )){
        let nextId = (this.state.current.id + 1);
        let newCurrent = this.props.route.songs[nextId];
        this.setState({current: newCurrent});
      }
      else{
        console.log('No more songs to play.');
      }
    }

    else if (command === "previous"){
      if(this.state.current.id > 0){
      let prevId = (this.state.current.id - 1);
      let newCurrent = this.props.route.songs[prevId];
      this.setState({current: newCurrent});
      }
      else{
        console.log('No previous songs.');
      }
    }
  }


  render() {
    const songs = this.props.route.songs;
    
    // console.log(this.props.route.songs.length);
     console.log(this.state.current);
    // console.log(this.state.current.id);
    // console.log(this.state.play);
    return (
      <div className="App">
        {React.cloneElement(this.props.children, {
          songs: songs, playSong: this.playSong.bind(this), 
          setParticularSong: this.setParticularSong.bind(this), 
          playFromSongList: this.playFromSongList.bind(this)
          })}
        <StaticPlayBar 
          currentSong={this.state.current} 
          songSelector={this.songSelector.bind(this)} 
          playSong={this.playSong.bind(this)}
          play={this.state.play}
        />
        
        <audio 
        ref={(element)=>{this.audioplayer = element}} 
        src={this.state.current.source}>
        </audio>

      </div>
    );
  }
}

export default App;
