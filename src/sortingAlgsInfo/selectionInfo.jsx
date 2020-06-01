import React from 'react';
import '../sortingVisuals/sorts.css';
import mergeSort from '../pics/selectionsort.png';
import mergesortCode from '../pics/selectioncode.png';
import vol from '../pics/vol.png';
import volMute from '../pics/mute_vol.png';
import youtube from '../pics/youtube.png';
import reading from '../pics/reading.png';
import introaudio from '../pics/sound.mp3';

export const SelectionInfo = ({ }) => {
  const display = true ? (
    <div className="info-showin2" id='selectioninfo'>
      <div className="info-bar">
        <div className="info-barmid">
          <div className="info-barmid1">
            <div className="info-bartitle">Big O costs</div>
            <div className="info-barhold">
              <img src={mergeSort} alt="" />
            </div>
          </div>
          <div className="info-barmid2">
            <div className="info-bartitle">Pros (+) / Cons (-)</div>
            <div className="info-bar-pros">
              <div id="makeflex">
                + Intuitive (easy to understand and implement, initial arragement of data doesn't matter)
              </div>
              <div id="makeflex">
                + Space (sort can be done in place, requiring only O(1) additional space)
              </div>
              <div id="makeflex">
                - Slow (takes O(n^2) time even if the input is already sorted!)
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="info-bar1" id="info-barcode">
        <div className="info-bartitle" id='info-barcodetop'>Psuedocode [scroll down to see all]</div>
        <img src={mergesortCode} alt="" />
      </div>
      <div className="info-bar" id="extra-links">
        <div onClick={() => {
          document.getElementsByTagName('audio')[0].play();
          document.getElementById('audio-tag5').style.display = 'none';
          document.getElementById('audio-mute-tag5').style.display = 'flex';
        }} id='audio-tag5' className='audio-tag'>
          <img src={vol} alt="Play" />
          <audio id='m0' className='controls' preload="auto" src={introaudio}></audio>
        </div>
        <div onClick={() => {
          document.getElementsByTagName('audio')[0].pause();
          document.getElementById('audio-tag5').style.display = 'flex';
          document.getElementById('audio-mute-tag5').style.display = 'none';
        }} id='audio-mute-tag5' className='audio-mute-tag'>
          <img src={volMute} alt="Mute" />
        </div>
        <a target="_blank" href="https://www.youtube.com/watch?v=g-PGLbMth_g">
          <img src={youtube} alt="YouTube" />
        </a>
        <a target="_blank" href="https://www.geeksforgeeks.org/selection-sort/">
          <img src={reading} alt="Wiki" />
        </a>
      </div>
    </div>
  ) : (
      <div>Not working</div>
    );

  return (
    <div className='info-showin'>
      {display}
    </div>
  );
};