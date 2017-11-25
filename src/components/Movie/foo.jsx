import React, { Component } from 'react'

// import './reset.scss'
// import './defaults.scss'
// import './App.scss'
// import './Range.scss'

// import { version } from '../../package.json'
import ReactPlayer from "react-player";
import Duration from './Duration'

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
  onSeekMouseDown = e => {
    this.setState({ seeking: true })
  }
  onSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) })
  }
  onSeekMouseUp = e => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }
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
        <section className='section'>
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
              <div className="progress progress-loaded">
                <div className="progress-bar" role="progressbar" style={{width: (loaded*100) + "%" }} aria-valuenow={loaded*100} aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div className="progress progress-played">
                <div className="progress-bar bg-warning" role="progressbar" style={{width: (played*100) + "%" }} aria-valuenow={played*100} aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              <td>
                { loaded > 0 ?    <button onClick={this.playPause}>{playing ? 'Pause' : 'Play'}</button>    :       <button onClick={() => this.load(this.props.audioUrl)}>Play Podcast</button>}
              </td>
            <hr />
              <th>Seek</th>
              <td>
                <input
                  className="seekRange"
                  type='range' min={0} max={1} step='any'
                  value={played}
                  onMouseDown={this.onSeekMouseDown}
                  onChange={this.onSeekChange}
                  onMouseUp={this.onSeekMouseUp}
                />
              </td>
            <hr />
              <th>Volume</th>
              <td>
                <input type='range' min={0} max={1} step='any' value={volume} onChange={this.setVolume} />
              </td>

            </div>

        </section>
        <section className='section'>

          <table><tbody>
            <tr>
              <th>duration</th>
              <td><Duration seconds={duration} /></td>
            </tr>
            <tr>
              <th>elapsed</th>
              <td><Duration seconds={duration * played} /></td>
            </tr>
            <tr>
              <th>remaining</th>
              <td><Duration seconds={duration * (1 - played)} /></td>
            </tr>
          </tbody></table>
        </section>
      </div>
    )
  }
}