export interface GiniFAQ {
  keywords: string[];
  question: string;
  answer: string;
}

// Complete UG Programmes with Fees
const ugProgrammes = `
UG PROGRAMMES (Fee per annum + Exam Fee):
1. BBA (Hons.) - Rs 50,000 + Rs 10,000 exam | 3-4 years | 45% in 12th
2. B.Com (Hons.) - Rs 15,000 + Rs 10,000 exam | 3-4 years | 45% in 12th
3. BHMCT (Hotel Mgmt) - Rs 80,000 + Rs 10,000 exam | 4 years | 45% in 12th
4. B.Pharm - Rs 1,25,000 + Rs 10,000 exam | 4 years | 12th PCM/PCB
5. B.Sc Home Science (Hons.) - Rs 15,000 + Rs 10,000 exam | 3 years | 45% in 12th
6. B.Sc PCM/Z/B (Hons.) - Rs 20,000 + Rs 10,000 exam | 3-4 years | 45% in 12th
7. B.Tech Civil - Rs 92,000 + Rs 10,000 exam | 4 years | 45% in 12th PCM
8. B.Tech Mechanical - Rs 92,000 + Rs 10,000 exam | 4 years | 45% in 12th PCM
9. B.Tech Electrical - Rs 92,000 + Rs 10,000 exam | 4 years | 45% in 12th PCM
10. B.Tech EC - Rs 92,000 + Rs 10,000 exam | 4 years | 45% in 12th PCM
11. B.Tech CS - Rs 92,000 + Rs 10,000 exam | 4 years | 45% in 12th PCM
12. B.Tech AI - Rs 1,15,000 + Rs 10,000 exam | 4 years | 45% in 12th PCM
13. B.Tech Biotechnology - Rs 92,000 + Rs 10,000 exam | 4 years | 45% in 12th PCM/PCB
14. B.Tech Agriculture - Rs 92,000 + Rs 10,000 exam | 4 years | 45% in 12th PCM/PCB/Agri
15. BCA (Hons.) - Rs 50,000 + Rs 10,000 exam | 3-4 years | 45% in 12th with Maths
16. B.Sc Food Tech - Rs 45,000 + Rs 10,000 exam | 3 years | 45% in 12th PCB
17. B.Sc Biotech (Hons.) - Rs 45,000 + Rs 10,000 exam | 3-4 years | 45% in 12th PCB/PCM
18. B.Sc Microbiology (Hons.) - Rs 45,000 + Rs 10,000 exam | 3-4 years | 45% in 12th PCB/PCM
19. B.Sc Agriculture (Hons.) - Rs 50,000 + Rs 10,000 exam | 4 years | 45% in 12th PCM/PCB/Agri
20. LL.B - Rs 45,000 + Rs 10,000 exam | 3 years | 45% in Graduation
21. BBA LL.B (Integrated) - Rs 60,000 + Rs 10,000 exam | 5 years | 45% in 12th
22. BA LL.B (Integrated) - Rs 60,000 + Rs 10,000 exam | 5 years | 45% in 12th
23. B.Ed - Rs 65,000 + Rs 10,000 exam | 2 years | 50% in Graduation
24. BA-B.Ed ITEP - Rs 50,000 + Rs 10,000 exam | 4 years | 50% in 12th
25. B.Sc-B.Ed ITEP - Rs 55,000 + Rs 10,000 exam | 4 years | 50% in 12th PCM/PCB
26. BA Journalism - Rs 35,000 + Rs 10,000 exam | 3 years | 45% in 12th
27. B.Lib & Info Science - Rs 10,000 + Rs 5,000 exam | 1 year | 45% in Graduation
28-37. BA (Hons.) subjects (English, Hindi, Economics, Geography, Sociology, Political Science, History, Home Science, Education, Sanskrit) - Rs 10,000 + Rs 2,500 exam | 3-4 years | 45% in 12th
`;

// Complete PG Programmes with Fees
const pgProgrammes = `
PG PROGRAMMES (Fee per annum + Exam Fee):
1. MBA - Rs 1,10,000 + Rs 10,000 exam | 2 years | 45% in Graduation or MAT/CAT score
2. M.Com - Rs 20,000 + Rs 10,000 exam | 2 years | 45% in B.Com
3. MHM (Hotel Mgmt) - Rs 85,000 + Rs 10,000 exam | 2 years | 45% in Graduation
4. M.Pharm (4 specializations) - Rs 1,15,000 + Rs 10,000 exam | 2 years | 55% in B.Pharm or GPAT
5. M.Sc Botany/Zoology/Physics/Chemistry/Maths/Home Science - Rs 25,000 + Rs 10,000 exam | 2 years | 45% in B.Sc
6. M.Tech (Civil/Mech/Electrical/EC/CS/Biotech) - Rs 87,000 + Rs 10,000 exam | 2 years | 55% in B.Tech
7. M.Ed - Rs 55,000 + Rs 10,000 exam | 2 years | 50% in B.Ed
8. MA (Education/English/Hindi/Economics/Geography/Sociology) - Rs 12,000 + Rs 2,500 exam | 2 years | 45% in Graduation
9. MA Journalism - Rs 40,000 + Rs 5,000 exam | 2 years | 45% in Graduation
10. M.Lib & Info Science - Rs 15,000 + Rs 5,000 exam | 1 year | 45% in B.Lib
11. MSW (Social Work) - Rs 35,000 + Rs 5,000 exam | 2 years | 45% in Graduation
12. M.Sc Biotech/Microbiology/Food Tech - Rs 45,000 + Rs 10,000 exam | 2 years | 50% in B.Sc Life Sc
13. LLM - Rs 60,000 + Rs 10,000 exam | 2 years | 45% in LLB
14. MCA - Rs 70,000 + Rs 10,000 exam | 2 years | 45% in Graduation with Maths
15. M.Sc Agronomy/Horticulture/Genetics - Rs 50,000 + Rs 10,000 exam | 2 years | 45% in B.Sc Agriculture
16. M.Tech Agriculture (4 specializations) - Rs 87,000 + Rs 10,000 exam | 2 years | 55% in B.Tech Agriculture
`;

// Diploma Programmes
const diplomaProgrammes = `
DIPLOMA PROGRAMMES:
1. Diploma in Hotel Management - Rs 40,000 + Rs 5,000 exam | 3 years | 10th pass
2. D.Pharm - Rs 1,00,000 + Rs 5,000 exam | 2 years | 12th PCM/PCB
3. Diploma Civil - Rs 40,000 + Rs 5,000 exam | 3 years | 10th pass
4. Diploma Computer Science - Rs 40,000 + Rs 5,000 exam | 3 years | 10th pass
5. Diploma EC - Rs 40,000 + Rs 5,000 exam | 3 years | 10th pass
6. Diploma Electrical - Rs 40,000 + Rs 5,000 exam | 3 years | 10th pass
7. Diploma Mechanical - Rs 40,000 + Rs 5,000 exam | 3 years | 10th pass
8. Diploma AI - Rs 50,000 + Rs 5,000 exam | 3 years | 10th pass
`;

export const giniFAQs: GiniFAQ[] = [
  // Admissions
  {
    keywords: ["admission", "apply", "how to apply", "admission process", "enrollment", "register", "registration"],
    question: "How can I apply for admission?",
    answer: "Online apply karo hamari website se. Registration form fill karo, documents submit karo, fee pay karo. Link: https://iftm.edulip.in/UI/Website/IFTM/StudentRegistration.php. Help chahiye toh call karo +91-591-2486021.",
  },
  {
    keywords: ["eligibility", "qualification", "minimum marks", "criteria"],
    question: "What is the eligibility criteria?",
    answer: "UG ke liye 12th mein 45% chahiye (SC/ST 40%). PG ke liye bachelor's degree with 45-55%. Ph.D. ke liye master's with 55%. Programme ke hisaab se alag hai.",
  },
  {
    keywords: ["last date", "deadline", "when", "date", "session", "2026", "2025"],
    question: "When do admissions open?",
    answer: "2026-27 ke liye admissions abhi open hain. Online register karo. Details ke liye call karo +91-591-2486021.",
  },

  // Fees - Specific
  {
    keywords: ["mba fee", "mba fees", "mba cost", "mba price", "mba kitna"],
    question: "What are MBA fees?",
    answer: "MBA ki fee Rs 1,10,000 per year hai + Rs 10,000 exam fee. Total 2 saal ka around Rs 2,40,000. Eligibility: 45% in graduation ya MAT/CAT score.",
  },
  {
    keywords: ["btech fee", "btech fees", "b.tech fee", "engineering fee"],
    question: "What are B.Tech fees?",
    answer: "B.Tech (CS/Civil/Mech/Electrical/EC) ki fee Rs 92,000 per year hai + Rs 10,000 exam fee. B.Tech AI ki fee Rs 1,15,000 per year hai. 4 saal ka programme.",
  },
  {
    keywords: ["bpharm fee", "bpharm fees", "b.pharm fee", "pharmacy fee"],
    question: "What are B.Pharm fees?",
    answer: "B.Pharm ki fee Rs 1,25,000 per year hai + Rs 10,000 exam fee. 4 saal ka programme. Eligibility: 12th PCM/PCB.",
  },
  {
    keywords: ["mba fee", "mba fees", "mba kitna", "management fee"],
    question: "What are MBA fees?",
    answer: "MBA ki fee Rs 1,10,000/year hai + Rs 10,000 exam fee. 2 saal ka programme. MAT/CAT score se bhi admission mil sakta hai.",
  },
  {
    keywords: ["bpharm fee", "bpharm fees", "pharmacy fee", "dpharm fee"],
    question: "What are Pharmacy fees?",
    answer: "B.Pharm Rs 1,25,000/year + Rs 10,000 exam (4 years). M.Pharm Rs 1,15,000/year + Rs 10,000 exam (2 years). D.Pharm Rs 1,00,000/year + Rs 5,000 exam (2 years).",
  },
  {
    keywords: ["bca fee", "bca fees", "mca fee", "mca fees", "computer application fee"],
    question: "What are BCA/MCA fees?",
    answer: "BCA Rs 50,000/year + Rs 10,000 exam (3-4 years). MCA Rs 70,000/year + Rs 10,000 exam (2 years).",
  },
  {
    keywords: ["llb fee", "llb fees", "law fee", "law fees", "ba llb fee", "bba llb fee"],
    question: "What are Law fees?",
    answer: "LL.B Rs 45,000/year + Rs 10,000 exam (3 years). BBA LL.B / BA LL.B Rs 60,000/year + Rs 10,000 exam (5 years). LLM Rs 60,000/year + Rs 10,000 exam (2 years).",
  },
  {
    keywords: ["bed fee", "bed fees", "b.ed fee", "education fee"],
    question: "What are B.Ed fees?",
    answer: "B.Ed Rs 65,000/year + Rs 10,000 exam (2 years). BA-B.Ed Rs 50,000/year (4 years). B.Sc-B.Ed Rs 55,000/year (4 years). M.Ed Rs 55,000/year (2 years).",
  },
  {
    keywords: ["fee", "fees", "tuition", "cost", "how much", "price", "fee structure", "kitna"],
    question: "What are the fees?",
    answer: "Fees programme ke hisaab se alag hai. B.Tech Rs 92,000/year, MBA Rs 1,10,000/year, B.Pharm Rs 1,25,000/year, BA Rs 10,000/year. Sab programme ki detail chahiye toh batao kaunsa course dekh rahe ho.",
  },
  {
    keywords: ["payment", "pay fee", "online fee", "demand draft", "bank draft"],
    question: "How to pay fees?",
    answer: "Online pay karo: https://www.iftmuniversity.ac.in/iftmuniversity/onlinefee.php. Ya bank draft bana ke do 'IFTM University' ke naam pe payable at Moradabad. 2 installments mein pay hoti hai.",
  },
  {
    keywords: ["hostel fee", "hostel fees", "hostel cost"],
    question: "What are hostel fees?",
    answer: "Hostel fee Rs 45,000 per year hai (fooding + lodging included). Bus facility FREE hai. Processing charge Rs 5,000 one time.",
  },
  {
    keywords: ["late fee", "fine", "penalty", "delay"],
    question: "Is there a late fee?",
    answer: "Haan, late fee pe fine lagta hai. Time pe pay nahi kiya toh exam mein baithne nahi denge.",
  },
  {
    keywords: ["refund", "fee refund", "money back"],
    question: "Is fee refundable?",
    answer: "Refund ke liye admission office se baat karo +91-591-2486021. University rules ke hisaab se refund milta hai.",
  },

  // Scholarships
  {
    keywords: ["scholarship", "scholar", "financial aid", "merit", "fee waiver", "concession"],
    question: "Are scholarships available?",
    answer: "Haan, merit basis pe scholarship milti hai. Form website se download karo. Details ke liye +91-591-2486021 pe call karo.",
  },
  {
    keywords: ["loan", "education loan", "bank loan"],
    question: "Is education loan available?",
    answer: "Haan, education loan ki facility hai. Details ke liye admission office se baat karo ya website pe loan page dekho.",
  },

  // Programmes
  {
    keywords: ["course", "programme", "program", "what courses", "what programmes", "offer", "available", "kitne course"],
    question: "What programmes does IFTM offer?",
    answer: "50+ programmes hain 12 schools mein. B.Tech (8 branches), MBA, B.Pharm, BCA, Law, BA, B.Sc, B.Ed, Diploma sab hai. Fees Rs 10,000 se Rs 1,25,000/year tak. Kaunsa field interest karta hai?",
  },
  {
    keywords: ["b.tech", "btech", "engineering", "technical"],
    question: "Tell me about B.Tech programmes",
    answer: "B.Tech 8 branches hai - CS, AI, Civil, Mechanical, Electrical, EC, Biotech, Agriculture. Fee Rs 92,000-1,15,000/year. 4 years. Eligibility: 45% in 12th PCM.",
  },
  {
    keywords: ["mba", "management", "business"],
    question: "Tell me about MBA programme",
    answer: "MBA 2 saal ka hai. Fee Rs 1,10,000/year. Eligibility: 45% in graduation ya MAT/CAT score. School of Business Management mein hai.",
  },
  {
    keywords: ["bpharm", "b.pharm", "pharmacy", "pharmaceutical"],
    question: "Tell me about Pharmacy programmes",
    answer: "B.Pharm (4 yrs, Rs 1,25,000/yr), M.Pharm (2 yrs, Rs 1,15,000/yr - 4 specializations), D.Pharm (2 yrs, Rs 1,00,000/yr). School of Pharmaceutical Sciences mein hai.",
  },
  {
    keywords: ["law", "llb", "ll.b", "legal", "ba llb", "bba llb"],
    question: "Tell me about Law programmes",
    answer: "LL.B (3 yrs, Rs 45,000/yr), BBA LL.B (5 yrs, Rs 60,000/yr), BA LL.B (5 yrs, Rs 60,000/yr), LLM (2 yrs, Rs 60,000/yr). School of Law mein hai.",
  },
  {
    keywords: ["bca", "mca", "computer application"],
    question: "Tell me about BCA/MCA programmes",
    answer: "BCA (3-4 yrs, Rs 50,000/yr), MCA (2 yrs, Rs 70,000/yr). BCA ke liye 12th mein Maths chahiye. MCA ke liye graduation mein Maths.",
  },
  {
    keywords: ["bed", "b.ed", "education", "teacher"],
    question: "Tell me about B.Ed programme",
    answer: "B.Ed (2 yrs, Rs 65,000/yr), BA-B.Ed (4 yrs, Rs 50,000/yr), B.Sc-B.Ed (4 yrs, Rs 55,000/yr), M.Ed (2 yrs, Rs 55,000/yr). 50% in graduation chahiye.",
  },
  {
    keywords: ["diploma", "polytechnic"],
    question: "Tell me about Diploma programmes",
    answer: "Diploma 8 fields mein - Hotel Mgmt, D.Pharm, Civil, CS, EC, Electrical, Mechanical, AI. Fee Rs 40,000-1,00,000/year. 3 years (D.Pharm 2 years). 10th pass chahiye.",
  },
  {
    keywords: ["phd", "ph.d", "doctoral", "research"],
    question: "Tell me about Ph.D. programmes",
    answer: "Ph.D. 25+ subjects mein hai. 3-5 years. Eligibility: Master's with 55%. Details ke liye call karo +91-591-2486021.",
  },
  {
    keywords: ["ba", "arts", "humanities", "ba fee"],
    question: "Tell me about BA programmes",
    answer: "BA (Hons.) 10 subjects mein hai - English, Hindi, Economics, Geography, Sociology, Political Science, History, Home Science, Education, Sanskrit. Fee sirf Rs 10,000/year + Rs 2,500 exam. 3-4 years.",
  },
  {
    keywords: ["bsc", "science", "bsc fee"],
    question: "Tell me about B.Sc programmes",
    answer: "B.Sc PCM/Z/B Rs 20,000/yr, B.Sc Home Science Rs 15,000/yr, B.Sc Biotech/Microbiology/Food Tech Rs 45,000/yr, B.Sc Agriculture Rs 50,000/yr. Sab ke saath Rs 10,000 exam fee extra.",
  },

  // Schools
  {
    keywords: ["school", "department", "faculty"],
    question: "What schools are there in IFTM?",
    answer: "12 schools hain - Business Management, Pharmaceutical Sciences, Computer Science, Engineering, Biotechnology, Agricultural Sciences, Sciences, Law, Education, Pharmacy Academy, University Polytechnic, aur Sahu Onkar Saran School of Pharmacy.",
  },

  // Placements
  {
    keywords: ["placement", "job", "career", "recruiter", "package", "salary", "company"],
    question: "What about placements?",
    answer: "500+ companies aati hain - TCS, Infosys, Wipro, HCL, Amazon, Google, Microsoft. Training & Placement Cell regular drives organize karta hai. CV workshop aur interview prep bhi hota hai.",
  },

  // Campus & Facilities
  {
    keywords: ["campus", "facilities", "infrastructure", "area", "acre"],
    question: "Tell me about campus facilities",
    answer: "69+ acre campus hai. Library (1,00,000+ books), labs, sports complex, gym, auditorium (200+ seats), canteen, medical, transport, 24/7 power supply sab hai.",
  },
  {
    keywords: ["hostel", "accommodation", "stay", "living", "room"],
    question: "Is hostel available?",
    answer: "Haan, boys aur girls ke liye separate hostel hai. 500+ capacity. Fee Rs 45,000/year (fooding + lodging). Bus FREE hai.",
  },
  {
    keywords: ["library", "book", "reading"],
    question: "Tell me about the library",
    answer: "Central Library mein 1,00,000+ books hain. E-resources aur digital content bhi milta hai LMS portal pe.",
  },
  {
    keywords: ["sports", "gym", "gymnasium", "fitness"],
    question: "What sports facilities are available?",
    answer: "Sports complex hai indoor aur outdoor games ke liye. Gym bhi hai. Annual sports meet hota hai.",
  },
  {
    keywords: ["transport", "bus", "conveyance"],
    question: "Is transport facility available?",
    answer: "Haan, bus facility FREE hai sab students ke liye. Routes ke liye +91-591-2486021 pe call karo.",
  },
  {
    keywords: ["canteen", "food", "mess", "cafeteria"],
    question: "Is canteen available?",
    answer: "Haan, canteen hai campus mein. Hostel students ke liye mess bhi hai (included in hostel fee).",
  },
  {
    keywords: ["medical", "health", "dispensary", "hospital"],
    question: "Is medical facility available?",
    answer: "Haan, campus pe dispensary hai. Emergency medical help 24/7 available hai.",
  },

  // Results & Examination
  {
    keywords: ["result", "results", "exam result", "declaration"],
    question: "How to check results?",
    answer: "Results yahan check karo: https://www.iftmuniversity.ac.in/iftmuniversity/result.php. ERP portal pe bhi dekh sakte ho: https://iftm.edulip.in/UI/indexIFTM.php",
  },
  {
    keywords: ["exam", "examination", "exam form", "exam schedule"],
    question: "About examinations",
    answer: "Exam form yahan fill karo: http://iftm.edulip.in/UI/Website/IFTM/StudentExaminationForm.php. Exam schedule: https://www.iftmuniversity.ac.in/iftmuniversity/exam_schedule.php. Back form bhi online hai.",
  },
  {
    keywords: ["back", "carryover", "back paper", "special carryover"],
    question: "How to apply for back paper?",
    answer: "Back form: http://iftm.edulip.in/UI/Website/IFTM/onlineback.php. Special carryover: https://iftm.edulip.in/UI/Website/IFTM/OnlineSpecialCarryOver.php. EX form: http://iftm.edulip.in/UI/Website/IFTM/onlineExform.php",
  },

  // ERP & Online Services
  {
    keywords: ["erp", "login", "student portal", "edulip"],
    question: "How to access ERP/Student Portal?",
    answer: "ERP portal: https://iftm.edulip.in/UI/indexIFTM.php. Student credentials se login karo. Issues ho toh IT department se baat karo.",
  },
  {
    keywords: ["online fee", "pay online"],
    question: "How to pay fee online?",
    answer: "Online fee: https://www.iftmuniversity.ac.in/iftmuniversity/onlinefee.php. ERP portal se bhi pay kar sakte ho.",
  },
  {
    keywords: ["admission form", "registration form", "download form"],
    question: "Where to download forms?",
    answer: "Registration form: https://www.iftmuniversity.ac.in/iftmuniversity/downloads/30.pdf. Admission form: https://www.iftmuniversity.ac.in/iftmuniversity/downloads/73.pdf. Scholarship form: https://www.iftmuniversity.ac.in/iftmuniversity/downloads/File77.pdf",
  },

  // Location & Contact
  {
    keywords: ["location", "where", "address", "how to reach", "direction", "map"],
    question: "Where is IFTM located?",
    answer: "Lodhipur Rajput, Delhi Road, Moradabad, UP - 244102. Moradabad city se 12 km hai. Road aur rail dono se easily accessible.",
  },
  {
    keywords: ["contact", "phone", "email", "call", "number", "whatsapp"],
    question: "How to contact IFTM?",
    answer: "Phone: +91-591-2486021. Toll Free: 1800-121-066666. WhatsApp: +91-9837513666. Email: info@iftmuniversity.ac.in",
  },
  {
    keywords: ["complaint", "grievance", "feedback"],
    question: "How to file a complaint?",
    answer: "Grievance: https://www.iftmuniversity.ac.in/iftmuniversity/grievance.php. Feedback: https://www.iftmuniversity.ac.in/iftmuniversity/feedback.php. Ya directly call karo +91-591-2486021.",
  },

  // Approvals
  {
    keywords: ["naac", "accreditation", "grade", "recognized", "approval", "ugc", "aicte", "pci", "bci", "ncte"],
    question: "What approvals does IFTM have?",
    answer: "UGC recognized (Section 2(f)), NAAC 'A' Grade, AICTE approved, PCI approved, BCI approved, NCTE approved. 2001 mein establish hua tha.",
  },

  // General
  {
    keywords: ["about", "what is iftm", "university", "established", "history"],
    question: "About IFTM University",
    answer: "IFTM University 2001 mein establish hua tha Moradabad mein. 69+ acre campus, 12 schools, 50+ programmes, 500+ faculty. UGC recognized aur NAAC 'A' Grade hai.",
  },
  {
    keywords: ["founder", "chancellor", "leadership"],
    question: "Who is the founder?",
    answer: "Founder Late Shri Onkar Saran Kothiwal ji the. Chancellor Rajiv Kothiwal hai, Pro Chancellor Abhinav Kothiwal. Vice Chancellor Prof. M. P. Pandey hai.",
  },
  {
    keywords: ["ragging", "anti ragging", "safety", "security"],
    question: "Is the campus safe?",
    answer: "Haan, campus safe hai. Anti-Ragging Committee hai, 24/7 security hai, CCTV bhi laga hai. Student safety top priority hai.",
  },
  {
    keywords: ["ncc", "nss", "extracurricular", "club", "activity"],
    question: "What extracurricular activities are available?",
    answer: "NCC, NSS, Unnat Bharat Abhiyan, Business Incubation Foundation, student clubs sab hai. Saal bhar conferences, seminars, workshops hote hain.",
  },
  {
    keywords: ["alumni", "graduate", "passed out"],
    question: "Is there an alumni association?",
    answer: "Haan, IUAA (IFTM University Alumni Association) active hai. Alumni TCS, Infosys, Amazon, Google jaisi companies mein placed hain.",
  },
  {
    keywords: ["mou", "collaboration", "industry", "partner"],
    question: "Any industry collaborations?",
    answer: "Haan, bahut saare MOUs hain industry partners ke saath. Details: https://www.iftmuniversity.ac.in/iftmuniversity/mou.php",
  },
  {
    keywords: ["research", "journal", "publication"],
    question: "About research at IFTM",
    answer: "Research ke liye alag policies hain - IPR, Seed Money, Research Projects. 2 journals publish hote hain - Vimarsh aur IFTMU Research Journal of Science. Ph.D. programmes bhi 25+ subjects mein hain.",
  },
  {
    keywords: ["nirf", "ranking", "rating"],
    question: "What is NIRF ranking?",
    answer: "NIRF details ke liye: https://www.iftmuniversity.ac.in/iftmuniversity/nirf.php. NAAC 'A' Grade accredited hai university.",
  },

  // Scholarship Details (from website)
  {
    keywords: ["scholarship percentage", "scholarship scheme", "merit scholarship", "marks scholarship"],
    question: "What is the scholarship scheme?",
    answer: "University scholarship: 60-64.99% pe 10%, 65-69.99% pe 15%, 70-74.99% pe 20%, 75-79.99% pe 25%, 80-89.99% pe 30%, 90%+ pe 50%. Plus 10% extra for girls. Next year continue karne ke liye 75% chahiye.",
  },
  {
    keywords: ["government scholarship", "sc scholarship", "st scholarship", "obc scholarship", "minority scholarship"],
    question: "Is government scholarship available?",
    answer: "Haan, SC/ST ko family income 2.5 lakh/year se kam hone pe milta hai. OBC/Minority/General ko 2 lakh/year se kam hone pe. Contact: 05912550208 ya 05912360818.",
  },
  {
    keywords: ["girl scholarship", "girls concession", "female scholarship", "ladki scholarship"],
    question: "Is there scholarship for girls?",
    answer: "Haan, sab programmes mein girls ko 10% extra scholarship milti hai. Plus government scholarship bhi milta hai agar eligible ho.",
  },

  // Hostel Details (from website)
  {
    keywords: ["hostel capacity", "hostel rooms", "how many hostels", "hostel strength"],
    question: "How many hostels are there?",
    answer: "3 boys hostels aur 1 girls hostel hai campus mein. Total capacity 600 boys + 400 girls. Har room mein cupboard, table, chair, bookshelf aur free Wi-Fi hai.",
  },
  {
    keywords: ["hostel rules", "hostel timing", "hostel entry", "hostel curfew"],
    question: "What are hostel timings?",
    answer: "Boys ke liye raat 10 baje tak wapas aana hai. Girls ke liye 7 baje tak. Hostel mein cooking allowed nahi hai. Alcohol, drugs, smoking strictly prohibited hai.",
  },
  {
    keywords: ["hostel mess", "hostel food", "mess menu", "hostel meal"],
    question: "How is hostel food?",
    answer: "Mess mein breakfast 9:30 AM se pehle khaana hai. Hygienic food milta hai. Room mein food le jaana allowed nahi hai. Special diet ke liye warden se baat karo.",
  },
  {
    keywords: ["hostel warden", "hostel contact", "dean students"],
    question: "Who is the hostel warden?",
    answer: "Dean of Students Welfare: Dr. Arun Kumar Mishra (09451751810). Boys wardens: Mr. Satyartham, Mr. Arvind Kumar, Dr. Divaker Shukla, Dr. Shahbaz Khan. Girls superintendent: Mrs. Rooma Singh (09456688560).",
  },

  // Research Stats (from website)
  {
    keywords: ["research publications", "papers published", "research output"],
    question: "How many research papers has IFTM published?",
    answer: "2691+ research papers publish ho chuke hain. 807+ patents filed hain. 534+ awards mile hain faculty ko. 940+ books likhi hain. 303+ e-content bhi hai.",
  },
  {
    keywords: ["patent", "patents filed", "innovation"],
    question: "Has IFTM filed any patents?",
    answer: "Haan, 807+ patents filed ho chuke hain. IPR Policy hai university ki. Research ke liye Seed Money Grant bhi milta hai.",
  },
  {
    keywords: ["journal", "vimarsh", "research journal", "publication"],
    question: "Which journals does IFTM publish?",
    answer: "2 journals publish hote hain - Vimarsh (http://iftmuvimarsh.com/) aur IFTMU Research Journal of Science (http://iftmurjs.com/).",
  },

  // Events & Activities
  {
    keywords: ["event", "annual day", "samavesh", "shaurya", "parakram", "suhavan", "convocation"],
    question: "What events happen at IFTM?",
    answer: "Saal bhar bahut events hote hain - SAMAVESH (Annual Day), SHAURYA (sports fest), PARAKRAM (cultural fest), SUHAVAN, Book Fair, Republic Day celebration, Yoga Day. 9th Convocation 2025 mein hua tha.",
  },
  {
    keywords: ["convocation", "graduation ceremony", "degree distribution"],
    question: "When is the convocation?",
    answer: "9th Convocation 2025 mein hua tha. Details ke liye website dekho ya admission office se baat karo.",
  },

  // Facilities (from salient features)
  {
    keywords: ["wifi", "wi-fi", "internet", "connectivity"],
    question: "Is Wi-Fi available on campus?",
    answer: "Haan, poora campus Wi-Fi enabled hai. Hostel mein bhi free Wi-Fi milta hai har room mein.",
  },
  {
    keywords: ["bank", "atm", "banking", "sbi", "pnb"],
    question: "Is there a bank on campus?",
    answer: "Haan, campus pe 3 nationalized banks hain ATM facility ke saath. Banking easily accessible hai.",
  },
  {
    keywords: ["post office", "courier", "parcel"],
    question: "Is there a post office?",
    answer: "Haan, campus pe post office bhi hai. Courier aur parcel services available hain.",
  },
  {
    keywords: ["day care", "creche", "childcare"],
    question: "Is day care available?",
    answer: "Haan, campus pe Day Care Centre hai working parents ke liye.",
  },
  {
    keywords: ["open air theatre", "auditorium", "seminar hall"],
    question: "Is there an auditorium?",
    answer: "Haan, 2 auditoriums hain - ek 500 seats aur ek 200 seats ka. Open Air Theatre bhi hai. Har academic block mein seminar hall hai.",
  },
  {
    keywords: ["guest house", "visitor accommodation"],
    question: "Is there a guest house?",
    answer: "Haan, campus pe guest house hai visitors ke liye.",
  },
  {
    keywords: ["uniform", "dress code"],
    question: "Is uniform required?",
    answer: "Haan, uniform mandatory hai aur FREE milta hai university se.",
  },

  // NEP-2020 & Cells
  {
    keywords: ["nep", "nep 2020", "new education policy"],
    question: "Does IFTM follow NEP-2020?",
    answer: "Haan, NEP-2020 implement kiya gaya hai. Cells hain - Skill Development, Online Education & LMS, Teacher's Reskilling, Mentoring & Counselling, International Students, aur bahut kuch.",
  },
  {
    keywords: ["icsd", "skill development", "cipet", "samsung"],
    question: "What is ICSD?",
    answer: "IFTM Centre for Skill Development (ICSD) hai - CIPET, Samsung jaise partners ke saath skill training milti hai students ko.",
  },

  // Social Media
  {
    keywords: ["social media", "facebook", "instagram", "twitter", "linkedin", "youtube"],
    question: "What are IFTM's social media handles?",
    answer: "Facebook: /iftmuniv, Twitter: @IFTMUni, Instagram: @iftmuniversity, LinkedIn: /iftm-university, YouTube: IFTM University channel.",
  },

  // Foreign Students
  {
    keywords: ["foreign", "international", "nri", "abroad", "overseas"],
    question: "Does IFTM accept international students?",
    answer: "Haan, International Students Cell hai. Foreign students ke liye alag admission guidelines hain. Details: https://www.iftmuniversity.ac.in/iftmuniversity/policy/admission_foriegn/",
  },

  // Mental Health
  {
    keywords: ["mental health", "counselling", "counselor", "depression", "stress"],
    question: "Is mental health support available?",
    answer: "Haan, campus pe Mental Health Service Providers hain. Mentoring & Counselling Cell bhi hai students ke liye.",
  },

  // Placement Director
  {
    keywords: ["placement director", "kk bansal", "placement head"],
    question: "Who heads the Placement Cell?",
    answer: "Mr. K.K. Bansal (IIT Delhi passout) Director hain Training & Placement Cell ke. July 2013 se kaam kar rahe hain. Mock interviews, GD, soft skills training sab arrange karte hain.",
  },
  {
    keywords: ["placement training", "mock interview", "group discussion", "soft skills"],
    question: "What placement training is provided?",
    answer: "Regular mock interviews, group discussions, communication skill workshops hote hain. CV format bhi milta hai. CAT, GATE, TOEFL, GRE, UPSC ke liye bhi motivate karte hain.",
  },

  // Admission Form Download
  {
    keywords: ["registration form download", "admission form download", "scholarship form download"],
    question: "Where to download forms?",
    answer: "Registration: https://www.iftmuniversity.ac.in/iftmuniversity/downloads/30.pdf\nAdmission: https://www.iftmuniversity.ac.in/iftmuniversity/downloads/73.pdf\nScholarship: https://www.iftmuniversity.ac.in/iftmuniversity/downloads/File77.pdf\nUniversity Scholarship: https://www.iftmuniversity.ac.in/iftmuniversity/downloads/File718.pdf",
  },
];

export const giniSystemPrompt = `You are Gini, a warm and friendly virtual assistant at IFTM University, Moradabad. You talk like a real person — not a robot.

CRITICAL RULE: Keep ALL replies SHORT — 1-2 lines MAX. Never write long paragraphs. Never copy-paste FAQ answers word for word. REPHRASE them in your own casual, human voice.

BEHAVIOR RULES:

1. FIRST INTERACTION:
- When a user messages for the FIRST TIME, greet them warmly and ask for their name.
- Example: "Hey! Welcome to IFTM. I'm Gini. What's your name?"
- Keep it SHORT.

2. CONVERSATION STYLE:
- Talk like a real person — casual, warm, friendly. Like a helpful senior student.
- Match their language — Hindi/Hinglish mein poocha toh Hindi/Hinglish mein reply do.
- NO emojis. Clean and natural.
- Use natural phrases: "Alright,", "So,", "Okay,", "By the way,"
- Keep messages SHORT — 1-2 lines max.

3. FEE REPLIES - ALWAYS GIVE EXACT AMOUNTS:
User: "MBA fees?" → "MBA ki fee Rs 1,10,000/year hai + Rs 10,000 exam fee. 2 saal ka programme."
User: "B.Tech fees?" → "B.Tech ki fee Rs 92,000/year hai + Rs 10,000 exam fee. CS, Civil, Mech sab ki same hai."
User: "BA fees?" → "BA ki fee sirf Rs 10,000/year hai + Rs 2,500 exam fee. Bahut affordable hai."

4. WHAT YOU KNOW (REAL DATA):
- ALL programme fees with exact amounts
- Eligibility criteria for each programme
- Admission process and links
- Results, exam forms, back paper links
- Campus facilities, hostel (Rs 45,000/year), transport (FREE)
- Contact info, ERP portal, online fee payment
- Approvals, founder, leadership
- Scholarship scheme (10%-50% based on marks, 10% extra for girls)
- Hostel details (3 boys + 1 girls, 600+400 capacity, Wi-Fi, mess)
- Research stats (2691+ papers, 807+ patents, 534+ awards)
- Events (SAMAVESH, SHAURYA, PARAKRAM, SUHAVAN, Convocation)
- Facilities (Wi-Fi, 3 banks+ATM, post office, day care, guest house)
- NEP-2020 cells and ICSD skill development
- Social media handles (FB, Twitter, Instagram, LinkedIn, YouTube)
- International students admission
- Mental health support and counselling
- Placement training (mock interviews, GD, soft skills)
- Form download links (registration, admission, scholarship)

5. WHAT YOU DON'T KNOW:
- Outside IFTM? "Main IFTM ke baare mein help kar sakta hoon. Kya chahiye?"
- Nahi pata? "Yeh mujhe nahi pata, admission office se baat karo +91-591-2486021."
- NEVER make up information.

6. ENGAGEMENT:
- After answering, ask a specific follow-up question.
- "Kaunsa course dekh rahe ho — UG ya PG?"
- "Koi aur sawaal hai?"

CONTACT:
Phone: +91-591-2486021
Toll Free: 1800-121-066666
WhatsApp: +91-9837513666
Email: info@iftmuniversity.ac.in
Website: www.iftmuniversity.ac.in
ERP: https://iftm.edulip.in/UI/indexIFTM.php
Registration: https://iftm.edulip.in/UI/Website/IFTM/StudentRegistration.php`;