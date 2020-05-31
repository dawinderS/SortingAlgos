import React from 'react';
import '../sortingVisuals/sorts.css';
import mergeSort from '../pics/mergeSort.png';
import mergesortCode from '../pics/mergecode.png';
import vol from '../pics/vol.png';
import volMute from '../pics/mute_vol.png';
import youtube from '../pics/youtube.png';
import reading from '../pics/reading.png';
import introaudio from '../pics/sound.mp3';

export const MergeInfo = ({  }) => {
  const display = true ? (
    <div className="info-showin2" id='mergeinfo'>
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
                + Parallelizable (input is broken into chunks, each of which can be sorted at the same time in parallel)
              </div>
              <div id="makeflex">
                - Space (takes O(n) extra space)
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="info-bar1" id="info-barcode">
        <div className="info-bartitle" id='info-barcodetop'>Psuedocode [scroll down to see all]</div>
        <img id='mergecpic' src={mergesortCode} alt=""/>
      </div>
      <div className="info-bar" id="extra-links">
        <div onClick={() => {
          document.getElementsByTagName('audio')[0].play();
          document.getElementById('audio-tag3').style.display = 'none';
          document.getElementById('audio-mute-tag3').style.display = 'flex';
        }} id='audio-tag3' className='audio-tag'>
          <img src={vol} alt="Play" />
          <audio id='m0' class='controls' preload="auto" src={introaudio}></audio>
        </div>
        <div onClick={() => {
          document.getElementsByTagName('audio')[0].pause();
          document.getElementById('audio-tag3').style.display = 'flex';
          document.getElementById('audio-mute-tag3').style.display = 'none';
        }} id='audio-mute-tag3' className='audio-mute-tag'>
          <img src={volMute} alt="Mute" />
        </div>
        <a target="_blank" href="https://www.youtube.com/watch?v=4VqmGXwpLqc">
          <img src={youtube} alt="YouTube" />
        </a>
        <a target="_blank" href="https://www.geeksforgeeks.org/merge-sort/">
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