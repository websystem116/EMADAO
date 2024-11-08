import React from 'react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { Pagination, Navigation } from 'swiper'
import Link from 'next/link';

const ProgressSlider = () => {
   const percentStyle = { "--percent": 28 } as React.CSSProperties;
   return (


      <div className="progress-slider">

         <div className="progress-slider-items">
            <div className="title">
               <span className="icon">
                  <i className="icon-football"></i>
               </span>
               <span className="text">
                  League Nations UEFA
               </span>
            </div>
            <div className="main-progress-wrap">
               <div className="cart-item">
                  <div className="card">
                     <div className="percent">
                        <svg>
                           <circle cx="55" cy="55" r="45"></circle>
                           <circle cx="55" cy="55" r="45" style={percentStyle}></circle>
                        </svg>
                        <div className="content-area">
                           <div className="icon">
                              <img src="/img/table/croatia.png" alt="flag" />
                           </div>
                           <div className="number">
                              <h3>38<span>%</span></h3>
                           </div>
                           <div className="title">
                              <span>Croatia</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="cart-item cart-middle-item">
                  <div className="card myborder">
                     <div className="percent">
                        <div className="pro1">
                           <div className="pro2">
                              <div className="pro3">

                              </div>
                           </div>
                        </div>
                        <div className="content-area middle-bg">
                           <div className="icon">
                              <span className="vs">Vs</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="cart-items">
                  <div className="card">
                     <div className="percent">
                        <svg>
                           <circle cx="55" cy="55" r="45"></circle>
                           <circle cx="55" cy="55" r="45" style={percentStyle}></circle>
                        </svg>
                        <div className="content-area">
                           <div className="icon">
                              <img src="/img/table/denmark.png" alt="flag" />
                           </div>
                           <div className="number">
                              <h3>28<span>%</span></h3>
                           </div>
                           <div className="title">
                              <span>Denmark</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="match-pointing">
               <Link href="#0" className="match-pointing-box">
                  <span className="list">1</span>
                  <span>3.55</span>
               </Link>
               <Link href="#0" className="match-pointing-box">
                  <span className="list">X</span>
                  <span>4.25</span>
               </Link>
               <Link href="#0" className="match-pointing-box">
                  <span className="list">2</span>
                  <span>5.05</span>
               </Link>
            </div>
         </div>
         <div className="progress-slider-items">
            <div className="title">
               <span className="icon">
                  <i className="icon-football"></i>
               </span>
               <span className="text">
                  League Nations UEFA
               </span>
            </div>
            <div className="main-progress-wrap">
               <div className="cart-item">
                  <div className="card">
                     <div className="percent">
                        <svg>
                           <circle cx="55" cy="55" r="45"></circle>
                           <circle cx="55" cy="55" r="45" style={percentStyle}></circle>
                        </svg>
                        <div className="content-area">
                           <div className="icon">
                              <img src="/img/table/italy.png" alt="flag" />
                           </div>
                           <div className="number">
                              <h3>65<span>%</span></h3>
                           </div>
                           <div className="title">
                              <span>Italy</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="cart-item cart-middle-item">
                  <div className="card myborder">
                     <div className="percent">
                        <div className="pro1">
                           <div className="pro2">
                              <div className="pro3">

                              </div>
                           </div>
                        </div>
                        <div className="content-area middle-bg">
                           <div className="icon">
                              <span className="vs">Vs</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="cart-items">
                  <div className="card">
                     <div className="percent">
                        <svg>
                           <circle cx="55" cy="55" r="45"></circle>
                           <circle cx="55" cy="55" r="45" style={percentStyle}></circle>
                        </svg>
                        <div className="content-area">
                           <div className="icon">
                              <img src="/img/table/scotland.png" alt="flag" />
                           </div>
                           <div className="number">
                              <h3>28<span>%</span></h3>
                           </div>
                           <div className="title">
                              <span>Scotland</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="match-pointing">
               <Link href="#0" className="match-pointing-box">
                  <span className="list">1</span>
                  <span>3.55</span>
               </Link>
               <Link href="#0" className="match-pointing-box">
                  <span className="list">X</span>
                  <span>4.25</span>
               </Link>
               <Link href="#0" className="match-pointing-box">
                  <span className="list">2</span>
                  <span>5.05</span>
               </Link>
            </div>
         </div>
         <div className="paginations"></div>

      </div>
   );
};

export default ProgressSlider;