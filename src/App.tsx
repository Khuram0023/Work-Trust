import React from 'react';

function App() {
const buttonStyle = {
backgroundColor: '#2563eb',
color: 'white',
padding: '14px 28px',
border: 'none',
borderRadius: '8px',
fontSize: '16px',
cursor: 'pointer'
};

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
    padding: '25px',
    textAlign: 'center'
  }}>
    <h1>WorkTrust</h1>
    <p>Trusted Jobs. Verified Employers. Zero Recruitment Fees.</p>
  </header>

  <main style={{
    maxWidth: '900px',
    margin: 'auto',
    padding: '50px 20px',
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

      <button style={{
        ...buttonStyle,
        backgroundColor: '#16a34a'
      }}>
        Register as Job Seeker
      </button>

      <button style={{
        ...buttonStyle,
        backgroundColor: '#475569'
      }}>
        Register as Employer
      </button>

    </div>

    <section style={{
      marginTop: '60px',
      backgroundColor: 'white',
      padding: '30px',
      borderRadius: '12px'
    }}>

      <h2>Why Choose WorkTrust?</h2>

      <p>Verified Employers</p>
      <p>Legal International Job Opportunities</p>
      <p>No Recruitment Fees</p>
      <p>Safe and Transparent Hiring</p>

    </section>

  </main>

  <footer style={{
    backgroundColor: '#0f172a',
    color: 'white',
    textAlign: 'center',
    padding: '20px'
  }}>
    <p>© 2026 WorkTrust. All Rights Reserved.</p>
  </footer>

</div>

);
}

export default App;
