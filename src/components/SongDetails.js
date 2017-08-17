import React, {Component} from 'react';
import {Link} from 'react-router';

class SongDetails extends Component {
   
    clickPlayHandler(){
        this.props.setParticularSong(this.props.songs[this.props.params.id]);
        this.props.playSong();
    }

    render() {
  
        console.log(this.props.songs)
        return (
            <div>
                <Link to="/songs" >
                <h2> Song Index </h2>
                </Link>

                <h1> {this.props.songs[this.props.params.id].title} </h1> 
                 <a id="playButton" onClick={this.clickPlayHandler.bind(this)}>
                    <i className="fa fa-play-circle-o fa-lg"  aria-hidden="true"></i>
                </a>
                <p> {this.props.songs[this.props.params.id].description} </p>

                 
            </div>
        )
    }
}

export default SongDetails;