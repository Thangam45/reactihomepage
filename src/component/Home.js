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
import Aistore from '../images/aistore.png';
import ir from '../images/ir.png';
import chicken from '../images/chicken.png';
import retail from '../images/retail.png';
import fresh from '../images/fresh.png';
import paper from '../images/paper-plane 1.png';
import webspecial1 from '../images/webspecial1.png';
import webspecial2 from '../images/webspecial2.png';
import webspecial13 from '../images/webspecial3.png';
import webspecial4 from '../images/webspecial4.png';
import webspecial5 from '../images/webspecial5.png';
import logo from '../images/i.fas.png';
import trends from '../images/trending.png';
import trending from '../images/trennds1.png';
import trending1 from '../images/trends2.png';
import trending2 from '../images/trends3.png';
import trending3 from '../images/trends4.png';
import trending4 from '../images/trends5.png';
import ellipse1 from '../images/Ellipse 1.png';
import ellipse2 from '../images/Ellipse 2.png';
import ellipse3 from '../images/Ellipse3.png';
import black1 from '../images/black1.png';
import black2 from '../images/black2.png';
import black3 from '../images/black3.png';
import black4 from '../images/black4.png';
import black5 from '../images/black5.png';
import black6 from '../images/black6.png';
import black7 from '../images/black7.png';
import '../css/homestyle.css';

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

const dat = [
  {
    id: 1,
    imageSrc: fresh,
    title: 'AI Store',
    description: 'AI Store opens in downtown with the latest technology.',
  },
  {
    id: 2,
    imageSrc: retail,
    title: 'Retail News',
    description: 'Major retail chains announce expansion plans for the year.',
  },
  {
    id: 3,
    imageSrc: chicken,
    title: 'Chicken Delight',
    description: 'New chicken restaurant now open in your city.',
  },
];

const web = [
  {
    id: 1,
    imageSrc: webspecial1,
    logo:logo,
    description: 'Fashion brand icons:Shailesh Chaturvedi of Arvind Fashions',
  },
  {
    id: 2,
    imageSrc: webspecial2,
    logo:logo,    
    description: 'DLF creating new retail space in Delhi for  France Galeries Lafayette',
  },
  {
    id: 3,
    imageSrc: webspecial13,
    logo:logo,
    description: 'PE firm Carlyle offloads entire ,Carlyle through its special-purpose',
  },
  {
    id: 4,
    imageSrc: webspecial4,
    logo:logo, 
    description: 'How AI is enchancing stores,How AI is enchancing stores',
    
  },
  {
    id: 5,
    imageSrc: webspecial5,
    logo:logo, 
    description: 'Shilpa Shetty Kundra invests Kisakonnet is at Rs 120 crore',
   
  },
];

const trendss= [
  {
    id: 1,
    imageSrc: trending,
    Ellipse:ellipse1,
    description: 'Top 5 iconic Apple Stores across the world by design',
  },
  {
    id: 2,
    imageSrc: trending1,
    Ellipse:ellipse2,   
    description: 'Rollercoaster ride of our retail industry IPO',
  },
  {
    id: 3,
    imageSrc: trending2,
    Ellipse:ellipse3,
    description: 'Uniqlo india Success Mantra: Making headway...',
  },
  {
    id: 4,
    imageSrc: trending3,
    logo:logo, 
    description: 'How AI is enchancing stores,How AI is enchancing stores',
    btn:"FASHION"
  },
  {
    id: 5,
    imageSrc: trending4,
    logo:logo, 
    description: 'Shilpa Shetty Kundra invests Kisakonnet is at Rs 120 crore',
    btn:"BEAUTY"
  },
];
const black= [
  // {
  //   id: 1,
  //   imageSrc: black1,
  //   Ellipse:ellipse1,
  //   description: 'Top 5 iconic Apple Stores across the world by design',
  // },
  {
    id: 2,
    imageSrc: black2,
    Ellipse:ellipse1,
    description: 'Top 5 iconic Apple Stores across the world by design',
  },
  {
    id: 3,
    imageSrc: black3,
     
    description: 'Rollercoaster ride of our retail industry IPO',
  },
  {
    id: 4,
    imageSrc: black4,
   
    description: 'Uniqlo india Success Mantra: Making headway...',
  },
  {
    id: 5,
    imageSrc: black5,
    description: 'How AI is enchancing stores,How AI is enchancing stores',
  },
  {
    id: 6,
    imageSrc: black6,
    description: 'Shilpa Shetty Kundra invests Kisakonnet is at Rs 120 crore',
  },
  {
    id: 7,
    imageSrc: black7,
    description: 'Shilpa Shetty Kundra invests Kisakonnet is at Rs 120 crore',
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

          <div className='part2'>
            <div className='news'>
              <p className='link-heading'>Latestnews</p>
              <div className='group'>
                <div className='link-picture'>
                  <div className='overlap-group'>
                    <div className='link-multimedia2'>
                      <img src={news} alt='no img' className='img3'/>
                      <p className='wrapping'>Unwrapping the Arches reinvention plan </p>
                      <div>
                        <img src={Aistore} className='img3'/>
                        <p className='wrapping'>How AI is enhancing stores</p>
                        <br />
                        <hr className='wrapping'/>
                        <p className='wrapping'>Croma open 58 outlets in 6, Croma retails more than 16,000</p>
                        <br />
                        <br />
                        <p className='wrapping1'>These companies created a lot of hype when they listed on the...</p>
                        <hr className='wrapping' />
                        <p className='wrapping'>Select CityWalk opens 4 new stores in June</p>
                        <br />
                        <br />
                        <p className='wrapping1'>These companies created a lot of hype when they listed on the...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='part3'>
          <div className='box-content'>
            <p>-Advertisement-</p>
            <img className='bike-img' src={bike}/>
            </div>
            <div className='basic-collection'>
                  <div className='item2'>
                <img src={ir} />
                <div className='boxes'>
                  <div className='box-1'>
                    <p className='heading-editors'>Ir Prime</p>
                    <p className='heading-top'>Top3 &nbsp; :Stories of the day</p>
                  </div>
                  <button className='link-button'>See All</button>
                </div>
              </div>
              <div className="section4">
                <div className="box4">
                  {dat.map(item => (
                    <div className="rectangle3" key={item.id}>
                      <div className="content3">
                        <div className='box-content1'>
                        <div className="image">
                          <img src={item.imageSrc} className="link-jpg" alt="Link jpg" />
                        </div >
                        <div className="label5">
                          <p className="text-wrapper3">{item.description}</p>
                        </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
             
            </div>
            <div className='subscri'>
                <img src={paper} className='paper-plane' alt='plane' />
                   <h1 className='subs'>Suibscribe</h1>
                   <input placeholder='your email address'></input>
                   <br />
                   <br />
                   <div className='but'>
                   <button className='btn'>Suibscribe</button>
                   </div>
              </div>
          </div>
          </div>
        <hr />

        {/* web specials*/}
        <div className='control'>
          <div className='part5'>
        <div className="background1">
                <div className="link-figure1">
                  <div className="label1">
                    <div className="text-wrapper1">
                      <p className="text-content">Rahul Gandhi In Manipur: Chopper Ride After Women Protesters Surround Car</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
             <div className='part6'>
                <ul>
                  <li  className='wraps'>Cinema industry welcomes lowering GST rates </li>
                  <br />
                  <br />
                  <li  className='wraps'>Patanjali Ayurved to sell 7% stake in Patanjali</li>
                  <br />
                  <br />
                  <li  className='wraps'>Select CityWalk opens 4 new stores in June </li>
                  <br />
                  <br />
                  <li  className='wraps'>Govt imposes import restrictions  on certain gold </li>
                  <br />
                  <br />
                  <li  className='wraps'>joom Marketplace offers a global window for sellers</li>
                </ul>
             </div>
             <div className='part7'>
               <p>-Advertisement-</p>
               <img className='bike-img' src={bike}/>
            </div>
            </div>
            <hr className='line' />

            <div className='ull'>
                 <div className='ellipse'> 
            </div>   
               <p className='wraps1'>B2B managed Marketplace<br /> the yarn </p>
               <p className='wraps1'>Sequioa Capital exits Go<br />  Fashion </p>
               <p className='wraps1'>B2B managed Marketplace <br /> the yarn </p>
               <p className='wraps1'>Sequioa Capital exits Go<br />  Fashion </p>
            </div> 
            <div className="section7">
          <div className="box">
            {web.map(item => (
              <div className="rectangle7" key={item.id}>
                <div className="content7">
                  <div className="image7">
                    <img src={item.imageSrc} className="link-jpg1" alt="Link jpg" />
                  </div>
                  <div className="label">
                    <div className="item-by-david-hall">{item.title}</div>
                    <p className="text-wrapper7">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* trends */}
     <div className='trends'>
      <img  src={trends}/>
     </div>
   {/* leadres */}
   <div className="section7">
   <h1>Leaders</h1>
   <div className='lead'>
    <p>see more</p>
   <h4 className='reas'>Research</h4> 
   </div>
          <div className="box">  
            {trendss.map(item => (
              <div className="rectangle7" key={item.id}>
                <div className="content7">
                  <div className="image">
                    <img src={item.imageSrc} className="link-jpg1" alt="Link jpg" />
                  </div>
                  <div className="label">
                    <p className="text-wrapper7">{item.description}</p>
                    <button>{item.btn}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <br />
        <br />
        <div className='black'>
      <div className='content-im'>
        <h2>IR Video wall</h2>
      </div>
      <div className='head'>
        <h3>Retail with Rasul</h3>
        <h3>The Store</h3>
        <h3>IR studio</h3>
      </div>
      <div className='box8'>
        {black.map(item => (
          <div className='rectangle8' key={item.id}>
            <div className='content8'>
              <div className='change-image'/>
              <div className='image8'>
                <img src={item.imageSrc} className='link-jpg4' alt='Link jpg' />
              </div>
              <div className='label8'>
                <p className='text-wrapper8'>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
        {/* Add more items as needed */}
      </div>
      <img src={black1} className='link-jpg3' alt='Link jpg3' />
    </div>
    
   
      

      </header>
  </>
  )
}

export default Home;
