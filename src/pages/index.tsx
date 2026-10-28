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
            Security operations experience. Offensive security research.
            Python tooling and infrastructure.
          </p>
          <p className={styles.heroBody}>
            Experience supporting SCADA/OT and IT operations at Kinder Morgan
            and satellite communications at TrustComm. Now building security
            research tools, contributing to authorized internal testing, and
            working toward HTB CPTS. Explore the source,
            scope, and limitations of my selected projects below.
          </p>
          <div className={styles.heroLinks}>
            <a href="#projects" className="button button--primary">Explore projects</a>
            <a href="/writeups" className="button button--secondary">Read writeups</a>
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
                cert.status !== 'progress' ? 'rv-status--active' : 'rv-status--progress',
              )}>
              {cert.status === 'completed' ? 'Completed' : cert.status === 'active' ? 'Active' : 'In progress'}
            </span>
          </div>
        ))}
      </div>
    </Terminal>
  );
}

function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className={styles.wide}>
    <Terminal title="~/projects" wide>
      <h2 id="projects-heading">Selected security projects</h2>
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
                → {project.linkLabel}: {project.name}
              </a>
            )}
          </div>
        ))}
      </div>
    </Terminal>
    </section>
  );
}

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="Home"
      description="Matthew Valdez (Roxy): security operations, offensive security research, Python OSINT tooling, and infrastructure. ASU Economics expected May 2028.">
      <Hero />
      <main className="container">
        <div className={styles.grid}>
          <Projects />
          <Experience />
          <Skills />
          <Certs />
        </div>
      </main>
    </Layout>
  );
}
