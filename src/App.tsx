import React from 'react';

function App() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f4f7fb',
      minHeight: '100vh',
      color: '#1e293b'
    }}>
      <header style={{
        backgroundColor: '#0f172a',
        color: 'white',
        padding: '22px',
        textAlign: 'center'
      }}>
        <h1>Work-Trust</h1>
        <p>Trusted Jobs. Verified Employers. Zero Recruitment Fees.</p>
      </header>

      <main style={{
        maxWidth: '900px',
        margin: 'auto',
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <h1>Find Your Dream Job</h1>

        <p>
          Connect with verified employers and discover
          trusted job opportunities without recruitment fees.
        </p>

        <div style={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginTop: '30px'
        }}>
          <button style={buttonStyle}>
            Find Jobs
          </button>

          <button style
