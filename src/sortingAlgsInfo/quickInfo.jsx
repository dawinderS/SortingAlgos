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
              <span>scroll down to learn what's happening!</span>
              <p id='sortexplained'>
                <p>
                  Quick sort starts of by picking an element to serve as a pivot, usually the left-most element. Then it splits the array into two parts, one with elements smaller than the pivot and one with elements larger than the pivot. It will then recursively repeat this process for those halves and then the halves of those halves and so on. It will only stop repeating this process for an array where only one or less elements have to be sorted.
                </p>
                <p>
                  So if you look at the array being sorted below, the first bar served as the pivot and then split the rest of the array into two parts. A left part containing all bars that are smaller than the pivot and a right part containing bars larger than the pivot. It then checks do these two parts need to be sorted, in other words does more than one element in these subarrays need to be sorted. If yes, then the process will repeat where now the subarray will have its own pivot and then be split into two. 
                </p>
                <p>
                  This process keeps going until it recursively reaches a point where the split arrays have one or less elements that need to be sorted. By doing this recursively we are splitting subarrays and shifting bars with the goal of reaching a point where no more splitting is required, thus when the original array has been fully sorted.
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
        {/* <div onClick={() => {
          document.getElementsByTagName('audio')[2].play();
          document.getElementById('audio-tag4').style.display = 'none';
          document.getElementById('audio-mute-tag4').style.display = 'flex';
        }} id='audio-tag4' className='audio-tag'>
          <img src={vol} alt="Play" />
          <audio id='m0' className='controls' preload="auto" src={introaudio}></audio>
        </div>
        <div onClick={() => {
          document.getElementsByTagName('audio')[2].pause();
          document.getElementById('audio-tag4').style.display = 'flex';
          document.getElementById('audio-mute-tag4').style.display = 'none';
        }} id='audio-mute-tag4' className='audio-mute-tag'>
          <img src={volMute} alt="Mute" />
        </div> */}
        <a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/watch?v=Hoixgm4-P4M">
          <img src={youtube} alt="YouTube" />
        </a>
        <a rel="noopener noreferrer" target="_blank" href="https://www.geeksforgeeks.org/quick-sort/">
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