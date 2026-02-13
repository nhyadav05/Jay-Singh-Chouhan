

import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Hero.module.css';
import { DATA, calculateTotalExperience } from '@/data/portfolioData';

export default function Hero() {
  const totalExperience = calculateTotalExperience(DATA.experience);

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroGrid}>

        <div className={styles.textContent}>
          <div className={`${styles.badge} animate-fade-in-down`}>
            <span className={styles.pingContainer}>
              <span className={styles.pingPulse}></span>
              <span className={styles.pingMain}></span>
            </span>
            {totalExperience.toUpperCase()} OF FRONTEND EXCELLENCE
          </div>

          <h2 className={`${styles.title} animate-fade-in-up stagger-delay-1`}>
            Crafting Digital <br />
            <span className={styles.gradientText}>Masterpieces.</span>
          </h2>

          {/* <p className={styles.bio}>{DATA.bio}</p> */}
          <p className={`${styles.bio} animate-fade-in-up stagger-delay-2`}>
            {DATA.bio.split(totalExperience).map((part, index, arr) => {
              if (index < arr.length - 1) {
                return (
                  <React.Fragment key={index}>
                    {part}
                    <span className={styles.highlight}>{totalExperience}</span>
                  </React.Fragment>
                );
              }
              return part;
            })}
          </p>

          <div className={`${styles.socials} animate-fade-in-up stagger-delay-3`}>
            <a href="#projects" className={styles.primaryBtn}>
              Explore Projects
            </a>

            <a
              href="/JAY-SINGH-CHOUHAN-3.3year.pdf"
              download="JAY-SINGH-CHOUHAN-3.3year.pdf"
              className={styles.secondaryBtn}
            >
              Download CV
            </a>

          </div>
        </div>

        <div className={`${styles.imageWrapper} animate-fade-in-right stagger-delay-2`}>
          <div className={styles.imageBgCard}></div>
          <Image
            src="/My-profile.jpeg"
            height={500}
            width={500}
            alt="Jay Singh Chouhan - Profile"
            className={styles.profileImg}
            quality={85}
            priority
          />
        </div>

      </div>
    </section>
  );
}

