import React from 'react';

const AboutPage = () => {

    return (
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">열두돌교회 소개</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 mb-4">
                열두돌교회는 하나님의 사랑과 은혜를 전하는 공동체입니다. 우리는 모든 세대가 함께 어우러져 
                믿음 안에서 성장하고, 서로를 돌보며, 세상을 향해 그리스도의 빛을 비추는 것을 목표로 합니다.
              </p>
              <p className="text-gray-600">
                우리 교회는 열린 마음으로 모든 분들을 환영하며, 함께 예배하고 섬기며 하나님의 나라를 확장해 
                나가는 일에 동참하시기를 초대합니다.
              </p>
            </div>
          </div>
        </section>
      )
};

export default AboutPage;