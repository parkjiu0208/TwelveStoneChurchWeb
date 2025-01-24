import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = ''; 
const CHANNEL_ID = '';
const MAX_RESULTS = 9;

const SermonsPage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <section id="sermons" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">설교</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 mb-4 text-center">
            실시간 설교를 들으시려면 아래 링크를 클릭하세요. 
          </p>
          <p className="text-gray-400 mb-4 text-center text-xs">
            (실시간 라이브가 없을 시, 유튜브 채널로 이동합니다.)
          </p>
          <div className="flex justify-center mb-8">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {videos.map((video) => (
              <div key={video.id.videoId} className="flex justify-center">
                <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
                  <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className="w-auto h-auto" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SermonsPage;