import React from "react"; 
import './LinksContent.css';
import WMB from "../Assets/WMB.jpg";
import Cloud from "../Assets/Cloud.jpeg";
import Bible from "../Assets/Bible.jpeg";

const links = [
  {
    img: Cloud, // use the imported variable, not a string
    desc: 'Bible Believers Australia Website - Message Newsletters.',
    url: 'http://www.biblebelievers.au/index.htm'
  },
  {
    img: WMB,
    desc: 'Voice of God Recordings – William Branham sermons (audio recordings and message transcripts)',
    url: 'https://branham.org/home'
  },
  {
    img: Bible,
    desc: 'Blue Letter Bible – Study tool',
    url: 'https://www.blueletterbible.org/'
  }
];

const LinksContent = () => {
  return (
    <div className="links-section">
      <h2>Other Endtime Message Resources</h2>
      <p className="subtitle">Though it be THUS SAITH THE LORD, unless you receive it by faith it will not profit you.
        <br/>And study to show yourself approved of God, receiving His thoughts: private interpretations are sin and death, whereas His mind is faith and Life.
        <br/><strong>Faith</strong> is a clear understanding of the will of God recorded as His Word, the Holy Bible. Christians are they whose lives manifest the Word prophesied for THEIR day. 
        <br/>The only part of His Word God can bless and fulfill in our lives is what He foretold for our day.

      </p>
      <div className="card-container">
        {links.map((link, index) => (
          <div className="link-card" key={index}>
            <img src={link.img} alt="Resource" />
            <p>{link.desc}</p>
            <a href={link.url} target="_blank" rel="noreferrer" className="link-btn">
              Visit Link
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LinksContent;
