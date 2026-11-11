// Toggle visibility of sections (true = visible, false = hidden)
export const sections = {
  hero: true,
  social: true,
  atAGlance: true,
  about: true,
  philosophy: true,
  aspiration: true,
  industry: true,
  mentoring: true,
  volunteering: true,
  whatPeopleSay: true,
  insights: true,
  education: true,
  certifications: true,
  experience: true,
  skills: true,
  contact: true,
  scrubber: true,
  now: true,
  endurance: true,
};

export const yearsExperience = 23;

export const site = {
  name: 'Gobinath Mallaiyan',
  title: 'Technical Program Manager',
  tagline: `${yearsExperience} Years Building Scalable Systems in Healthcare & Enterprise Tech`,
  subtitle: 'AI-First Leadership | Cloud Architecture | Digital Transformation',
  description:
    `I am a Technical Program Manager with ${yearsExperience} years of experience in digital transformation, cloud architecture and AI/ML. I currently work at Tata Consultancy Services, where I deliver enterprise solutions for Fortune 500 clients in healthcare, pharma and technology. My job is to connect engineering work with business goals, design solutions that scale, and build strong teams.`,
  url: 'https://gobinath.com',
  location: 'Toronto, Canada 🇨🇦',
  email: 'contact@gobinath.com',
  contactIntro: 'Questions about something here, or want to swap notes on tech? Drop me a line.',
  formspreeID: 'xeegwavv',
  image: '/img/gobi.PNG',
  heroLine: 'I lead technology programmes the way I race: steady pace, no one left behind, finish strong.',
  bibNumber: '2001', // the year the career started
  bibLabel: 'Started',

  // "Now" card: update whenever things change
  now: {
    updated: 'Nov 2026',
    items: [
      { label: 'Working on', text: 'AI/ML and cloud transformation programmes' },
      { label: 'Learning', text: 'GitHub and Microsoft AI certifications, 7 so far this year' },
      { label: 'Training', text: 'Hyrox and half-marathon distances' },
      { label: 'Reading', text: 'See my StoryGraph', url: 'https://app.thestorygraph.com/profile/gobinathm' },
      { label: 'Building', text: 'This site, rebuilt privacy-first' },
    ],
  },

  // Endurance: real results only. Shown as part of the story, not a training log.
  endurance: {
    headline: 'Off the clock',
    intro: 'Long programmes and long races ask for the same thing: pacing, patience and showing up on the hard days.',
    results: [
      { value: '1', label: 'Marathon' },
      { value: '1', label: 'Half-marathon race' },
      { value: '3', label: 'Hyrox races' },
    ],
    notes: [
      'Plenty of half-marathon distances run outside race day.',
      'Cycling for the base miles.',
    ],
    family: 'Hiking is family time: no splits, no watch.',
    // Back of the flip card
    lesson: {
      title: 'What racing taught me about programmes',
      text: 'A Hyrox race is eight runs broken up by eight hard stations. Go out too fast and you pay for it at station six. Programmes work the same way: pace the team for the whole distance, and save something for the stretch nobody planned for.',
    },
    links: [
      { name: 'Strava', url: 'https://www.strava.com/athletes/10286114' },
    ],
  },


  // Leadership Philosophy
  philosophy: {
    headline: 'My Leadership Philosophy',
    quote: "I won't ask anyone to do a task I wouldn't do myself. And I can't grow unless I'm helping the people around me grow too.",
    principles: [
      {
        title: 'I take the heat',
        description: "When something goes wrong, I don't point fingers. I stand in front of my team and take the hit. Same with hard tasks, I take them on myself.",
      },
      {
        title: 'Last one offline',
        description: "I don't ask people to work late and then go to sleep. When a situation demands it, I'm the last one offline.",
      },
      {
        title: 'Grow them past me',
        description: "I help people grow. If one day they reach my position, I will happily move on to something else. This year I have coached 4 team members through 6 certifications.",
      },
    ],
  },

  // Career Aspiration
  aspiration: {
    headline: 'What Drives Me',
    items: [
      { label: 'Now', text: 'Running AI/ML and cloud transformation programs at Tata Consultancy Services.' },
      { label: 'Next', text: 'A role where technical depth, people-first leadership and product thinking come together.' },
      { label: 'Always', text: 'Helping the people around me grow.' },
    ],
  },

  // Industry Expertise (Domains)
  industries: [
    {
      name: 'Healthcare & Pharma',
      years: '10+',
      highlights: ['Regulatory Compliance', 'HIPAA', 'FDA Guidelines', 'Clinical Systems', 'GxP Validation'],
    },
    {
      name: 'Enterprise Technology',
      years: '19+',
      highlights: ['Global Delivery', 'Platform Modernization', 'Digital Transformation', 'Cloud Migration'],
    },
    {
      name: 'Life Sciences',
      years: '8+',
      highlights: ['Content Platforms', 'Multilingual Systems', 'Enterprise CMS', 'Web 2.0'],
    },
  ],

  // Featured Insights / Thought Leadership
  featuredInsights: [
    {
      title: 'GenAI-Powered Interactive Mock Exam Using Just a Prompt',
      type: 'Article',
      url: 'https://www.linkedin.com/pulse/genai-powered-interactive-mock-exam-using-just-prompt-mallaiyan-zkogc',
      description: 'How a single prompt can turn generative AI into an interactive, personalized mock exam.',
    },
  ],

  // Community & Mentoring
  mentoring: {
    headline: 'Community & Mentoring',
    quote: 'Growing people is as important as shipping products.',
    activities: [
      {
        title: 'Drupal Project Mentor',
        duration: '10 years',
        period: '2014 - 2024',
        description: 'Helped junior developers make their first contributions to open source projects.',
      },
      {
        title: 'Student Mentor',
        duration: 'Ongoing',
        period: '2022 - Present',
        description: 'Guiding Computer Science students from classroom theory to job-ready skills.',
      },
    ],
  },

  // Volunteering
  volunteering: {
    headline: 'Volunteering',
    quote: 'Giving back to the community that helped me grow.',
    activities: [
      {
        title: 'Drupal Mumbai Organizer',
        duration: '2 years',
        period: '2015 - 2017',
        description: 'Organized meetups and knowledge-sharing sessions for the local Drupal community.',
      },
    ],
  },

  // What People Say (Real LinkedIn recommendations, anonymized)
  // Two sets that rotate randomly on each build
  whatPeopleSaySets: [
    // Set 1: Leadership & Collaboration focus
    [
      {
        sign: 'Every project was a success', // short cheer-sign line, in the recommender's own words
        quote: 'His combination of technical acumen, patience, and communication skills make him an irreplaceable asset to any team. Every project I partnered with him was a success, with confident resolutions to any challenges.',
        author: 'Product Manager',
        context: 'Healthcare Enterprise',
      },
      {
        sign: 'Reliable with demanding timelines', // short cheer-sign line, in the recommender's own words
        quote: 'His skill in problem solving, coming up with solutions that met both the creative and functional needs of our projects. Reliable with demanding timelines, and straight-forward about setting expectations.',
        author: 'Sr. Director',
        context: 'Fortune 500 Healthcare',
      },
      {
        sign: 'Made me a better leader', // short cheer-sign line, in the recommender's own words
        quote: 'His extremely diverse technical proficiency has helped me become a better developer and leader. He is a stalwart in his domain, extremely motivating to work with, and values opinions from everyone in the team.',
        author: 'Engineering Colleague',
        context: 'Enterprise Technology',
      },
    ],
    // Set 2: Technical Excellence & Mentorship focus
    [
      {
        sign: 'Most technically gifted', // short cheer-sign line, in the recommender's own words
        quote: 'One of the most technically gifted and talented programmers I have ever worked with. His kindness and passion make the working relationship above and beyond expectations.',
        author: 'IT Director',
        context: 'Healthcare Enterprise',
      },
      {
        sign: 'Bridges business and tech', // short cheer-sign line, in the recommender's own words
        quote: 'Effectively leads the practice of introducing the overall technical vision with his wealth of experience in the digital space. His superior knowledge helps to bridge the gap between complex business requirements and technology solutions.',
        author: 'Technical Product Owner',
        context: 'Fortune 500 Healthcare',
      },
      {
        sign: 'A true asset', // short cheer-sign line, in the recommender's own words
        quote: 'An incredible web technology leader who motivates his multiple teams. A true asset and admirable solution architect.',
        author: 'Product Manager',
        context: 'MedTech',
      },
    ],
  ],

  social: {
    linkedin: 'https://www.linkedin.com/in/gobinathm/',
    github: 'https://github.com/gobinathm',
    medium: 'https://medium.com/@gobinathm',
    stackoverflow: 'https://stackoverflow.com/users/1288968/gobinath-mallaiyan',
    instagram: 'https://www.instagram.com/gobinathm/',
    twitter: 'https://twitter.com/gobinathm',
    fivehundredpx: 'https://500px.com/p/gobinathm',
    strava: 'https://www.strava.com/athletes/10286114',
    goodreads: 'https://www.goodreads.com/user/show/12583429-gobinath-mallaiyan',
    storygraph: 'https://app.thestorygraph.com/profile/gobinathm',
  },
  externalLinks: {
    blog: 'https://medium.com/@gobinathm',
    notes: 'https://notes.gobinath.com',
  },
};

// Privacy page content (/privacy)
export const privacy = {
  updated: 'November 11, 2026',
  sections: [
    {
      heading: 'Visit counts',
      body: [
        'This site uses Umami Cloud to count visits. It records the page viewed, the site you came from, your country, and your browser and device type.',
        'Umami sets no cookies and stores nothing in your browser. Your IP address is used briefly to work out your country and an anonymous session ID that changes daily, and is then discarded. None of this can identify you.',
        'The data is stored in the EU (Frankfurt). The legal basis is legitimate interest: knowing whether anyone reads this site.',
        'You can opt out at any time with "Don\'t count me" in the site banner. Umami then sends nothing from your browser. If your browser sends a Do Not Track signal, you are never counted.',
      ],
    },
    {
      heading: 'Contact form',
      body: [
        'The contact form sends your name, email and message to Formspree, which forwards them to me by email. Nothing is sent until you press "Send message".',
        'The form has no CAPTCHA and loads nothing from Google. I use your details only to reply to you.',
      ],
    },
    {
      heading: 'Everything else',
      body: [
        'Fonts and images are served from this site, with no third-party font or tracking services. The light/dark setting you choose is saved only in your own browser.',
        'Links to LinkedIn, GitHub and other sites take you to those services, whose own privacy policies apply.',
      ],
    },
  ],
};
