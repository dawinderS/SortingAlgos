import React from 'react';
import '../sortingVisuals/sorts.css';
import mergeSort from '../mergeSort.png';
import mergesortCode from '../mergesort-code.png';
import vol from '../pics/vol.png';
import volMute from '../pics/mute_vol.png';
import youtube from '../pics/youtube.png';
import reading from '../pics/reading.png';

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
                - Slow (usually takes O(n^2) time so too slow for super-big data sets)
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="info-bar" id="info-barcode">
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
        <a target="_blank" href="https://www.youtube.com/watch?v=JU767SDMDvA">
          <img src={youtube} alt="YouTube" />
        </a>
        <a target="_blank" href="https://www.geeksforgeeks.org/insertion-sort/">
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