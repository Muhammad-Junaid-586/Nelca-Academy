import { Laptop, Users, Palette, Code } from "lucide-react";

export const courses = [
  {
    slug: "spoken-english",
    icon: Users,
    title: "Spoken English – All Levels",
    category: "English Language",
    duration: "3–6 Months",
    tag: "All Levels",
    badge: "Trending",
    bg: "from-green-500 to-emerald-600",

    overview:
      "Our Spoken English program is designed to help students communicate confidently in English in daily life, academics, and professional environments. The course focuses on speaking practice, grammar, vocabulary building, and real-life communication skills.",

    levels: [
      {
        title: "Level 1 – Beginner",
        topics: [
          "Basic English grammar",
          "Alphabet pronunciation",
          "Common daily vocabulary",
          "Simple sentence formation",
          "Basic conversation practice",
        ],
      },
      {
        title: "Level 2 – Elementary",
        topics: [
          "Present, past, and future tenses",
          "Improving vocabulary",
          "Speaking in short conversations",
          "Listening practice",
          "Confidence building activities",
        ],
      },
      {
        title: "Level 3 – Intermediate",
        topics: [
          "Advanced grammar structures",
          "Group discussion practice",
          "Storytelling and presentation",
          "Pronunciation improvement",
          "Real-life communication exercises",
        ],
      },
      {
        title: "Level 4 – Advanced",
        topics: [
          "Professional communication",
          "Public speaking",
          "Interview preparation",
          "Fluent conversation practice",
          "Presentation and debate",
        ],
      },
    ],

    whatYouLearn: [
      "Speak English confidently in daily life",
      "Improve pronunciation and fluency",
      "Use correct grammar while speaking",
      "Communicate effectively in interviews",
    ],

    career: [
      "Better job opportunities",
      "Improved communication skills",
      "Confidence in presentations",
    ],
  },

  {
    slug: "dit-diploma-in-it",
    icon: Laptop,
    title: "DIT – Diploma in IT",
    category: "Computer Courses",
    duration: "12 Months",
    tag: "Certification",
    badge: "Popular",
    bg: "from-blue-500 to-indigo-600",

    overview:
      "The Diploma in Information Technology (DIT) is a comprehensive course designed to provide strong computer skills for office work, IT support, and digital productivity.",

    levels: [
      {
        title: "Module 1 – Computer Fundamentals",
        topics: [
          "Introduction to computers",
          "Operating systems basics",
          "Hardware and software understanding",
        ],
      },
      {
        title: "Module 2 – MS Office",
        topics: [
          "MS Word for documentation",
          "MS Excel for spreadsheets",
          "MS PowerPoint for presentations",
        ],
      },
      {
        title: "Module 3 – Internet & Email",
        topics: [
          "Internet browsing",
          "Professional email writing",
          "Online research techniques",
        ],
      },
      {
        title: "Module 4 – Basic Programming",
        topics: [
          "Programming logic",
          "Introduction to coding",
          "Basic problem solving",
        ],
      },
    ],

    whatYouLearn: [
      "Complete office computer skills",
      "Professional document creation",
      "Spreadsheet and data management",
      "Basic programming knowledge",
    ],

    career: [
      "Office Assistant",
      "Computer Operator",
      "IT Support Assistant",
    ],
  },

  {
    slug: "graphic-design",
    icon: Palette,
    title: "Graphic Design",
    category: "Computer Courses",
    duration: "3 Months",
    tag: "Creative",
    badge: "Creative",
    bg: "from-purple-500 to-pink-600",

    overview:
      "This course teaches modern graphic design skills using industry-standard tools. Students learn to create logos, social media graphics, marketing materials, and professional branding designs.",

    levels: [
      {
        title: "Module 1 – Design Fundamentals",
        topics: [
          "Color theory",
          "Typography basics",
          "Design principles",
        ],
      },
      {
        title: "Module 2 – Adobe Photoshop",
        topics: [
          "Photo editing",
          "Social media designs",
          "Poster and banner design",
        ],
      },
      {
        title: "Module 3 – Adobe Illustrator",
        topics: [
          "Logo design",
          "Vector graphics",
          "Brand identity creation",
        ],
      },
      {
        title: "Module 4 – CorelDRAW",
        topics: [
          "Print design",
          "Business cards",
          "Marketing materials",
        ],
      },
    ],

    whatYouLearn: [
      "Professional design tools",
      "Logo and branding design",
      "Social media graphics",
      "Print media design",
    ],

    career: [
      "Graphic Designer",
      "Freelance Designer",
      "Social Media Designer",
    ],
  },

  {
    slug: "computer-networking",
    icon: Code,
    title: "Computer Networking",
    category: "IT & Technology",
    duration: "3–6 Months",
    tag: "Technical",
    badge: "In Demand",
    bg: "from-indigo-500 to-blue-600",

    overview:
      "The networking course introduces students to the fundamentals of computer networks including LAN, WAN, routing, switching, and network security.",

    levels: [
      {
        title: "Module 1 – Networking Basics",
        topics: [
          "Network types",
          "LAN and WAN",
          "Networking hardware",
        ],
      },
      {
        title: "Module 2 – IP Addressing",
        topics: [
          "IPv4 and IPv6",
          "Subnetting basics",
          "Network configuration",
        ],
      },
      {
        title: "Module 3 – Routing & Switching",
        topics: [
          "Router configuration",
          "Switching concepts",
          "Network troubleshooting",
        ],
      },
      {
        title: "Module 4 – Network Security",
        topics: [
          "Firewall basics",
          "Network protection",
          "Security best practices",
        ],
      },
    ],

    whatYouLearn: [
      "Network configuration",
      "Troubleshooting skills",
      "Network security basics",
    ],

    career: [
      "Network Technician",
      "IT Support Specialist",
      "Network Administrator",
    ],
  },

  {
    slug: "web-design-programming",
    icon: Code,
    title: "Web Design & Programming",
    category: "Computer Courses",
    duration: "6 Months",
    tag: "Technical",
    badge: "Hot",
    bg: "from-indigo-500 to-purple-600",

    overview:
      "This course teaches students how to design and develop modern websites using HTML, CSS, JavaScript, and backend technologies.",

    levels: [
      {
        title: "Module 1 – HTML",
        topics: [
          "Web page structure",
          "Forms and tables",
          "Semantic HTML",
        ],
      },
      {
        title: "Module 2 – CSS",
        topics: [
          "Layouts and flexbox",
          "Responsive design",
          "Animations",
        ],
      },
      {
        title: "Module 3 – JavaScript",
        topics: [
          "DOM manipulation",
          "Events",
          "Interactive web features",
        ],
      },
      {
        title: "Module 4 – Backend",
        topics: [
          "Introduction to PHP / Python",
          "Database basics",
          "Dynamic websites",
        ],
      },
    ],

    whatYouLearn: [
      "Website design and layout",
      "Interactive web development",
      "Responsive design techniques",
    ],

    career: [
      "Web Designer",
      "Frontend Developer",
      "Freelance Web Developer",
    ],
  },
  {
  slug: "tuition-classes",
  icon: Users,
  title: "Tuition Classes (Grade 1 – 12)",
  category: "Academic Support",
  duration: "Full Academic Session",
  tag: "School Support",
  badge: "Popular",
  bg: "from-orange-500 to-red-500",

  overview:
    "Our Tuition Classes are designed to support students from Grade 1 to Grade 12 in improving their academic performance. Experienced teachers provide personalized guidance, concept clarity, homework support, and exam preparation.",

  levels: [
    {
      title: "Primary Level (Grade 1 – 5)",
      topics: [
        "Basic Mathematics",
        "English reading and writing",
        "Science fundamentals",
        "Homework assistance",
        "Concept building",
      ],
    },
    {
      title: "Middle Level (Grade 6 – 8)",
      topics: [
        "Mathematics problem solving",
        "English grammar and writing",
        "Science concepts",
        "Test preparation",
        "Study techniques",
      ],
    },
    {
      title: "Secondary Level (Grade 9 – 10)",
      topics: [
        "Mathematics and Algebra",
        "Physics, Chemistry, Biology",
        "English communication",
        "Board exam preparation",
        "Past paper practice",
      ],
    },
    {
      title: "Higher Secondary (Grade 11 – 12)",
      topics: [
        "Advanced Mathematics",
        "Physics and Chemistry",
        "Biology and Computer Science",
        "Exam strategies",
        "University preparation",
      ],
    },
  ],

  whatYouLearn: [
    "Stronger academic foundation",
    "Improved exam performance",
    "Better understanding of school subjects",
    "Confidence in studies",
  ],

  career: [
    "Strong preparation for higher education",
    "Better academic results",
  ],
},

{
  slug: "short-courses",
  icon: Laptop,
  title: "Short Computer Courses",
  category: "Computer Courses",
  duration: "1 – 3 Months",
  tag: "Skill Based",
  badge: "Fast Track",
  bg: "from-teal-500 to-cyan-600",

  overview:
    "Our Short Computer Courses are designed for students and professionals who want to quickly learn essential computer skills for office work, business, and daily digital tasks.",

  levels: [
    {
      title: "MS Office",
      topics: [
        "MS Word document creation",
        "MS Excel spreadsheets",
        "MS PowerPoint presentations",
        "Professional formatting",
      ],
    },
    {
      title: "Basic Computer",
      topics: [
        "Computer fundamentals",
        "File and folder management",
        "Typing practice",
        "Basic troubleshooting",
      ],
    },
    {
      title: "Internet & Email",
      topics: [
        "Internet browsing",
        "Online research",
        "Email creation and management",
        "Online safety",
      ],
    },
    {
      title: "Typing & Productivity",
      topics: [
        "English typing speed improvement",
        "Shortcut keys",
        "Office productivity tools",
      ],
    },
  ],

  whatYouLearn: [
    "Essential computer skills",
    "Office productivity tools",
    "Internet and email usage",
    "Digital confidence",
  ],

  career: [
    "Office Assistant",
    "Computer Operator",
    "Administrative Support",
  ],
},
];