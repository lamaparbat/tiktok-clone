import Video from "./Video";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
const App = () => {
  return (
    <>
      <div className="app">
        <div className="app_videos">
          <Video
            username="@K-pop fan"
            url={process.env.PUBLIC_URL + "/img/c.mp4"}
            description="tiktoknepal# @musuroy25 # @annumandal36 @sushil_bhai_07 # @jaiswalmadhu0 # @rockstarlo3 # @sonammandal07 # @aakashsah212"
            lyrics="Chip thrills feat. Sia"
          />
          <Video
            username="@ABC-COUPLE"
            url={process.env.PUBLIC_URL + "/img/a.mp4"}
            description="Mera gaau pani pani hogya🤣 #comedy #tiktok_nepal #mr_salamat #team7starsss ib: @mr_abad_04x"
            lyrics="Saiya ne dekha yesya, ma pani pani hogayeee...."
          />
          <Video
            username="@Aman-tikok"
            url={process.env.PUBLIC_URL + "/img/d.mp4"}
            description="Who is Best A v/s B🥰🥰 #amantiktok27 # @amantiktok28 # @rohitttt...09offical"
            lyrics="Maine tumko chaya, tumko pyar kiya"
          />
          <Video
            username="@DeutwithBimz"
            url={process.env.PUBLIC_URL + "/img/b.mp4"}
            description="Which garment looks the best on my 8th month pregnant🤰belly!! #short #littleglove #pkanchigrg #duetwithbimz #fypviral"
            lyrics="jandai dil ye mera aye to jandiya tu.."
          />
          <Video
            username="@praptiSubedi"
            url={process.env.PUBLIC_URL + "/img/e.mp4"}
            description="See our new video on yr❤️❤️ @praptisubedi_ #ninjathapamagar #ninja_squad👑 #ninjasquad👑 #praptisubedi #kohalpurmuser #rangerscrew🔥"
            lyrics="dil ko karar aaya, tujhpe yeh pyar aayaa...."
          />
          <Video
            username="@WildandOutGroups"
            url={process.env.PUBLIC_URL + "/img/f.mp4"}
            description="#wildnout #daily_lyrics #mtv #laylay #dcyoungfly #foryoupage #fyp #fypシ"
            lyrics="salamay isk isk isk , salamya isk....."
          />
        </div>
      </div>
    </>
)
}

export default App;
