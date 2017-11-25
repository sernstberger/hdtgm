import React, { Component } from 'react'

import ReactPlayer from "react-player";
import Duration from './Duration'

import Slider from 'react-rangeslider'

export default class Foo extends Component {
  state = {
    url: null,
    playing: true,
    volume: 0.8,
    played: 0,
    loaded: 0,
    duration: 0,
  }
  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0
    })
  }
  playPause = () => {
    this.setState({ playing: !this.state.playing })
  }
  setVolume = e => {
    this.setState({ volume: parseFloat(e.target.value) })
  }
  onPlay = () => {
    this.setState({ playing: true })
  }
  onPause = () => {
    this.setState({ playing: false })
  }
  handleChangeStart = () => {
    this.setState({ seeking: true })
  };

  handleChange = e => {
    this.setState({
      played: parseFloat(e)
    })
    // console.log(value);
  };

  handleChangeComplete = e => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(this.state.played))
  };

  onProgress = state => {
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
  }
  onConfigSubmit = () => {
    let config
    try {
      config = JSON.parse(this.configInput.value)
    } catch (error) {
      config = {}
      console.error('Error setting config:', error)
    }
    this.setState(config)
  }
  ref = player => {
    this.player = player
  }
  render () {
    const {
      url, playing, volume,
      played, loaded, duration,
      soundcloudConfig,
    } = this.state

    return (
      <div className='app'>
        <div className='player-wrapper'>
          <ReactPlayer
            ref={this.ref}
            className='react-player'
            width='100%'
            height='100%'
            url={url}
            playing={playing}
            volume={volume}
            soundcloudConfig={soundcloudConfig}
            onPlay={this.onPlay}
            onPause={this.onPause}
            onProgress={this.onProgress}
            onDuration={duration => this.setState({ duration })}
          />
        </div>
        <div className="bacon">

            { loaded > 0 ?    <button onClick={this.playPause}>{playing ? 'Pause' : 'Play'}</button>    :       <button onClick={() => this.load(this.props.audioUrl)}>Play Podcast</button>}
            
            <div className="row">
              <div className="col text-right">
                  <Duration seconds={duration * played} />
              </div>
              <div className="col">
                  <div className="slider">
                    <Slider
                      step={0.000000000000000000001}
                      min={0}
                      max={1}
                      tooltip={false}
                      value={played}
                      onChangeStart={this.handleChangeStart}
                      onChange={this.handleChange}
                      onChangeComplete={this.handleChangeComplete}
                    />
                  </div>

                  <div className="progress progress-loaded">
                      <div className="progress-bar" role="progressbar" style={{width: (loaded*100) + "%" }} aria-valuenow={loaded*100} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div className="progress progress-played">
                      <div className="progress-bar" role="progressbar" style={{width: (played*100) + "%" }} aria-valuenow={played*100} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  
              </div>
              <div className="col">
                  <Duration seconds={duration * (1 - played)} />
              </div>
            </div>

            <Duration seconds={duration} />
          
            <div className="volume">
                <input type='range' min={0} max={1} step='any' value={volume} onChange={this.setVolume} />
            </div>

        </div>
      </div>
    )
  }
}