import React from 'react';
import {Link} from 'react-router';

class SongListItem extends React.Component {

    clickPlayHandler(){
        console.log(this.props.song)
        this.props.setParticularSong(this.props.song);
        this.props.playFromSongList();
    }

render(){
    let id = '/songs/' + this.props.song.id.toString()
    return(
            <li className='list-group-item'>
                    <Link to={id} >
                        {this.props.song.title}
                     </Link>
                    <a id="playButton" onClick={this.clickPlayHandler.bind(this)}>
                        <i className="fa fa-play-circle-o fa-lg"  aria-hidden="true"></i>
                    </a>
            </li>
       
        )
    }
}

export default SongListItem;