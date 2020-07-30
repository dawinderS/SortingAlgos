import React from 'react';
import '../sortingVisuals/sorts.css';
import mergeSort from '../pics/insertionsort.png';
import mergesortCode from '../pics/insertioncode.png';
import vol from '../pics/vol.png';
import volMute from '../pics/mute_vol.png';
import youtube from '../pics/youtube.png';
import reading from '../pics/reading.png';
import introaudio from '../pics/sound.mp3';

export const InsertionInfo = ({ }) => {
  const display = true ? (
    <div className="info-showin2" id='insertioninfo'>
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
                + Intuitive (easy to understand and implement and is stable)
              </div>
              <div id="makeflex">
                + Space (sort can be done in place, requiring only O(1) additional space)
              </div>
              <div id="makeflex">
                - Slow (usually takes O(n^2) time so too slow for huge data sets)
              </div>
              <span>scroll down to learn what's happening!</span>
              <p id='sortexplained'>
                <p>
                  Like its name suggests, insertion sort works by inserting elements from an unsorted list into a sorted subsection of the list, one at a time. The first item in the list usually serves as the initial sorted subsection and then it will move rightwards putting the next item in unsorted list in its right place in the sorted subsection.
                </p>
                <p>
                  So if you look at the array being sorted below, the first bar serves as the sorted section. It then moves on to the second bar, now if that bar is smaller than the first it will move it to the left otherwise keep it in place. Now these two bars have become the sorted section. Insertion sort will keep doing this where it will insert each bar from the unsorted section into its right place in the sorted section which is on the left.
                </p>
                <p>
                  Let’s say we had a sorted section of 1 4 and 5 and the next value to insert was 3, insertion sort will swap 5 and 3 to go from 1 4 5 3 to 1 4 3 5 and then swap 4 and 3 to finally get 1 3 4 and 5. This process of inserting will keep going until there are no items left in the unsorted section to put into the sorted section thus when the entire array has become a fully sorted section.
                </p>
              </p>
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
          document.getElementsByTagName('audio')[4].play();
          document.getElementById('audio-tag2').style.display = 'none';
          document.getElementById('audio-mute-tag2').style.display = 'flex';
        }} id='audio-tag2' className='audio-tag'>
          <img src={vol} alt="Play" />
          <audio id='m0' className='controls' preload="auto" src={introaudio}></audio>
        </div>
        <div onClick={() => {
          document.getElementsByTagName('audio')[4].pause();
          document.getElementById('audio-tag2').style.display = 'flex';
          document.getElementById('audio-mute-tag2').style.display = 'none';
        }} id='audio-mute-tag2' className='audio-mute-tag'>
          <img src={volMute} alt="Mute" />
        </div>
        <a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/watch?v=JU767SDMDvA">
          <img src={youtube} alt="YouTube" />
        </a>
        <a rel="noopener noreferrer" target="_blank" href="https://www.geeksforgeeks.org/insertion-sort/">
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