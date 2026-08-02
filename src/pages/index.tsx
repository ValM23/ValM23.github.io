import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import {EXPERIENCE, SKILLS, CERTS, PROJECTS} from '@site/src/data/resume';
import styles from './index.module.css';

function Terminal({
  title,
  children,
  wide,
}: {
  title: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <div className={clsx('rv-terminal', wide && styles.wide)}>
      <div className="rv-terminal__bar">
        <span className="rv-terminal__title">{title}</span>
      </div>
      <div className="rv-terminal__body">{children}</div>
    </div>
  );
}

function Hero() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <Terminal title="roxy@security:~" wide>
          <p className="rv-prompt">cat /etc/profession</p>
          <h1 className={styles.heroName}>Matthew Valdez (Roxy)</h1>
          <p className={styles.heroTagline}>
            Offensive Security Researcher — vulnerability research, reverse
            engineering, OSINT tooling.
          </p>
          <p className={styles.heroBody}>
            8 years learning how systems work — and fail — under pressure.
            Now focused on finding the vulnerabilities before the bad actors
            do. Looking for SOC Analyst, Detection Engineer, or Security
            Researcher roles.
          </p>
          <div className={styles.heroLinks}>
            <a href="mailto:matt.valdez@pm.me" className="button button--primary">
              Email
            </a>
            <a
              href="https://linkedin.com/in/matttvaldez"
              className="button button--secondary"
              target="_blank"
              rel="noopener noreferrer">
              LinkedIn
            </a>
            <a
              href="https://github.com/valm23"
              className="button button--secondary"
              target="_blank"
              rel="noopener noreferrer">
              GitHub
            </a>
            <span className={styles.heroLocation}>📍 Houston, TX</span>
          </div>
        </Terminal>
      </div>
    </header>
  );
}

function Experience() {
  return (
    <Terminal title="experience.log" wide>
      <p className="rv-prompt">tail -f /var/log/career.log</p>
      <div className={styles.expList}>
        {EXPERIENCE.map((job) => (
          <div key={job.org} className={styles.expItem}>
            <div className={styles.expHeader}>
              <span className={styles.expTitle}>{job.title}</span>
              <span className={styles.expOrg}>{job.org}</span>
              <span className={styles.expDate}>{job.date}</span>
            </div>
            <ul className={styles.expBullets}>
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Terminal>
  );
}

function Skills() {
  return (
    <Terminal title="skills.conf">
      <p className="rv-prompt">cat ~/.skills</p>
      <div className={styles.skillList}>
        {SKILLS.map((cat) => (
          <div key={cat.label} className={styles.skillCategory}>
            <div className={styles.skillLabel}>{cat.label}</div>
            <div className={styles.skillTags}>
              {cat.tags.map((tag) => (
                <span
                  key={tag.name}
                  className={clsx('rv-tag', tag.accent && 'rv-tag--accent')}>
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Terminal>
  );
}

function Certs() {
  return (
    <Terminal title="credentials.db">
      <p className="rv-prompt">select * from certs;</p>
      <div className={styles.certList}>
        {CERTS.map((cert) => (
          <div key={cert.name} className={styles.certItem}>
            <div>
              <div className={styles.certName}>{cert.name}</div>
              <div className={styles.certDetail}>{cert.detail}</div>
            </div>
            <span
              className={clsx(
                'rv-status',
                cert.status === 'active' ? 'rv-status--active' : 'rv-status--progress',
              )}>
              {cert.status === 'active' ? 'Active' : 'In progress'}
            </span>
          </div>
        ))}
      </div>
    </Terminal>
  );
}

function Projects() {
  return (
    <Terminal title="~/projects" wide>
      <p className="rv-prompt">ls -la ~/projects/</p>
      <div className={styles.projectGrid}>
        {PROJECTS.map((project) => (
          <div key={project.name} className={styles.projectCard}>
            <div className={styles.projectName}>{project.name}</div>
            <div className={styles.projectMeta}>{project.meta}</div>
            <p className={styles.projectDesc}>{project.desc}</p>
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}>
                → {project.linkLabel}
              </a>
            )}
          </div>
        ))}
      </div>
    </Terminal>
  );
}

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="Home"
      description="Roxy Valdez — Offensive Security Researcher">
      <Hero />
      <main className="container">
        <div className={styles.grid}>
          <Experience />
          <Skills />
          <Certs />
          <Projects />
        </div>
      </main>
    </Layout>
  );
}
