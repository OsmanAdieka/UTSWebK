import React from 'react';
import homeimg from "./Profile.jpg";

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

  const btnContainerStyle = {
    display: 'flex',
    gap: '1rem',
  };

  const btnStyle = {
    fontSize: '1rem',
    fontWeight: '600',
    letterSpacing: '2px',
    padding: '1rem 2rem',
    outline: 'none',
    border: '2px solid #ffffff', // Warna garis batas
    borderRadius: '10px',
    transition: '0.3s',
    cursor: 'pointer',
  };

  const knowMeBtnStyle = {
    ...btnStyle,
    backgroundColor: '#000000',
    color: '#ffffff',
  };

  const somethingsBtnStyle = {
    ...btnStyle,
    backgroundColor: '#000000',
    color: '#ffffff',
  };

  const hoverStyle = {
    backgroundColor: '#808080', // Warna latar belakang saat hover
    color: '#ffffff',
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
          <p className="subtitle" style={subtitleStyle}>Hi there!</p>
          <h1 className="title">
            I am <span style={titleSpanStyle}>Osman adika rais<br />a</span> Beginner Web Developer
          </h1>
          <p className="description" style={descriptionStyle}>
            Welcome to my first website! Here I will write some things about me, so you can get to know me better!
          </p>
          <div className="action_btns" style={btnContainerStyle}>
            <button className="knowmebetter" style={{ ...knowMeBtnStyle, ...(true ? hoverStyle : null) }}>Know me better</button>
            <button className="somethings" style={{ ...somethingsBtnStyle, ...(true ? hoverStyle : null) }}>Some things you might wanna see...</button>
          </div>
        </div>
        <div className="image" style={imageContainerStyle}>
          <img src={homeimg} alt="profile" style={imageStyle} />
        </div>
      </div>
    </section>
  );
}

export default YourComponent;
