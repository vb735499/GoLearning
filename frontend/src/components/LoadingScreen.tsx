import React, { FC } from 'react';

const LoadingScreen: FC = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      padding: '20px',
    }}>
      <h2 style={{ opacity: '0', animation: 'fadeIn 1s ease-in-out forwards' }}>Loading...</h2>
    </div>
  );
};

export default LoadingScreen;
