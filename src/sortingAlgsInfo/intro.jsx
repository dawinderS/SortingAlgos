import React from 'react';
import '../sortingVisuals/sorts.css';
import mergeSort from '../pics/insertionsort.png';
import mergesortCode from '../pics/bubblecode.png';
import vol from '../pics/vol.png';
import volMute from '../pics/mute_vol.png';
import youtube from '../pics/youtube.png';
import reading from '../pics/reading.png';
import introaudio from '../pics/sound.mp3';

export const Intro = ({ }) => {
  const display = true ? (
    <div className="info-showin3" id='intro'>
      <div className="info-bar">
        <div className="info-barmid">
          <div className="info-barmid1">
            <div className="info-bartitle" id='addpadding'>Hello programmer!</div>
            <div className="info-barhold" id='changefont'>
              <div>I hope this project helps you learn & visualize 5 of the most popular sorting algorithms. 
                This project was built using React, JS, & CSS. 
                Make sure to read the guide before beginning!</div>
            </div>
          </div>
          <div className="info-barmid2">
            <div className="info-bartitle" id='addpadding'>Guide/Tips</div>
            <div className="info-bar-pros">
              <div id='changefont1'>
                - Use left sidebar to determine array size, sorting speed, and sorting algorithm
                (use generate new arr button to randomize arr)
              </div>
              <div id='changefont11'>
                - I personally recommend using large arr size and 3x speed, best to see what's happening and beautiful to watch :)
              </div>
              <div id='changefont1'>
                - Once you pick a sorting algo, the sorting will begin & this top navbar will contain info about that sorting algo
                (Big O costs, Pros/Cons, etc) --> scroll down to read more
              </div>
              <div id='changefont1'>
                - Once sorting of an array is complete, use generate new array or click on any of the arr sizes to generate a new array to sort
              </div>
              {/* <div id='changefont1'>
                - Once you pick a sorting algo, the sorting will begin & this top navbar will contain info about that sorting algo
                (Big O costs, Pros/Cons, etc)
              </div> */}
              {/* <div>
                + 
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="info-bar1" id="info-barcode">
        <div className="info-bartitle" id='info-barcodetop1'>Additional Resources</div>
        <div className="info-bar-pros">
          <div id='changefont2'>
            - Psuedocode for the sorting algo will be in this box (make sure to scroll to see all of it!)
          </div>
          <div id='changefont2'>
            - On the right of this box are three additional resources
          </div>
          <div id='changefont3'>
            - Audio containing my quick explanation of the sort, a Youtube link for the sort, & a further reading link for the sort
          </div>
        </div>
      </div>
      <div className="info-bar" id="extra-links1">
        {/* <div className="info-bartitle">
          Links
        </div> */}
        <div onClick={ () => {
            document.getElementsByTagName('audio')[0].play();
            document.getElementById('audio-tag').style.display = 'none';
            document.getElementById('audio-mute-tag').style.display = 'flex';
        }} id='audio-tag' className='audio-tag'>
          <img src={vol} alt="Play" />
          <audio id='m0' className='controls' preload="auto" src={introaudio}></audio>
        </div>
        <div onClick={ () => {
            document.getElementsByTagName('audio')[0].pause();
            document.getElementById('audio-tag').style.display = 'flex';
            document.getElementById('audio-mute-tag').style.display = 'none';
        }} id='audio-mute-tag' className='audio-mute-tag'>
          <img src={volMute} alt="Mute"/>
        </div>
        <a id='intro-btn'> 
          <img src={youtube} alt="YouTube" />
        </a>
        <a id='intro-btn'>
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