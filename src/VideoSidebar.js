import React, { useState }  from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import './VideoSidebar.css'

function VideoSidebar() {
 const [love, setLove] = useState(false)
 const loveIconClick = () => {
  if (love) {
   setLove(false)
  } else {
   setLove(true)
  }
 }
 return (
  <div className="videoSidebar text-light">
   <div className="my-4">
    {
     love ?<FavoriteIcon className="loveIcon" onClick={loveIconClick} /> :
      <FavoriteBorderIcon className="loveIcon" onClick={loveIconClick} />
    }
    <br />
    <span>1.4k</span>
   </div>
   <div className="my-4">
    <MessageIcon className="messageIcon" /><br />
    <span>1.4k</span>
   </div>
   <div className="my-4">
    <ShareIcon className="shareIcon" /><br />
    <span>1.4k</span>
   </div>
  </div>
 )
}

export default VideoSidebar
