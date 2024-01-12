import React from 'react';
import homeimg from "./aku.jpeg";

const YourComponent = () => {
  const sectionStyle = {
    backgroundColor: '#696969', // Warna latar belakang abu-abu tua
    color: '#ffffff', // Warna teks
  };

  const containerStyle = {
    minHeight: '80vh',
    maxWidth: 'var(--max-width)',
    margin: 'auto',
    padding: '4rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '4rem',
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const subtitleStyle = {
    letterSpacing: '2px',
    fontWeight: '400',
    lineHeight: '3rem',
    marginBottom: '1rem',
  };

  const titleSpanStyle = {
    fontWeight: '600',
  };

  const descriptionStyle = {
    lineHeight: '1.5rem',
    marginBottom: '2rem',
  };

  const imageContainerStyle = {
    display: 'flex',
    justifyContent: 'center', // Tengah secara horizontal
    alignItems: 'center', // Tengah secara vertikal
  };

  const imageStyle = {
    width: 'min(25rem, 70%)',
    borderRadius: '10%',
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div className="content" style={contentStyle}>
          <p className="subtitle" style={subtitleStyle}>Whatsup!</p>
          <h1 className="title">
            I am <span style={titleSpanStyle}>Osman adika rais<br />a</span> Beginner Web Developer
          </h1>
          <p className="description" style={descriptionStyle}>
            I'm just an ordinary boy that has a high curiousity and I'm currently 21 years old
          </p>
        </div>
        <div className="image" style={imageContainerStyle}>
          <img src={homeimg} alt="profile" style={imageStyle} />
        </div>
      </div>
    </section>
  );
}

export default YourComponent;
