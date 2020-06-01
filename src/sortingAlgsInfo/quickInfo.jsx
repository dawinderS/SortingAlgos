import React from 'react';
import '../sortingVisuals/sorts.css';
import mergeSort from '../pics/quicksort.png';
import mergesortCode from '../pics/quickcode.png';
import vol from '../pics/vol.png';
import volMute from '../pics/mute_vol.png';
import youtube from '../pics/youtube.png';
import reading from '../pics/reading.png';
import introaudio from '../pics/sound.mp3';

export const QuickInfo = ({ }) => {
  const display = true ? (
    <div className="info-showin2" id='quickinfo'>
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
                + Fast (as it runs in O(nlog(n)) time, scales well as n grows)
              </div>
              <div id="makeflex">
                + Parallelizable (input is divided into two sections, each of which can be sorted at the same time in parallel)
              </div>
              <div id="makeflex">
                - Slow worst-case (can take O(n^2) time which is undesirable in certain cases)
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
          document.getElementById('audio-tag4').style.display = 'none';
          document.getElementById('audio-mute-tag4').style.display = 'flex';
        }} id='audio-tag4' className='audio-tag'>
          <img src={vol} alt="Play" />
          <audio id='m0' className='controls' preload="auto" src={introaudio}></audio>
        </div>
        <div onClick={() => {
          document.getElementsByTagName('audio')[0].pause();
          document.getElementById('audio-tag4').style.display = 'flex';
          document.getElementById('audio-mute-tag4').style.display = 'none';
        }} id='audio-mute-tag4' className='audio-mute-tag'>
          <img src={volMute} alt="Mute" />
        </div>
        <a target="_blank" href="https://www.youtube.com/watch?v=Hoixgm4-P4M">
          <img src={youtube} alt="YouTube" />
        </a>
        <a target="_blank" href="https://www.geeksforgeeks.org/quick-sort/">
          <img src={reading} alt="Reading" />
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