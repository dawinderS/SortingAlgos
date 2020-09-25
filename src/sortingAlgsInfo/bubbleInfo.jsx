import React from 'react';
import '../sortingVisuals/sorts.css';
import mergeSort from '../pics/insertionsort.png';
import mergesortCode from '../pics/bubblecode.png';
import vol from '../pics/vol.png';
import volMute from '../pics/mute_vol.png';
import youtube from '../pics/youtube.png';
import reading from '../pics/reading.png';
import bubbleaudio from '../pics/bubblesort.mp3';

export const BubbleInfo = ({ }) => {
  const display = true ? (
    <div className="info-showin2" id='bubbleinfo'>
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
                + Simplicity (easy to understand and implement)
              </div>
              <div id="makeflex">
                + Space (elements are swapped in place w/o using additional storage so little memory is required)
              </div>
              <div id="makeflex">
                - Horribly inefficient (sorting takes forever to complete, not suited for real life usage)
              </div>
              <span>scroll down to learn what's happening!</span>
              <p id='sortexplained'>
                <p>
                  Bubble sort works by comparing each item in the array with the item next to it and swapping them if required. It repeats this process until it makes a pass all the way through the list without swapping any items, in other words when the list is fully sorted.
                </p>
                <p>
                  So if you look below at the array being sorted right now, the sort starts from the first bar and swaps whenever the left bar is longer than the right bar and it keeps swapping till there is a point where the right bar is longer than the left. 
                </p>
                <p>
                  The first go around of swapping will bring the longest bar all the way to the right since we know that this process of swapping will shift the longest bars to the right of the array. Then the second go around will bring the second longest bar to the right but will stop to the left of the longest since it is smaller than it. This process of swapping will continue until there comes a go around where no swapping occurs at all, in other words when each right bar is larger than its left neighbor bar so when the array has been fully sorted.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="info-bar1" id="info-barcode">
        <div className="info-bartitle" id='info-barcodetop'>Pseudocode [scroll down to see all]</div>
        <img src={mergesortCode} alt="" />
      </div>
      <div className="info-bar" id="extra-links">
        {/* <div onClick={() => {
          document.getElementsByTagName('audio')[3].play();
          document.getElementById('audio-tag1').style.display = 'none';
          document.getElementById('audio-mute-tag1').style.display = 'flex';
        }} id='audio-tag1' className='audio-tag'>
          <img src={vol} alt="Play" />
          <audio id='m0' className='controls' preload="auto" src={bubbleaudio}></audio>
        </div>
        <div onClick={() => {
          document.getElementsByTagName('audio')[3].pause();
          document.getElementById('audio-tag1').style.display = 'flex';
          document.getElementById('audio-mute-tag1').style.display = 'none';
        }} id='audio-mute-tag1' className='audio-mute-tag'>
          <img src={volMute} alt="Mute" />
        </div> */}
        <a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/watch?v=xli_FI7CuzA">
          <img src={youtube} alt="YouTube" />
        </a>
        <a rel="noopener noreferrer" target="_blank" href="https://www.geeksforgeeks.org/bubble-sort/">
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