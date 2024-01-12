import React from 'react';
import skillimg from "./Skill.jpg";

const SkillsSection = () => {
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
    lineHeight: '1.5rem',
    color: 'var(--text-light)',
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
            I'm pretty good at...<span></span>
          </h1>
          <p className="description" style={descriptionStyle}>
            - Teamwork (not as a leader)<br />
            - Managing my own self<br />
            - Public speaking<br />
            - Coding<br />
          </p>
        </div>
        <div className="image" style={imageContainerStyle}>
          <img src={skillimg} alt="profile" style={imageStyle} />
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
