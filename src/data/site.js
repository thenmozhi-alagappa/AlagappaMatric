/* =========================================================
   SITE-WIDE SETTINGS — name, contact details, menus.
   Edit here and it updates the header, menu and footer everywhere.
   ========================================================= */

// Image paths:
//  - "/images/..."  → your own photos in /public/images (from the school's Google Drive)
//  - "something.jpg" → older photos still loaded from the current school website (IMG_BASE)
export const IMG_BASE = "https://www.alagappaschoolkaraikudi.com/images/";
export const img = (path) => (path.startsWith("http") || path.startsWith("/") ? path : IMG_BASE + path);

export const SITE = {
  name: "Alagappa Matriculation",
  sub: "Higher Secondary School · Karaikudi",
  fullName: "Alagappa Matriculation Higher Secondary School",
  logo: "/images/logo/matric-logo.png",
  motto: ["Prudence", "Perseverance", "Perfection"],
  group: "Alagappa Group of Educational Institutions",
  groupTagline: "Inspiring the next generation",
  groupPhone: "044-49971111",
  address: ["Alagappapuram, Karaikudi,", "Sivagangai District, Tamil Nadu"],
  phones: ["04565 - 225352", "04565 - 226532"],
  email: "highersecondary@alagappa.org",
  principalEmail: "kumaran@alagappaschools.com",
  officeHours: "Mon–Sat · 9:00 AM – 4:30 PM",
  trust: "The Dr. Alagappa Chettiar Educational Trust",
  groupSite: "http://www.alagappa.org/",
  registrationForm: "/forms/xi-registration-form.pdf",
  /* Enquiry form → Google Form (no backend needed). Answers land in the form's Responses / Google Sheet.
     1. Paste your form's link below (the one ending in /viewform, or the forms.gle short link's full URL).
     2. Paste each question's "entry.NNNNN" id (from Google Forms → ⋮ → Get pre-filled link).
     Leave `url` empty and the form falls back to opening an email to the school. */
  enquiryForm: {
    url: "https://docs.google.com/forms/d/e/1FAIpQLSdcLEXUdTEPRenZFRSVhRSOb-y7OonV8Icc2rIwjqfqyltoVA/viewform",
    fields: {
      parent: "entry.1165207577",   // Parent Name
      student: "entry.1554340132",  // Student name
      phone: "entry.1148738422",    // Phone
      email: "entry.2084025248",    // Email
      grade: "entry.1180701343",    // Class seeking admission (choices must match the form exactly)
      message: "entry.215205140",   // Message
    },
  },
  vallalVazhthu: "/audio/vallal-vazhthu.mp3",
  mapQuery: "Alagappa Matriculation Higher Secondary School Karaikudi",
  social: { facebook: "#", instagram: "#", youtube: "#" },
  quote: "“My happiness is limitless when I see the young generation getting educated.”",
  quoteBy: "Dr. RM. Alagappa Chettiar",
};

export const NAV = [
  {
    title: "About Us", to: "/about",
    items: [
      ["Our School", "/about"],
      ["Our Rich Heritage", "/heritage"],
      ["Leadership & Faculty", "/leadership"],
      ["Facilities", "/facilities"],
    ],
  },
  {
    title: "Academics", to: "/academics",
    items: [
      ["Academic Approach", "/academics#approach"],
      ["Subject Combinations", "/academics#subjects"],
      ["Exam Results", "/academics#results"],
      ["In the Spotlight", "/news"],
    ],
  },
  {
    title: "Campus Life", to: "/campus-life",
    items: [
      ["Clubs & Associations", "/campus-life#clubs"],
      ["Sports", "/campus-life#sports"],
      ["Arts & Painting", "/campus-life#arts"],
      ["Achievements", "/campus-life#achievements"],
      ["Gallery", "/gallery"],
    ],
  },
  {
    title: "Admissions", to: "/admissions",
    items: [
      ["Criteria for Admission", "/admissions#criteria"],
      ["Attendance", "/admissions#attendance"],
      ["Examinations", "/admissions#examinations"],
      ["Rules & Regulations", "/admissions#rules"],
      ["+1 Registration Form", SITE.registrationForm],
    ],
  },
];

export const UTILITY = [
  ["News", "/news"],
  ["Gallery", "/gallery"],
  ["Alagappa Group", SITE.groupSite],
  ["Contact", "/contact"],
];
