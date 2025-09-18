// import React from "react";
// import './TestimonyContent.css'
// function TestimonyContent() {
  
//   return (
//     <div className="homepage">
//       <h1 className="homepage-title">Believers Testimonies</h1>
    
//       <div className="testimony-content">
//         <div className="text-section">
//           <p className="bible-verse">
//             <em><strong>Acts 4:20</strong></em> — For we cannot but speak the things which we have seen and heard.
//           </p>
//         </div>
    
//           <div className="testimony-1">
//             <h4>Personal Testimony</h4>
//             <p>
// I'm compelled to share my remarkable experience to encourage those who are diligently studying the sermons and tapes, 
// seeking a deeper understanding of God's revelation through their own Bibles. My journey took a dramatic turn in July 2002 
// when I was struck by lightning at a restaurant at the Shell back-gate. I was sitting near an open window, enjoying my egusi 
// soup and pondering a profound revelation about the 1963 dispensation change in the Prophet's Message. This new insight was 
// still sinking in, and I was reflecting on the supporting scriptures when the lightning struck. I was not harmed by the electric 
// charges.
// The incident was intense - the force of the lightning hit me, bouncing back off the metal window protector and sparking wildly. 
// While others in the restaurant sought cover under tables, I was transfixed, witnessing the spectacle unfold. Despite the shock, 
// my mind remained focused on the revelation, and its significance.

// That experience left an indelible mark on my life. The revelation I'd received transformed my understanding of the Message, 
// and I'm eternally grateful for the Lord's mercy and grace. I'm humbled to share this testimony, hoping it will inspire and 
// encourage others on their spiritual journey.<br/>

// Sincerely,
// Chibueze Uzoho, Your Brother in Christ 
//             </p>
//           </div>

//                    <div className="testimony-2">
//             <h4>Testimony</h4>
//             <p>
// Testimony 
// My wife took ill in 2017; she was diagnosed with gall bladder stone and cyst. The demons caused her a hell of pain.  
// The doctors said the only remedy was surgery.<br/> Despite her mother's encouragement for the surgery, 
// I did not accept it because she's had two different suggeries on the belly earlier /{/*in 2007 and 2016*/}. 
// So we decided to take it to the Lord in prayers. Along the line, the demon of ulcer joined them. 
// Sometime she went for a scan, the size of the stone was bigger. We kept praying, and at a point, we got tired 
// and forgot about the trouble even though it persisted. Last week, she went to the hospital to have a scan. 
// The result shows no trace of any stone or cyst. She won't have to remove her gall bladder again. Glory be to God.
// Please, brethren, join us in appreciating our Lord Jesus for his grace and healing of my wife. 
// I am so encouraged and believe the ulcer will vanish also.
//             </p>
//           </div>
//         </div>
//       </div>
//   );
// }

// export default TestimonyContent;


import React, { useState } from "react";
import "./TestimonyContent.css";

function TestimonyContent() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="homepage">
      <h2 className="homepage-title">Believers Testimonies</h2>

      <div className="testimony-content">
        <div className="text-section">
          <p className="bible-verse">
            <em><strong>Acts 4:20</strong></em> — For we cannot but speak the things which we have seen and heard.
          </p>
        </div>


        <div className="testimony-wrapper">
        {/* Testimony 1 */}
        <div className="testimony-box">
          <h4>Testimony from a Precious Brother</h4>
          <p className={`preview ${expanded[1] ? "expanded" : ""}`}>
            I'm compelled to share my remarkable experience to encourage those who are diligently studying the sermons and tapes, 
            seeking a deeper understanding of God's revelation through their own Bibles. My journey took a dramatic turn in July 2002 
            when I was struck by lightning at a restaurant at the Shell back-gate. I was sitting near an open window, enjoying my egusi 
            soup and pondering a profound revelation about the 1963 dispensation change in the Prophet's Message. This new insight was 
            still sinking in, and I was reflecting on the supporting scriptures when the lightning struck. I was not harmed by the electric 
            charges.
            <br /><br />
            The incident was intense - the force of the lightning hit me, bouncing back off the metal window protector and sparking wildly. 
            While others in the restaurant sought cover under tables, I was transfixed, witnessing the spectacle unfold. Despite the shock, 
            my mind remained focused on the revelation, and its significance.
            <br /><br />
            That experience left an indelible mark on my life. The revelation I'd received transformed my understanding of the Message, 
            and I'm eternally grateful for the Lord's mercy and grace. I'm humbled to share this testimony, hoping it will inspire and 
            encourage others on their spiritual journey.
            <br /><br />
            Sincerely,
            <br />
            <strong>Chibueze Uzoho, Your Brother in Christ</strong>
          </p>
          <button className="toggle-btn" onClick={() => toggleExpand(1)}>
            {expanded[1] ? "Read Less ▲" : "Read More ▼"}
          </button>
        </div>

        {/* Testimony 2 */}
        <div className="testimony-box">
          <h4>From a Precious Brother</h4>
          <p className={`preview ${expanded[2] ? "expanded" : ""}`}>
            My wife took ill in 2017; she was diagnosed with gall bladder stone and cyst. The demons caused her a hell of pain.  
            The doctors said the only remedy was surgery. Despite her mother's encouragement for the surgery, I did not accept it 
            because she's had two different surgeries on the belly earlier. So we decided to take it to the Lord in prayers. Along 
            the line, the demon of ulcer joined them. Sometime she went for a scan, the size of the stone was bigger. We kept 
            praying, and at a point, we got tired and forgot about the trouble even though it persisted.
            <br /><br />
            Last week, she went to the hospital to have a scan. The result shows no trace of any stone or cyst. She won't have to 
            remove her gall bladder again. Glory be to God. Please, brethren, join us in appreciating our Lord Jesus for his grace 
            and healing of my wife. I am so encouraged and believe the ulcer will vanish also.
          </p>
          <button className="toggle-btn" onClick={() => toggleExpand(2)}>
            {expanded[2] ? "Read Less ▲" : "Read More ▼"}
          </button>
        </div>

        {/* Testimony 3 */}
        <div className="testimony-box">
          <h4>From a Precious Brother</h4>
          <p className={`preview ${expanded[3] ? "expanded" : ""}`}>
            Let me share this extraordinary testimony with you.<br/><br/>
             When I was doing my national youth service after graduation, many years ago, I assisted a pastor who was also the Deputy Provost of the College of Education Katsina-Ala, Benue state. 
            I used to minister in his congregation as his assistant.  We usually went out on evangelism together.<br/><br/> One day, a history lecturer in the College of Education, Mr. Eluwa, attended our fellowship meeting with his wife, 
            and I was ministering that evening. In my sermon that evening, I spoke on Church history and the evil of Catholicism and about the serpent seed doctrine. The information  I reeled out awed the  history lecturer. 
            He confessed that he was intrigued  by my knowledge of church history but that the doctrine of the Serpent seed was quite strange and incredible.<br/><br/> 
            He got me swamped with lots of questions and being that I was just getting a smattering of the revelation of Brother Branham's scriptural message, 
            I told him that I believe God would reveal it to him and his wife. His wife was very attentive during the teaching service, but on her face, one could 
            read the expression of sincere doubts. So, we prayed, and I committed it all to God.<br/><br/> 
            The following evening, I was cooking, and after cooking, I had a deep impression in my heart to visit the couple. So, I went to their house. No sooner had I knocked on their door than the man peeped through the window and seeing it was I, he said 
            <em>"Chibueze, please come in, madam had a vision last night".</em> At that moment, my breath seized. He said. <em>"Anyway, before I open the door, first tell me where the Scripture says,
           "a sower went out to sow his seeds, and the enemy came and sowed tares."</em><br/><br/>
           With that  I was relieved and quickly brought out my pocket Gideon's Bible and read it out from Matthew 13. 
           Then, he smiled kindly and told me to come in as he opened his door, with excitement. They were Catholics.<br/><br/>
            When I sat down, he called for his wife to come and share her vision with me. She said, <em>"Brother, I was not sleeping. I was awake this morning around 2:00 a.m., thinking about what you taught in the fellowship 
            as it was quite strange. It gave me a sleepless night. But at the momentous time, a great light came into my room and shone so bright. <br/> As I watched, every feeling of fear was gone, I saw Jesus standing 
            before me. He said, "My daughter,  believe what my son taught you. It is the truth. Did I not tell you that "a sower went out to sow seeds, and the enemy came in and sowed tares?" Believe it. It is the truth. 
            " As soon as He concluded, the whole scene turned normal as He vanished from my sight." </em> She concluded.
            Honestly, I never knew before that time that the Scripture our Lord Jesus spoke in that vision had any relation to the serpent seed doctrine. Now I understand it speaks of the spiritual serpent seed.<br/><br/>
            I bless God for His grace.
            <br/>
            <strong>Pastor Chibueze Uzoho Nigeria </strong>
          </p>
          <button className="toggle-btn" onClick={() => toggleExpand(3)}>
            {expanded[3] ? "Read Less ▲" : "Read More ▼"}
          </button>
        </div>  


        <div className="testimony-box">
          <h4>A Testimony</h4>
          <p className={`preview ${expanded[4] ? "expanded" : ""}`}>
          In late July 2004, just before beginning my ministry, I had a profound experience. 
          While lying on my father's bed in the same room where I often prayed as a teenager, 
          17- 19 years old, when the house was still under construction, I fell into a trance.<br/><br/>

          I saw a vast gathering of believers in Africa, asleep in a field shrouded in darkness. 
          Suddenly, a brilliant light from heaven illuminated the scene, reminiscent of the Shekinah 
          glory with the face of Jesus Christ. This light was similar to the Mystery Cloud that appeared 
          in the Western skies on February 28, 1963. The intensity of the light jolted me awake, 
          and I was the first to see it. I shouted, "Jesus!" and attempted to rouse the others, but only a few responded. 
          The majority remained in a deep slumber. I came out of the experience. Shortly after, in August of that year, 
          I received my ministry. This experience was a pivotal moment, marking the beginning of my journey.
            <br/>
            <strong>Pastor Chibueze Uzoho Nigeria </strong>
          </p>
          <button className="toggle-btn" onClick={() => toggleExpand(4)}>
            {expanded[4] ? "Read Less ▲" : "Read More ▼"}
          </button>
        </div>


      </div>
    </div>
    </div>
  );
}

export default TestimonyContent;