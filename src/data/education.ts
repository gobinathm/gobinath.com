export interface Education {
  degree: string;
  institution: string;
  years: string;
}

export interface Certification {
  name: string;
  issuer: string;
  groups: string[];
  year: string;
  sortDate: string;
  url?: string;
}

export const education: Education[] = [
  { degree: 'M.Sc Computer Science', institution: 'Hindusthan College of Arts and Science', years: '2001 – 2003' },
  { degree: 'B.Sc Computer Science', institution: 'Hindusthan College of Arts and Science', years: '1997 – 2001' },
  { degree: 'Grade 12', institution: 'RVS Matriculation Higher Secondary School', years: '1998' },
];

export const certifications: Certification[] = [
  { name: 'AWS Certified AI Practitioner', issuer: 'Amazon Web Services', groups: ['AWS', 'Cloud', 'AI/ML'], year: 'Jan 2026', sortDate: '2026-01', url: 'https://www.credly.com/badges/4f172763-a79b-44af-9439-e30871aacbb5/public_url' },
  { name: 'GitHub Actions', issuer: 'Microsoft', groups: ['DevOps'], year: 'Jan 2026', sortDate: '2026-01', url: 'https://learn.microsoft.com/api/credentials/share/en-us/gobinathm/1D482C674772339' },
  { name: 'LeanIX Certified EAM Practitioner', issuer: 'SAP LeanIX', groups: ['Enterprise'], year: 'Mar 2025', sortDate: '2025-03', url: 'https://verify.skilljar.com/c/9v7tz4m9ydhc' },
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', groups: ['AWS', 'Cloud'], year: 'Oct 2024', sortDate: '2024-10', url: 'https://www.credly.com/badges/ab4d4959-37b1-41ac-86f0-4a4886abd9e4/public_url' },
  { name: 'Generative AI Fundamentals', issuer: 'Databricks Academy', groups: ['AI/ML'], year: 'Mar 2024', sortDate: '2024-03', url: 'https://credentials.databricks.com/cd97d9cd-cf21-44ad-9907-c369ea4a7c4c#acc.nRIqpPrE' },
  { name: 'Strategic Transformation Advisor (ABLAZE 2.0)', issuer: 'INSEAD', groups: ['Enterprise', 'Agile'], year: 'Sep 2022', sortDate: '2022-09' },
  { name: 'Acquia Certified Site Builder - Drupal 7', issuer: 'Acquia', groups: ['Acquia', 'Development'], year: 'May 2015', sortDate: '2015-05' },
  { name: 'Acquia Certified Front End Specialist', issuer: 'Acquia', groups: ['Acquia', 'Development'], year: 'Nov 2014', sortDate: '2014-11', url: 'https://certification.acquia.com/person/community/gobinath-mallaiyan' },
  { name: 'Acquia Certified Developer', issuer: 'Acquia', groups: ['Acquia', 'Development'], year: 'Oct 2014', sortDate: '2014-10', url: 'https://certification.acquia.com/person/community/gobinath-mallaiyan' },
  { name: 'Certified ScrumMaster\u00AE', issuer: 'Scrum Alliance', groups: ['Agile'], year: 'Dec 2009', sortDate: '2009-12' },
  { name: 'C/C++ Certification', issuer: 'NIIT', groups: ['Development'], year: 'Apr 2002', sortDate: '2002-04' },
].sort((a, b) => b.sortDate.localeCompare(a.sortDate));

/** Manage certification groups here — order controls tab display order */
export const certGroups: { key: string; label: string }[] = [
  { key: 'AWS', label: 'AWS' },
  { key: 'Cloud', label: 'Cloud' },
  { key: 'AI/ML', label: 'AI / ML' },
  { key: 'DevOps', label: 'DevOps' },
  { key: 'Enterprise', label: 'Enterprise' },
  { key: 'Acquia', label: 'Acquia' },
  { key: 'Agile', label: 'Agile' },
  { key: 'Development', label: 'Development' },
];
