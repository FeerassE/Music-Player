import React, {Component} from 'react';
import SongListItem from './SongListItem';
class SongsList extends Component {

    render() {
        
        let listOfSongs = this.props.songs.map(songitem => {
            return(<SongListItem song={songitem} playSong={this.props.playSong} setParticularSong={this.props.setParticularSong} playFromSongList={this.props.playFromSongList} />);
        }); 

        //console.log(this.props.songs);

        return (
            <ul className="list-group">
                {listOfSongs}
            </ul>
        )
    }
}

export default SongsList;