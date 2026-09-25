import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const scrollToPrediction = () => {
    document.getElementById('prediction')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero__container">
        <div className="hero__editorial-content">
          <p className="hero__label">VOL. 01 — AI INTELLIGENCE</p>
          <hr className="hero__divider" />
          <h1 className="hero__title">
            The Future of <br />
            <span className="hero__title-italic">Insurance</span> <br />
            Security
          </h1>
          <p className="hero__subtitle">
            Advanced machine learning models deployed to scrutinize every vehicle insurance claim in milliseconds. Flag suspicious patterns and protect assets with absolute precision.
          </p>
          <div className="hero__buttons">
            <button className="hero__btn-primary" onClick={scrollToPrediction}>
              ANALYZE CLAIM <FaArrowRight />
            </button>
            <button className="hero__btn-outline" onClick={scrollToFeatures}>
              READ MORE
            </button>
          </div>
        </div>

        <div className="hero__editorial-sidebar">
          <div className="hero__stat-block">
            <h3 className="hero__stat-value">82.5%</h3>
            <p className="hero__stat-label">Diagnostic Accuracy</p>
          </div>
          <hr className="hero__divider-small" />
          <div className="hero__stat-block">
            <h3 className="hero__stat-value">&lt; 2s</h3>
            <p className="hero__stat-label">Real-time Analysis</p>
          </div>
          <hr className="hero__divider-small" />
          <div className="hero__stat-block">
            <h3 className="hero__stat-value">15.4K</h3>
            <p className="hero__stat-label">Verified Datasets</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
