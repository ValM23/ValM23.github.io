export const EXPERIENCE = [
  {
    title: 'Security Researcher / Infrastructure Engineer',
    org: 'Independent Security Research & Consulting',
    date: 'May 2020 – Present',
    bullets: [
      'Conduct offensive security research including vulnerability analysis, OSINT tool development, and steganographic encoding techniques for red team applications.',
      'Designed and shipped open-source security tools — including dork2intel (Google dork → AI search → local-LLM analysis pipeline) and a SonicPi steganographic encoder for DLP-evasion research.',
      'Build and validate detection-oriented thinking from an attacker perspective, mapping techniques to observable telemetry and documenting findings with reproduction steps.',
      'Design and deploy secure infrastructure for consulting clients — application platforms, CI/CD pipelines, automation, and access-controlled collaboration environments.',
      'Deployed self-hosted GitLab on Ubuntu Server behind a Tailscale VPN with scoped, tag-based ACLs for external collaborator access. Built backends with proper auth and row-level security.',
      'Publish technical writeups on CI/CD failure modes, design-token automation, and infrastructure access patterns.',
    ],
  },
  {
    title: 'Network Operations Technician I',
    org: 'Kinder Morgan Energy Partners',
    date: 'Aug 2018 – Sept 2025 · Houston, TX',
    bullets: [
      'Monitored 200+ endpoints across nationwide SCADA/OT/IT infrastructure using Splunk and Taegis XDR to maintain uptime and operational continuity.',
      'Managed network outage response, coordinating with MSPs, ISPs, and field teams to restore service across critical energy infrastructure under time-critical pressure.',
      'Triaged 50+ daily alerts in Taegis XDR, performing initial correlation of system telemetry and routing findings to Cyber Security and Network Engineering via JIRA queue.',
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
  {name: 'B.S., Economics', detail: 'Arizona State University', status: 'progress'},
  {name: 'Associate of Arts', detail: 'Houston Community College', status: 'active'},
];

type Project = {
  name: string;
  meta: string;
  desc: string;
  href?: string;
  linkLabel?: string;
};

export const PROJECTS: Project[] = [
  {
    name: 'dork2intel',
    meta: 'Python · 2026',
    desc: 'Google dorks → AI-native search prompts → Tavily search → local-LLM analysis. Iterable OSINT pipeline with persisted sessions, startup gate, and agent skill generation. 23 unit tests, pip-installable CLI.',
    href: 'https://github.com/ValM23/dork2intel',
    linkLabel: 'View source',
  },
  {
    name: 'SonicPi Steganographic Encoder',
    meta: 'Ruby · 2024',
    desc: 'Zero-dependency tool encoding RSA-OAEP payloads as MIDI note sequences — DLP-evasion research with lossless byte↔nibble mapping, spec-correct MIDI output, and an 11-test round-trip suite.',
    href: 'https://github.com/ValM23/SonicPi-Stenographic-Encoder',
    linkLabel: 'View source',
  },
  {
    name: 'NahamCon 2025 CTF',
    meta: 'Rank 486/1,709 · Top 30% globally',
    desc: 'Competed against 1,700+ teams. Solved challenges in reverse engineering, web exploitation, and OSINT using Ghidra, Burp Suite, and custom Python scripts.',
    // No outbound link here on purpose — the team CTFtime page lists
    // teammates whose handles shouldn't be one click from this resume.
  },
];
