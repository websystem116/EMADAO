import { useTheme } from 'next-themes';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const sponsorImages = [
  {
    light: '/img/light-sponsor/01.png',
    dark: '/img/sponsor/01.png',
  },
  {
    light: '/img/light-sponsor/02.png',
    dark: '/img/sponsor/02.png',
  },
  {
    light: '/img/light-sponsor/03.png',
    dark: '/img/sponsor/03.png',
  },
  {
    light: '/img/light-sponsor/04.png',
    dark: '/img/sponsor/04.png',
  },
  {
    light: '/img/light-sponsor/05.png',
    dark: '/img/sponsor/05.png',
  },
  {
    light: '/img/light-sponsor/06.png',
    dark: '/img/sponsor/06.png',
  },
  {
    light: '/img/light-sponsor/07.png',
    dark: '/img/sponsor/07.png',
  },
  {
    light: '/img/light-sponsor/08.png',
    dark: '/img/sponsor/08.png',
  },
  {
    light: '/img/light-sponsor/09.png',
    dark: '/img/sponsor/09.png',
  },
  {
    light: '/img/light-sponsor/05.png',
    dark: '/img/sponsor/05.png',
  },
  {
    light: '/img/light-sponsor/06.png',
    dark: '/img/sponsor/06.png',
  },
]
const Sponsor = () => {
  const { theme } = useTheme()
  return (
    <div className="sponsor-section">
      <div className="container">

      </div>
    </div>
  );
};

export default Sponsor;