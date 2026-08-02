export const EXPERIENCE = [
  {
    title: 'Security Researcher / Infrastructure Engineer',
    org: 'Freelance Infrastructure & Security Consulting',
    date: 'May 2020 – Present',
    bullets: [
      'Conduct offensive security research including vulnerability analysis, OSINT tool development, and steganographic encoding techniques for red team applications.',
      'Developed and published open-source security tools for OSINT data collection and steganographic analysis (available on GitHub).',
      'Build and validate detection use cases, security rules, and correlation logic based on the MITRE ATT&CK framework and adversarial behavior patterns.',
      'Design and deploy secure cloud infrastructure for a streaming/media client — streaming servers, web platforms, CI/CD pipelines, and automation.',
      'Deployed self-hosted GitLab on Ubuntu Server behind a Tailscale VPN with scoped, tag-based ACLs for external collaborator access. Built backends with proper auth and row-level security.',
      'Produce cybersecurity educational content translating complex security concepts for general audiences.',
    ],
  },
  {
    title: 'Network Operations Technician I',
    org: 'Kinder Morgan Energy Partners',
    date: 'Aug 2018 – Sept 2025 · Houston, TX',
    bullets: [
      'Monitored 200+ endpoints across nationwide SCADA/OT/IT infrastructure using Splunk and Taegis XDR to maintain uptime and operational continuity.',
      'Managed network outage response, coordinating with MSPs, ISPs, and field teams to restore service across critical energy infrastructure under time-critical pressure.',
      'Triaged and escalated 50+ daily alerts across distributed pipeline systems, distinguishing operational events from infrastructure issues requiring immediate action.',
      'Documented incident timelines, root cause analyses, and resolution procedures for operational and leadership review.',
      'Operated in a 24/7 critical infrastructure environment requiring continuous situational awareness and cross-functional coordination.',
    ],
  },
  {
    title: 'MSOC Technician',
    org: 'TrustComm (now OneWeb)',
    date: 'May 2017 – May 2018 · Houston, TX',
    bullets: [
      'Monitored classified satellite comms for defense clients.',
      'Managed RSA token lifecycle and access controls in an environment where least privilege was enforced, not suggested.',
      'Restored secure communications during outages alongside National Guard teams under 24/7 readiness requirements.',
    ],
  },
];

export const SKILLS = [
  {
    label: 'Offensive',
    tags: [
      {name: 'Pentesting', accent: true},
      {name: 'OSINT', accent: true},
      {name: 'Web Exploitation', accent: true},
      {name: 'Vuln Discovery'},
      {name: 'CTF Workflow'},
      {name: 'Reverse Engineering'},
    ],
  },
  {
    label: 'Defensive',
    tags: [
      {name: 'Incident Triage'},
      {name: 'Threat Detection'},
      {name: 'Alert Enrichment'},
      {name: 'Log Analysis'},
      {name: 'Malware Analysis'},
    ],
  },
  {
    label: 'Arsenal',
    tags: [
      {name: 'Taegis XDR'},
      {name: 'Splunk'},
      {name: 'Wireshark'},
      {name: 'Burp Suite'},
      {name: 'Nmap'},
      {name: 'Metasploit'},
      {name: 'Ghidra'},
    ],
  },
  {
    label: 'Languages',
    tags: [
      {name: 'Python'},
      {name: 'Bash'},
      {name: 'PowerShell'},
      {name: 'SQL'},
      {name: 'Ruby'},
    ],
  },
];

export const CERTS = [
  {name: 'CompTIA Security+', detail: 'Valid through Nov 2027', status: 'active'},
  {name: 'HTB CPTS', detail: 'Hack The Box', status: 'progress'},
  {name: 'Associate of Arts', detail: 'Houston Community College', status: 'active'},
];

export const PROJECTS = [
  {
    name: 'NahamCon 2025 CTF',
    meta: 'Rank 486/1,709 · Top 30% globally',
    desc: 'Competed against 1,700+ teams. Solved challenges in reverse engineering, web exploitation, and OSINT using Ghidra, Burp Suite, and custom Python scripts.',
    href: 'https://ctftime.org/team/385998',
    linkLabel: 'CTFtime profile',
  },
  {
    name: 'OSINT Document Scraper',
    meta: 'Python · Active development',
    desc: 'Keyword-and-context scraper for building social-engineering assessment material from source documents.',
    href: 'https://github.com/valm23/osint_scraper',
    linkLabel: 'View source',
  },
  {
    name: 'SonicPi Steganographic Encoder',
    meta: 'Ruby · 2024',
    desc: 'RSA-encrypted payloads reshaped into MIDI/audio via Sonic Pi, as a research case for DLP evasion.',
    href: 'https://github.com/ValM23/SonicPi-Stenographic-Encoder',
    linkLabel: 'View source',
  },
];
