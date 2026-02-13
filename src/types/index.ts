export interface Project {
    id: number;
    title: string;
    category: string; // Required for your data
    tech: string[];
    fullDesc: string;
    img: string;
    link?: string; // Optional URL for project link
}

export interface Experience {
    role: string;
    company: string;
    startDate: string; // Format: "YYYY-MM"
    endDate: string | null; // null means current/present position
    desc: string;
    date?: string; // Optional date string for your data
}

export interface Education {
    degree: string;
    school: string;
    year: string;
    location?: string;
}

export interface Language {
    name: string;
    level: string;
}

export interface SocialLink {
    platform: 'linkedin' | 'github' | 'gmail' | 'instagram' | 'twitter';
    url: string;
    label: string;
}

export interface PortfolioData {
    name: string;
    role: string;
    bio: string;
    profileImg: string; // Required for your data
    skills: string[];
    languages: Language[];
    experience: Experience[];
    education: Education[];
    projects: Project[];
    socialLinks: SocialLink[];
    // Optional public resume file path (e.g. /resume.pdf)
    resume?: string;
}
