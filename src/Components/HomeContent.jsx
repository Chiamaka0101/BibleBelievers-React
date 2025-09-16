import React from "react";
import MysteryCloud from "../Assets/Mystery cloud.jpg"
import "./HomeContent.css"


function HomeContent() {
  return (
  // <div className="homepage">
  //   <h1 className="homepage-title">WELCOME TO BIBLE BELIEVERS, NIGERIA</h1>


  //   <div className="content">
  //      <div className="text-section">
  //         <p className="motto">We focus on <strong>The Present Truth...</strong> what Jesus is doing now</p>
  //               <p className="homepage-verse">
  //                   <em><strong>Revelation 10:7</strong></em> — In the days of the voice of the 7th angel, when he shall begin to sound, 
  //                   the mystery of God shall be finished, as he hath declared to his servants the prophets.
  //               </p>
  //       </div>


  //       <div className="image-section">
  //          <img src = {MysteryCloud} alt="Cloud" className="banner"/>

  //          <p className="overview-text"><strong>Throughout history, God has always had a witness on earth. Whenever a significant event is about to unfold, God sends a heavenly 
  //           sign accompanied by an earthly messenger, a prophet. Examples include the Pillar of Fire and Cloud during Israel's exodus, with Moses 
  //           as God's prophet, and the Shekinah glory with John the Baptist at Jesus' introduction <em>Matthew 3:17</em>. According to biblical prophecy, the Second
  //            Coming of Jesus Christ will also be heralded by a heavenly sign and an earthly voice, an <em>Elijah Rev 1:7, Matthew 24:30</em>. We believe we are living in 
  //            the end times, where current events are unfolding according to prophecy. As Bible believers, we focus on understanding modern 
  //            events through the lens of prophecy, recognizing God's signs and voice in our time.</strong>
  //         </p>
  //       </div>
  //       </div>
  //   </div>



  <div className="homepage">
  <h1 className="homepage-title">WELCOME TO BIBLE BELIEVERS, NIGERIA</h1>

  <div className="content">
    <div className="text-section">
      <p className="motto">
        We focus on <strong>The Present Truth...</strong> what Jesus is doing now
      </p>
      <p className="homepage-verse">
        <em><strong>Revelation 10:7</strong></em> — In the days of the voice of
        the 7th angel, when he shall begin to sound, the mystery of God shall be
        finished, as he hath declared to his servants the prophets.
      </p>
    </div>

    {/* Side-by-side wrapper */}
    <div className="image-text-wrapper">
      <div className="image-section">
        <img src={MysteryCloud} alt="Cloud" className="banner" />
      </div>

      <div className="overview-text">
        <p>
          
            Throughout history, God has always had a witness on earth. Whenever
            a significant event is about to unfold, God sends a heavenly sign
            accompanied by an earthly messenger, a prophet. Examples include the
            Pillar of Fire and Cloud during Israel's exodus, with Moses as God's
            prophet, and the Shekinah glory with John the Baptist at Jesus'
            introduction, <em>Matthew 3:17</em>. According to biblical prophecy,
            the Second Coming of Jesus Christ will also be heralded by a
            heavenly sign and an earthly voice, an <em>Elijah, Revelation 1:7, Matthew
            24:30</em>. We believe we are living in the end times, where current
            events are unfolding according to prophecy. As Bible believers, we
            focus on understanding modern events through the lens of prophecy,
            recognizing God's signs and voice in our time.
          
        </p>
      </div>
    </div>
  </div>
</div>

  )
}

export default HomeContent