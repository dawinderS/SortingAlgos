import React from 'react';
import '../sortingVisuals/sorts.css';
import mergeSort from '../pics/insertionsort.png';
import mergesortCode from '../pics/bubblecode.png';
import vol from '../pics/vol.png';
import volMute from '../pics/mute_vol.png';
import youtube from '../pics/youtube.png';
import reading from '../pics/reading.png';

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
            </div>
          </div>
        </div>
      </div>
      <div className="info-bar1" id="info-barcode">
        <div className="info-bartitle" id='info-barcodetop'>Psuedocode [scroll down to see all]</div>
        <img src={mergesortCode} alt="" />
      </div>
      <div className="info-bar" id="extra-links">
        {/* <div className="info-bartitle">
          Links
        </div> */}
        <a target="_blank" href="https://www.linkedin.com/in/dawinder-singh/">
          <img src={vol} alt="Audio" />
        </a>
        <a target="_blank" href="https://www.youtube.com/watch?v=xli_FI7CuzA">
          <img src={youtube} alt="YouTube" />
        </a>
        <a target="_blank" href="https://www.geeksforgeeks.org/bubble-sort/">
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