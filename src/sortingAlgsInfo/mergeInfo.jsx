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
              <span>scroll down to learn what's happening!</span>
              <p id='sortexplained'>
                <p>
                  Merge sort starts of by splitting the list into equal halves, with each in separate arrays. It then keeps splitting the subarrays until it meets its base case which is a list with only one item as a one-element list is already sorted. It then sorts each half by recursively using this same process and then merges the sorted halves back together to return a sorted list.
                </p>
                <p>
                  So if you look at the array being sorted below, before any sorting occurs merge sort splits the original array into two halves. Then it tests do these two halves pass the base case which is are these halves only one bar – the answer initially should be no since we have a large array. If base case is not passed it then splits those halves into 2 new halves. It will then split those new halves into another two halves and keep doing this until we reach a point where each bar is now its own array. Then it will recursively sort and merge those bars back together. 
                </p>
                <p>
                  Let’s say we had an array of containing values 4 2 3 1. It will split that into 2 halves: a half of  4 and 2 and a half of 3 and 1, then split that into 4 and 2 and 3 and 1 separately. Then it will begin to merge those separate halves back together so it will sort 4 and 2 into 2 and 4 and then 3 and 1 into 1 and 3. Then it will merge these two new halves together into 1 2 3 4.
                  Basically, we split the array into n arrays where n is the number of elements and then recursively sort each half and merge those arrays back together.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="info-bar1" id="info-barcode">
        <div className="info-bartitle" id='info-barcodetop'>Pseudocode [scroll down to see all]</div>
        <img id='mergecpic' src={mergesortCode} alt=""/>
      </div>
      <div className="info-bar" id="extra-links">
        {/* <div onClick={() => {
          document.getElementsByTagName('audio')[1].play();
          document.getElementById('audio-tag3').style.display = 'none';
          document.getElementById('audio-mute-tag3').style.display = 'flex';
        }} id='audio-tag3' className='audio-tag'>
          <img src={vol} alt="Play" />
          <audio id='m0' className='controls' preload="auto" src={introaudio}></audio>
        </div>
        <div onClick={() => {
          document.getElementsByTagName('audio')[1].pause();
          document.getElementById('audio-tag3').style.display = 'flex';
          document.getElementById('audio-mute-tag3').style.display = 'none';
        }} id='audio-mute-tag3' className='audio-mute-tag'>
          <img src={volMute} alt="Mute" />
        </div> */}
        <a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/watch?v=4VqmGXwpLqc">
          <img src={youtube} alt="YouTube" />
        </a>
        <a rel="noopener noreferrer" target="_blank" href="https://www.geeksforgeeks.org/merge-sort/">
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