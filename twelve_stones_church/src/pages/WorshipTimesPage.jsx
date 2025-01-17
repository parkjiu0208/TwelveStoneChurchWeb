import React from 'react';

const WorshipTimesPage = () => {

    return (
        <section id="worship-times" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">예배시간</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 mb-4 text-center">
                [금요 예배] 저녁 9시 00분 <br />
                [주일 예배] 오전 10시 30분
              </p>
            </div>
          </div>
        </section>
      )
};

export default WorshipTimesPage;