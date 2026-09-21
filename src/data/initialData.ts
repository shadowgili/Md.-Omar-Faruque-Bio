import { ProfileData, ExperienceItem, EducationItem, CertificationItem, ProjectItem, BlogPostItem, PhotoItem } from '../types';

export const initialProfile: ProfileData = {
  name: "Md. Omar Faruque",
  titles: [
    "Manager – HR & Operations Specialist",
    "Game Developer & Unity 3D Specialist",
    "AR/VR Interactive Experience Developer",
    "Hospitality Front Office & Secretarial Veteran",
    "Physicist (M.Sc. & B.Sc.) & Data Technologist"
  ],
  tagline: "Bridging human capital leadership, scientific physics problem-solving, and immersive game/VR software engineering.",
  summary: "Multidisciplinary professional combining 7+ years in HR Management & labor compliance (LEEDO, Surjer Hashi Network 134 clinics, BYSL Global), 6 hospitality positions across premier hotel properties (Hotel Orchard Suites, Asia Hotel & Resorts, Ascott Dhaka, Galesia, The Olives), and certified software engineering expertise in Unity 3D Game Development and AR/VR Simulation under Bangladesh ICT Division and LICT Project. Holder of Master of Science in Physics and PGDHRM from BIM (CGPA 3.63).",
  detailedBio: [
    "My foundational journey is rooted in theoretical physics, earning both a Bachelor of Science (Honours) in 2012 and a Master of Science in Physics in 2014 from Dhaka College under National University. This academic foundation instilled deep mathematical modeling capabilities, analytical problem-solving, and computational mechanics that directly power both my technical development and strategic data analytics.",
    "Complementing scientific rigor with leadership, I completed my Post Graduate Diploma in Human Resource Management (PGDHRM) at the prestigious Bangladesh Institute of Management (BIM) with an outstanding CGPA of 3.63. Over 7+ years, I advanced from corporate manufacturing at BYSL Global Industries Ltd. (Illiyeen) to overseeing nationwide clinical HR across 134 healthcare facilities for Surjer Hashi Network (achieving 100% audit clearance for 3 consecutive years), and currently serving as Manager – HR at LEEDO.",
    "Simultaneously, my passion for computing and interactive media led me to graduate from the Government ICT Division's 'Skill Development for Mobile Game & Application Project' with Digicon Technologies, where I served as Game Developer creating 'Abra Zebra' in Unity 3D with C#. I further advanced through the LICT Project (Leveraging ICT for Employment and Growth) with Service Engine BPO as an AR/VR Developer Intern, engineering 3D City Car Simulators and Human Anatomy VR surgical applications.",
    "My foundational career in luxury hospitality spans 6 distinct appointments across Dhaka's premier hotel establishments, including Hotel Orchard Suites (Reservation Supervisor & Senior Executive), Asia Hotel & Resorts (Front Office Supervisor), Ascott Dhaka, Galesia Hotel & Resort, and The Olives. Certified in Front Office & Secretarial Operations by NHTTI (National Hotel & Tourism Training Institute), I bring unmatched guest-service empathy and crisis management to modern organizational leadership."
  ],
  avatarUrl: "/assets/images/omar_portrait.jpg",
  location: {
    address: "House No. 427/6, Jawchar, P.S.-Kamrangir Chor, P.O.-Ashrafabad",
    city: "Dhaka",
    country: "Bangladesh (Postal Code: 1211)"
  },
  contact: {
    emails: ["Shadowgili@gmail.com", "omar.faruque.jumman@gmail.com", "shadowgili@yahoo.com"],
    phones: ["+880 1671-432484", "+880 1918-642421"],
    linkedin: "https://linkedin.com/in/shadowgili",
    github: "https://github.com/shadowgili",
    whatsapp: "https://wa.me/8801671432484"
  },
  stats: [
    { label: "HR Leadership", value: "7+ Years", subtext: "NGO, Healthcare Social Enterprise & Corporate" },
    { label: "Healthcare Clinics", value: "134", subtext: "Nationwide facilities supervised at Surjer Hashi" },
    { label: "Game & VR Projects", value: "3+ Core", subtext: "Abra Zebra, VR Car Sim & Anatomy VR" },
    { label: "Hospitality Brands", value: "5 Hotels", subtext: "6 positions across Orchard, Asia, Ascott & more" }
  ],
  languages: [
    { language: "Bangla", proficiency: "Native / Bilingual" },
    { language: "English", proficiency: "Professional Working Proficiency" }
  ],
  coreSkills: [
    {
      category: "HR Operations & Strategic Leadership",
      skills: [
        "Bangladesh Labour Law (2006)",
        "NGO & Donor Audit Compliance (USAID)",
        "Strategic HRBP Alignment",
        "Full-Lifecycle Talent Acquisition",
        "Performance Management & KPI Systems",
        "Employee Grievance & Disciplinary Committees",
        "Payroll, Gratuity & Benefits Administration",
        "Training Needs Analysis (TNA)"
      ]
    },
    {
      category: "Game & AR/VR Development",
      skills: [
        "Unity 3D Game Engine",
        "C# Scripting & OOP",
        "Virtual Reality (VR) Simulation",
        "Augmented Reality (AR) Applications",
        "Physics Engine & RigidBody Mechanics",
        "Adobe Photoshop & Illustrator",
        "Figma UI/UX Game Prototyping",
        "Visual Studio & Git Version Control"
      ]
    },
    {
      category: "Hospitality & Front Office Operations",
      skills: [
        "Front Office Management (NHTTI Certified)",
        "Reservation & Revenue Supervison",
        "Guest Relations & VIP Concierge",
        "24/7 Multi-Shift Roster Optimization",
        "Hospitality Property Management Systems (PMS)",
        "Biometric Attendance & Overtime Auditing",
        "Inter-departmental Coordination (F&B/Housekeeping)",
        "Crisis Resolution & Service Recovery"
      ]
    },
    {
      category: "IT, Data Analytics & Systems",
      skills: [
        "Google Data Analytics Certified",
        "Google Project Management Certified",
        "Google Digital Garage (Digital Marketing)",
        "Odoo ERP & Zoho People HRIS",
        "Advance EMS",
        "Advanced Excel & Power Query",
        "Python Scripting for Analytics",
        "AI in HR Integration & Automation"
      ]
    }
  ]
};

export const initialExperiences: ExperienceItem[] = [
  // --- Current & Recent HR Leadership ---
  {
    id: "exp-hr-1",
    role: "Manager – HR",
    organization: "Local Education and Economic Development Organization (LEEDO)",
    orgTagline: "Advocating education, protection, and rehabilitation for marginalized children in Bangladesh",
    location: "Dhaka, Bangladesh",
    period: "July 2025 – Present",
    isCurrent: true,
    category: "hr",
    responsibilities: [
      "Direct comprehensive HR operations, talent acquisition, and personnel development for programmatic and field branches.",
      "Lead organization-wide performance appraisals, KPI scoring, and annual merit evaluations.",
      "Ensure absolute compliance with Bangladesh Labour Law 2006 and national NGO Affairs Bureau donor guidelines.",
      "Administer transparent employee grievance handling, disciplinary protocols, and staff mediation.",
      "Oversee automated monthly payroll computation, leave balances, and statutory employee benefit disbursements.",
      "Produce executive workforce analytics and staffing reports for the Executive Committee and Board."
    ],
    achievements: [
      "Onboarded 25+ specialized program personnel while reducing hiring cycle time by 30%.",
      "Rolled out standardized KPI appraisal dashboards boosting staff engagement and role clarity.",
      "Reduced employee grievance turnaround time by 40% via transparent communication channels.",
      "Maintained 100% audit clearance with internal and external donor auditing bodies."
    ],
    technologiesUsed: ["Odoo HR", "Advanced Excel", "Google Sheets API", "Automated Attendance Systems"]
  },
  {
    id: "exp-hr-2",
    role: "Senior Officer – HR",
    organization: "Surjer Hashi Network (USAID Initiative Healthcare Social Enterprise)",
    orgTagline: "Nationwide healthcare network delivering high-quality clinical care across Bangladesh",
    location: "Dhaka, Bangladesh",
    period: "April 2021 – June 2025",
    category: "hr",
    responsibilities: [
      "Supervised nationwide human resource operations for 134 healthcare clinics and central administrative hubs.",
      "Managed clinical talent recruitment, healthcare payroll processing, and multi-tier labor law compliance.",
      "Conducted annual Training Needs Analysis (TNA) and rolled out professional healthcare development workshops.",
      "Audited and safeguarded personnel records, employee contracts, and clinical licensing documents.",
      "Executed end-to-end employee separation workflows, gratuity calculations, and final clearance settlements."
    ],
    achievements: [
      "Engineered centralized HR reporting dashboard, elevating organizational data accuracy by 30%.",
      "Digitized 1,000+ active employee files across 134 clinics for instant audit verification.",
      "Shortened final settlement processing duration by 25%.",
      "Maintained 100% unqualified audit clearance across 3 consecutive fiscal years with USAID and independent auditors."
    ],
    technologiesUsed: ["Advance EMS", "Zoho People", "Data Analytics Tools", "Cloud Document Management"]
  },
  {
    id: "exp-hr-3",
    role: "Corporate HR Executive",
    organization: "BYSL Global Industries Ltd. (Illiyeen)",
    orgTagline: "Conglomerate managing premier corporate fashion, lifestyle, and manufacturing brands",
    location: "Dhaka, Bangladesh",
    period: "March 2019 – August 2020",
    category: "hr",
    responsibilities: [
      "Managed recruitment cycles and HR administration for corporate headquarters and manufacturing production teams.",
      "Processed accurate monthly payroll, overtime, and bank disbursements for 250+ employees.",
      "Administered attendance systems, HR policy orientations, and quarterly performance appraisals.",
      "Conducted structured employee engagement initiatives, onboarding workshops, and retention sessions."
    ],
    achievements: [
      "Lowered annual employee turnover by 15% through proactive workplace engagement and feedback loops.",
      "Formulated standardized multi-departmental job descriptions and competency interview scorecards."
    ],
    technologiesUsed: ["HRIS Systems", "MS Excel", "Payroll Engines"]
  },

  // --- Game Development & AR/VR Technology Track (From User's Screenshots) ---
  {
    id: "exp-tech-1",
    role: "Game Developer",
    organization: "Skill Development for Mobile Game & Application Project",
    orgTagline: "Organized by Digicon Technology Limited & Multimedia Content and Communication Ltd. Powered by ICT Division",
    location: "Dhaka, Bangladesh",
    period: "5 Months (Year 2018)",
    category: "tech",
    responsibilities: [
      "Engineered mobile video games utilizing Unity 3D and C# object-oriented programming.",
      "Developed the flagship title 'Abra Zebra'—a 3D isometric city-traffic crossing game designed with social awareness messaging.",
      "Implemented character locomotion, collision detection, procedural vehicle spawning, and camera-follow mechanics in Unity.",
      "Designed user interface mockups, menus, options screens, and credits utilizing Adobe Photoshop, Adobe Illustrator, and Figma.",
      "Integrated audio systems, score tracking, option toggles, and responsive game-over awareness screens."
    ],
    achievements: [
      "Successfully launched 'Abra Zebra' with custom 3D art, sound design, and embedded social awareness cards.",
      "Awarded Certificate of Competence as Android Developer by the Government ICT Division."
    ],
    technologiesUsed: ["Unity 3D", "C#", "Adobe Photoshop", "Adobe Illustrator", "Figma", "Visual Studio"]
  },
  {
    id: "exp-tech-2",
    role: "Intern, AR/VR Developer",
    organization: "LICT Project (Leveraging ICT for Employment & Growth of IT-ITES)",
    orgTagline: "Organized by Service Engine BPO, Powered by ICT Division (Government of Bangladesh)",
    location: "Dhaka, Bangladesh",
    period: "5 Months (Year 2020)",
    category: "tech",
    responsibilities: [
      "Developed immersive Virtual Reality (VR) and Augmented Reality (AR) simulation applications for enterprise and medical training.",
      "Engineered the 'City Car Simulation Project'—a realistic 3D VR vehicular simulator with interactive cockpit controls and city navigation.",
      "Developed the 'Human Anatomy VR / AR Apps'—an interactive medical simulation enabling 3D organ inspection and virtual surgical workflows.",
      "Optimized 3D rendering pipelines, spatial audio, and head-tracking responsiveness to minimize VR simulation sickness."
    ],
    achievements: [
      "Presented and demonstrated functional VR simulators to ICT Division delegates and technical evaluators.",
      "Mastered interactive 3D physics modeling and spatial interaction design."
    ],
    technologiesUsed: ["Virtual Reality (VR)", "Augmented Reality (AR)", "Unity 3D", "C#", "3D Modeling", "Spatial UI"]
  },

  // --- Complete Hospitality Track (6 Appointments from Screenshot) ---
  {
    id: "exp-hosp-1",
    role: "Reservation Supervisor",
    organization: "Hotel Orchard Suites",
    orgTagline: "Premier boutique luxury hotel in Banani Diplomatic Zone",
    location: "Banani, Dhaka, Bangladesh",
    period: "Jul 2017 – Dec 2017",
    category: "hospitality",
    responsibilities: [
      "Supervised the central reservation department under Sales & Marketing, managing corporate bookings and room yields.",
      "Managed room allocations, rate parity across online travel agencies (OTAs), and VIP guest itineraries.",
      "Collaborated with corporate clients, multinational embassies, and event organizers for high-occupancy block bookings."
    ],
    achievements: [
      "Maximized average room occupancy through strategic OTA rate updates and corporate group management.",
      "Delivered flawless reservation logs with zero double-booking incidents."
    ],
    technologiesUsed: ["Hotel PMS", "Reservation Engines", "Channel Managers", "Excel Reporting"]
  },
  {
    id: "exp-hosp-2",
    role: "Front Office Supervisor",
    organization: "Asia Hotel & Resort",
    orgTagline: "Distinguished boutique hotel in the heart of Paltan commercial area",
    location: "Paltan, Dhaka, Bangladesh",
    period: "Dec 2016 – May 2017",
    category: "hospitality",
    responsibilities: [
      "Supervised all Front Office desk operations, guest check-ins/check-outs, and concierge services.",
      "Trained and guided front-desk guest service associates in five-star hospitality etiquette and emergency procedures.",
      "Handled VIP delegations, high-profile dignitaries, and unresolved billing inquiries with diplomatic poise."
    ],
    achievements: [
      "Maintained top guest review satisfaction scores across major travel portals.",
      "Streamlined night-audit procedures and cashier closing balance accuracy."
    ],
    technologiesUsed: ["Front Office PMS", "Credit Processing", "Shift Rostering"]
  },
  {
    id: "exp-hosp-3",
    role: "Senior Executive – Front Office",
    organization: "Hotel Orchard Suites",
    orgTagline: "Luxury hospitality and executive suites",
    location: "Banani, Dhaka, Bangladesh",
    period: "Sep 2015 – Dec 2016",
    category: "hospitality",
    responsibilities: [
      "Managed executive desk reception, VIP arrival logistics, and round-the-clock guest relation services.",
      "Coordinated cross-departmental operations between Housekeeping, F&B, Maintenance, and Security.",
      "Audited daily night audit reports, guest folios, and currency exchange transactions."
    ],
    achievements: [
      "Promoted to Senior Executive in recognition of consistent operational excellence and high guest satisfaction.",
      "Resolved guest complaints promptly, achieving a 95%+ first-contact resolution rate."
    ],
    technologiesUsed: ["Hospitality Management Systems", "Billing Modules", "Concierge Databases"]
  },
  {
    id: "exp-hosp-4",
    role: "Guest Relation Officer (GRO)",
    organization: "Ascott Dhaka",
    orgTagline: "Prestigious boutique residence hotel in diplomatic enclave",
    location: "Baridhara DOHS, Dhaka, Bangladesh",
    period: "May 2015 – Jul 2015",
    category: "hospitality",
    responsibilities: [
      "Provided personalized concierge and diplomatic relation support to international diplomats and corporate guests.",
      "Coordinated airport transfers, customized dining arrangements, and city travel itineraries.",
      "Maintained guest preference profiles to deliver bespoke, memorable hospitality experiences."
    ],
    achievements: [
      "Commended by management for exceptional intercultural communication with foreign delegates."
    ],
    technologiesUsed: ["Guest Profiling CRM", "Concierge Systems"]
  },
  {
    id: "exp-hosp-5",
    role: "Guest Relation Officer (GRO)",
    organization: "Galesia Hotel & Resort",
    orgTagline: "Renowned boutique resort known for 'feel the difference' hospitality",
    location: "Banani, Dhaka, Bangladesh",
    period: "Mar 2015 – Apr 2015",
    category: "hospitality",
    responsibilities: [
      "Welcomed guests upon arrival, conducted room orientations, and attended to guest satisfaction inquiries.",
      "Managed lobby guest interactions, express check-out services, and feedback collection."
    ],
    achievements: [
      "Enhanced lobby engagement and elevated prompt room service coordination."
    ],
    technologiesUsed: ["PMS Front Desk", "Guest Feedback Systems"]
  },
  {
    id: "exp-hosp-6",
    role: "Guest Service Agent (GSA)",
    organization: "THE OLIVES (residence+suite)",
    orgTagline: "Luxury serviced apartment and boutique suites in prime Gulshan",
    location: "Gulshan, Dhaka, Bangladesh",
    period: "Feb 2015 – Mar 2015",
    category: "hospitality",
    responsibilities: [
      "Managed registration, room key card issuance, and guest billing accounts.",
      "Assisted long-stay residential expatriate guests with housekeeping, laundry, and transportation arrangements.",
      "Answered PBX switchboard inquiries and routed guest requests swiftly."
    ],
    achievements: [
      "Successfully mastered property reservation software and standard operating protocols."
    ],
    technologiesUsed: ["Keycard Encoders", "PBX Switchboard", "Suite PMS"]
  }
];

export const initialEducation: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Master of Science (M.Sc.) in Physics",
    institution: "Dhaka College (under National University)",
    year: "Examination 2014 (Session 2013-14)",
    gradeOrCgpa: "2nd Class",
    field: "Physics & Computational Mathematics",
    highlights: "Advanced mechanics, computational mathematics, thermodynamics, electrodynamics, and empirical problem solving."
  },
  {
    id: "edu-2",
    degree: "Bachelor of Science (Honours) (B.Sc.) in Physics",
    institution: "Dhaka College (under National University)",
    year: "Examination 2012 (4-Year Course, Session 2008-09)",
    gradeOrCgpa: "2nd Class",
    field: "Physics",
    highlights: "Classical mechanics, electromagnetism, optics, quantum theory, differential equations, and laboratory experimentation."
  },
  {
    id: "edu-3",
    degree: "Higher Secondary Certificate (H.S.C.)",
    institution: "Dania University College (Board of Intermediate & Secondary Education, Dhaka)",
    year: "Passing Year: 2008",
    gradeOrCgpa: "GPA: 3.60 / 5.00",
    field: "Science Group",
    highlights: "Physics, Chemistry, Higher Mathematics, and Biology with high academic standing."
  },
  {
    id: "edu-4",
    degree: "Secondary School Certificate (S.S.C.)",
    institution: "Barnamala Adarsha High School & College (Board of Intermediate & Secondary Education, Dhaka)",
    year: "Passing Year: 2006",
    gradeOrCgpa: "GPA: 4.38 / 5.00",
    field: "Science Group",
    highlights: "Core Science curriculum with distinction in general sciences and mathematics."
  }
];

export const initialCertifications: CertificationItem[] = [
  // --- Professional Diplomas & Government Certificates (from Screenshot) ---
  {
    id: "cert-prof-1",
    title: "Post Graduate Diploma in Human Resource Management (PGDHRM)",
    issuer: "Bangladesh Institute of Management (BIM)",
    year: "November 2018",
    badgeColor: "emerald",
    skills: ["CGPA 3.63 / 4.00", "Bangladesh Labour Law", "Strategic HRM", "Performance Management", "Compensation & Benefits"],
    featured: true
  },
  {
    id: "cert-prof-2",
    title: "Android Developer - Certificate of Competence",
    issuer: "Skill Development for Mobile Game & Application Project (ICT Division)",
    year: "2018",
    badgeColor: "purple",
    skills: ["Unity 3D", "Android SDK", "Game Architecture", "C# OOP", "Mobile UI/UX"],
    featured: true
  },
  {
    id: "cert-prof-3",
    title: "Front Office & Secretarial Operations Certificate",
    issuer: "National Hotel & Tourism Training Institute (NHTTI - বাংলাদেশ পর্যটন কর্পোরেশন)",
    year: "Professional Certification",
    badgeColor: "amber",
    skills: ["Front Office Operations", "Secretarial Procedures", "Guest Concierge", "Hospitality Management"],
    featured: true
  },

  // --- Online Training Courses & Badges (from Screenshot 2026-09-21 221816.png) ---
  {
    id: "cert-onl-1",
    title: "The Fundamentals of Digital Marketing",
    issuer: "Google Digital Garage",
    year: "Verified Credential",
    badgeColor: "blue",
    skills: ["Search Engine Optimization", "Content Strategy", "Digital Analytics", "Online Advertising"],
    featured: true
  },
  {
    id: "cert-onl-2",
    title: "Google Analytics Certification",
    issuer: "Google",
    year: "Verified with QR Code",
    badgeColor: "indigo",
    skills: ["Data Tracking", "Traffic Analysis", "Goal Conversions", "Audience Segmentation"],
    featured: true
  },
  {
    id: "cert-onl-3",
    title: "Digital Security Essentials",
    issuer: "ICT Division (Certificate of Participation)",
    year: "Government Verified",
    badgeColor: "red",
    skills: ["Cyber Hygiene", "Data Protection", "Network Security", "Safe Online Practices"]
  },
  {
    id: "cert-onl-4",
    title: "Basic Teacher Training Course (6th Batch)",
    issuer: "Certificate of Participation",
    year: "Training Course",
    badgeColor: "teal",
    skills: ["Pedagogical Methods", "Interactive Instruction", "Curriculum Planning", "Student Engagement"]
  },
  {
    id: "cert-onl-5",
    title: "Startup & Entrepreneurship",
    issuer: "Entrepreneurship Development Program",
    year: "Certified",
    badgeColor: "amber",
    skills: ["Business Model Canvas", "Venture Ideation", "Pitching", "Growth Strategy"]
  },
  {
    id: "cert-onl-6",
    title: "COVID-19 Awareness & Hygiene Training",
    issuer: "BRAC / Health Partner Initiative",
    year: "Certified",
    badgeColor: "cyan",
    skills: ["Healthcare Protocols", "Public Health Preparedness", "Sanitation Standards"]
  },
  {
    id: "cert-onl-7",
    title: "AI for HR Specialization",
    issuer: "Coursera",
    year: "2026",
    badgeColor: "emerald",
    skills: ["AI Recruitment", "Predictive Analytics", "Generative AI in HR", "Prompt Engineering"]
  },
  {
    id: "cert-onl-8",
    title: "Google Project Management Certificate",
    issuer: "Google",
    year: "2022",
    badgeColor: "blue",
    skills: ["Agile & Scrum", "Project Charters", "Risk Management", "Stakeholder Communication"]
  },
  {
    id: "cert-onl-9",
    title: "Google Data Analytics Certificate",
    issuer: "Google",
    year: "2022",
    badgeColor: "indigo",
    skills: ["Data Cleaning", "Data Visualization", "Spreadsheet Modeling", "SQL & Metrics"]
  }
];

export const initialProjects: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Abra Zebra: Mobile Game with Social Awareness",
    category: "game-dev",
    shortDesc: "3D arcade mobile game engineered in Unity 3D with C# under Bangladesh ICT Division & Digicon Technology.",
    fullDesc: "A creative story of a lost zebra who entered a crowded urban city full of buses, trucks, cars, trains, and rivers. The player's goal is to navigate the zebra safely across roads and waterways. Embedded into the game-over states are vital social awareness messages encouraging tree plantation ('গাছ লাগান, পরিবেশ বাঁচান'), helping elders cross streets ('রাস্তা পারাপারে বয়োজ্যেষ্ঠদের সাহায্য করুন'), classroom learning, and digital screen balance.",
    imageUrl: "/assets/images/abra_zebra.jpg",
    techStack: ["Unity 3D", "C# Scripting", "Adobe Photoshop", "Adobe Illustrator", "Figma", "Visual Studio"],
    features: [
      "Custom 3D isometric camera and responsive character controller",
      "Dynamic urban traffic AI with buses, cars, and obstacle patterns",
      "Complete UI suite: Home Screen, Options (Music, Sound, Credits, Facebook), Game Over",
      "Educational awareness cartoons presented post-gameplay",
      "Official project under ICT Division, Digicon Technology & Multimedia Content Ltd.",
      "Developer Credits: Md. Omar Faruque, Anis Anjum, Ashik Ibne Razzak; Special Thanks: Kuldeep Sorker Joy"
    ],
    metrics: "Developed under ICT Division Skill Development Project"
  },
  {
    id: "proj-2",
    title: "City Car Simulation VR & Human Anatomy VR Apps",
    category: "game-dev",
    shortDesc: "Virtual reality simulation applications developed under the Government LICT Project with Service Engine BPO.",
    fullDesc: "Two flagship VR projects developed during my AR/VR Developer internship: (1) City Car Simulation: realistic cockpit view vehicle simulator with steering wheel and city street navigation; (2) Human Anatomy VR/AR: interactive medical anatomy laboratory allowing users to inspect vital human organs (heart, lungs) and simulate surgical operating table workflows.",
    imageUrl: "/assets/images/vr_projects.jpg",
    techStack: ["Unity VR", "C#", "Oculus/SteamVR SDK", "3D Anatomy Modeling", "Vehicular Physics Engine"],
    features: [
      "Interactive 3D cockpit with steering wheel and dashboard gauges",
      "Realistic vehicular acceleration and road collision physics",
      "Interactive 3D medical anatomy models with expandable internal organs",
      "Spatial UI with low-latency head tracking to prevent motion fatigue",
      "Developed under LICT Project (Leveraging ICT for Employment and Growth)"
    ],
    metrics: "5-month development under LICT Project & Service Engine BPO"
  },
  {
    id: "proj-3",
    title: "CentraHR: Healthcare Workforce & Clinic Analytics Portal",
    category: "hr-tech",
    shortDesc: "Automated executive dashboard consolidating headcount, payroll, and compliance metrics across 134 healthcare facilities.",
    fullDesc: "Designed and implemented for Surjer Hashi Network to eliminate fragmented reporting. Connects branch attendance logs, turnover tracking, audit readiness indices, and license expiration monitors into a single visual cockpit for decision-makers.",
    imageUrl: "/assets/images/hr_analytics.jpg",
    techStack: ["Zoho People", "Google Sheets API", "Power Query", "Looker Studio", "Excel Automation"],
    features: [
      "Real-time monitoring of 134 clinic locations across Bangladesh",
      "Automated alerts for clinic operational licenses and facility deeds",
      "Reduced report consolidation time from 5 days to 2 hours",
      "Standardized KPI dashboards for executive directors"
    ],
    metrics: "30% increase in data accuracy, 100% audit clearance rate"
  },
  {
    id: "proj-4",
    title: "Hospitality Multi-Shift Roster & Payroll Engine",
    category: "it-systems",
    shortDesc: "Algorithmic shift allocation and overtime calculating system designed for round-the-clock hotel operations.",
    fullDesc: "Originated during my career across Hotel Orchard Suites and Asia Hotel & Resorts. Replaces manual paper rosters with a mathematically balanced scheduling algorithm that respects consecutive working hour limits, fair night-shift rotation, and automated overtime audits.",
    imageUrl: "/assets/images/hr_analytics.jpg",
    techStack: ["VBA / Macros", "Advanced Excel", "Biometric DB Integration", "Workforce Math"],
    features: [
      "Zero schedule collision guarantee across front-desk, housekeeping, and F&B",
      "Automated overtime and festival allowance calculation",
      "Visual timeline export for staff bulletin boards",
      "Seamless integration with biometric attendance logs"
    ],
    metrics: "Eliminated payroll discrepancies and reduced scheduling disputes by 80%"
  }
];

export const initialBlogPosts: BlogPostItem[] = [
  {
    id: "post-1",
    title: "Developing 'Abra Zebra' in Unity 3D: Blending Game Mechanics with Social Awareness",
    slug: "developing-abra-zebra-game",
    excerpt: "How our team built 'Abra Zebra' under the ICT Division of Bangladesh using Unity 3D and C#, transforming classic road-crossing gameplay into an awareness platform.",
    content: `When we embarked on creating **Abra Zebra** under the **Skill Development for Mobile Game & Application Project** (powered by the ICT Division and Digicon Technology), our goal was to deliver both engaging gameplay and purposeful education.\n\n### The Core Concept\nThe protagonist is a lost Zebra who wanders away from his natural habitat and enters a bustling modern city packed with roaring buses, trucks, cars, and flowing waterways. The core mechanic requires precise timing, reflex control, and spatial awareness.\n\n### Technical Stack & Pipeline\n- **Unity 3D Engine**: Core isometric camera viewport, physics collision boundaries, and procedural obstacle triggers.\n- **C# Scripting**: Custom lane controllers, randomized traffic frequencies, and audio managers.\n- **Design & UI**: Adobe Photoshop, Illustrator, and Figma for character sprites, wooden menu signposts, and vibrant environmental assets.\n\n### The Hidden Mission: Social Messages\nEvery time a player encounters a Game Over, instead of frustrating defeat screens, the game presents inspiring educational cartoons:\n1. **Environment**: Planting trees and preserving green spaces ('গাছ লাগান, পরিবেশ বাঁচান').\n2. **Road Safety**: Helping senior citizens and elders safely cross metropolitan avenues ('রাস্তা পারাপারে বয়োজ্যেষ্ঠদের সাহায্য করুন').\n3. **Classroom Focus**: Emphasizing education and disciplined screen time.\n\nGaming has the unique psychological power to foster empathy and positive social change when designed with intentionality.`,
    author: "Md. Omar Faruque",
    date: "September 2026",
    readTime: "5 min read",
    category: "Game Dev & IT",
    tags: ["Abra Zebra", "Unity 3D", "ICT Division", "C#", "Social Awareness"]
  },
  {
    id: "post-2",
    title: "The Physics of Game Development: Why Science Degrees Create Better Gameplay",
    slug: "physics-of-game-development",
    excerpt: "How studying vectors, thermodynamics, and classical kinematics at Dhaka College directly informs realistic gameplay mechanics and intuitive player feedback in Unity 3D.",
    content: `When people hear that I hold a Master's and Bachelor's in Physics and also build games in Unity with C#, they often assume these are two disparate worlds. In reality, they are identical disciplines separated only by rendering pipelines.\n\n### 1. Kinematics in Action\nEvery jump arc, projectile launch, and camera dampening curve in game development is an equation of motion. When you code a character controller from scratch without relying solely on default gravity, you are solving differential equations.\n\n### 2. The Beauty of Conservation of Momentum\nIn puzzle games and vehicular simulations (such as our LICT City Car Simulation), when objects collide, players instinctively know when an interaction feels 'weightless' or synthetic. By programming elastic and inelastic collision impulses that adhere to real conservation laws, virtual worlds feel tangible and tactile.\n\n### 3. Systematic Thinking Across Disciplines\nPhysics trains the human mind to break chaotic real-world phenomena down into observable variables. Whether tuning an impulse vector or diagnosing why an HR recruitment pipeline has a latency, the analytical lens remains the same.`,
    author: "Md. Omar Faruque",
    date: "August 2026",
    readTime: "5 min read",
    category: "Physics & Tech",
    tags: ["Physics", "Unity", "Game Dev", "Kinematics", "Dhaka College"]
  },
  {
    id: "post-3",
    title: "Managing HR Operations Across 134 Decentralized Healthcare Centers: Lessons from the Field",
    slug: "managing-hr-across-134-centers",
    excerpt: "Operational strategies, compliance safeguards, and centralized reporting architectures that enabled 100% audit clearance at Surjer Hashi Network.",
    content: `Managing Human Resources for a single corporate office is challenging; managing HR for 134 clinics scattered across remote districts and urban centers is an operational marathon.\n\n### 1. The Power of Single Source of Truth\nWhen documentation lives in physical folders across 134 locations, audit compliance is impossible. By designing a centralized HR reporting dashboard, our team unified attendance records, salary structures, and licensing deeds in real time.\n\n### 2. Audits are Won in the Preparation, Not the Inspection\nMaintaining a 100% audit clearance for three consecutive years wasn't achieved during audit week; it was built into our daily SOPs. Every onboarding document and separation clearance had a strict digital checklist.\n\n### 3. Decentralized Teams Need Centralized Empathy\nFrontline healthcare workers face tremendous emotional pressure. Clear grievance mechanisms and transparent reward systems were vital in maintaining staff morale nationwide.`,
    author: "Md. Omar Faruque",
    date: "July 2026",
    readTime: "6 min read",
    category: "Healthcare HR",
    tags: ["Surjer Hashi", "USAID", "Audit Compliance", "Healthcare HR", "Operations"]
  },
  {
    id: "post-4",
    title: "From 6 Luxury Hotel Roles to Corporate HR: Why Guest-Centric Service Elevates Workplace Culture",
    slug: "hospitality-to-corporate-hr",
    excerpt: "How serving across Hotel Orchard Suites, Asia Hotel & Resorts, Ascott Dhaka, Galesia, and The Olives shaped an empathetic, service-oriented approach to internal employee satisfaction.",
    content: `My foundational career in luxury hospitality spanning six appointments—from Guest Service Agent at The Olives to Reservation Supervisor and Senior Executive at Hotel Orchard Suites, Front Office Supervisor at Asia Hotel, and Guest Relations Officer at Ascott Dhaka and Galesia—was an unforgettable crucible.\n\nIn luxury hospitality, there is zero margin for error. If staff scheduling falls apart, guest experiences suffer instantly. Certified in Front Office & Secretarial Operations by NHTTI, I learned that smooth operations require both meticulous administrative precision and boundless human warmth.\n\n### The Employee as a 'Customer'\nWhen I transitioned into corporate manufacturing at BYSL Global and subsequently healthcare and NGOs, I brought one guiding principle: **Treat your employees with the exact same attentiveness, dignity, and promptness that a premier boutique hotel treats its most distinguished guests.**\n\nWhen HR stops behaving like a bureaucratic gatekeeper and starts acting like an internal hospitality concierge, employee trust skyrockets and workplace disputes plummet.`,
    author: "Md. Omar Faruque",
    date: "June 2026",
    readTime: "5 min read",
    category: "Hospitality & Culture",
    tags: ["Hospitality", "Hotel Orchard Suites", "NHTTI", "Employee Experience", "Workplace Culture"]
  }
];

export const initialPhotos: PhotoItem[] = [
  {
    id: "photo-1",
    url: "/assets/images/omar_portrait.jpg",
    title: "Md. Omar Faruque - Executive Portrait",
    caption: "Official professional studio portrait of Md. Omar Faruque.",
    category: "portrait",
    uploadedAt: "2026-09-21"
  },
  {
    id: "photo-2",
    url: "/assets/images/abra_zebra.jpg",
    title: "Abra Zebra - Mobile Game Gameplay & UI",
    caption: "Official showcase of Abra Zebra 3D mobile game developed under Bangladesh ICT Division & Digicon Technology.",
    category: "projects",
    uploadedAt: "2026-09-21"
  },
  {
    id: "photo-3",
    url: "/assets/images/vr_projects.jpg",
    title: "City Car Simulation VR & Human Anatomy VR",
    caption: "VR vehicular driving simulation and interactive surgical medical anatomy apps developed under LICT Project.",
    category: "projects",
    uploadedAt: "2026-09-21"
  },
  {
    id: "photo-4",
    url: "/assets/images/hr_analytics.jpg",
    title: "CentraHR Enterprise Dashboard Mockup",
    caption: "Workforce analytics, retention metrics, and clinic compliance tracking interface for 134 healthcare facilities.",
    category: "projects",
    uploadedAt: "2026-09-21"
  }
];
