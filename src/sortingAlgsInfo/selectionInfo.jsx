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
              <span>scroll down to learn what's happening!</span>
              <p id='sortexplained'>
                <p>
                  Like its name suggests, selection sort works by selecting the smallest element from an unsorted list and moving it to the front. It will repeat this process of selecting remaining smallest elements and then adding them to the front until there are no items left in the unsorted list.
                </p>
                <p>
                  So if you look at the array being sorted below, selection sort goes through the entire unsorted array and selects the smallest bar. It then moves that bar into the front of the array. Then it repeats this process excluding that bar it just moved and focusing on the remaining unsorted array. By doing so we keep on selecting the smallest bar, removing it from the unsorted array and adding it to the front. This process will continue until we have gone over all of the bars in the unsorted array. 
                </p>
                <p>
                  Notice that this process essentially is adding the smallest value in front then second smallest after it and so forth. For instance, if we had an array containing values 4 2 and 3 selection sort will select 2 and add it to the front then from remaining list of 4 and 3 it will select 3 and then finally 4 to get 2 3 and 4.
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
          document.getElementsByTagName('audio')[5].play();
          document.getElementById('audio-tag5').style.display = 'none';
          document.getElementById('audio-mute-tag5').style.display = 'flex';
        }} id='audio-tag5' className='audio-tag'>
          <img src={vol} alt="Play" />
          <audio id='m0' className='controls' preload="auto" src={introaudio}></audio>
        </div>
        <div onClick={() => {
          document.getElementsByTagName('audio')[5].pause();
          document.getElementById('audio-tag5').style.display = 'flex';
          document.getElementById('audio-mute-tag5').style.display = 'none';
        }} id='audio-mute-tag5' className='audio-mute-tag'>
          <img src={volMute} alt="Mute" />
        </div> */}
        <a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/watch?v=g-PGLbMth_g">
          <img src={youtube} alt="YouTube" />
        </a>
        <a rel="noopener noreferrer" target="_blank" href="https://www.geeksforgeeks.org/selection-sort/">
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