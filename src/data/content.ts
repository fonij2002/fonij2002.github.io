// Single source of truth for the bilingual portfolio.
export type Locale = "en" | "fa";

export const social = {
  github: "https://github.com/fonij2002",
  linkedin: "https://www.linkedin.com/in/foroozan-iraji",
  email: "fonij2002@gmail.com",
} as const;

export const skills = [
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/python/python-original.svg",
    fallback: "Py",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/typescript/typescript-original.svg",
    fallback: "TS",
  },
  {
    name: "Django",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/django/django-plain.svg",
    fallback: "Dj",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/react/react-original.svg",
    fallback: "Re",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/nextjs/nextjs-original.svg",
    fallback: "Nx",
  },
  {
    name: "React Native",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/react/react-original.svg",
    fallback: "RN",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/postgresql/postgresql-original.svg",
    fallback: "PG",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/git/git-original.svg",
    fallback: "Gi",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/docker/docker-original.svg",
    fallback: "Do",
  },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/vscode/vscode-original.svg",
    fallback: "VS",
    group: "tools",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/figma/figma-original.svg",
    fallback: "Fg",
    group: "tools",
  },
  {
    name: "OpenAI API",
    icon: "/icons/openai.svg",
    fallback: "AI",
    group: "ai",
  },
  { name: "REST APIs", icon: "/icons/api.svg", fallback: "{}", group: "ai" },
] as const;

const english = {
  locale: "en" as const,
  title: "Foroozan Iraji — Product Builder & Full-Stack Engineer",
  description:
    "Foroozan Iraji builds AI-powered web and mobile products, from idea to MVP. Explore selected work, engineering stack, and experience.",
  skip: "Skip to main content",
  nav: {
    projects: "Projects",
    expertise: "Expertise",
    experience: "Experience",
    contact: "Contact",
    theme: "Toggle color theme",
    menu: "Toggle navigation",
    language: "فارسی",
    locale: "Switch to Persian",
  },
  hero: {
    kicker: "Product Engineer | Full-Stack Developer",
    hello: "Hi, I'm",
    name: "Foroozan Iraji",
    headlineA: "I turn ideas into",
    headlineB: "real products.",
    summary:
      "I design, build, and ship AI-powered web & mobile MVPs — connecting thoughtful product strategy with hands-on engineering.",
    projects: "Explore my work",
    contact: "Let’s talk",
    location: "Based in Tehran, Iran · Working remotely",
    portraitAlt:
      "Illustrated portrait placeholder for Foroozan Iraji — replace with a real photo",
    miniLabel: "FROM ZERO TO ONE",
    cardTitle: "Idea → MVP",
    cardCaption: "Build. Launch. Learn.",
    scroll: "SCROLL TO EXPLORE",
  },
  proof: {
    oneValue: "150+",
    oneLabel: "BazarVam users",
    twoValue: "0 → 1",
    twoLabel: "Product mindset",
    threeValue: "2025",
    threeLabel: "Sharif University graduate",
  },
  section: {
    projectTitle: "Selected Work",
    skillsTitle: "My Toolbox",
    experienceTitle: "My Journey",
    education: "EDUCATION",
    contactTitleA: "Have an idea?",
    contactTitleB: "Let’s build it.",
    contactSubtitle:
      "Product ideas, collaborations, or an interesting challenge — my inbox is open.",
    email: "Send an email",
    footerTag: "What do we build for, if not to lessen each other’s hardship?",
    imageMock: "Concept visual · replace with your screenshot",
  },
  projectCards: [
    {
      key: "bazarvam",
      category: "MARKETPLACE / FINTECH",
      title: "BazarVam",
      description:
        "Co-founded a marketplace for trading loan entitlements. Led the build from concept to public MVP.",
      takeaway: "150+ registered users",
      role: "Technical Co-Founder",
      image: "/images/project-bazarvam.svg",
      alt: "Placeholder interface illustration for the BazarVam marketplace",
      labels: ["Product strategy", "Full-stack", "MVP launch"],
    },
    {
      key: "gold",
      category: "FINTECH / MOBILE + WEB",
      title: "Gold Trading Marketplace",
      description:
        "A full-stack gold trading experience with authentication, wallet, marketplace, and order flows.",
      takeaway: "Android + responsive web MVP",
      role: "Full-Stack Developer",
      image: "/images/project-gold.svg",
      alt: "Placeholder interface illustration for the gold trading marketplace",
      labels: ["React Native", "Django", "PostgreSQL"],
    },
    {
      key: "lifence",
      category: "AI / HEALTH TECH",
      title: "Lifence",
      description:
        "Co-founded an AI-powered elderly assistance startup; delivered the backend, AI integrations, and an MVP.",
      takeaway: "MVP delivered · project concluded",
      role: "Technical Co-Founder",
      image: "/images/project-lifence.svg",
      alt: "Placeholder interface illustration for the Lifence elderly assistance app",
      labels: ["AI integrations", "Backend", "MVP"],
    },
  ],
  groups: {
    languages: "Languages",
    frameworks: "Frameworks",
    tools: "Tools & design",
    ai: "AI & APIs",
  },
  jobs: [
    {
      company: "BazarVam",
      role: "Technical Co-Founder",
      period: "Feb 2026 — Present",
      summary:
        "Built a fintech marketplace from business requirements to public launch.",
      current: true,
    },
    {
      company: "Freelance",
      role: "Product Builder",
      period: "Mar 2025 — Present",
      summary:
        "End-to-end web, mobile, deployment, and AI-powered MVP delivery.",
      current: true,
    },
    {
      company: "Lifence",
      role: "Technical Co-Founder",
      period: "Oct 2025 — Jan 2026",
      summary:
        "Built the backend and AI integrations for an elderly assistance MVP.",
      current: false,
    },
    {
      company: "Refreshino",
      role: "Product Growth Intern",
      period: "Aug — Oct 2025",
      summary:
        "Contributed to startup growth, content, and acquisition experiments.",
      current: false,
    },
    {
      company: "Tosan",
      role: "Junior Java Developer",
      period: "Feb 2022 — Feb 2025",
      summary:
        "Engineered banking and ATM workflows with Java, Spring, JSP, and Hibernate.",
      current: false,
    },
  ],
  school: {
    name: "Sharif University of Technology",
    degree: "B.Eng. Computer Engineering",
    year: "2025",
  },
  footer: { rights: "© {year} Foroozan Iraji", backToTop: "Back to top" },
};

// Translations intentionally match the résumé rather than inventing new achievements.
const persian = {
  locale: "fa",
  title: "فروزان ایرجی | پروداکت بیلدر و توسعه‌دهنده فول‌استک",
  description:
    "فروزان ایرجی؛ ساخت محصولات وب، موبایل و مبتنی بر هوش مصنوعی از ایده تا MVP. نمونه‌کارها، مهارت‌ها و تجربه‌های حرفه‌ای.",
  skip: "رفتن به محتوای اصلی",
  nav: {
    projects: "پروژه‌ها",
    expertise: "مهارت‌ها",
    experience: "مسیر حرفه‌ای",
    contact: "ارتباط",
    theme: "تغییر تم رنگی",
    menu: "باز و بسته کردن منو",
    language: "EN",
    locale: "Switch to English",
  },
  hero: {
    kicker: "پروداکت بیلدر  /  توسعه‌دهنده فول‌استک",
    hello: "سلام، من",
    name: "فروزان ایرجی",
    headlineA: "ایده‌ها رو به",
    headlineB: "محصول واقعی تبدیل می‌کنم.",
    summary:
      "از استراتژی محصول تا طراحی، توسعه و عرضه‌ی MVPهای وب، موبایل و مبتنی بر هوش مصنوعی؛ از صفر تا اجرا.",
    projects: "دیدن پروژه‌ها",
    contact: "گپ بزنیم",
    location: "تهران، ایران · همکاری به‌صورت ریموت",
    portraitAlt: "تصویر جایگزین پرتره فروزان ایرجی — قابل تعویض با عکس واقعی",
    miniLabel: "از صفر تا یک",
    cardTitle: "ایده ← MVP",
    cardCaption: "ساختن. عرضه‌کردن. یادگرفتن.",
    scroll: "برای دیدن ادامه اسکرول کن",
  },
  proof: {
    oneValue: "+۱۵۰",
    oneLabel: "کاربر ثبت‌نام‌شده در بازاروام",
    twoValue: "۰ ← ۱",
    twoLabel: "نگاه محصول‌محور",
    threeValue: "۲۰۲۵",
    threeLabel: "فارغ‌التحصیل شریف (۲۰۲۵)",
  },
  section: {
    projectTitle: "پروژه‌های منتخب",
    skillsTitle: "جعبه‌ابزار من",
    experienceTitle: "مسیر حرفه‌ای من.",
    education: "تحصیلات",
    contactTitleA: "ایده‌ای داری؟",
    contactTitleB: "با هم بسازیمش.",
    contactSubtitle:
      "برای همکاری، ساخت محصول یا گفت‌وگو درباره‌ی یک چالش جذاب خوشحال می‌شم پیام بدی.",
    email: "ارسال ایمیل",
    footerTag: "با دقت ساخته شده؛ نه با سایت‌ساز.",
    imageMock: "طرح نمایشی · با اسکرین‌شات واقعی جایگزین شود",
  },
  projectCards: [
    {
      key: "bazarvam",
      category: "مارکت‌پلیس / فین‌تک",
      title: "بازاروام",
      description:
        "هم‌بنیان‌گذار بازار خریدوفروش امتیاز وام؛ از شکل‌گیری ایده و نیازمندی‌ها تا عرضه‌ی MVP عمومی.",
      takeaway: "بیش از ۱۵۰ کاربر ثبت‌نام‌شده",
      role: "هم‌بنیان‌گذار فنی",
      image: "/images/project-bazarvam.svg",
      alt: "تصویر نمایشی رابط کاربری بازاروام",
      labels: ["استراتژی محصول", "فول‌استک", "عرضه‌ی MVP"],
    },
    {
      key: "gold",
      category: "فین‌تک / موبایل و وب",
      title: "بازار خریدوفروش طلا",
      description:
        "اپلیکیشن فول‌استک معاملات طلا با احراز هویت، کیف پول، بازار و مدیریت سفارش‌ها.",
      takeaway: "MVP اندروید و وب واکنش‌گرا",
      role: "توسعه‌دهنده فول‌استک",
      image: "/images/project-gold.svg",
      alt: "تصویر نمایشی رابط کاربری بازار معاملات طلا",
      labels: ["React Native", "Django", "PostgreSQL"],
    },
    {
      key: "lifence",
      category: "هوش مصنوعی / سلامت",
      title: "لایفنس",
      description:
        "هم‌بنیان‌گذار استارتاپ دستیار سالمندان مبتنی بر هوش مصنوعی؛ توسعه‌ی بک‌اند، اتصال AI و تحویل MVP.",
      takeaway: "تحویل MVP · پایان پروژه",
      role: "هم‌بنیان‌گذار فنی",
      image: "/images/project-lifence.svg",
      alt: "تصویر نمایشی اپلیکیشن دستیار سالمندان لایفنس",
      labels: ["اتصال هوش مصنوعی", "بک‌اند", "MVP"],
    },
  ],
  groups: {
    languages: "زبان‌های برنامه‌نویسی",
    frameworks: "فریم‌ورک‌ها",
    tools: "ابزار و طراحی",
    ai: "هوش مصنوعی و API",
  },
  jobs: [
    {
      company: "بازاروام",
      role: "هم‌بنیان‌گذار فنی",
      period: "فوریهٔ ۲۰۲۶ — اکنون",
      summary:
        "طراحی و توسعه‌ی مارکت‌پلیس فین‌تک از نیازمندی‌های کسب‌وکار تا انتشار عمومی.",
      current: true,
    },
    {
      company: "فریلنس",
      role: "پروداکت بیلدر",
      period: "مارس ۲۰۲۵ — اکنون",
      summary:
        "ساخت و عرضه‌ی MVPهای وب و موبایل؛ از بک‌اند و دیتابیس تا استقرار و هوش مصنوعی.",
      current: true,
    },
    {
      company: "لایفنس",
      role: "هم‌بنیان‌گذار فنی",
      period: "اکتبر ۲۰۲۵ — ژانویهٔ ۲۰۲۶",
      summary: "توسعه‌ی بک‌اند و اتصال سرویس‌های AI برای MVP دستیار سالمندان.",
      current: false,
    },
    {
      company: "رفرشینو",
      role: "کارآموز رشد محصول",
      period: "اوت — اکتبر ۲۰۲۵",
      summary: "مشارکت در تولید محتوا و آزمایش‌های رشد و جذب کاربر.",
      current: false,
    },
    {
      company: "توسن",
      role: "توسعه‌دهنده جونیور جاوا",
      period: "فوریهٔ ۲۰۲۲ — فوریهٔ ۲۰۲۵",
      summary:
        "توسعه‌ی فرایندهای بانکی و خودپرداز با Java، Spring، JSP و Hibernate.",
      current: false,
    },
  ],
  school: {
    name: "دانشگاه صنعتی شریف",
    degree: "کارشناسی مهندسی کامپیوتر",
    year: "۲۰۲۵",
  },
  footer: { rights: "© {year} فروزان ایرجی", backToTop: "بازگشت به بالا" },
};

export const content = { en: english, fa: persian };
