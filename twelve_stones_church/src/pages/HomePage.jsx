import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 개업예배 from '../img/개업예배.jpg';
import 개업예배준비 from '../img/개업예배준비.jpg';
import 성탄청년 from '../img/성탄청년.jpg';

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <section id="home" className="flex flex-col justify-center items-center bg-white">
      <div className="container mx-auto px-4 pt-4">
        <div className="w-full">
          <Slider {...settings}>
            <div className="slider-item">
              <img src={개업예배} alt="개업예배" className="slider-image" />
            </div>
            <div className="slider-item">
              <img src={개업예배준비} alt="개업예배준비" className="slider-image" />
            </div>
            <div className="slider-item">
              <img src={성탄청년} alt="성탄청년" className="slider-image" />
            </div>
          </Slider>
          <div className="flex flex-col justify-center items-center mt-8">
            <div className="rounded-full bg-gray-200 text-gray-800 text-center py-4 px-8">
              2025 표어
            </div>
            <p className="text-stone-600 text-xl mt-2">"찬양하고 감사하라!"</p>
            <hr className="w-full border-t border-gray-300 my-4" />
            <p className="text-gray-600">여호와께 감사하라 그는 선하시며 그의 인자하심이 영원함이로다 (대상 16장 34절) </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}
      onClick={onClick}
    />
  );
};

export default HomePage;