import React from 'react'
import './VideoFooter.css'
import AudiotrackIcon from '@material-ui/icons/Audiotrack';

function VideoFooter(props) {
 return (
  <div className="videoFooter px-4">
   <h6><strong>{props.username}</strong></h6>
   <p className="mt-2">{props.description}</p>
   <div className="d-flex">
    <div className="d-flex">
     <AudiotrackIcon />
     <marquee>{props.lyrics}</marquee>
    </div>
    <img
     className="img"
     src={process.env.PUBLIC_URL + "/img/disk.png"}
     height="30px"
     width="30px"
    />
   </div>
  </div>
 )
}

export default VideoFooter
