export interface GiniFAQ {
  keywords: string[];
  question: string;
  answer: string;
}

export const giniFAQs: GiniFAQ[] = [
  // Admissions
  {
    keywords: ["admission", "apply", "how to apply", "admission process", "enrollment", "register", "registration"],
    question: "How can I apply for admission?",
    answer: "Online apply kar sakte ho hamari website se. Registration form fill karo, documents submit karo, fee pay karo. Help chahiye toh call karo -91-591-2486021.",
  },
  {
    keywords: ["eligibility", "qualification", "minimum marks", "criteria"],
    question: "What is the eligibility criteria?",
    answer: "UG ke liye 12th mein 45% chahiye (SC/ST ke liye 40%). PG ke liye bachelor's degree with 50%. Ph.D. ke liye master's with 55%.",
  },
  {
    keywords: ["last date", "deadline", "when", "date", "session", "2026", "2025"],
    question: "When do admissions open?",
    answer: "2026-27 ke liye admissions abhi open hain. Online register kar sakte ho. Details ke liye call karo +91-591-2486021.",
  },

  // Fee Structure
  {
    keywords: ["mba fee", "mba fees", "mba cost", "mba price"],
    question: "What are MBA fees?",
    answer: "MBA ki exact fees ke liye admission office call karo +91-591-2486021. Fees 2 installments mein pay hoti hai. Scholarship bhi milti hai merit basis pe.",
  },
  {
    keywords: ["btech fee", "btech fees", "b.tech fee", "engineering fee"],
    question: "What are B.Tech fees?",
    answer: "B.Tech ki fees programme ke hisaab se alag hai. Exact amount ke liye +91-591-2486021 pe call karo. 2 installments mein pay kar sakte ho.",
  },
  {
    keywords: ["fee", "fees", "tuition", "cost", "how much", "price", "fee structure"],
    question: "What are the fees?",
    answer: "Fees programme ke hisaab se alag hoti hai. Tuition + Exam fee dono milake total aata hai. 2 installments mein pay kar sakte ho. Exact amount ke liye call karo +91-591-2486021.",
  },
  {
    keywords: ["payment", "pay fee", "online fee", "demand draft", "bank draft"],
    question: "How to pay fees?",
    answer: "Online pay kar sakte ho hamari website se, ya bank draft bana ke de sakte ho. First installment admission ke time dena hota hai.",
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
    answer: "Haan, merit basis pe scholarship milti hai. Form website se download kar sakte ho. Details ke liye +91-591-2486021 pe call karo.",
  },
  {
    keywords: ["loan", "education loan", "bank loan"],
    question: "Is education loan available?",
    answer: "Haan, education loan ki facility hai. Details ke liye admission office se baat karo ya website pe loan page dekho.",
  },

  // Programmes
  {
    keywords: ["course", "programme", "program", "what courses", "what programmes", "offer", "available"],
    question: "What programmes does IFTM offer?",
    answer: "50+ programmes hain 12 schools mein. Diploma, UG, PG, Ph.D. sab hai - Engineering, Pharmacy, Management, Law, Sciences, Education, Agriculture. Kaunsa field interest karta hai?",
  },
  {
    keywords: ["b.tech", "btech", "engineering", "technical"],
    question: "Tell me about B.Tech programmes",
    answer: "B.Tech 8 branches mein hai - CS, AI, Civil, Mechanical, Electrical, EC, Biotechnology, Agriculture. 4 saal ka programme hai. Details ke liye call karo +91-591-2486021.",
  },
  {
    keywords: ["mba", "management", "business"],
    question: "Tell me about MBA programme",
    answer: "MBA 2 saal ka programme hai School of Business Management se. Specializations available hain. Eligibility: Bachelor's degree with 50%.",
  },
  {
    keywords: ["bpharm", "b.pharm", "pharmacy", "pharmaceutical"],
    question: "Tell me about Pharmacy programmes",
    answer: "B.Pharm (4 years), M.Pharm (2 years - 4 specializations), D.Pharm sab available hai. Pharmacy school ka infrastructure bahut accha hai.",
  },
  {
    keywords: ["law", "llb", "ll.b", "legal", "ba llb", "bba llb"],
    question: "Tell me about Law programmes",
    answer: "LL.B (3 years), BBA LL.B (5 years), BA LL.B (5 years), LLM (2 years) sab hai School of Law mein. Details ke liye call karo.",
  },
  {
    keywords: ["bca", "mca", "computer application"],
    question: "Tell me about BCA/MCA programmes",
    answer: "BCA (3 years) aur MCA (2 years) dono hai. BCA ke liye 12th mein Math chahiye, MCA ke liye BCA/B.Sc.",
  },
  {
    keywords: ["bed", "b.ed", "education", "teacher"],
    question: "Tell me about B.Ed programme",
    answer: "B.Ed 2 saal ka hai. BA-B.Ed aur B.Sc-B.Ed integrated bhi hai. M.Ed aur MA Education bhi available hai.",
  },
  {
    keywords: ["diploma", "polytechnic"],
    question: "Tell me about Diploma programmes",
    answer: "Diploma 8 fields mein hai - Hotel Mgmt, D.Pharm, Civil, CS, EC, Electrical, Mechanical, AI. Duration 1-3 saal.",
  },
  {
    keywords: ["phd", "ph.d", "doctoral", "research"],
    question: "Tell me about Ph.D. programmes",
    answer: "Ph.D. 25+ subjects mein hai - Management, Commerce, Pharmacy, Sciences, Engineering, Education, Law, aur bahut kuch. 3-5 saal. Eligibility: Master's with 55%.",
  },

  // Schools
  {
    keywords: ["school", "department", "faculty"],
    question: "What schools are there in IFTM?",
    answer: "12 schools hain - Business Management, Pharmaceutical Sciences, Computer Science, Engineering, Biotechnology, Agricultural Sciences, Sciences, Law, Education, aur 3 aur.",
  },

  // Placements
  {
    keywords: ["placement", "job", "career", "recruiter", "package", "salary", "company"],
    question: "What about placements?",
    answer: "Placement record accha hai. 500+ companies aati hain - TCS, Infosys, Wipro, HCL, Amazon, Google, Microsoft. Training & Placement Cell regular drives organize karta hai.",
  },

  // Campus & Facilities
  {
    keywords: ["campus", "facilities", "infrastructure", "area", "acre"],
    question: "Tell me about campus facilities",
    answer: "69+ acre campus hai. Library mein 1,00,000+ books, labs, sports complex, gym, auditorium, canteen, medical facility, transport, 24/7 power supply sab hai.",
  },
  {
    keywords: ["hostel", "accommodation", "stay", "living", "room"],
    question: "Is hostel available?",
    answer: "Haan, boys aur girls ke liye separate hostel hai. 500+ students reh sakte hain. Wi-Fi, mess, 24/7 security sab hai.",
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
    answer: "Haan, transport facility hai. Routes aur charges ke liye +91-591-2486021 pe call karo.",
  },
  {
    keywords: ["canteen", "food", "mess", "cafeteria"],
    question: "Is canteen available?",
    answer: "Haan, canteen hai campus mein. Hostel students ke liye mess bhi hai.",
  },
  {
    keywords: ["medical", "health", "dispensary", "hospital"],
    question: "Is medical facility available?",
    answer: "Haan, campus pe dispensary hai. Emergency medical help 24/7 available hai.",
  },

  // Location & Contact
  {
    keywords: ["location", "where", "address", "how to reach", "direction", "map"],
    question: "Where is IFTM located?",
    answer: "Lodhipur Rajput, Delhi Road, Moradabad, UP - 244102. Moradabad city se 12 km hai. Road aur rail dono se easily accessible hai.",
  },
  {
    keywords: ["contact", "phone", "email", "call", "number", "whatsapp"],
    question: "How to contact IFTM?",
    answer: "Phone: +91-591-2486021\nToll Free: 1800-121-066666\nWhatsApp: +91-9837513666\nEmail: info@iftmuniversity.ac.in",
  },

  // Approvals
  {
    keywords: ["naac", "accreditation", "grade", "recognized", "approval", "ugc", "aicte", "pci", "bci", "ncte"],
    question: "What approvals does IFTM have?",
    answer: "UGC recognized (Section 2(f)), NAAC 'A' Grade, AICTE approved, PCI approved, BCI approved, NCTE approved. 2001 mein establish hua tha.",
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
    answer: "Online fee pay karne ke liye: https://www.iftmuniversity.ac.in/iftmuniversity/onlinefee.php pe jao. ERP portal se bhi pay kar sakte ho.",
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
    answer: "Haan, campus safe hai. Anti-Ragging Committee hai, 24/7 security hai hostels aur campus mein, CCTV bhi laga hai.",
  },
  {
    keywords: ["ncc", "nss", "extracurricular", "club", "activity"],
    question: "What extracurricular activities are available?",
    answer: "NCC, NSS, student clubs, conferences, seminars, workshops sab hota hai. Saal bhar events hote hain campus pe.",
  },
  {
    keywords: ["alumni", "graduate", "passed out"],
    question: "Is there an alumni association?",
    answer: "Haan, IFTM University Alumni Association (IUAA) active hai. Alumni TCS, Infosys, Amazon, Google jaisi companies mein hain.",
  },
];

export const giniSystemPrompt = `You are Gini, a warm and friendly virtual assistant at IFTM University, Moradabad. You talk like a real person — not a robot.

CRITICAL RULE: Keep ALL replies SHORT — 1-2 lines MAX. Never write long paragraphs. Never copy-paste FAQ answers word for word. REPHRASE them in your own casual, human voice.

BEHAVIOR RULES:

1. FIRST INTERACTION:
- When a user messages for the FIRST TIME, greet them warmly and ask for their name.
- Example: "Hey! Welcome to IFTM. I'm Gini. What's your name?"
- Keep it SHORT. Don't list what you can do.

2. CONVERSATION STYLE:
- Talk like a real person — casual, warm, friendly. Like a helpful senior student.
- Match their language — Hindi/Hinglish mein poocha toh Hindi/Hinglish mein reply do.
- NO emojis. Clean and natural.
- Use natural phrases: "Alright,", "So,", "Okay,", "By the way,"
- Keep messages SHORT — 1-2 lines max. NOT paragraphs.
- If you have info, give the key point in ONE line. Details baad mein poochne pe dena.

3. EXAMPLES OF GOOD REPLIES:
User: "MBA fees kya hai?"
Good: "MBA ki exact fees ke liye +91-591-2486021 pe call karo. 2 installments mein pay hoti hai."
Bad: "Fee structure varies by programme. The total annual fee has two components..."

User: "courses kya hain?"
Good: "50+ programmes hain — Engineering, Pharmacy, MBA, Law, sab hai. Kaunsa field interest karta hai?"
Bad: "IFTM University offers 50+ programmes across 12 schools..."

User: "hostel hai?"
Good: "Haan, boys aur girls ke liye separate hostel hai. Wi-Fi, mess, security sab hai."

4. WHAT YOU KNOW:
- All programmes with details
- Fee info (exact amount nahi pata toh bolo "exact fees ke liye call karo")
- Admission process
- Campus facilities
- Contact info

5. WHAT YOU DON'T KNOW:
- Outside IFTM? "Main IFTM ke baare mein help kar sakta hoon. Kya chahiye?"
- Nahi pata? "Yeh mujhe nahi pata, admission office se baat karo +91-591-2486021."
- NEVER make up information.

6. ENGAGEMENT:
- After answering, ask a specific follow-up question.
- NOT "Let me know if you need help with anything else!"
- YES "UG ya PG dono mein se kaunsa dekh rahe ho?"

CONTACT:
Phone: +91-591-2486021
Toll Free: 1800-121-066666
WhatsApp: +91-9837513666
Email: info@iftmuniversity.ac.in`;