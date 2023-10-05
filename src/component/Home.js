import React from 'react';
import Hotspots from '../images/Hostspots.png';
import AI from '../images/AI.png';
import Shipping from '../images/Shipping.png';
import citywalk from '../images/citywalk.png';
import downarrow from '../images/down-arrow 1.png';
import food from '../images/food.png';
import select from '../images/select.png';
import news from '../images/news.png';
import bike from '../images/bike.png';

import '../css/homestyle.css';

// Sample data for multiple sets of images and labels
const data = [
  {
    id: 1,
    imageSrc: Hotspots,
    title: 'HOTSPOTS',
    description: 'Luxury hotspots: 5 most expensive high streets in the...',
  },
  {
    id: 2,
    imageSrc: AI,
    title: 'AI',
    description: '5 ways to leverage the power of chatGpt in retail',
  },
  {
    id: 3,
    imageSrc: Shipping,
    title: 'Shipping',
    description: 'Reliance to open 250 Azorte stores in 2-3 years',
  },
];

const datas = [
  {
    id: 1,
    imageSrc1: citywalk,
    linkText: 'SELECT CITYWALK',
    description: 'Wow! Momo Foods enters Bhopal with Wow!',
    downarrow: downarrow,
    ashtag: '# Citywalk',
  },
  {
    id: 2,
    imageSrc1: food,
    linkText: 'SELECT CITYWALK',
    description: 'Wow! Momo Foods enters Bhopal with Wow!',
    downarrow: downarrow,
    ashtag: '# Citywalk',
  },
  {
    id: 3,
    imageSrc1: select,
    linkText: 'SELECT CITYWALK',
    description: 'Wow! Momo Foods enters Bhopal with Wow!',
    downarrow: downarrow,
    ashtag: '# Citywalk',
  },
];

function Home() {
  return (
    <>
      <header>
        <div className="section">
          <div className="box">
            {data.map(item => (
              <div className="rectangle" key={item.id}>
                <div className="content">
                  <div className="image">
                    <img src={item.imageSrc} className="link-jpg" alt="Link jpg" />
                  </div>
                  <div className="label">
                    <div className="item-by-david-hall">{item.title}</div>
                    <p className="text-wrapper">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
<div className='container container-flex'>
  {/* Part 1 */}
  <div className='part1'>
  <div className="section1">
      <div className="background">
        <div className="link-figure">
          <div className="label1">
            <div className="text-wrapper1">
              <div className="in-focus">IN FOCUS</div>
              <p className="text-content">Rahul Gandhi In Manipur: Chopper Ride After Women Protesters Surround Car</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="box1">
        {datas.map(item => (
          <div className="item1" key={item.id}>
            <div className="image1">
              <img src={item.imageSrc1} alt="alt-img" className="img1" />
            </div>
            <div className="label3">
              <p className="link-multimedia">{item.linkText}</p>
              <div className='wrap'>
                <p className="text-wrapper2">{item.description}</p>
                <img className="down-arrow" src={item.downarrow} alt="Down arrow" />
              </div>
            </div>
            <br/>
            <h6 className="ashtag">{item.ashtag}</h6>
            <hr />
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Part 2 */}
  <div className='part2'>
    <div className='news'>
      <p className='link-heading'>Latestnews</p>
      <div className='group'>
        <div className='link-picture'>
          <div className='overlap-group'>
            <div className='link-multimedia2'>
              <img src={news} alt='no img' className='img3'/>
              <p className='wrapping'>Unwrapping the Arches reinvention plan </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Part 3 */}
  <div className='part3'>
   
   <img className='bike-img' src={bike}/>
  </div>
</div>

      </header>
    </>
  );
}

export default Home;
