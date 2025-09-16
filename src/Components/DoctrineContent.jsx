import React from "react";
import "./DoctrineContent.css";

const doctrines = [
  {
    id: "dispensations",
    title: "DISPENSATIONS",
    content: `"To everything there is a season, A time for every purpose under heaven" (Ecclesiastes 3:1).
According to the Bible revelation, dispensations are periods of time through which God works with humanity, revealing His will and testing man's obedience to specific revelations. These dispensations involve human responsibility, often followed by failure and judgment, leading to a transition to the next phase of God's plan.

The New Testament comprises distinct and successive dispensations or eras of Gospel administration. The Feast of Pentecost in Leviticus 23 serves as a type and shadow portraying the New Testament dispensations. Paul spoke of the dispensation of the Gospel given to him, emphasizing the mystery of Christ and the inclusion of Gentiles as fellow heirs (Ephesians 3:2-13).

In Ephesians 1:10, we read about the dispensation of the fullness of times. A new and significant dispensation began in 1963 when Christ concluded His mediatorial work, advanced to the Throne, took the Book of redemption, broke the seals, and revealed them through a chosen vessel. The Word of this Age is the Revelation of Redemption, and the opened seven seals revealed redemption to the end-time Bride.

In every dispensation, people are called and chosen by hearing, recognizing, and living by the Light revealed in their age. God has allotted a specific portion of His Word and corresponding anointing to quicken that Word to the elect and baptize them into the Body of Christ. Except anyone predestinated to an age walks in the light revealed in their age, such a person cannot be born again and become a part of the Body of Christ in that age, for "if we walk in the light, as he is in the light, we have fellowship one with another, and the blood of Jesus Christ his Son cleanseth us from all sin" (1 John 1:7). This emphasizes the importance of being in tune with the current dispensation and its revelations.

No one can be born again in this age without the revelation of the seven seals of redemption. The seventh angel's message in Revelation 10:7 is pivotal in understanding this dispensation.

In this last dispensation known as the CAPSTONE Age (Raptured age Holy Convocation, Light upon light age), the manifold wisdom of God is made known through the Church to principalities and powers in heavenly places (Ephesians 3:10-11). It's a time of great revelation and opportunity, but also of great responsibility, as those who reject the message of the seven seals risk being left behind. The mystery of God, as revealed through the seven seals, is essential for those seeking to be part of the end-time Bride.`
  },
  { id: "water-baptism", title: "WATER BAPTISM", content: "..." },
  { id: "godhead", title: "GODHEAD", content: "..." },
  { id: "role-of-women", title: "ROLE OF WOMEN IN THE CHURCH", content: "..." },
  { id: "rapture", title: "RAPTURE AND SECOND COMING", content: "..." },
  { id: "christs-sacrifice", title: "CHRIST'S SACRIFICE", content: "..." },
  { id: "fivefold-ministry", title: "FIVEFOLD MINISTRY", content: "..." },
  { id: "gifts-and-callings", title: "GIFTS AND CALLINGS OF GOD", content: "..." }
];

function DoctrineContent() {
  return (
    <div className="doctrine-container">
      <h2 className="doctrine-title">Our Doctrine</h2>

      {/* Navigation */}
      <nav className="doctrine-nav">
        <ul>
          {doctrines.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sections */}
      <div className="doctrine-sections">
        {doctrines.map((item) => (
          <section id={item.id} key={item.id} className="doctrine-section">
            <h2>{item.title}</h2>
            {item.content.split("\n\n").map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}

export default DoctrineContent;

















// import React from "react";
// import "./DoctrineContent.css"; // Import the CSS file


// const doctrines = [
//   { id: "dispensations", 
//     title: "DISPENSATIONS",
//     content: `"To everything there is a season, A time for every purpose under heaven" (Ecclesiastes 3:1). 
//     According to the Bible revelation, dispensations are periods of time through which God works with humanity, 
//     revealing His will and testing man's obedience to specific revelations. These dispensations involve human 
//     responsibility, often followed by failure and judgment, leading to a transition to the next phase of God's plan. \n

// The New Testament comprises distinct and successive dispensations or eras of Gospel administration. The Feast of Pentecost 
// in Leviticus 23 serves as a type and shadow portraying the New Testament dispensations. Paul spoke of the dispensation of 
// the Gospel given to him, emphasizing the mystery of Christ and the inclusion of Gentiles as fellow heirs (Ephesians 3:2-13). \n


// In Ephesians 1:10, we read about the dispensation of the fullness of times. A new and significant dispensation began in 1963 
// when Christ concluded His mediatorial work, advanced to the Throne, took the Book of redemption, broke the seals, and revealed 
// them through a chosen vessel. The Word of this Age is the Revelation of Redemption, and the opened seven seals revealed 
// redemption to the end-time Bride. \n

// In every dispensation, people are called and chosen by hearing, recognizing, and living by the Light revealed in their age. 
// God has allotted a specific portion of His Word and corresponding anointing to quicken that Word to the elect and baptize 
// them into the Body of Christ. Except anyone predestinated to an age walks in the light revealed in their age, such a person 
// cannot be born again and become a part of the Body of Christ in that age, for "if we walk in the light, as he is in the light, 
// we have fellowship one with another, and the blood of Jesus Christ his Son cleanseth us from all sin" (1 John 1:7). This emphasizes 
// the importance of being in tune with the current dispensation and its revelations. \n

// No one can be born again in this age without the revelation of the seven seals of redemption. The seventh angel's message 
// in Revelation 10:7 is pivotal in understanding this dispensation. \n 

// In this last dispensation known as the CAPSTONE Age ( Raptured age Holy Convocation,  Light upon light age), the manifold 
// wisdom of God is made known through the Church to principalities and powers in heavenly places (Ephesians 3:10-11). 
// It's a time of great revelation and opportunity, but also of great responsibility, as those who reject the message of 
// the seven seals risk being left behind. The mystery of God, as revealed through the seven seals, 
// is essential for those seeking to be part of the end-time Bride.`
//    },


//   { id: "water-baptism", title: "WATER BAPTISM", content: "..."},


//   { id: "godhead", title: "GODHEAD", content: "..." },


//   { id: "role-of-women", title: "ROLE OF WOMEN IN THE CHURCH", content: "..." },


//   { id: "rapture", title: "RAPTURE AND SECOND COMING", content: "..." },


//   { id: "christs-sacrifice", title: "CHRIST'S SACRIFICE", content: "..." },


//   { id: "fivefold-ministry", title: "FIVEFOLD MINISTRY", content: "..." },


//   { id: "gifts-and-callings", title: "GIFTS AND CALLINGS OF GOD", content: "..." },


// ];

// function DoctrineContent() {
//   return (
//     <div className="doctrine-container">
//       <h2 className="doctrine-title">Our Doctrine</h2>

//       {/* Navigation */}
//       <nav className="doctrine-nav">
//         <ul>
//           {doctrines.map((item) => (
//             <li key={item.id}>
//               <a href={`#${item.id}`}>{item.title}</a>
//             </li>
//           ))}
//         </ul>
//       </nav>

//        {/* Sections */}
//       <div className="doctrine-sections">
        
//         {doctrines.map((item) => (
//           <section id={item.id} key={item.id} className="doctrine-section">
//             <h2>{item.title}</h2>
//             {/* Render multi-paragraph content */}
//             {item.content.split("\n\n").map((para, index) => (
//               <p key={index}>{para}</p>
//             ))}
//           </section>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default DoctrineContent;



