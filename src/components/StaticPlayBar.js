import React from 'react';

class StaticPlayBar extends React.Component{


    handleNextClick(){
        this.props.songSelector("next");
    }

    handlePlayPauseClick(){
        this.props.playSong();

    }
    handlePrevClick(){
        this.props.songSelector("previous");
    }

    render(){
        // console.log(this.props)
        // console.log(this.props.currentSong.source);
        console.log(this.props.play);
        return(
            <div className="uibar">
                
                <a className="Previous" onClick={this.handlePrevClick.bind(this)}>
                    <i className="fa fa-fast-backward fa-3x" aria-hidden="true"></i>
                </a>

                <a className="PlayPause" onClick={this.handlePlayPauseClick.bind(this)}>
                    <i className="fa fa-play fa-3x" aria-hidden="true"></i>
                </a>

                <a className="Next" onClick={this.handleNextClick.bind(this)}>
                    <i className="fa fa-fast-forward fa-3x" aria-hidden="true"></i>
                </a>

                <h1>Current Song: {this.props.currentSong.title} </h1>
                <h1> Play State: {this.props.play.toString()} </h1>

            </div>
        )
    }
}

export default StaticPlayBar;