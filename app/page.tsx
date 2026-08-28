import HomeClient from "./HomeClient";

const SITE_URL = "https://www.maplediaryacademy.com";

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "EducationalOrganization"],
  "@id": `${SITE_URL}/#organization`,
  name: "Maple Diary Academy",
  alternateName: "Maple Diary Academy",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/assets/logo.jpg`,
    width: 200,
    height: 200,
  },
  description:
    "Maple Diary Academy is a live online music school offering expert-led one-on-one classes in Keyboard, Piano, Acoustic Guitar, Electric Guitar, Western Vocals, Carnatic Vocals, Music Theory and Vocal Training for students of all ages across India, UAE, USA, UK, Australia, Singapore, Canada and Malaysia.",
  foundingDate: "2020",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 10 },
  areaServed: ["India", "UAE", "USA", "UK", "Australia", "Singapore", "Canada", "Malaysia", "Europe"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["English", "Tamil", "Hindi"],
      url: `https://wa.me/9043872168`,
    },
    {
      "@type": "ContactPoint",
      contactType: "email",
      email: "themaplediary@gmail.com",
    },
  ],
  sameAs: [
    "https://www.instagram.com/maplediaryacademy",
    "https://youtube.com/@maplediaryacademy",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Maple Diary Academy",
  description:
    "Live online music classes — Keyboard, Piano, Guitar & Vocals for all ages.",
  publisher: { "@id": `${SITE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const coursesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Online Music Courses at Maple Diary Academy",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Course",
        name: "Electronic Keyboard Online Classes",
        description:
          "Master the electronic keyboard from basics to advanced — learn chords, scales, melodies and full compositions with live expert guidance. Grade exam preparation (Level 0–8) included.",
        url: `${SITE_URL}/#courses`,
        provider: { "@id": `${SITE_URL}/#organization` },
        educationalLevel: ["Beginner", "Intermediate", "Advanced"],
        teaches: [
          "Reading sheet music",
          "Chords and scales",
          "Indian and Western song arrangements",
          "Grade exam preparation",
        ],
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "online",
          courseWorkload: "PT30M",
          instructor: { "@type": "Organization", name: "Maple Diary Academy" },
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Course",
        name: "Piano Online Classes",
        description:
          "Explore the rich tradition of piano playing — from classical composers to modern pieces with emphasis on technique, theory and expressive playing. Trinity College grade preparation.",
        url: `${SITE_URL}/#courses`,
        provider: { "@id": `${SITE_URL}/#organization` },
        educationalLevel: ["Beginner", "Intermediate", "Advanced"],
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "online",
          courseWorkload: "PT30M",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Course",
        name: "Acoustic Guitar Online Classes",
        description:
          "Learn fingerpicking, strumming, chords and your favourite songs on the acoustic guitar with expert teachers. RSL grade exam preparation included.",
        url: `${SITE_URL}/#courses`,
        provider: { "@id": `${SITE_URL}/#organization` },
        educationalLevel: ["Beginner", "Intermediate", "Advanced"],
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "online",
          courseWorkload: "PT30M",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Course",
        name: "Electric Guitar Online Classes",
        description:
          "Rock, blues, metal — learn electric guitar techniques including power chords, solos, bending and effects with live expert instruction.",
        url: `${SITE_URL}/#courses`,
        provider: { "@id": `${SITE_URL}/#organization` },
        educationalLevel: ["Beginner", "Intermediate", "Advanced"],
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "online",
          courseWorkload: "PT30M",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Course",
        name: "Western Vocals Online Classes",
        description:
          "Develop your voice with western vocal techniques — breath control, pitch, range expansion and performance skills. Pop, Rock, Jazz and Country styles.",
        url: `${SITE_URL}/#courses`,
        provider: { "@id": `${SITE_URL}/#organization` },
        educationalLevel: ["Beginner", "Intermediate", "Advanced"],
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "online",
          courseWorkload: "PT30M",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Course",
        name: "Carnatic Vocals Online Classes",
        description:
          "Learn the rich tradition of Carnatic music — raagas, taalas, swaras and classical compositions from experienced gurus. All levels welcome.",
        url: `${SITE_URL}/#courses`,
        provider: { "@id": `${SITE_URL}/#organization` },
        educationalLevel: ["Beginner", "Intermediate", "Advanced"],
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "online",
          courseWorkload: "PT30M",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 7,
      item: {
        "@type": "Course",
        name: "Music Theory Online Classes",
        description:
          "Understand the building blocks of music — notes, scales, chords, harmony, rhythm and composition fundamentals. Grade exam (Level 0–8) preparation.",
        url: `${SITE_URL}/#courses`,
        provider: { "@id": `${SITE_URL}/#organization` },
        educationalLevel: ["Beginner", "Intermediate", "Advanced"],
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "online",
          courseWorkload: "PT30M",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 8,
      item: {
        "@type": "Course",
        name: "Vocal Training Online Classes",
        description:
          "Comprehensive vocal training covering warm-ups, technique, breath support, stage presence and more for singers of all ages.",
        url: `${SITE_URL}/#courses`,
        provider: { "@id": `${SITE_URL}/#organization` },
        educationalLevel: ["Beginner", "Intermediate", "Advanced"],
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "online",
          courseWorkload: "PT30M",
        },
      },
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What equipment do I need for online music classes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You need a smartphone or laptop with a stable internet connection and camera. Keyboard students need a basic keyboard at home. Guitar students need their own guitar. For vocals — just your voice!",
      },
    },
    {
      "@type": "Question",
      name: "Is the demo session really 100% free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — completely free, no hidden charges, zero obligation to enrol. Fill the form and we'll WhatsApp you within 24 hours to schedule your demo at a convenient time.",
      },
    },
    {
      "@type": "Question",
      name: "What age groups do you teach?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We teach all age groups — from children as young as 5 years to adults. The curriculum is fully customised based on the student's age, current level and musical goals.",
      },
    },
    {
      "@type": "Question",
      name: "How are classes conducted — one-on-one or batch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All classes are 100% live via Zoom or Google Meet. We offer both one-on-one and small batch options. One-on-one is recommended for faster progress and personalised attention.",
      },
    },
    {
      "@type": "Question",
      name: "Can I choose my class timings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! We offer morning, evening and weekend slots to suit different schedules and time zones globally. We'll agree on a regular schedule via WhatsApp after your free demo.",
      },
    },
    {
      "@type": "Question",
      name: "Do you teach students outside India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We serve students across India, UAE, USA, UK, Australia, Singapore and beyond. Fees are displayed in your local currency — select your region in the Pricing section.",
      },
    },
    {
      "@type": "Question",
      name: "How much does an online music class cost in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Online music classes at Maple Diary Academy cost ₹600 per 30-minute session in India, with 2 live sessions per week. There are no hidden fees and your first demo class is completely free.",
      },
    },
    {
      "@type": "Question",
      name: "Can a 5-year-old child learn music online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We have students as young as 5 years old learning keyboard and vocals online. Our teachers are trained to work with young children using age-appropriate, engaging teaching methods in live one-on-one sessions.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Trinity College music grade exam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trinity College London offers internationally recognised music grade examinations from Initial to Grade 8. At Maple Diary Academy, students are prepared for these exams across keyboard, piano, guitar and vocal courses. Our students have successfully cleared up to Grade 4 and beyond.",
      },
    },
    {
      "@type": "Question",
      name: "Is online music class as effective as offline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — our live one-on-one online format provides the same real-time feedback and personalised attention as in-person classes. Students progress at the same pace and many have cleared international grade exams. The flexibility of online also removes travel time and scheduling barriers.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data — injected server-side for SEO & AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Client-side interactive home page */}
      <HomeClient />
    </>
  );
}
