import React from 'react';

const SermonsPage = () => {
  return (
    <section id="sermons" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center">설교</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 mb-4 text-center">
            실시간 설교를 들으시려면 아래 링크를 클릭하세요. 
          </p>
          <p className="text-gray-400 mb-4 text-center text-xs">
            (실시간 라이브가 없을 시, 유튜브 채널로 이동합니다.)
          </p>
          <div className="flex justify-center">
            <a href="https://www.youtube.com/@twelveStonesChurch/live" target="_blank" rel="noopener noreferrer">
              <iframe
                width="1008"
                height="567"
                src="https://www.youtube.com/embed/live_stream?channel=UCtwelveStonesChurch"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube Live Stream"
              ></iframe>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SermonsPage;