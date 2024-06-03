import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../utils/Hero.png";
import OrganizeMusic from "../utils/OrganizeMusic.png";
import ReviewMusic from "../utils/RateMusic.png";
import ExploreMusic from "../utils/ExploreMusic.png";
import SongsTable from "../utils/SongsTable.png";
import { RiNeteaseCloudMusicFill} from "react-icons/ri";
import Reviews from "../utils/Reviews.png";
// Import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SlSocialLinkedin } from "react-icons/sl";
import { PiGithubLogo } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";

// Import ads images
import Ad1 from "../utils/SarahProfile.jpg";
import Ad2 from "../utils/JohnProfile.jpg";
import Ad3 from "../utils/EmilyProfile.jpg"

const arr = [
  {
    id: 1,
    pic: Ad1,
    text: "Tuner has completely transformed the way I listen to music. The ability to organize my playlists and discover new artists has been a game-changer.",
    from: "- Sarah M."
  },
  {
    id: 2,
    pic: Ad2,
    text: "I love how easy it is to write and read reviews on Tuner. It’s great to see what others think about my favorite songs and find new ones to add to my collection.",
    from: "- John D."
  },
  {
    id: 3,
    pic: Ad3,
    text: "Tuner’s interface is so intuitive and user-friendly. Managing my music library has never been this fun and effortless.",
    from: "- Emily R."
  },
];


export default function Home() {
  return (
    <div class="flex flex-col">
      <style>
        {`
          /* Custom Swiper navigation button styles */
          .swiper-button-next, .swiper-button-prev {
            color: teal; /* Change the color to teal */
          }

          .swiper-button-next::after, .swiper-button-prev::after {
            font-size: 40px; /* Adjust the size if needed */
          }
        `}
      </style>
      <div class="p-4 flex flex-col items-center justify-center mt-4">
        <svg viewBox="50 0 450 50" className="svg">
          <text y="50">Welcome to Tuner</text>
        </svg>
        <p className="header mt-8 text-xl text-center max-w-lg">
          Your ultimate music organizer. Create playlists, organize your favorite songs and artists, and explore new music effortlessly
        </p>
        <Link
          class={`bg-teal-500 text-teal-100 hover:bg-teal-600 rounded py-2 px-4 font-semibold mt-4`}
        to="/songs"
        >
          Get Started
        </Link>
        <img src={HeroImg} alt="hero" className="w-2/5" />
      </div>
      <h2 className="text-3xl font-semibold text-center my-4">Features available</h2>
      <section className="cards sm:flex justify-center items-center gap-10 my-8">
        <div className="w-80 h-96 flex flex-col justify-center items-center relative bg-teal-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-4 shadow-md group">
          <h2 className="text-lg font-semibold text-teal-500 text-center">Organize your favorite songs and Playlists</h2>
          <img src={OrganizeMusic} alt="Organize your songs and playlists" className="w-60 h-60" />
          <p className="text-center flex items-center absolute top-0 opacity-0 group-hover:opacity-100 group-hover:top-[25%] group-hover:bg-teal-500 group-hover:h-72 group-hover:bg-opacity-90 transition-all duration-500 transform group-hover:translate-y-0 p-4 rounded-b-md">
            Create and manage your playlists easily. Add, update, remove, and reorder songs to keep your music organized. Enjoy the simplicity of our intuitive interface.
          </p>
        </div>
        <div className="w-80 h-96 flex flex-col justify-center items-center relative bg-teal-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-4 shadow-md group">
          <h2 className="text-lg font-semibold text-teal-500 text-center">Review your favorite songs and artists</h2>
          <img src={ReviewMusic} alt="Review your songs and artists" className="w-60 h-60" />
          <p className="text-center flex items-center absolute top-0 opacity-0 group-hover:opacity-100 group-hover:top-[25%] group-hover:bg-teal-500 group-hover:h-72 group-hover:bg-opacity-90 transition-all duration-500 transform group-hover:translate-y-0 p-4 rounded-b-md">
            Read and write reviews for your favorite songs and artists. Share your thoughts with the community and discover what others think. Enhance your music experience.
          </p>
        </div>
        <div className="w-80 h-96 flex flex-col justify-center items-center relative bg-teal-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-4 shadow-md group">
          <h2 className="text-lg font-semibold text-teal-500 text-center">Discover and explore new music and artists</h2>
          <img src={ExploreMusic} alt="Discover New Music" className="w-56 h-56 mt-4" />
          <p className="text-center flex items-center absolute top-0 opacity-0 group-hover:opacity-100 group-hover:top-[25%] group-hover:bg-teal-500 group-hover:h-72 group-hover:bg-opacity-90 transition-all duration-500 transform group-hover:translate-y-0 p-4 rounded-b-md">
            Explore new songs and artists. Our recommendation engine helps you find music you'll love. Stay ahead of trends and expand your musical horizons.
          </p>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center gap-10 my-8">
        <div className="features flex items-center justify-center gap-4">
          <p className="w-96 sm:text-2xl">Tuner empowers you to curate and organize your music library with ease. Enjoy seamless playlist creation, in-depth song and artist reviews, and an intuitive interface designed to elevate your musical journey.</p>
          <img src={SongsTable} alt="Songs table" className="w-3/6" />
        </div>
        <div className="features flex items-center justify-center gap-4">
          <img src={Reviews} alt="Reviews" className="w-3/6" />
          <p className="w-96 sm:text-2xl">Join a thriving community of music enthusiasts on Tuner. Share your thoughts on songs, engage in discussions, and connect with like-minded individuals who share your passion for music. Participate in rating songs, and more as you become a valued member of our vibrant community.</p>
        </div>
      </section>
      <section className="w-5/6 mx-auto my-10">
        <h2 className="text-2xl text-center font-semibold my-4">Testimonials</h2>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {arr.map(({ id, pic, text, from }) => {
            return (
              <SwiperSlide key={id} className="flex justify-center items-center bg-teal-100 p-4 rounded-md">
                <div className="testimonial sm:flex items-center justify-center gap-4 p-4">
                  <div className="md:w-40 md:h-40">
                    <img src={pic} alt="testimonial" className="testimonial-img object-cover sm:w-10 sm:h-10 md:w-28 md:h-28 rounded-full"></img>
                  </div>
                  <div className="sm:text-lg">
                    <p className="sm:w-[40vw]">{text}</p>
                    <p className="sm:w-96 text-center my-2">{from}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
      <section className="mt-10 bg-teal-500 p-10">
        <div className="footer flex justify-between px-10">
          <div className="">
            <h3 className="text-2xl font-semibold my-4">Experience the Best in Music organization</h3>
            <p className="my-4">Don't wait, get stated now!</p>
            <Link
              class={`bg-teal-100 text-teal-500 hover:bg-teal-200 rounded py-3 px-8 font-semibold`}
            to="/songs"
            >
              Start Now
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="">
              <span className="">Let's connect! </span>
              <span className='text-lg'>&#9786;</span>
            </h3>
            <div className="flex py-2">
              <a
                href="https://www.linkedin.com/in/fadila-ali-574b13183/"
                target="_blank"
                rel="noreferrer"
                className="px-2 hover:scale-105 hover:text-teal-100 duration-300"
              >
                <SlSocialLinkedin />
              </a>
              <a
                href="https://github.com/Fadila-Ali"
                target="_blank"
                rel="noreferrer"
                className="px-2 hover:scale-105 hover:text-teal-100 duration-300"
              >
                <PiGithubLogo />
              </a>
              <a
                href="https://twitter.com/fadila_ali_"
                target="_blank"
                rel="noreferrer"
                className="px-2 hover:scale-105 hover:text-teal-100 duration-300"
              >
                <RiTwitterXFill />
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-1 mt-4 items-center justify-center text-gray-700">
          <RiNeteaseCloudMusicFill />
          <i>Tuner Copyright &#9400; 2024</i>
        </div>
      </section>
    </div>
  );
}
