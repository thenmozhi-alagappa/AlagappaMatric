/* =========================================================
   PAGE CONTENT — lists and cards used across the site.
   Image paths: "/images/..." = photos in /public/images (from the school's Drive);
   other paths load older photos from the current school website (see site.js).
   Replace any of this text with the school's own wording as needed.
   ========================================================= */

// Homepage slideshow. `position` is the photo's focus point (CSS background-position):
// "center 0%" keeps the very top, "center 50%" the middle. Lower % = show more of the top.
export const heroSlides = [
  { src: "/images/life/students-group-3-1800.jpg", position: "center 18%" },
  { src: "/images/campus/matric-campus-new-1800.jpg", position: "center 8%" },
  { src: "/images/life/seniors-reading-1800.jpg", position: "center 20%" },
  { src: "/images/life/primary-activity-3-1800.jpg", position: "center 35%" },
];
export const heroWords = ["curiosity.", "character.", "excellence.", "community.", "tomorrow."];

export const stats = [
  { icon: "people", value: 1021, suffix: "+", label: "Students learning and growing together on our campus" },
  { icon: "cap", value: 100, suffix: "+", label: "Dedicated teachers guiding every learner, every day" },
  { icon: "trophy", value: 593, suffix: "/600", label: "Top Class XII score in the 2025–26 board exams", plain: true },
  { icon: "calendar", value: 1985, label: "The year our doors first opened, with just 60 students", plain: true },
];

export const stripImages = [
  ["/images/school/silambam-pair-800.jpg", "Silambam practice"],
  ["/images/life/primary-activity-2-800.jpg", "Primary classroom activity"],
  ["/images/campus/primary-students-800.jpg", "Primary students with their books"],
  ["/images/school/kg-activity-800.jpg", "Kindergarten activity time"],
];

export const stages = [
  {
    tab: "Primary", big: "I – V", img: "/images/life/primary-activity-1-1800.jpg",
    title: "Foundations of joyful learning",
    text: "Strong basics in language, numbers and the world around us, taught through activity, story and play.",
    link: ["/academics", "Learn More"],
  },
  {
    tab: "Secondary", big: "VI – X", img: "/images/life/seniors-reading-2-1800.jpg",
    title: "Curiosity becomes capability",
    text: "Following the Samacheer Kalvi syllabus of the Government of Tamil Nadu, students build depth in every subject with labs, quizzes and projects.",
    link: ["/academics", "Learn More"],
  },
  {
    tab: "Higher Secondary", big: "XI – XII", img: "/images/life/seniors-1-1800.jpg",
    title: "Ready for what's next",
    text: "Seven subject groups across Science, Computer Science, Commerce and Humanities, with focused coaching that produces toppers and centum scorers year after year.",
    link: ["/academics#subjects", "Subject Combinations"],
  },
];

export const features = [
  { tag: "Heritage", title: "A founder's legacy", img: "/images/founders/alagappa-chettiar-800.jpg", pos: "center 15%", to: "/heritage", text: "Part of the Alagappa family of institutions, from Montessori school to Alagappa University." },
  { tag: "Results", title: "Academic excellence", img: "/images/life/students-group-2-800.jpg", pos: "center 30%", to: "/academics#results", text: "593/600 in Class XII and 487/500 in Class X in 2025–26, with centums in Computer Science and Mathematics." },
  { tag: "Sports", title: "Sports & Olympiad", img: "/images/life/hockey-team-800.jpg", pos: "center 40%", to: "/campus-life#sports", text: "From hockey and the Alagappa Sports Olympiad to regional karate championships, champions are made here." },
  { tag: "Service", title: "Clubs that serve", img: "/images/life/interact-club-service.jpg", pos: "center 40%", to: "/campus-life#clubs", text: "Interact Club, Rotary partnerships, medical camps and Annadhanam: learning to give back." },
  { tag: "Residential", title: "Hostel life", img: "/images/campus/hostel-800.jpg", to: "/facilities", text: "Safe, caring hostels for boys and girls, with supervised study and a strong sense of community." },
  { tag: "Innovation", title: "Robotics & beyond", img: "/images/achievements/science-expo.jpg", pos: "center 40%", to: "/facilities", text: "Robotics with a Central Government tie-up, with Space and Aeronautics programmes on the horizon." },
];

// The school motto (from the school crest)
export const values = [
  ["Prudence", "Thinking wisely and choosing well, in studies and in life.", "/images/life/seniors-reading-800.jpg", "center 25%"],
  ["Perseverance", "Working steadily towards every goal, and never giving up.", "/images/life/hockey-team-800.jpg", "center 40%"],
  ["Perfection", "Striving for excellence in everything we do.", "/images/school/physics-lab-2-800.jpg", "center 40%"],
];

export const testimonials = [
  { img: "/images/toppers/meyyammai-600.jpg", name: "AL. Meyyammai", meta: "Class XII 2025–26, 593/600 · School First", quote: "My teachers believed in me before I believed in myself. Alagappa gave me the confidence to aim high." },
  { img: "/images/toppers/nandakishore-600.jpg", name: "S S. Nandakishore", meta: "Class X 2025–26, 487/500 · School First", quote: "Every day here was a chance to learn something new, in the classroom, on the field, and from my friends." },
  { img: "/images/toppers/sathyapriya-600.jpg", name: "Sathyapriya C", meta: "Class XII 2025–26, 573/600 · School Second", quote: "The support from my teachers and the focus on discipline helped me give my best." },
];

export const pathways = [
  { title: "Learn", img: "/images/campus/matric-campus-new-800.jpg", to: "/about", text: "Discover our history, philosophy and the people behind Alagappa.", cta: "Learn More" },
  { title: "Experience", img: "/images/life/students-group-1-800.jpg", to: "/contact", text: "Visit our campus and see our classrooms, labs and grounds for yourself.", cta: "Plan a Visit" },
  { title: "Apply", img: "/images/campus/primary-students-800.jpg", to: "/admissions", text: "Review admission criteria and take the first step for your child.", cta: "Apply Now" },
];

// Upcoming events
export const events = [
  { day: "05", month: "Dec", title: "Annual Sports Day", info: "Main grounds · 8:30 AM", tag: "Sports" },
  { day: "19", month: "Dec", title: "Science & Robotics Exhibition", info: "School auditorium · 10:00 AM", tag: "Academics" },
  { day: "14", month: "Jan", title: "Pongal Celebrations", info: "Campus-wide · 9:00 AM", tag: "Culture" },
  { day: "26", month: "Jan", title: "Republic Day", info: "Flag hoisting · 8:00 AM", tag: "Community" },
  { day: "06", month: "Apr", title: "Founder's Day: Dr. RM. Alagappa Chettiar", info: "Commemoration & Vallal Vazhthu", tag: "Heritage" },
];

// Gallery — cat: students | events | sports | academics | campus ; size: "" | "tall" | "wide"
export const gallery = [
  { src: "/images/campus/students-campus-800.jpg", caption: "On the Matric campus", cat: "students", size: "tall" },
  { src: "/images/life/students-group-3-800.jpg", caption: "Friends across classes", cat: "students", size: "wide", pos: "center 15%" },
  { src: "/images/life/primary-activity-1-800.jpg", caption: "Primary classroom activity", cat: "students" },
  { src: "/images/life/hockey-team-800.jpg", caption: "Our hockey team", cat: "sports", size: "wide", pos: "center 30%" },
  { src: "/images/life/seniors-reading-800.jpg", caption: "Learning together", cat: "students" },
  { src: "/images/campus/matric-campus-new-800.jpg", caption: "Alagappa Matriculation Higher Secondary School", cat: "campus", size: "wide", pos: "center 10%" },
  { src: "/images/campus/primary-students-800.jpg", caption: "Ready for school", cat: "students", size: "tall" },
  { src: "/images/life/primary-activity-3-800.jpg", caption: "Primary students at work", cat: "students" },
  { src: "/images/life/girls-group-800.jpg", caption: "Senior and junior students", cat: "students", size: "wide" },
  { src: "/images/life/primary-trio-800.jpg", caption: "Primary students", cat: "students" },
  { src: "/images/life/seniors-reading-2-800.jpg", caption: "Senior students", cat: "students" },
  { src: "/images/achievements/science-expo.jpg", caption: "Science Expo: first prize for our junior team", cat: "academics" },
  { src: "/images/achievements/mohammed-aarish.jpg", caption: "Essay writing prize, Alagappa University", cat: "academics" },
  { src: "/images/life/seniors-four-800.jpg", caption: "Senior students", cat: "students" },
  { src: "/images/life/primary-activity-2-800.jpg", caption: "Learning by doing", cat: "academics" },
  { src: "/images/life/students-group-1-800.jpg", caption: "Classmates on campus", cat: "students" },
  { src: "/images/school/building-front-800.jpg", caption: "Alagappa Matriculation Higher Secondary School", cat: "campus", size: "wide", pos: "center 40%" },
  { src: "/images/school/smart-class-1-800.jpg", caption: "Smart-board lesson in a primary classroom", cat: "academics" },
  { src: "/images/school/chess-2-800.jpg", caption: "Chess in the school courtyard", cat: "sports", size: "tall", pos: "center 30%" },
  { src: "/images/school/bio-lab-microscope-800.jpg", caption: "Biology lab: observing under the microscope", cat: "academics" },
  { src: "/images/school/kg-ocean-class-800.jpg", caption: "Kindergarten classroom", cat: "students", size: "wide", pos: "center 50%" },
  { src: "/images/school/silambam-pair-800.jpg", caption: "Silambam practice", cat: "sports" },
  { src: "/images/school/computer-lab-2-800.jpg", caption: "Computer lab", cat: "academics", size: "tall", pos: "center 40%" },
  { src: "/images/school/saraswati-garden-800.jpg", caption: "Saraswati statue in the school garden", cat: "campus" },
  { src: "/images/school/class-primary-smiles-800.jpg", caption: "Primary classmates", cat: "students" },
  { src: "/images/school/physics-lab-2-800.jpg", caption: "Physics practicals", cat: "academics", size: "wide", pos: "center 40%" },
  { src: "/images/school/football-2-800.jpg", caption: "Football on the school ground", cat: "sports" },
  { src: "/images/school/library-2-800.jpg", caption: "Reading together in the library", cat: "academics" },
  { src: "/images/school/kg-smiles-800.jpg", caption: "Kindergarten smiles", cat: "students", size: "tall", pos: "center 40%" },
  { src: "/images/school/primary-block-800.jpg", caption: "Primary block", cat: "campus" },
  { src: "/images/school/chem-titration-800.jpg", caption: "Chemistry lab: titration", cat: "academics" },
  { src: "/images/school/play-slide-800.jpg", caption: "Playtime for the little ones", cat: "sports", size: "wide", pos: "center 40%" },
  { src: "/images/school/library-4-800.jpg", caption: "Browsing the library shelves", cat: "academics", size: "tall", pos: "center 30%" },
  { src: "/images/school/bio-stethoscope-800.jpg", caption: "Learning about the heart in Biology", cat: "academics" },
  { src: "/images/school/kg-jungle-class-800.jpg", caption: "Pre-primary activity room", cat: "students" },
  { src: "/images/school/silambam-2-800.jpg", caption: "Silambam stance", cat: "sports", size: "tall", pos: "center 40%" },
  { src: "/images/school/computer-lab-4-800.jpg", caption: "Coding in the computer lab", cat: "academics", size: "wide", pos: "center 50%" },
  { src: "/images/school/building-garden-800.jpg", caption: "School building and garden", cat: "campus" },
  { src: "/images/school/chem-lab-2-800.jpg", caption: "Chemistry experiment", cat: "academics" },
  { src: "/images/school/kg-cheer-800.jpg", caption: "Little learners", cat: "students" },
  { src: "/images/school/library-hall-800.jpg", caption: "School library", cat: "campus", size: "wide", pos: "center 50%" },
  { src: "/images/school/play-merry-800.jpg", caption: "Merry-go-round fun", cat: "sports" },
];

// News — first 4 appear on the homepage. `id` lets other pages link to /news#id
export const news = [
  { id: "xii-results-2025-26", date: "2025–26 · Results", img: "/images/toppers/meyyammai-600.jpg", title: "Class XII results: AL. Meyyammai tops with 593/600", text: "Sathyapriya C (573) and Jessica E (566) placed second and third. 2 centums in Computer Science; 8 students above 550 and 18 above 500.", poster: "/images/results/xii-results-2025-26-1800.jpg" },
  { id: "x-results-2025-26", date: "2025–26 · Results", img: "/images/toppers/nandakishore-600.jpg", title: "Class X results: S S. Nandakishore tops with 487/500", text: "L. John Sebastin Paul (479) and Abhishek S (478) placed second and third. 1 centum in Mathematics; 18 students above 450.", poster: "/images/results/x-results-2025-26-1800.jpg" },
  { id: "hockey", date: "Aug 2025 · Sports", img: "/images/life/hockey-team-800.jpg", title: "Our hockey team with their trophy" },
  { id: "district-topper", date: "Award", img: "/images/news/srinidhi-district-topper.jpg", title: "R. Srinidhi named District Topper" },
];

export const toppersYear = "2025–26";
export const toppers = [
  { name: "AL. Meyyammai", score: "593/600", cls: "Class XII · School First", img: "/images/toppers/meyyammai-600.jpg" },
  { name: "Sathyapriya C", score: "573/600", cls: "Class XII · School Second", img: "/images/toppers/sathyapriya-600.jpg" },
  { name: "Jessica E", score: "566/600", cls: "Class XII · School Third", img: "/images/toppers/jessica-600.jpg" },
  { name: "S S. Nandakishore", score: "487/500", cls: "Class X · School First", img: "/images/toppers/nandakishore-600.jpg" },
  { name: "L. John Sebastin Paul", score: "479/500", cls: "Class X · School Second", img: "/images/toppers/john-sebastin-paul-600.jpg" },
  { name: "Abhishek S", score: "478/500", cls: "Class X · School Third", img: "/images/toppers/abhishek-600.jpg" },
];

// Highlights from the 2025–26 result posters
export const resultHighlights = [
  {
    title: "Class XII", poster: "/images/results/xii-results-2025-26-1800.jpg",
    rows: [["Centums in Computer Science", "2"], ["Students above 580", "1"], ["Students above 550", "8"], ["Students above 500", "18"]],
  },
  {
    title: "Class X", poster: "/images/results/x-results-2025-26-1800.jpg",
    rows: [["Centums in Mathematics", "1"], ["Students above 480", "1"], ["Students above 450", "18"], ["Students above 400", "23"]],
    above90: [["Tamil", 11], ["English", 23], ["Mathematics", 21], ["Science", 23], ["Social Science", 19]],
  },
];

export const toppers2023 = [
  ["Hemanth Ayyaru A", "XII", "592 / 600"], ["Roopa R", "XII", "584 / 600"], ["Varshini G", "XII", "578 / 600"],
  ["Pawan P", "X", "486 / 500"], ["Chittesh K", "X", "480 / 500"], ["Sivaani S", "X", "480 / 500"], ["Aiyappan R", "X", "478 / 500"],
];

export const results2017 = {
  ranks: [
    ["First", "M.S. Harini", "1181 / 1200"],
    ["Second", "K. Shrinidhi", "1179 / 1200"],
    ["Third", "RM. Nachammai", "1169 / 1200"],
    ["Third", "M. Preethi", "1169 / 1200"],
  ],
  centums: [["Commerce", 3], ["Computer Science", 2], ["Mathematics", 1], ["Accountancy", 1], ["Business Mathematics", 1], ["Economics", 1]],
};

// Higher Secondary (XI–XII) groups, as listed on the 2025–26 results poster
export const subjectGroups = [
  { title: "Group 1", subjects: ["Physics", "Chemistry", "Computer Science", "Mathematics"] },
  { title: "Group 2", subjects: ["Physics", "Chemistry", "Biology", "Mathematics"] },
  { title: "Group 3", subjects: ["Physics", "Chemistry", "Computer Science", "Biology"] },
  { title: "Group 4", subjects: ["Physics", "Chemistry", "Botany", "Zoology"] },
  { title: "Group 5", subjects: ["Economics", "Commerce", "Accountancy", "Business Mathematics"] },
  { title: "Group 6", subjects: ["Economics", "Commerce", "Accountancy", "Computer Application"] },
  { title: "Group 7", subjects: ["Economics", "Commerce", "Accountancy", "History"] },
];

// Merit concession for Class XI admission, based on Class X marks (from the 2025–26 poster)
export const concessions = [
  ["475 & above", "100% concession"],
  ["450 – 474", "50% concession"],
];

export const groupLogos = [
  ["montessori", "Alagappa Montessori School"],
  ["cbse", "Alagappa CBSE School"],
  ["cbsechn", "Alagappa Schools, Chennai"],
  ["girls", "Alagappa Girls School"],
  ["nursing", "Alagappa College of Nursing"],
  ["smartstart", "Smart Start Playschool"],
  ["umayalplayschl", "Umayal Play School & Day Care Center"],
  ["urcw", "Dr. Umayal Ramanathan College for Women"],
  ["apaa", "APAA"],
].map(([f, name]) => ({ src: `/images/logo/group/${f}.png`, name }));

export const timeline = [
  ["1985", "Alagappa Matriculation School opens with about 60 students."],
  ["1989", "The first batch of students appears for the Matriculation examination."],
  ["1990", "Higher Secondary is introduced with Science, Computer Science and Commerce groups."],
  ["1992", "The first Higher Secondary batch takes the board examination."],
  ["1997", "Steady growth in enrolment and results begins."],
  ["2009", "The school reaches a strength of about 3,000 students."],
  ["2024", "Alagappa Preparatory, Nursery and Primary School amalgamate with the school, creating one learning journey from early childhood to Class XII."],
  ["Today", "Robotics is introduced with a Central Government tie-up, with Space and Aeronautics programmes planned."],
];

export const institutions = [
  "Alagappa Montessori School",
  "Alagappa Montessori School Hostel",
  "Alagappa Primary School",
  "Alagappa Preparatory Nursery and Primary School",
  "Alagappa Matriculation Higher Secondary School",
  "Dr. Umayal Ramanathan College for Women",
  "Alagappa Chettiar Polytechnic College",
  "Dr. Alagappa Chettiar College of Engineering and Technology",
  "Alagappa Arts College",
  "Alagappa University",
];

export const founders = [
  {
    id: "alagappa-chettiar", role: "Founder · Dr. Alagappa Chettiar Educational Trust & Asoka Charitable Trust",
    name: "Padma Bhushan Dr. R.M. Alagappa Chettiar", quals: "M.A., D.Litt., Bar-at-Law (London)",
    img: "/images/founders/alagappa-chettiar-800.jpg",
    paras: [
      "Dr. R.M. Alagappa Chettiar, our founder, had his primary education in Karaikudi and went on to obtain his M.A. in Literature from the Presidency College in Madras, where he befriended Dr. S. Radhakrishnan, a model teacher who later became the President of India. At the age of 21, he became the first Indian trainee at the Chartered Bank in London, qualified for the bar at Middle Temple in England and became a ‘bar-at-law’ to be cherished by the people of Chettinad. With honorary doctorate degrees conferred upon him by both Madras and Annamalai Universities, his quest for excellence knew no bounds.",
      "His stellar record as a business entrepreneur was acknowledged by the British government, when he was knighted in 1945, at the age of 37. He renounced the prestigious knighthood after India attained independence. The distinction of Padma Bhushan was conferred on him by the President of India on January 26, 1956.",
      "In 1947, at the Dr. Annie Besant centenary celebrations, he answered the call for industrialists to help educate India, by spontaneously offering to start an Arts College in Karaikudi. His generous donations led to the inception of a galaxy of educational institutions that included Alagappa Arts College, Alagappa Chettiar Engineering College, Alagappa Polytechnic, Alagappa College of Physical Education and more. The Government of Tamil Nadu established the Alagappa University in 1985.",
      "The magnificent gift of 300 acres of land and fifteen lakhs of Rupees donated by Dr. R.M. Alagappa Chettiar facilitated the Government of India to select Karaikudi as the seat of the Central Electro Chemical Research Institute. Within a span of two decades, he transformed a mere scrub jungle into a galaxy of educational institutions.",
      "Before he passed away prematurely at the age of 48, he redefined the meaning of philanthropy and had contributed enormously to the betterment of education in Tamil Nadu. His greatest gesture of philanthropy was giving away his own home in Kottaiyur to set up a College for Women. On his untimely demise in 1957, Rajaji remarked, “Dr. R.M. Alagappa Chettiar has given away freely. Students should develop that quality namely giving money earned for charity. Here is a book of life and students can learn from him how one can give to good cause, cultivate courage and emulate the spirit of Dr. R.M. Alagappa Chettiar.”",
      "The Trusts that he established, namely the Dr. Alagappa Chettiar Educational Trust and the Asoka Charitable Trust, manage the rest of the institutions that offer primary, secondary and tertiary education. With a sense of great pride, we state that more than 30,00,000 students have graduated from the institutions since their inception.",
    ],
    quote: "“My happiness is limitless because it does not consist naturally in my own happiness, but my happiness consists in the happiness of the thousands of students, young and old, boy and girl that received education in our vast campus.” — From his last speech, March 1957",
  },
  {
    id: "umayal-ramanathan", role: "Founder of the School · Secretary Emeritus, Trustee, Asoka Charitable Trust",
    name: "Late Dr. Mrs. Umayal Ramanathan", img: "/images/founders/umayal-ramanathan-800.jpg",
    paras: [
      "Dr. (Mrs.) Umayal Ramanathan, the daughter of Dr. R.M. Alagappa Chettiar, is the founder of the Alagappa Matriculation Higher Secondary School in Karaikudi and in Chennai. Subsequently, she also launched the Umayal Play School and the Day Care Center. She founded Dr. (Mrs.) Umayal Ramanathan College for Women in 2006 and has actively worked to expand the infrastructure as well as the academic programs and to provide vocational training to enable women in the community to prosper. She is enthusiastically involved in the field of education and social service. She serves as a Syndicate Member of the Alagappa University and as the Managing Trustee of the Dr. Alagappa Chettiar Educational Trust and the Asoka Charitable Trust. She has been an active member of the Social Welfare Board of Ramnad District and the Chairperson of Gangadeeswarar Temple, Chennai.",
      "Dr. (Mrs.) Umayal Ramanathan was awarded the Doctor of Letters (Honoris causa) by the Honourable Governor of Tamil Nadu. In recognition of her outstanding services to the society, Dr. Mrs. Umayal Ramanathan was awarded the prestigious Indira Gandhi Priyadarshini Award for National Integration and National Unity by the All-India National Unity Conference on Indira Gandhi’s seventy-fifth Birth Anniversary. She was also honored with a Doctorate Degree by the University of Madras on its 150th Convocation by His Excellency, the Governor of Tamil Nadu.",
    ],
  },
  {
    id: "ram-vairavan", role: "Chairman & Correspondent", name: "Dr. Ramanathan Vairavan", img: "/images/founders/ram-vairavan-800.jpg",
    paras: [
      "Dr. Ramanathan Vairavan, the grandson of Dr. R.M. Alagappa Chettiar obtained his undergraduate degree in Chemical Engineering at the Alagappa College of Technology in Madras and went on to pursue his post-graduate education at Washington University, St. Louis, Missouri, USA, where he obtained a Master of Science degree in Biomedical Engineering and a Master’s Degree in Business Administration.",
      "He has held various executive positions with the multinational company, Hoechst AG of Germany in the US, Germany and Singapore. He co-founded a US based company, Auto Genomics, engaged in the development of a novel DNA based technology of biochips, which enables doctors to provide effective therapy to patients based on their genetic makeup. This technology is set to revolutionize the process of diagnosis, monitoring and management leading to the emerging era of personalized medicine.",
      "Dr. Ramanathan Vairavan was honoured with Doctor of Literature (Honoris Causa) in recognition of his contribution to education and to the fields of Pharmacogenetics and Molecular Oncology during the 30th Convocation of Alagappa University on 20.12.2017 by the Hon’ble Governor of Tamil Nadu Thiru. Banwarilal Purohit.",
      "Dr. Ramanathan Vairavan has been assiduously involved in enhancing the quality of education and promoting the infrastructure of the educational institutions, located in Chennai and Karaikudi. He is the founder of the Alagappa Girls Matriculation Higher Secondary School, Dr. Alagappa Academy CBSE School and Alagappa College of Performing Arts (Affiliated to TN Music and Fine Arts University). His strategic vision is to establish a College of Medical Sciences in Karaikudi and thus realize his beloved grandfather’s dream.",
    ],
  },
  {
    id: "devi-alamelu-vairavan", role: "Managing Trustee", name: "Ms. Devi Alamelu Vairavan, JD, Esq.", img: "/images/founders/devi-alamelu-vairavan-800.jpg",
    paras: [
      "Ms. Devi Alamelu Vairavan is a practicing attorney in New York, USA. She schooled mostly in the US but spent a year at the St. Hilda’s Convent in Ooty, where she learned to read and write Tamil. She obtained her bachelor’s degree specializing in Criminal Justice and Molecular Biology in California and obtained her Juris Doctorate law degree at New York Law School with focus in Intellectual Property, Criminal, Family, Matrimonial and Health Law. She works for the New York Legal Aid Society representing clients in exclusively civil litigation matters serving the under privileged population of New York. To date she has successfully represented 65 clients.",
      "From her early age Ms. Devi Alamelu Vairavan has been passionate about education and has actively contributed to the growth of the Alagappa Group of Educational Institutions. Her mission in life is to follow the footsteps of her father – Dr. Ramanathan Vairavan, her grandmother – Dr. Mrs. Umayal Ramanathan and her great-grandfather – Dr. R.M. Alagappa Chettiar by continuing to give back to society and broaden the spectrum of education offered to our community with emphasis on achieving academic excellence and offering opportunities for immediate employment.",
    ],
  },
];

export const facilities = [
  { icon: "flask", title: "Science Laboratories", text: "Well-equipped Physics, Chemistry and Biology labs for hands-on experiments.", img: "/images/school/physics-lab-3-800.jpg" },
  { icon: "monitor", title: "Computer Lab", text: "Modern computer systems for Computer Science and digital skills.", img: "/images/school/computer-lab-3-800.jpg" },
  { icon: "book", title: "Library", text: "A well-stocked library run by a full-time librarian.", img: "/images/school/library-5-800.jpg" },
  { icon: "home", title: "Hostels", text: "Separate hostels for girls and boys, with caring supervision." },
  { icon: "robot", title: "Robotics", text: "Robotics with a Central Government tie-up, with Space and Aeronautics planned." },
  { icon: "globe", title: "Playgrounds", text: "Open grounds for athletics, team sports and the Alagappa Sports Olympiad.", img: "/images/school/football-1-800.jpg" },
  { icon: "heart", title: "Arts & Crafts", text: "A dedicated Arts and Crafts teacher and space for creative work." },
  { icon: "bus", title: "Transport", text: "School buses covering Karaikudi and nearby areas." },
  { icon: "plus", title: "Health & Safety", text: "First aid, CCTV and safe drinking water across campus." },
];

export const faculty = [
  ["Sciences", "Physics, Chemistry, Biology"],
  ["Mathematics & Computer Science", "Maths, Computer Science, Robotics"],
  ["Commerce", "Accountancy, Commerce, Economics, Business Maths"],
  ["Languages", "Tamil, English, Hindi"],
  ["Primary & Middle", "Class teachers for Classes I–VIII"],
  ["Arts, Sports & Library", "Physical education, arts & crafts, librarian"],
];

// Activities & Achievements — from the AMHSS School Calendar 2026–27 (pages 30–34)
export const achievementsYear = "2025–26";
export const achievementCats = [["all", "All"], ["academics", "Academics"], ["sports", "Sports"], ["records", "Records & Yoga"], ["arts", "Language & Arts"]];
export const achievements = [
  { cat: "academics", img: "mirshal.jpg", big: "495/500", name: "Master Mirshal", cls: "Class X", text: "Scored 495 out of 500 in the public examination and received the Idhayam Merit Award from Idhayam Nalla Ennai at a function organised by the Rotary Club of Karaikudi." },
  { cat: "sports", img: "tharunvel.jpg", big: "₹1,00,000", name: "Master Tharunvel", cls: "CM Trophy winner", text: "First Place in the 55–65 kg category at the CM Trophy, Tamil Nadu Physical Education and Sports University, and gold in the Under-19 below 70 kg category at the State Level Republic Day & Bharathiyar Day Sports, Theni." },
  { cat: "sports", img: "cricket-team.jpg", big: "Winners", name: "School Cricket Team", cls: "CSK–SDCA T20 Trophy 2025", text: "Won the CSK–SDCA Inter School T20 Cricket Trophy 2025 at CSK Ground, Karaikudi, organised by the Sivagangai District Cricket Association with Chennai Super Kings." },
  { cat: "sports", img: "hockey-u19.jpg", big: "District Champions", name: "Under-19 Boys Hockey Team", cls: "School Education / CM Trophy", text: "District Level Champions, going on to play in the State Level Championship." },
  { cat: "records", img: "hamsika.jpg", big: "19 Gold", name: "Hamsika Felicia K", cls: "Class IV", text: "Gold 19, Silver 4, Bronze 1 across swimming, yoga and record events, including the State Level Swim Meet, Spell Bee International and the India Book of Records." },
  { cat: "records", img: "srinivas.jpg", big: "3 Records", name: "R. Srinivas", cls: "Grade V", text: "Kingdom World Record (May 2024) for reciting all 118 chemical elements in 43 seconds, plus Kalam World Record and India Book of Records (2024). Second Place, State Level Yoga Championship 2025." },
  { cat: "records", img: "diya-world-record.jpg", big: "World Record", name: "S. Diya", cls: "Class V-A", text: "Part of the All India World Records 2025 event “180 Seconds Nonstop Camel Pose (Ustrasana)”, held on 8 November 2025 at Devakottai." },
  { cat: "academics", img: "science-expo.jpg", big: "1st Prize", name: "Roshan, Balaji & Gokul", cls: "Junior team", text: "First Prize at the Chenduran College Science Expo for “Autonomous Fire and Gas Containment System”, with Rs. 3000 and certificates." },
  { cat: "arts", img: "meyyammai-essay.jpg", big: "2nd Place", name: "Meyyammai", cls: "Class XII", text: "Valliappa Ilakkiya Vattam Essay Competition, 7 November 2025: Rs. 2000 and a certificate presented by Thavathiru Kundrakudi Adigalar." },
  { cat: "academics", img: "mohammed-aarish.jpg", big: "3rd Prize", name: "Mohammed Aarish", cls: "Essay Writing", text: "Essay Writing Competition by the Department of Education, Alagappa University, on National Education Day. Presented by Vice Chancellor Prof. Ravi." },
  { cat: "sports", img: "newton-ann-inigo.jpg", big: "3 × First", name: "Newton Ann Inigo", cls: "Class XI", text: "District-level carrom: First in Ithu Namma Aattam (₹6,000), First in School Education Games (qualified for State), First in Open Singles and Second in Open Doubles." },
  { cat: "sports", img: "vasundara.jpg", big: "1st · Discus", name: "Vasundara K", cls: "Grade XI", text: "First in Discus Throw and Second in Shot Put at District Level, represented the district at State Level, and Second in Shot Put at the CM Trophy." },
  { cat: "sports", img: "kirthikraj.jpg", big: "1st · Javelin", name: "Kirthikraj S", cls: "Grade XII", text: "First Place in Javelin Throw at District Level; represented the district at the State Level Championship (School Education)." },
  { cat: "sports", img: "hockey-u13.jpg", big: "3rd · State", name: "Under-13 Boys Hockey", cls: "State-Level Tournament", text: "Third Place at the State-Level Hockey Tournament, Adhyayana International Public School, Coimbatore." },
  { cat: "sports", img: "jithesh.jpg", big: "2nd · Silambam", name: "Master Jithesh", cls: "Grade VII", text: "Second Place in silambam (Under-13) among 38 districts, with a certificate and silver medal." },
  { cat: "sports", img: "gokul-chess.jpg", big: "District Winner", name: "Gokul", cls: "Class X", text: "District Winner in Chess; represented the district at the State Level Tournament (School Education Department)." },
  { cat: "sports", img: "srikanth.jpg", big: "District Winner", name: "Srikanth", cls: "Grade XI", text: "District Winner in Tennikoit; represented the district at State Level (School Education)." },
  { cat: "sports", img: "gokul-p.jpg", big: "2nd · 200m", name: "Gokul P", cls: "Grade VIII", text: "Second Place in the 200m race at District Level; represented the district at the State Level Championship." },
  { cat: "records", img: "diya-varnesh-yoga.jpg", big: "2nd Place", name: "Diya & Varnesh", cls: "Grade V & Grade III", text: "16th Kalaikovil Tamil Nadu Open Yogasana Championship, 7 December 2025, Shalom Auditorium, Trichy." },
  { cat: "sports", img: "poongodi.jpg", big: "2nd Place", name: "K. Poongodi", cls: "Grade II", text: "Second Place in the 2nd District Taekwondo Championship." },
  { cat: "arts", img: "tamil-recitation.jpg", big: "2nd & 3rd", name: "A. Sri Ram Nagaraj & Saliha Fathima", cls: "Grade II & LKG", text: "Tamil Recitation Competition conducted by Ramasamy Tamil Kalluri." },
].map((a) => ({ ...a, img: "/images/achievements/" + a.img }));

export const admissionSteps = [
  ["Enquire", "Contact the school office or fill in our online enquiry form."],
  ["Visit", "Tour the campus and meet our team."],
  ["Apply", "Submit the application form with the required documents."],
  ["Enrol", "Complete the admission formalities and welcome to Alagappa."],
];

export const admissionSections = [
  {
    id: "criteria", title: "Criteria for Admission",
    list: [
      "Age criteria for each class as per Government of Tamil Nadu norms.",
      "Birth certificate, transfer certificate and previous mark sheets.",
      "Passport-size photographs of the student and parents.",
      "Admission is based on seat availability and an interaction / entrance test.",
    ],
  },
  { id: "attendance", title: "Attendance", text: "Regular attendance is required. Leave must be applied for in writing by parents, and a minimum attendance percentage is needed to appear for examinations." },
  { id: "examinations", title: "Examinations", text: "Students are assessed through unit tests, quarterly, half-yearly and annual examinations, in line with the State Board pattern." },
  {
    id: "rules", title: "Rules & Regulations",
    list: [
      "Students must be in proper uniform every day.",
      "Punctuality at the morning assembly is expected.",
      "Respect for teachers, staff, fellow students and school property.",
      "Mobile phones and electronic gadgets are not permitted on campus.",
    ],
  },
];

export const faqs = [
  ["When do admissions open?", "Admissions usually open in January–February for the next academic year."],
  ["Which syllabus does the school follow?", "The school follows the Samacheer Kalvi syllabus prescribed by the Government of Tamil Nadu."],
  ["Is hostel accommodation available?", "Yes, separate hostels are available for boys and girls."],
];

// Pop-up posters shown when the website opens (once per visit).
// To add one: put the image in /public/images/announcements and add a line here.
// `link` is optional — where "Read more" goes.
export const announcements = [
  { src: "/images/announcements/harish-cm-trophy-2026.jpg", alt: "K. Harish, 10th Standard A: Gold in 110m hurdles and Silver in triple jump at the Chief Minister Trophy 2026–27 district level", link: "/news" },
  { src: "/images/announcements/kothai-meenakshi-yoga-2026.jpg", alt: "Kothai Meenakshi, 6th Standard: 2nd place in Traditional Yoga at the Chief Minister's Trophy 2026", link: "/news" },
];

// ===== Management & school profile — from the AMHSS School Calendar 2026–27 =====


// Trust Management
export const trustIntro = "Dr. Alagappa Chettiar Educational Trust in Karaikudi manages the Alagappa Group of Educational Institutions functioning in Karaikudi. The Asoka Charitable Trust in Chennai manages the Alagappa Schools in Chennai.";
export const trustManagement = [
  ["Dr. Ramanathan Vairavan", "Chairman / Secretary"],
  ["Ms. Devi Alamelu Vairavan, JD, Esq", "Managing Trustee"],
  ["Mr. G. Naresh Kumar", "Trustee"],
];

// Principal (placeholder until the new details are ready) & Headmistress.
// Fill in name, quals, img (e.g. "/images/founders/principal.jpg"), email, phone and message.
// Empty img shows a "Photo coming soon" box; empty email/phone are hidden.
export const principal = {
  name: "Principal's Name",
  quals: "Qualifications",
  role: "Principal",
  img: "",
  email: "nehru@alagappa.org",
  phone: "",
  message: [
    "Dear Parents,",
    "The Principal's message will be added here soon.",
  ],
};
export const headmistress = {
  name: "Mrs. B. Regina",
  signName: "B. Regina",
  quals: "B.Sc., M.A., DPTT., D.El.Ed., B.Ed.",
  role: "Headmistress – Primary",
  img: "/images/founders/headmistress-regina-800.jpg",
  email: "regina@alagappa.org",
  message: [
    "Dear Parents,",
    "Warm greetings!",
    "It is a privilege to connect with you through this school diary, which serves as a meaningful link between home and school. It reflects our shared aspirations, our educational vision and our collective responsibility towards nurturing the next generation.",
    "At Alagappa Matriculation Higher Secondary School, we firmly believe that the primary years are the most formative phase in a child's educational journey. These are the years when the seeds of knowledge are sown, curiosity is awakened, habits are cultivated and character begins to take shape. A strong foundation during these early years paves the way for lifelong learning, confidence and success. Every child deserves an environment where learning is joyful, meaningful and filled with opportunities to explore and grow.",
    "Our educational approach goes beyond the acquisition of academic knowledge. We strive to develop essential skills in language, numeracy, communication, creativity and critical thinking while nurturing kindness, self-discipline, respect and responsibility. We encourage children to ask questions, express their ideas, discover their abilities and develop the confidence to face new challenges.",
    "We recognise that education is truly complete when intellectual growth is accompanied by physical, emotional, social and moral development. Through a balanced blend of classroom learning, sports, cultural programmes and experiential activities, we provide opportunities for every child to discover individual talents, develop teamwork, demonstrate leadership and experience the joy of achievement.",
    "At the heart of our institution lies the belief that every child has immense potential waiting to be discovered. Our dedicated teachers play the role of facilitators, mentors and guides, providing encouragement, individual attention and a caring atmosphere in which each learner feels valued and motivated. We place equal importance on discipline, perseverance and good values, as these qualities help children grow into responsible and compassionate individuals.",
    "Dear Parents, your involvement and cooperation are integral to this journey. A strong partnership between parents and teachers creates the most supportive foundation for a child's progress. Let us work together with mutual trust and understanding to recognise every milestone, overcome every challenge and celebrate every achievement.",
    "As we continue this journey of learning and transformation, let us remember that we are not merely preparing children for the next grade; we are preparing them for life.",
    "Together, let us build strong foundations, inspire young minds and nurture confident, capable and compassionate individuals for tomorrow.",
  ],
};

// School profile
export const schoolProfile = {
  paras: [
    "Founded by Dr. Mrs. Umayal Ramanathan in 1985, the school is a co-educational institution recognized by the Govt. of Tamil Nadu. Located in the heart of the Karaikudi town in a sprawling campus of 15 acres, it has spacious and well ventilated classrooms. Apart from focus on academics, students are provided with track, field and sports opportunities.",
    "In 2024, Alagappa Preparatory, Nursery and Primary School have amalgamated with Alagappa Matriculation and Higher Secondary School. This integration aims to unify educational offerings and ensure a coherent learning journey from early childhood to higher education. The consolidated institution pledges enriched academic opportunities and holistic development for students across all levels.",
    "The school has a well-equipped library to promote reading habit among students. Weekly and monthly magazines, sports journals and newspapers are subscribed for the library. Arts and Crafts are integrated into our program to enhance creative thinking of the pupils and to draw out their innate talents. As a regular schedule in school assembly, news reading, pledge, discourses by students on various topics, Kural recital, mass bhajans and mass drill are included to develop leadership potential. The school has a strength of 1,021+ students with a dedicated team of about 100 faculty members.",
  ],
  mission: "We undertake to provide comprehensive education so as to develop in every child, a sound character and fine personality. The objective is to produce young men and women with a keen sense of discipline, responsibility, initiative, self-reliance, dedication, integrity and loyalty.",
  vision: "We envisage creating a learning environment conducive to develop the intellectual, social, physical and emotional potential of each student. This will enable them to imbibe academic excellence, exemplary character and respect for diversity.",
  timings: [["Std. LKG to Std. IX", "08.50 A.M. to 3.30 P.M."], ["Std. X to Std. XII", "08.50 A.M. to 5.00 P.M."]],
  tagline: "Building a strong foundation for a bright future",
};
