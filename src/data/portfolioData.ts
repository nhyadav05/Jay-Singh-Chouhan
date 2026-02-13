import { PortfolioData } from '../types';

// Helper function to format date from YYYY-MM to "Mon YYYY"
export function formatDate(dateStr: string): string {
  const [year, month] = dateStr.split('-');
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${monthNames[parseInt(month) - 1]} ${year}`;
}

// Helper function to calculate duration between two dates
export function calculateDuration(startDate: string, endDate: string | null): string {
  const [startYear, startMonth] = startDate.split('-').map(Number);
  const now = new Date();
  const [endYear, endMonth] = endDate
    ? endDate.split('-').map(Number)
    : [now.getFullYear(), now.getMonth() + 1];

  let years = endYear - startYear;
  let months = endMonth - startMonth;

  if (months < 0) {
    years--;
    months += 12;
  }

  if (years === 0 && months === 0) {
    return 'Less than a month';
  }

  const yearsStr = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : '';
  const monthsStr = months > 0 ? `${months} month${months > 1 ? 's' : ''}` : '';

  if (yearsStr && monthsStr) {
    return `${yearsStr} ${monthsStr}`;
  }
  return yearsStr || monthsStr;
}

// Helper function to get formatted date range
export function getDateRange(startDate: string, endDate: string | null): string {
  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : 'Present';
  return `${start} – ${end}`;
}

// Helper function to calculate total experience duration
export function calculateTotalExperience(experience: { startDate: string; endDate: string | null }[]): string {
  let totalMonths = 0;

  experience.forEach((exp) => {
    const [startYear, startMonth] = exp.startDate.split('-').map(Number);
    const now = new Date();
    const [endYear, endMonth] = exp.endDate
      ? exp.endDate.split('-').map(Number)
      : [now.getFullYear(), now.getMonth() + 1];

    const years = endYear - startYear;
    const months = endMonth - startMonth;
    totalMonths += years * 12 + months;
  });

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0) {
    return `${months} months`;
  } else if (months === 0) {
    return `${years} year${years > 1 ? 's' : ''}`;
  }
  return `${years} year${years > 1 ? 's' : ''} ${months} month${months > 1 ? 's' : ''}`;
}

export const DATA: PortfolioData = {
  name: 'JAY SINGH CHOUHAN',
  role: 'React Native Developer',
  bio: `React Native Developer with 3.3 years of experience building scalable, high-performance mobile applications for Android and iOS. Strong expertise in React Native, Redux Toolkit, REST API integration, Socket.IO, and custom UI development. Experienced in developing real-time chat applications, fitness tracking apps, e-commerce platforms, and enterprise-level solutions. Passionate about performance optimization, clean architecture, and delivering reliable mobile products.`,
  profileImg: '/profile.jpg',
  skills: [
    'JavaScript',
    'HTML',
    'CSS',
    'React Native (Functional Components, Hooks)',
    'Redux / Redux-Toolkit',
    'Axios',
    'Socket.IO',
    'Push Notifications',
    'Git',
    'GitHub',
    'Postman',
    'Firebase',
    'Terra API',
    'Google Maps'
  ],
  languages: [
    { name: 'Hindi', level: 'Native' },
    { name: 'English', level: 'Fluent' }
  ],
  // experience is defined below in a single constant so we can compute derived values (like total experience)
  experience: [],
  education: [
    { degree: 'Master of Computer Application (MCA)', school: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya', year: '2018 – 2020', location: 'Indore, M.P., India' },
    { degree: 'Bachelor of Computer Application (BCA)', school: 'Makhanlal Chaturvedi University', year: '2015 – 2018', location: 'Indore, M.P., India' }
  ],
  projects: [
    { id: 1, title: 'SmartFit Pro', category: 'Fitness App', tech: ['React Native', 'Terra API'], fullDesc: 'React Native fitness application integrated with Terra API to sync smartwatch data. Features include strain tracking, recovery analysis, sleep monitoring, heart rate zones, and calorie tracking.', img: '/projects/smartfit.png' },
    { id: 2, title: 'Naqsh (E-Commerce – Seller & Admin App)', category: 'E-commerce', tech: ['React Native'], fullDesc: 'Dual apps for Seller and Admin roles with product uploads, approvals, listings, and real-time chat functionality.', img: '/projects/naqsh.png' },
    { id: 3, title: 'Timmappa', category: 'E-commerce', tech: ['React Native', 'UPI Integrations'], fullDesc: 'Cross-platform shopping app with Google Pay, PhonePe and UPI payment gateways integrated.', img: '/projects/timmappa.png' },
    { id: 4, title: 'Flylight CRM', category: 'CRM', tech: ['React Native'], fullDesc: 'CRM app to manage leads, tasks, feedback, and scheduled calls.', img: '/projects/flylight.png' },
    { id: 5, title: 'Bank 316 App', category: 'Banking & Trading', tech: ['React Native'], fullDesc: 'Net banking application with investment and trading features.', img: '/projects/bank316.png' },
    { id: 6, title: 'Table Tennis (Video Learning App)', category: 'Video Learning', tech: ['React Native'], fullDesc: 'Role-based app for Coach, Player and User to upload and learn from match videos.', img: '/projects/tabletennis.png' },
    { id: 7, title: 'MPP Disha', category: 'Government Support', tech: ['React Native'], fullDesc: 'App for police personnel families providing education and career guidance.', img: '/projects/mppdisha.png' },
    { id: 8, title: 'Oranje', category: 'Operations', tech: ['React Native', 'Geo-location'], fullDesc: 'Hotel staff management app with QR code access and geo-location tracking.', img: '/projects/oranje.png' }
  ],
  socialLinks: [
    { platform: 'linkedin', url: 'https://www.linkedin.com/in/jay-singh-chouhan-5636321b9', label: 'LinkedIn' },
    { platform: 'gmail', url: 'mailto:jaysinghchouhan112@gmail.com', label: 'Email' }
  ],
  resume: '/JAY-SINGH-CHOUHAN-3.3year.pdf'
};

// Define experience array separately so `bio` can reference the real data dynamically
export const EXPERIENCE = [
  {
    role: 'React Native Developer',
    company: 'Saviesa Infotech',
    // started in September 2023 (per provided ranges)
    startDate: '2023-09',
    endDate: null,
    desc: `Developed and maintained cross-platform mobile applications using React Native. Implemented Redux Toolkit for scalable state management and API handling. Built real-time chat features using Socket.IO including typing indicators and media sharing. Integrated third-party APIs such as Terra API for fitness and health tracking. Optimized app performance using memoization, FlatList optimization, and reusable components. Collaborated with designers and backend teams to deliver production-ready features.`
  },
  {
    role: 'React Native Developer',
    company: 'SMT Labes Private Limited',
    // Aug 2022 — Sep 2023
    startDate: '2022-08',
    endDate: '2023-09',
    desc: `Worked on multiple mobile applications including CRM, e-commerce, and video-based platforms. Implemented authentication flows, role-based access, and API integrations. Developed custom UI components and ensured responsive design across devices. Fixed production bugs and improved app stability.`
  }
];

// Replace placeholder empty experience in DATA with the real EXPERIENCE and update bio dynamically
DATA.experience = EXPERIENCE;
DATA.bio = `React Native Developer with ${calculateTotalExperience(EXPERIENCE)} of experience building scalable, high-performance mobile applications for Android and iOS. Strong expertise in React Native, Redux Toolkit, REST API integration, Socket.IO, and custom UI development. Experienced in developing real-time chat applications, fitness tracking apps, e-commerce platforms, and enterprise-level solutions. Passionate about performance optimization, clean architecture, and delivering reliable mobile products.`;
