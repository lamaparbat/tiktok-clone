import React,{ useEffect } from 'react'
import './Video.css'
import {useRef, useState} from 'react'
import ReactPlayer from 'react-player'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'
function Video(props) {
      const [playState, setPlayState] = useState(false)
      const videoRef = useRef(null)
      const videoClick = () => {
            if (videoRef.current.player.isPlaying === true) {
                  setPlayState(false)
            } else {
                  setPlayState(true)
            }
      }
      return (
            <div className="video">
                  <ReactPlayer
                        className="videoPlayer"
                        height="100%"
                        width="100%"
                        playing={playState}
                        loop={true}
                        onClick={videoClick}
                        ref={videoRef}
                        url={props.url}
                  ></ReactPlayer>
                  <VideoFooter username={props.username} description={props.description} lyrics={props.lyrics} />
                  <VideoSidebar />
            </div>
      )
}

   export default Video