import React from 'react';
import hobbyimg from "./Hobby.jpg";

const HobbiesSection = () => {
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

  const titleStyle = {
    marginBottom: '1rem',
  };

  const descriptionStyle = {
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
          <h1 className="title" style={titleStyle}>
            My Hobbies are: <span></span>
          </h1>
          <p className="description" style={descriptionStyle}>
            - Morning jogging (Everyday routine)<br />
            - Doing sports (Basketball and Badminton)<br />
            - Watching Netflix
          </p>
        </div>
        <div className="image" style={imageContainerStyle}>
          <img src={hobbyimg} alt="profile" style={imageStyle} />
        </div>
      </div>
    </section>
  );
}

export default HobbiesSection;
