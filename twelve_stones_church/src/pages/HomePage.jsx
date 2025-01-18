import React from 'react';

const HomePage = () => {
  return (
    <section id="home" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">메인페이지</h2>
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center items-center">
            <div className="rounded-full bg-gray-200 text-gray-800 text-center py-4 px-8">
              2025 표어
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;