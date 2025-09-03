import React, { useState, useEffect } from 'react';
import './Home.css';

const PortfolioHome = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [bubbles, setBubbles] = useState([]);

  const aboutMeTexts = [
    "I'm a passionate Full stack Developer with 3.4 years of experience specializing in Java , Springboot,React.Js , SQL , Javascript/Typescript. With expertise in creating user-friendly UI & scalable APIs by integrating various technologies and Polygot Programming, I deliver high-quality web applications.",
    "When I'm not coding, you can find me exploring new technologies (Currently Laerning : AWS , Python,LLM) and contributing to open-source projects. I believe in continuous learning and staying updated with the latest trends in web development."
  ];

  // Water bubble effect
  useEffect(() => {
    const createBubble = () => {
      const newBubble = {
        id: Date.now(),
        left: Math.random() * 100,
        size: Math.random() * 20 + 10,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 3
      };
      setBubbles(prev => [...prev, newBubble]);
      
      setTimeout(() => {
        setBubbles(prev => prev.filter(b => b.id !== newBubble.id));
      }, newBubble.duration * 1000);
    };

    const bubbleInterval = setInterval(createBubble, 800);
    return () => clearInterval(bubbleInterval);
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (animationComplete) return;

    let timer;
    const currentText = aboutMeTexts[currentParagraph];
    
    if (displayedText.length < currentText.length) {
      timer = setTimeout(() => {
        setDisplayedText(currentText.substring(0, displayedText.length + 1));
      }, 20);
    } else {
      if (currentParagraph < aboutMeTexts.length - 1) {
        setTimeout(() => {
          setCurrentParagraph(currentParagraph + 1);
          setDisplayedText('');
        }, 1000);
      } else {
        setAnimationComplete(true);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, currentParagraph, animationComplete]);

  const handleViewResume = () => {
    window.open('/Rajmani.pdf', '_blank');
  };

  const handleDownloadResume = () => {
    const resumeUrl = '/Rajmani.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Rajmani.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="portfolio-container">
      {/* Water bubbles */}
      {bubbles.map(bubble => (
        <div 
          key={bubble.id}
          className="water-bubble"
          style={{
            left: `${bubble.left}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            animationDuration: `${bubble.duration}s`,
            animationDelay: `${bubble.delay}s`
          }}
        />
      ))}

      <div className="content-wrapper">
        <div className="text-content">
          <h1>Hi, I'm <span className="highlight">Rajmani</span></h1>
          <h3>Frontend Developer</h3>
          
          <div className="about-me">
            <p>
              {displayedText}
              {!animationComplete && <span className="cursor">|</span>}
            </p>
          </div>
          
          <div className="button-group">
            <button className="btn view-resume" onClick={handleViewResume}>
              Digital Resume
            </button>
            <button className="btn download-resume" onClick={handleDownloadResume}>
              Download Resume
            </button>
          </div>
        </div>
        
        <div className="image-content">
          <img src="/images/heroimage.png" alt="Rajmani" className="profile-image" />
        </div>
      </div>
    </div>
  );
};

export default PortfolioHome;
