import React from 'react';
import banner from '../assets/banner.mp4'; // Ensure this path is correct

const Banner = () => (
  <div style={{ position: 'relative', height: '300px', overflow: 'hidden' }}>
    <video
      src={banner}
      autoPlay
      muted
      loop
      playsInline
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0
      }}
    />
    <div
      className="d-flex align-items-center justify-content-center text-white"
      style={{
        position: 'relative',
        height: '100%',
        zIndex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
      }}
    >
      <h1
        className="display-4 text-center p-3 rounded"
        style={{ fontFamily: `'Playfair Display', Georgia, serif` }}
      >
        EMI For The Future
      </h1>
    </div>
  </div>
);

export default Banner;
