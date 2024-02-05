import './App.css';
import avatarIcon from './images/avatar-michelle.jpg';
import shareIcon from './images/icon-share.svg';
import facebookIcon from './images/icon-facebook.svg';
import pinterestIcon from './images/icon-pinterest.svg';
import twitterIcon from './images/icon-twitter.svg';
import { useState } from 'react';

function App() {

  const [shareState, setShareState] = useState(false);

  const showShare = () => {
    setShareState(!shareState);
  }

  return (
    <main>
      <div id="backdrop">
        <div id="card">
          <div id="fm-image-container">
            <div id="fm-image"></div>
          </div>
          <div id="info">
            <h1 id="title">Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
            <p id="description">Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.</p>
            <div id="footer">
              <img src={avatarIcon} id="avatar" alt="avatar"></img>
              <div id="author-info">
                <h3 id="name">Michelle Appleton</h3>
                <p id="date">28 Jun 2020</p>
              </div>
              <div className={shareState ? "share-background-open" : "share-background-closed"} onClick={showShare}>
                <img src={shareIcon} id="share" alt="share"></img>
                <div className={shareState ? "share-bar" : "hide"}>
                  <div id="share-items">
                    <h2 id="share-text">SHARE</h2>
                    <img src={facebookIcon} alt="facebook-share" id="facebook-icon"></img>
                    <img src={twitterIcon} alt="twitter-share" id="twitter-icon"></img>
                    <img src={pinterestIcon} alt="pinterest-share" id="pinterest-icon"></img>
                  </div>
                </div>
                <div className={shareState ? "triangle" : "hide"}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
