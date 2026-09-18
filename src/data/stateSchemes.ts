import { Scheme } from '../types';

export const STATE_SCHEMES: Scheme[] = [
  // ===================== TELANGANA =====================
  {
    id: 'telangana-epass-scholarship',
    name: 'Telangana ePASS Post-Matric Scholarship & Fee Reimbursement',
    slug: 'telangana-epass-scholarship',
    shortDescription: 'Sanction of full tuition fee reimbursement and monthly maintenance charges (MTF) for Post-Matric students in Telangana.',
    description: 'The Electronic Payment and Application System of Scholarships (ePASS) is the flagship welfare initiative of the Government of Telangana providing complete tuition fee reimbursement (RTF) and maintenance charges (MTF) to SC, ST, BC, EBC, Minority, and PwD students pursuing post-matric intermediate, polytechnic, graduate, postgraduate, and professional degrees.',
    category: 'Scholarships',
    state: 'Telangana',
    governmentLevel: 'State',
    department: 'Scheduled Castes Development & Backward Classes Welfare Department, Govt of Telangana',
    financialBenefitAmount: '100% Tuition Fee Reimbursement + ₹1,400 to ₹1,800/month maintenance allowance',
    benefits: [
      '100% College tuition fee reimbursement credited directly to the college account',
      'Monthly maintenance charges (MTF) up to ₹18,000/year deposited into student’s Aadhaar-seeded bank account',
      'Coverage across Engineering, Medicine, MBA, MCA, Degree, Polytechnic, and Intermediate programs'
    ],
    eligibility: [
      'Must be a permanent resident/domicile of Telangana State',
      'Belonging to SC / ST / BC / EBC / Minority / PwD categories',
      'Pursuing Post-Matric regular course recognized by State Universities / Boards (min 75% attendance)',
      'Parental annual income limit: ₹2,00,000 for SC/ST, and ₹1,50,000 (Rural) / ₹2,00,000 (Urban) for BC/EBC/Minorities'
    ],
    eligibilityRules: {
      minAge: 16,
      maxAge: 32,
      states: ['Telangana'],
      categories: ['SC', 'ST', 'OBC', 'EWS', 'Minority', 'General'],
      maxIncome: 250000,
      requiresStudent: true,
      minEducation: ['10th Pass (Matric)', '12th Pass (Intermediate)', 'Diploma/ITI', 'Undergraduate (UG)', 'Postgraduate (PG)']
    },
    requiredDocuments: [
      'Aadhaar Card of student and parents',
      'Telangana Integrated Caste Certificate (MeeSeva signed)',
      'Latest Income Certificate issued by MeeSeva / Tehsildar (valid for academic year)',
      'SSC (10th) Hall Ticket Number & Marks Memo',
      'Admission allotment letter & College Bonafide Certificate',
      'Aadhaar-seeded Bank Passbook in student’s name'
    ],
    applicationProcess: [
      'Register on Telangana ePASS portal at telanganaepass.cgg.gov.in',
      'Select "Post-Matric Scholarship" and enter SSC Memo details to auto-verify credentials',
      'Enter College code, course, admission details, and upload Caste & Income certificates',
      'Submit hard copy of application with original documents to College Scholarship Clerk',
      'Institute verifies credentials online and forwards to District Welfare Officer'
    ],
    deadline: '9 September 2026 (Closing in 3 Days)',
    deadlineDate: '2026-09-09',
    isDeadlineApproaching: true,
    officialWebsite: 'https://telanganaepass.cgg.gov.in',
    officialSource: 'Government of Telangana, Department of Welfare',
    lastUpdated: 'August 2026',
    tags: ['telangana', 'state scheme', 'scholarship', 'fee reimbursement', 'epass', 'college', 'student']
  },
  {
    id: 'telangana-mahalaxmi',
    name: 'Telangana Maha Lakshmi Scheme for Women & Girls',
    slug: 'telangana-mahalaxmi',
    shortDescription: 'Free travel for girls, women of all age groups, and transgender persons in state-run RTC buses, alongside financial assistance.',
    description: 'The Maha Lakshmi Scheme is a landmark welfare guarantee by the Government of Telangana ensuring free public transport for women across all Palle Velugu and Express buses operated by TGSRTC, with subsidized domestic LPG cylinders and targeted monthly financial support.',
    category: 'Women',
    state: 'Telangana',
    governmentLevel: 'State',
    department: 'Transport Department & Women Development and Child Welfare, Govt of Telangana',
    financialBenefitAmount: '100% Zero-fare travel across Telangana + ₹500 Subsidized LPG + Monthly cash grant',
    benefits: [
      'Zero-fare bus travel in TGSRTC Palle Velugu, Express, City Ordinary, and Metro Express buses within Telangana state',
      'Direct monthly financial empowerment grant for eligible women heads of families',
      'Subsidized domestic LPG cylinders at ₹500 under Praja Palana guarantee'
    ],
    eligibility: [
      'Resident girl or woman citizen of Telangana (all age groups)',
      'Transgender persons domiciled in Telangana State',
      'Valid domicile proof / residence proof within Telangana'
    ],
    eligibilityRules: {
      minAge: 0,
      maxAge: 100,
      states: ['Telangana'],
      genders: ['female', 'other']
    },
    requiredDocuments: [
      'Aadhaar Card or voter ID showing Telangana address (for zero-ticket bus travel)',
      'Praja Palana Application acknowledgment (for cash & cylinder benefits)',
      'Ration Card / Food Security Card (FSC)'
    ],
    applicationProcess: [
      'For bus travel: Show Aadhaar Card or Telangana domicile photo ID to bus conductor for Zero Ticket',
      'For financial & gas cylinder benefits: Apply through Praja Palana application centres or official portal'
    ],
    deadline: 'Open Year Round',
    deadlineDate: '2026-12-31',
    isDeadlineApproaching: false,
    officialWebsite: 'https://telangana.gov.in',
    officialSource: 'Government of Telangana, Transport & Civil Supplies Dept',
    lastUpdated: 'August 2026',
    tags: ['telangana', 'state scheme', 'women', 'free bus', 'mahalaxmi', 'tgsrtc']
  },
  {
    id: 'telangana-overseas-vidya-nidhi',
    name: 'Telangana Overseas Vidya Nidhi Scheme (Ambedkar & Jyotiba Phule)',
    slug: 'telangana-overseas-vidya-nidhi',
    shortDescription: 'Financial assistance grant of ₹20 Lakhs plus one-way airfare for BC, EBC, SC, ST, and Minority students pursuing PG or PhD abroad.',
    description: 'The Government of Telangana sanctions ₹20,00,000 financial grant in two installments along with visa facilitation and flight tickets to eligible meritorious backward class, scheduled caste, and minority students from Telangana pursuing Masters and Doctoral programs in accredited foreign universities in the USA, UK, Australia, Canada, and Germany.',
    category: 'Scholarships',
    state: 'Telangana',
    governmentLevel: 'State',
    department: 'BC Welfare & Scheduled Castes Development Department, Govt of Telangana',
    financialBenefitAmount: '₹20,00,000 Direct Grant + One-way Economy Airfare',
    benefits: [
      '₹20 Lakhs direct financial assistance disbursed in two installments (₹10 Lakhs upon landing and ₹10 Lakhs upon passing 1st semester)',
      'One-way flight passage charges and visa processing fee reimbursement',
      'Exemption from institutional loan collateral for international studies'
    ],
    eligibility: [
      'Must be a permanent domiciled resident of Telangana State',
      'Belonging to BC, EBC, SC, ST, or Minority communities',
      'Maximum age limit of 35 years as on the date of notification',
      'Annual family income from all sources must not exceed ₹5.00 Lakhs per annum',
      'Must have secured minimum 60% marks in Graduation (Degree / Engineering)',
      'Valid score in GRE / GMAT / TOEFL / IELTS and confirmed I-20 or admission letter'
    ],
    eligibilityRules: {
      minAge: 20,
      maxAge: 35,
      states: ['Telangana'],
      categories: ['OBC', 'SC', 'ST', 'EWS', 'Minority'],
      maxIncome: 500000,
      requiresStudent: true
    },
    requiredDocuments: [
      'Aadhaar Card with Telangana residential address',
      'Integrated Caste and Domicile Certificate issued by MeeSeva',
      'Income Certificate issued by Tahsildar (under ₹5 Lakhs)',
      'Graduation Degree Certificate & Consolidated Marksheet (min 60%)',
      'GRE / GMAT and TOEFL / IELTS score cards',
      'Foreign University Admission Offer Letter & I-20 Form',
      'Valid Indian Passport and Student Visa copy'
    ],
    applicationProcess: [
      'Apply online on Telangana ePASS Overseas portal (telanganaepass.cgg.gov.in)',
      'Upload academic records, foreign university admission letter, and MeeSeva certificates',
      'Attend state verification interview and counseling before the State Selection Committee',
      'Sanction proceedings issued and funds credited via foreign currency DBT'
    ],
    deadline: '30 October 2026',
    deadlineDate: '2026-10-30',
    isDeadlineApproaching: false,
    officialWebsite: 'https://telanganaepass.cgg.gov.in',
    officialSource: 'BC Welfare Department & SCDD, Government of Telangana',
    lastUpdated: 'August 2026',
    tags: ['telangana', 'state scheme', 'overseas scholarship', 'vidya nidhi', 'masters', 'phd', 'foreign studies']
  },
  {
    id: 'telangana-vidya-jyothi',
    name: 'Telangana Chief Minister’s Meritorious Student Academic Assistance',
    slug: 'telangana-vidya-jyothi',
    shortDescription: 'Annual incentive grant of ₹20,000 to ₹35,000 and free digital study kit for college students in Telangana.',
    description: 'Special welfare assistance scheme enacted by the Government of Telangana to support undergraduate, polytechnic, engineering, and medical students with textbook grants, digital learning kits, and living allowances.',
    category: 'Scholarships',
    state: 'Telangana',
    governmentLevel: 'State',
    department: 'Higher Education Department, Government of Telangana',
    financialBenefitAmount: '₹25,000 annual academic allowance + digital study toolkit',
    benefits: [
      'Direct annual cash incentive of ₹25,000 directly deposited into the student’s bank account',
      'Subsidized digital equipment and academic textbook allowance',
      'Coverage for college examination fees and hostel maintenance'
    ],
    eligibility: [
      'Permanent domiciled resident student of Telangana',
      'Currently enrolled in full-time recognized degree, diploma, or professional university courses in Telangana',
      'Annual family income under ₹2.5 Lakhs per annum',
      'Minimum 75% attendance in current academic year'
    ],
    eligibilityRules: {
      minAge: 16,
      maxAge: 30,
      states: ['Telangana'],
      maxIncome: 250000,
      requiresStudent: true
    },
    requiredDocuments: [
      'Aadhaar Card showing Telangana address',
      'Current College Bonafide / Study Certificate',
      'Income Certificate issued by Tahsildar',
      'Previous semester / year marks sheet',
      'Aadhaar-seeded Bank Account Passbook'
    ],
    applicationProcess: [
      'Apply online via Telangana ePASS or Praja Palana student services portal',
      'College Principal verifies student bonafide details and semester attendance',
      'District Welfare Officer approves the DBT sanction'
    ],
    deadline: '15 November 2026',
    deadlineDate: '2026-11-15',
    isDeadlineApproaching: false,
    officialWebsite: 'https://telanganaepass.cgg.gov.in',
    officialSource: 'Higher Education Department, Government of Telangana',
    lastUpdated: 'August 2026',
    tags: ['telangana', 'state scheme', 'scholarship', 'student', 'college', 'academic assistance']
  },
  {
    id: 'telangana-task-training',
    name: 'Telangana Academy for Skill and Knowledge (TASK) Youth Training Subsidy',
    slug: 'telangana-task-training',
    shortDescription: '100% subsidized industry-aligned IT, AI, electronics, and aerospace certifications and placement drives for Telangana college students.',
    description: 'An initiative of the IT, E&C Department, Government of Telangana, to enhance employability and industry readiness among degree, polytechnic, and engineering students across Telangana through subsidized corporate skill certifications and campus drives.',
    category: 'Student Welfare',
    state: 'Telangana',
    governmentLevel: 'State',
    department: 'Information Technology, Electronics & Communications (ITE&C), Govt of Telangana',
    financialBenefitAmount: '100% subsidized technology certifications (worth ₹50,000+) & direct recruitment drives',
    benefits: [
      'Full subsidy on global tech certifications in Cloud, AI, Full-Stack, VLSI, and Automotive software',
      'Exclusive recruitment placement drives with top tech and manufacturing MNCs',
      'Soft skills, aptitude, and interview preparation workshops'
    ],
    eligibility: [
      'Students pursuing Polytechnic, Degree, B.Tech, MCA, or MBA in recognized Telangana colleges',
      'Domicile of Telangana State',
      'Age between 17 and 28 years'
    ],
    eligibilityRules: {
      minAge: 17,
      maxAge: 28,
      states: ['Telangana'],
      requiresStudent: true
    },
    requiredDocuments: [
      'College Identity Card',
      'Aadhaar Card with Telangana address',
      'Semester Enrollment confirmation'
    ],
    applicationProcess: [
      'Register online on TASK official portal (task.telangana.gov.in) with student college roll number',
      'Select technical training modules and industry partner tracks',
      'Attend online/offline labs and appear for campus recruitment'
    ],
    deadline: 'Open Year Round',
    deadlineDate: '2026-12-31',
    isDeadlineApproaching: false,
    officialWebsite: 'https://task.telangana.gov.in',
    officialSource: 'ITE&C Department, Government of Telangana',
    lastUpdated: 'August 2026',
    tags: ['telangana', 'state scheme', 'skill development', 'training', 'task', 'student', 'jobs']
  },
  {
    id: 'telangana-rythu-bharosa',
    name: 'Telangana Rythu Bharosa Farmer Investment Support Scheme',
    slug: 'telangana-rythu-bharosa',
    shortDescription: 'Direct financial assistance of ₹15,000 per acre per year for farmers and tenant cultivators in Telangana.',
    description: 'Rythu Bharosa is the flagship agriculture input and livelihood assistance initiative of the Government of Telangana providing ₹15,000 per acre annually for Kharif and Rabi crop cultivation to landowning farmers and verified tenant cultivators.',
    category: 'Agriculture',
    state: 'Telangana',
    governmentLevel: 'State',
    department: 'Agriculture and Cooperation Department, Government of Telangana',
    financialBenefitAmount: '₹15,000 per acre per year (₹7,500 per crop season)',
    benefits: [
      '₹15,000 per acre annually credited directly to farmer bank account via DBT',
      'Covers seeds, fertilizers, pesticides, field preparation, and labour costs',
      'Free crop insurance coverage under state agricultural welfare guidelines'
    ],
    eligibility: [
      'Farmer or tenant cultivator resident in Telangana',
      'Holding agricultural land recorded in Dharani portal',
      'Tenant cultivators with authorized cultivation registration cards'
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 100,
      states: ['Telangana'],
      requiresFarmer: true
    },
    requiredDocuments: [
      'Pattadar Passbook / Dharani Land Record Record',
      'Aadhaar Card of cultivator',
      'Aadhaar-seeded Bank Passbook'
    ],
    applicationProcess: [
      'Land records auto-verified through Dharani portal database',
      'Tenant cultivators submit applications through Village Agriculture Extension Officer (AEO)',
      'DBT credited directly before each sowing season'
    ],
    deadline: 'Open Year Round',
    deadlineDate: '2026-12-31',
    isDeadlineApproaching: false,
    officialWebsite: 'https://dharani.telangana.gov.in',
    officialSource: 'Government of Telangana, Agriculture Department',
    lastUpdated: 'August 2026',
    tags: ['telangana', 'state scheme', 'agriculture', 'farmer', 'rythu bharosa', 'dbt']
  },
  {
    id: 'telangana-kalyana-lakshmi',
    name: 'Telangana Kalyana Lakshmi & Shaadi Mubarak Scheme',
    slug: 'telangana-kalyana-lakshmi',
    shortDescription: 'One-time financial assistance of ₹1,00,116 for marriage of brides from SC, ST, BC, EBC, and Minority families.',
    description: 'The Government of Telangana sanctions one-time financial support of ₹1,00,116 to unmarried girls belonging to SC, ST, BC, EBC, and Minority communities at the time of marriage to alleviate financial burdens on vulnerable families.',
    category: 'Women',
    state: 'Telangana',
    governmentLevel: 'State',
    department: 'Scheduled Castes Development & Backward Classes Welfare Dept, Telangana',
    financialBenefitAmount: '₹1,00,116 One-Time Marriage Financial Grant',
    benefits: [
      '₹1,00,116 deposited directly into the bank account of the bride’s mother',
      'Prevents child marriage by enforcing strict 18+ age verification',
      'Covers marriage expenses and provides economic security'
    ],
    eligibility: [
      'Bride must be a permanent resident of Telangana State',
      'Must have completed 18 years of age at marriage',
      'Belonging to SC, ST, BC, EBC, or Minority communities',
      'Combined parental income must not exceed ₹2,00,000 per year'
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 40,
      states: ['Telangana'],
      genders: ['female'],
      maxIncome: 200000
    },
    requiredDocuments: [
      'Bride and Groom’s Aadhaar Cards and Age Proofs (SSC or Birth Certificate)',
      'Income Certificate issued by Tahsildar (under ₹2 Lakhs)',
      'Caste Certificate issued through MeeSeva',
      'Marriage Invitation Card and Wedding Photo',
      'Aadhaar-seeded Bank Account of Bride’s Mother'
    ],
    applicationProcess: [
      'Apply online on Telangana ePASS Kalyana Lakshmi portal',
      'Upload bride, groom, and parents KYC and marriage documents',
      'Local Revenue Inspector and Tahsildar conduct physical verification and issue sanction'
    ],
    deadline: 'Open Year Round',
    deadlineDate: '2026-12-31',
    isDeadlineApproaching: false,
    officialWebsite: 'https://telanganaepass.cgg.gov.in',
    officialSource: 'Government of Telangana, Department of Welfare',
    lastUpdated: 'August 2026',
    tags: ['telangana', 'state scheme', 'women', 'marriage assistance', 'kalyana lakshmi', 'shaadi mubarak']
  },
  {
    id: 'telangana-aarogyasri',
    name: 'Telangana Rajiv Aarogyasri Universal Health Scheme',
    slug: 'telangana-aarogyasri',
    shortDescription: 'Cashless medical treatment up to ₹10,00,000 per family per year in empanelled government and private super-specialty hospitals.',
    description: 'Rajiv Aarogyasri is the flagship cashless healthcare insurance scheme of the Government of Telangana providing free in-patient treatment, surgery, and follow-up care up to ₹10 Lakhs per family annually across 1,600+ network hospitals.',
    category: 'Healthcare',
    state: 'Telangana',
    governmentLevel: 'State',
    department: 'Aarogyasri Health Care Trust, Department of Health, Medical & Family Welfare, Telangana',
    financialBenefitAmount: '₹10,00,000 Cashless Medical Coverage per family per year',
    benefits: [
      '100% cashless hospitalization, surgical procedures, diagnostics, and ICU care up to ₹10 Lakhs',
      'Free post-operative medicines and follow-up consultation package',
      'Coverage for 1,672+ secondary and tertiary medical and surgical therapies'
    ],
    eligibility: [
      'Permanent resident family in Telangana State',
      'Holding Telangana Food Security Card (White Ration Card) or Aarogyasri Health Card',
      'No age restriction'
    ],
    eligibilityRules: {
      minAge: 0,
      maxAge: 100,
      states: ['Telangana']
    },
    requiredDocuments: [
      'Aarogyasri Card or Telangana Food Security Card (White Ration Card)',
      'Aadhaar Card of patient and family members'
    ],
    applicationProcess: [
      'Visit any empanelled network government or private hospital in Telangana',
      'Approach Aarogya Mithra helpdesk with Ration Card and Aadhaar Card',
      'Instant electronic pre-authorization and cashless treatment admission'
    ],
    deadline: 'Open Year Round',
    deadlineDate: '2026-12-31',
    isDeadlineApproaching: false,
    officialWebsite: 'https://aarogyasri.telangana.gov.in',
    officialSource: 'Aarogyasri Health Care Trust, Government of Telangana',
    lastUpdated: 'August 2026',
    tags: ['telangana', 'state scheme', 'healthcare', 'aarogyasri', 'hospital', 'cashless health']
  },
  {
    id: 'telangana-gruha-jyothi',
    name: 'Telangana Gruha Jyothi Free Electricity Scheme',
    slug: 'telangana-gruha-jyothi',
    shortDescription: 'Zero electricity bill up to 200 units of domestic power consumption every month for all domestic households in Telangana.',
    description: 'The Gruha Jyothi scheme guarantees up to 200 units of free domestic electricity consumption every month to all resident households in Telangana holding Food Security Cards or Praja Palana applications.',
    category: 'Housing',
    state: 'Telangana',
    governmentLevel: 'State',
    department: 'Energy Department, Government of Telangana',
    financialBenefitAmount: '100% Zero electricity bill for up to 200 units per month (saving ₹1,200 to ₹1,800/month)',
    benefits: [
      'Zero bill up to 200 units of electricity per billing cycle for domestic consumption',
      'Automatic bill waiver credited in monthly DISCOM electricity bills',
      'Covers all domestic consumers across rural and urban Telangana'
    ],
    eligibility: [
      'Permanent resident domestic household in Telangana',
      'Monthly domestic power consumption within 200 units',
      'Holding valid Food Security Card (Ration Card) or Praja Palana registration',
      'Aadhaar linked to domestic electricity service connection number (USCNO)'
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 100,
      states: ['Telangana']
    },
    requiredDocuments: [
      'Aadhaar Card of head of family',
      'Electricity Consumer Number (USCNO) from DISCOM bill (TSSPDCL / TSNPDCL)',
      'Telangana Food Security Card (White Ration Card)'
    ],
    applicationProcess: [
      'Link Aadhaar with electricity Service Connection Number (USCNO) on DISCOM portal or MeeSeva',
      'Eligible consumers receive zero-rupee electricity bills automatically'
    ],
    deadline: 'Open Year Round',
    deadlineDate: '2026-12-31',
    isDeadlineApproaching: false,
    officialWebsite: 'https://telangana.gov.in',
    officialSource: 'Energy Department, Government of Telangana',
    lastUpdated: 'August 2026',
    tags: ['telangana', 'state scheme', 'gruha jyothi', 'free electricity', 'power', 'housing']
  },
  {
    id: 'telangana-indiramma-indlu',
    name: 'Telangana Indiramma Indlu Pucca Housing Scheme',
    slug: 'telangana-indiramma-indlu',
    shortDescription: 'Financial subsidy of ₹5,00,000 for constructing a pucca house for homeless and low-income families in Telangana.',
    description: 'Under the Indiramma Indlu scheme, the Government of Telangana sanctions ₹5,00,000 direct financial grant in 4 construction stage installments for eligible families owning a residential plot or homeless citizens across Telangana.',
    category: 'Housing',
    state: 'Telangana',
    governmentLevel: 'State',
    department: 'Telangana State Housing Corporation Limited (TGSHCL)',
    financialBenefitAmount: '₹5,00,000 direct cash construction assistance in 4 phases',
    benefits: [
      '₹5 Lakhs total grant disbursed in 4 stage-wise geo-tagged installments (Basement, Lintel, Roof, Completion)',
      'Free building layout plan and water/electricity connection facilitation',
      'Additional subsidized steel and cement quotas'
    ],
    eligibility: [
      'Permanent resident of Telangana without a permanent pucca house',
      'Annual family income under ₹3,00,000 or holding Food Security Card',
      'Owning a residential plot of at least 50 sq yards'
    ],
    eligibilityRules: {
      minAge: 21,
      maxAge: 70,
      states: ['Telangana'],
      maxIncome: 300000
    },
    requiredDocuments: [
      'Aadhaar Card and Food Security Card',
      'Residential plot title deed / patta / possession certificate',
      'Income Certificate issued by MeeSeva',
      'Bank passbook linked to Aadhaar'
    ],
    applicationProcess: [
      'Apply online through TGSHCL portal or at Grama / Ward Sabha',
      'Engineers conduct geo-tagged site inspection and sanction proceedings',
      'Installment amounts credited directly via Aadhaar-linked DBT upon stage completion'
    ],
    deadline: '31 December 2026',
    deadlineDate: '2026-12-31',
    isDeadlineApproaching: false,
    officialWebsite: 'https://housing.telangana.gov.in',
    officialSource: 'Telangana State Housing Corporation Limited',
    lastUpdated: 'August 2026',
    tags: ['telangana', 'state scheme', 'housing', 'indiramma indlu', 'poverty alleviation', 'construction']
  },
  {
    id: 'telangana-tpride-msme',
    name: 'Telangana T-PRIDE & TS-iPASS Entrepreneur Enterprise Incentive',
    slug: 'telangana-tpride-msme',
    shortDescription: 'Up to 35% capital investment subsidy (max ₹75 Lakhs) and 5% interest subsidy for small businesses, shop owners, and entrepreneurs.',
    description: 'Telangana Program for Rapid Incubation of Dalit and BC Entrepreneurs (T-PRIDE) and TS-iPASS offer significant capital investment subsidies, power cost rebates, and interest subvention for commercial ventures, shops, transport vehicles, and MSME manufacturing/service units.',
    category: 'Business',
    state: 'Telangana',
    governmentLevel: 'State',
    department: 'Industries & Commerce Department, Government of Telangana',
    financialBenefitAmount: '35% to 45% Capital Investment Subsidy (up to ₹75,00,000) + 5% Interest Subvention',
    benefits: [
      '35% to 45% capital subsidy on machinery, equipment, and transport commercial vehicles',
      '5% interest subsidy on bank enterprise loans for up to 5 years',
      '100% stamp duty and transfer duty reimbursement on industrial / commercial land purchase',
      'Rebate of ₹1.50 per unit on power bills for micro and small units'
    ],
    eligibility: [
      'Resident entrepreneur, shopkeeper, or business proprietor in Telangana',
      'Registered under MSME / Udyam portal or commercial license',
      'New or expanding micro, small, or medium enterprise (commercial, manufacturing, or service)'
    ],
    eligibilityRules: {
      minAge: 21,
      maxAge: 65,
      states: ['Telangana'],
      requiresBusinessOwner: true
    },
    requiredDocuments: [
      'Udyam Registration Certificate',
      'Aadhaar Card and PAN Card of business proprietor',
      'Detailed Project Report (DPR) / Quotations for machinery or commercial vehicle',
      'Bank Sanction Letter for Term Loan',
      'Telangana Caste / Category certificate (for enhanced T-PRIDE incentives)'
    ],
    applicationProcess: [
      'Register on Telangana Industries portal (tsipass.telangana.gov.in)',
      'Submit T-PRIDE incentive claim with bank sanction letter and invoices',
      'District Industries Centre (DIC) inspects unit and releases subsidy via DBT'
    ],
    deadline: 'Open Year Round',
    deadlineDate: '2026-12-31',
    isDeadlineApproaching: false,
    officialWebsite: 'https://ipass.telangana.gov.in',
    officialSource: 'Industries & Commerce Department, Govt of Telangana',
    lastUpdated: 'August 2026',
    tags: ['telangana', 'state scheme', 'business', 'msme', 'tpride', 'entrepreneur', 'self employed', 'subsidy']
  },
  {
    id: 'telangana-rajiv-yuva-shakthi',
    name: 'Telangana Rajiv Yuva Shakthi Self-Employment & Skill Subsidy',
    slug: 'telangana-rajiv-yuva-shakthi',
    shortDescription: 'Financial grant up to ₹5,00,000 (with 80% state subsidy) and free skill certifications for unemployed educated youth in Telangana.',
    description: 'Special youth welfare initiative by the Government of Telangana to empower educated unemployed youth with subsidized loans up to ₹5 Lakhs for establishing retail businesses, digital services, and transport ventures alongside employment placement drives.',
    category: 'Employment',
    state: 'Telangana',
    governmentLevel: 'State',
    department: 'Youth Advancement, Tourism & Culture (YAT&C) & SC/BC Welfare Depts, Telangana',
    financialBenefitAmount: 'Up to ₹5,00,000 project funding with 60% to 80% non-repayable government subsidy',
    benefits: [
      '60% to 80% upfront government subsidy on bank loan for self-employment enterprises',
      'Free EDP (Entrepreneurship Development Program) residential training',
      'Direct linkage to government procurement and youth cooperative societies'
    ],
    eligibility: [
      'Unemployed youth resident in Telangana State',
      'Age between 18 and 35 years (up to 40 years for SC/ST)',
      'Passed 10th, 12th, ITI, Diploma, or Degree',
      'Not currently in full-time government or formal corporate employment'
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 38,
      states: ['Telangana'],
      requiresUnemployed: true
    },
    requiredDocuments: [
      'Aadhaar Card and Domicile Certificate',
      'Educational Qualification certificates (SSC / Intermediate / Degree)',
      'Caste and Income Certificate issued by MeeSeva',
      'Proposed micro-project summary'
    ],
    applicationProcess: [
      'Apply online on Telangana Youth Services portal or through District Youth Welfare Officer',
      'Selection by District Level Committee headed by District Collector',
      'Direct disbursement through partner banks with state subsidy component'
    ],
    deadline: '30 November 2026',
    deadlineDate: '2026-11-30',
    isDeadlineApproaching: false,
    officialWebsite: 'https://telangana.gov.in',
    officialSource: 'Government of Telangana, Department of Youth Advancement',
    lastUpdated: 'August 2026',
    tags: ['telangana', 'state scheme', 'employment', 'unemployed', 'youth', 'self employment', 'subsidy']
  },
  {
    id: 'telangana-cheyutha-pension',
    name: 'Telangana Cheyutha Social Security Pension',
    slug: 'telangana-cheyutha-pension',
    shortDescription: 'Monthly social security pension of ₹4,000 for senior citizens (60+), widows, and ₹6,000 for persons with disabilities in Telangana.',
    description: 'The Cheyutha Pension Scheme is a social security safety net provided by the Society for Elimination of Rural Poverty (SERP), Government of Telangana, offering ₹4,000 monthly financial pension to senior citizens aged 60 and above, widows, and ₹6,000 for individuals with disabilities.',
    category: 'Pension',
    state: 'Telangana',
    governmentLevel: 'State',
    department: 'Panchayat Raj & Rural Development / SERP, Government of Telangana',
    financialBenefitAmount: '₹4,000 per month (₹6,000/month for PwD) deposited directly via DBT',
    benefits: [
      'Monthly unconditional pension of ₹4,000 disbursed on the 1st of every month',
      'Doorstep biometric delivery or direct credit into postal/bank accounts',
      'Provides financial dignity and independence for elderly citizens'
    ],
    eligibility: [
      'Resident citizen of Telangana aged 60 years or above (Old Age Pension)',
      'Belonging to BPL / Food Security Card holding families',
      'Not receiving any other statutory government service pension'
    ],
    eligibilityRules: {
      minAge: 60,
      maxAge: 100,
      states: ['Telangana'],
      requiresSeniorCitizen: true,
      maxIncome: 200000
    },
    requiredDocuments: [
      'Aadhaar Card proving age (60+ years)',
      'Telangana Food Security Card (White Ration Card)',
      'Bank Account Passbook / Post Office Savings Account',
      'Passport size photograph'
    ],
    applicationProcess: [
      'Submit application at local Gram Panchayat / Ward Office or MeeSeva centre',
      'MPDO / Municipal Commissioner conducts field verification',
      'Pension sanctioned and card issued with monthly DBT disbursement'
    ],
    deadline: 'Open Year Round',
    deadlineDate: '2026-12-31',
    isDeadlineApproaching: false,
    officialWebsite: 'https://aasara.telangana.gov.in',
    officialSource: 'SERP, Panchayat Raj & Rural Development, Govt of Telangana',
    lastUpdated: 'August 2026',
    tags: ['telangana', 'state scheme', 'pension', 'senior citizen', 'cheyutha', 'aasara', 'elderly']
  },
  {
    id: 'telangana-nethanna-bima',
    name: 'Telangana Nethanna Bima & Handloom Weaver Livelihood Scheme',
    slug: 'telangana-nethanna-bima',
    shortDescription: '₹5,00,000 life insurance coverage and raw material / yarn input subsidy for traditional weavers and handloom artisans in Telangana.',
    description: 'Flagship artisan and handloom welfare scheme implemented by the Department of Handlooms and Textiles, Government of Telangana, providing comprehensive insurance cover of ₹5 Lakhs along with 50% yarn subsidy (Chenetha Mithra) and thrift fund assistance to handloom and powerloom weavers.',
    category: 'Employment',
    state: 'Telangana',
    governmentLevel: 'State',
    department: 'Department of Handlooms and Textiles, Government of Telangana',
    financialBenefitAmount: '₹5,00,000 comprehensive insurance + 50% yarn subsidy up to ₹3,000/month',
    benefits: [
      '₹5 Lakhs accidental and natural death insurance coverage (100% premium borne by Govt)',
      '50% cash subsidy on purchase of hank yarn, dyes, and chemicals via DBT',
      'Interest subvention and working capital loan guarantees for weaver cooperatives'
    ],
    eligibility: [
      'Traditional handloom or powerloom weaver / artisan resident in Telangana',
      'Age between 18 and 59 years',
      'Holding Weaver Identity Card issued by Assistant Director of Handlooms'
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 59,
      states: ['Telangana'],
      requiresArtisan: true
    },
    requiredDocuments: [
      'Weaver Identity Card / Handloom Worker Certificate',
      'Aadhaar Card and Domicile Certificate',
      'Bank Passbook linked with Aadhaar'
    ],
    applicationProcess: [
      'Register with local Weavers Cooperative Society or Assistant Director of Handlooms & Textiles',
      'Submit Aadhaar and loom details for biometric enumeration',
      'Insurance policy activated and DBT subsidy directly credited on yarn purchases'
    ],
    deadline: 'Open Year Round',
    deadlineDate: '2026-12-31',
    isDeadlineApproaching: false,
    officialWebsite: 'https://handlooms.telangana.gov.in',
    officialSource: 'Department of Handlooms and Textiles, Government of Telangana',
    lastUpdated: 'August 2026',
    tags: ['telangana', 'state scheme', 'artisan', 'weaver', 'nethanna bima', 'handloom', 'daily wage worker']
  },

  // ===================== ANDHRA PRADESH =====================
  {
    id: 'ap-annadata-sukhibhava',
    name: 'Andhra Pradesh Annadata Sukhibhava - PM KISAN Scheme',
    slug: 'ap-annadata-sukhibhava',
    shortDescription: 'Annual financial support of ₹20,000 per farmer family in Andhra Pradesh (integrating ₹6,000 PM-KISAN + ₹14,000 AP State Assistance).',
    description: 'Flagship farmer welfare initiative launched by the Government of Andhra Pradesh (formerly YSR Rythu Bharosa) providing ₹20,000 annual financial aid directly to farmer bank accounts to cover seed, fertilizer, and crop cultivation expenses.',
    category: 'Agriculture',
    state: 'Andhra Pradesh',
    governmentLevel: 'State',
    department: 'Department of Agriculture & Cooperation, Government of Andhra Pradesh',
    financialBenefitAmount: '₹20,000 per year (₹14,000 State + ₹6,000 PM-KISAN DBT)',
    benefits: [
      '₹20,000 annual direct cash transfer credited into farmer bank accounts in three seasonal installments',
      'Extends coverage to both landholding farmers and tenant farmers holding CCRC cards',
      'Free 9-hour daytime agricultural power supply and crop insurance protection'
    ],
    eligibility: [
      'Farmer resident of Andhra Pradesh owning agricultural land or recognized tenant cultivator',
      'Tenant farmers holding valid Crop Cultivator Rights Card (CCRC)',
      'Registered on e-Crop portal with active Aadhaar DBT bank account'
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 100,
      states: ['Andhra Pradesh'],
      requiresFarmer: true
    },
    requiredDocuments: [
      'Pattadar Passbook / 1B Land record title',
      'Crop Cultivator Rights Card (CCRC) for tenant cultivators',
      'Aadhaar Card and Aadhaar-seeded Bank Passbook'
    ],
    applicationProcess: [
      'Farmer registration through Rythu Seva Kendras / Village Secretariats',
      'Social audit and verification via e-Crop and Navasakam portal',
      'Direct DBT credit into beneficiary bank account'
    ],
    deadline: 'Open Year Round',
    deadlineDate: '2026-12-31',
    isDeadlineApproaching: false,
    officialWebsite: 'https://navasakam2.apcfss.in',
    officialSource: 'Government of Andhra Pradesh, Agriculture Department',
    lastUpdated: 'August 2026',
    tags: ['andhra pradesh', 'ap', 'annadata sukhibhava', 'farmer', 'rythu bharosa', 'agriculture', 'dbt', 'super six'],
    targetEmploymentStatuses: ['Farmer']
  },
  {
    id: 'ap-ntr-vaidya-seva',
    name: 'Dr. NTR Vaidya Seva Universal Health Scheme',
    slug: 'ap-ntr-vaidya-seva',
    shortDescription: 'Cashless medical treatment up to ₹25,00,000 per family per year in empanelled corporate and government hospitals across AP and major cities.',
    description: 'Dr. NTR Vaidya Seva (formerly Dr. YSR Aarogyasri) provides 100% cashless hospitalization up to ₹25 Lakhs per family annually covering 3,257 medical, surgical, oncology, and transplant procedures in network hospitals across Andhra Pradesh, Hyderabad, Bengaluru, and Chennai.',
    category: 'Healthcare',
    state: 'Andhra Pradesh',
    governmentLevel: 'State',
    department: 'Dr. NTR Vaidya Seva Trust, Government of Andhra Pradesh',
    financialBenefitAmount: '₹25,00,000 Cashless Hospitalization per family per year + Post-operative recovery allowance',
    benefits: [
      'Complete cashless hospital coverage up to ₹25,00,000 for 3,257 notified medical procedures',
      'Aarogya Aasara post-operative recuperative financial allowance of up to ₹5,000 per month',
      'Access to top multi-specialty network hospitals in AP, Hyderabad, Bengaluru, and Chennai'
    ],
    eligibility: [
      'Resident families of Andhra Pradesh with annual family income under ₹5 Lakhs',
      'Holding AP Rice Card (White Ration Card) or NTR Vaidya Seva Health Card'
    ],
    eligibilityRules: {
      minAge: 0,
      maxAge: 100,
      states: ['Andhra Pradesh'],
      maxIncome: 500000
    },
    requiredDocuments: [
      'Aadhaar Card of patient',
      'AP Rice Card / NTR Vaidya Seva Card',
      'Medical prescription or referral from government hospital/empanelled centre'
    ],
    applicationProcess: [
      'Visit any empanelled network hospital in AP, Hyderabad, Bengaluru, or Chennai',
      'Approach Vaidya Seva Mithra at the hospital helpdesk',
      'Instant electronic pre-authorization and free cashless admission'
    ],
    deadline: 'Open Year Round',
    deadlineDate: '2026-12-31',
    isDeadlineApproaching: false,
    officialWebsite: 'https://aarogyasri.ap.gov.in',
    officialSource: 'Dr. NTR Vaidya Seva Trust, Government of Andhra Pradesh',
    lastUpdated: 'August 2026',
    tags: ['andhra pradesh', 'ap', 'ntr vaidya seva', 'healthcare', 'aarogyasri', 'cashless hospital', 'health card']
  },
  {
    id: 'ap-thalliki-vandanam',
    name: 'Andhra Pradesh Thalliki Vandanam Scheme',
    slug: 'ap-thalliki-vandanam',
    shortDescription: 'Annual financial incentive of ₹15,000 for every school-going child deposited directly into the mother’s bank account under the Super Six initiative.',
    description: 'Thalliki Vandanam is an education incentive scheme under the Andhra Pradesh Super Six welfare package (restructured from the earlier Amma Vodi) that provides ₹15,000 per year per student to the mother’s account for all eligible school-going children in the household.',
    category: 'Scholarships',
    state: 'Andhra Pradesh',
    governmentLevel: 'State',
    department: 'School Education Department, Government of Andhra Pradesh',
    financialBenefitAmount: '₹15,000 per school-going child per year',
    benefits: [
      '₹15,000 direct benefit transfer credited into the mother’s Aadhaar-linked bank account',
      'Applicable to all school-going children from Class 1 to 12 in the family',
      'Supports school fees, uniform, stationery, and nutritional requirements'
    ],
    eligibility: [
      'Mother or recognized guardian of student studying in Class 1 to Intermediate (12th)',
      'Permanent resident of Andhra Pradesh',
      'Enrolled in recognized government, aided, or private schools/colleges',
      'Family annual income under ₹2.5 Lakhs (holding Rice Card)'
    ],
    eligibilityRules: {
      minAge: 5,
      maxAge: 19,
      states: ['Andhra Pradesh'],
      maxIncome: 250000,
      requiresStudent: true
    },
    requiredDocuments: [
      'Aadhaar Card of student and mother',
      'White Ration Card / AP Rice Card',
      'School Bonafide / Student Information System (UDISE) record',
      'Mother’s Bank Account Passbook'
    ],
    applicationProcess: [
      'School Headmaster verifies student enrollment and attendance on Child Info portal',
      'Village / Ward Sachivalayam conducts social audit verification',
      'Direct DBT credit by Andhra Pradesh Government into mother’s bank account'
    ],
    deadline: '31 October 2026',
    deadlineDate: '2026-10-31',
    isDeadlineApproaching: false,
    officialWebsite: 'https://jnanabhumi.ap.gov.in',
    officialSource: 'Department of School Education, Government of Andhra Pradesh',
    lastUpdated: 'August 2026',
    tags: ['andhra pradesh', 'ap', 'thalliki vandanam', 'amma vodi', 'education', 'school grant', 'super six']
  },
  // --- AP WOMEN SCHEMES ---
  {
    id: 'ap-maha-shakti-free-bus',
    name: 'Andhra Pradesh Maha Shakti Scheme (Free RTC Bus Travel for Women)',
    slug: 'ap-maha-shakti-free-bus',
    shortDescription: '100% free bus travel for all women and girls across Andhra Pradesh on APSRTC Palle Velugu, Ultra Palle Velugu, and Express buses under the Super Six package.',
    description: 'The Maha Shakti Free RTC Bus Travel Scheme is a hallmark initiative under the Andhra Pradesh Super Six welfare guarantees enacted by the NDA/TDP coalition government. It ensures safe, barrier-free, and completely zero-cost public transit for every girl child, student, working woman, and homemaker across the entire APSRTC bus network.',
    category: 'Women',
    state: 'Andhra Pradesh',
    governmentLevel: 'State',
    department: 'APSRTC & Transport Department, Government of Andhra Pradesh',
    financialBenefitAmount: '100% Free Public Transport on APSRTC Buses Statewide (Zero Fare)',
    benefits: [
      'Zero-fare travel across all APSRTC Palle Velugu, Express, and City Ordinary bus routes across Andhra Pradesh',
      'No monthly ceiling on number of journeys or distance traveled within the state borders',
      'Significant financial savings of ₹1,200 to ₹3,000 monthly for working women, vendors, and students'
    ],
    eligibility: [
      'All women, girls, and transgender persons of any age residing in Andhra Pradesh',
      'Production of valid photo identity / Aadhaar Card establishing AP domicile or identity'
    ],
    eligibilityRules: {
      minAge: 5,
      maxAge: 100,
      states: ['Andhra Pradesh'],
      genders: ['female']
    },
    requiredDocuments: [
      'Aadhaar Card or AP Residence Proof / Voter ID / Student ID for age verification'
    ],
    applicationProcess: [
      'Board any APSRTC Palle Velugu or Express bus within Andhra Pradesh',
      'Present Aadhaar or recognized photo ID card to the bus conductor',
      'Receive a Zero-Fare Passenger Ticket instantly with no out-of-pocket payment'
    ],
    deadline: 'Open Year Round',
    deadlineDate: '2026-12-31',
    isDeadlineApproaching: false,
    officialWebsite: 'https://apsrtc.ap.gov.in',
    officialSource: 'Andhra Pradesh State Road Transport Corporation (APSRTC)',
    lastUpdated: 'August 2026',
    tags: ['andhra pradesh', 'ap', 'maha shakti', 'women', 'free bus', 'apsrtc', 'super six'],
    targetEmploymentStatuses: ['Women']
  },
  {
    id: 'ap-maha-shakti-aadabidda-nidhi',
    name: 'Andhra Pradesh Maha Shakti Aadabidda Nidhi Scheme',
    slug: 'ap-maha-shakti-aadabidda-nidhi',
    shortDescription: 'Direct financial assistance of ₹1,500 per month (₹18,000 per year) deposited directly into the bank accounts of women aged 18 to 59 years in Andhra Pradesh.',
    description: 'Under the Super Six welfare framework, Aadabidda Nidhi provides a direct monthly allowance of ₹1,500 into the Aadhaar-seeded bank account of every adult woman resident in Andhra Pradesh between the ages of 18 and 59, securing basic economic autonomy and nutrition security.',
    category: 'Women',
    state: 'Andhra Pradesh',
    governmentLevel: 'State',
    department: 'Department of Women, Children, Disabled and Senior Citizens, Government of Andhra Pradesh',
    financialBenefitAmount: '₹1,500 per month (₹18,000 per year) DBT Direct Cash Transfer',
    benefits: [
      '₹1,500 monthly unconditional financial transfer credited directly into beneficiary bank account',
      '₹18,000 annual guaranteed financial safety net for women homemakers and informal workers',
      'Enhances household nutrition, healthcare independence, and emergency financial resilience'
    ],
    eligibility: [
      'Woman resident of Andhra Pradesh aged between 18 and 59 years',
      'Holding active AP White Ration Card (Rice Card)',
      'Aadhaar-seeded bank account enabled for NPCI DBT credit'
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 59,
      states: ['Andhra Pradesh'],
      genders: ['female'],
      maxIncome: 250000
    },
    requiredDocuments: [
      'Aadhaar Card of the woman applicant',
      'AP Rice Card / Ration Card',
      'Bank Account Passbook showing Aadhaar linkage',
      'Income Certificate (or Rice Card valid as income proof)'
    ],
    applicationProcess: [
      'Submit application at nearest Village / Ward Sachivalayam or online via GSWS portal',
      'Field verification by Village Social Welfare Assistant',
      'Monthly DBT credit disbursed directly on the specified DBT day each month'
    ],
    deadline: 'Open Year Round',
    deadlineDate: '2026-12-31',
    isDeadlineApproaching: false,
    officialWebsite: 'https://navasakam2.apcfss.in',
    officialSource: 'Department of Women Development and Child Welfare, Government of Andhra Pradesh',
    lastUpdated: 'August 2026',
    tags: ['andhra pradesh', 'ap', 'aadabidda nidhi', 'maha shakti', 'women', 'financial aid', 'super six', 'dbt'],
    targetEmploymentStatuses: ['Women']
  },
  {
    id: 'ap-deepam-2-gas-scheme',
    name: 'Andhra Pradesh Deepam 2.0 Scheme (3 Free LPG Cylinders)',
    slug: 'ap-deepam-2-gas-scheme',
    shortDescription: 'Free 3 domestic LPG cooking gas cylinder refills per year through 100% DBT subsidy reimbursement for women heads of households under the Super Six package.',
    description: 'Launched by the Government of Andhra Pradesh under the Super Six initiative, Deepam 2.0 provides 3 free domestic LPG cylinders annually (one cylinder every 4 months) through 100% full DBT subsidy reimbursement credited directly into the bank accounts of women heads of BPL families.',
    category: 'Women',
    state: 'Andhra Pradesh',
    governmentLevel: 'State',
    department: 'Civil Supplies & Consumer Affairs Department, Government of Andhra Pradesh',
    financialBenefitAmount: '3 Free Domestic LPG Gas Cylinders per year (100% Full Cost DBT Reimbursement)',
    benefits: [
      '3 free domestic LPG cylinder refills provided per household per year (approx. ₹2,600+ annual benefit)',
      '100% subsidy reimbursement credited into the woman’s bank account within 48 hours of gas delivery',
      'Eliminates biomass smoke, protecting maternal and infant respiratory health'
    ],
    eligibility: [
      'Permanent female resident of Andhra Pradesh',
      'Holding valid AP White Ration Card / Rice Card',
      'Active domestic LPG connection in the name of a female family member'
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 85,
      states: ['Andhra Pradesh'],
      genders: ['female'],
      maxIncome: 250000
    },
    requiredDocuments: [
      'Aadhaar Card of woman LPG consumer',
      'AP Rice Card / Ration Card',
      'LPG Connection Consumer Passbook (HPCL, BPCL, or IOCL)',
      'Aadhaar-seeded Bank Account'
    ],
    applicationProcess: [
      'Ensure Aadhaar and Rice Card are linked with your local LPG gas distributor',
      'Book standard domestic cylinder refill through agency, WhatsApp, or IVRS',
      'Full refill price is refunded automatically via DBT within 48 hours of delivery'
    ],
    deadline: 'Open Year Round',
    deadlineDate: '2026-12-31',
    isDeadlineApproaching: false,
    officialWebsite: 'https://spandana.ap.gov.in',
    officialSource: 'Civil Supplies Department, Government of Andhra Pradesh',
    lastUpdated: 'August 2026',
    tags: ['andhra pradesh', 'ap', 'deepam scheme', 'lpg gas', 'free cylinder', 'super six', 'women'],
    targetEmploymentStatuses: ['Women']
  },
  {
    id: 'ap-ysr-cheyutha-women',
    name: 'Andhra Pradesh YSR Cheyutha & Stree Nidhi Livelihood Scheme',
    slug: 'ap-ysr-cheyutha-women',
    shortDescription: 'Financial assistance of ₹18,750 per year (Total ₹75,000 over 4 years) for women aged 45–60 years from SC, ST, BC, and Minority communities to set up sustainable micro-enterprises.',
    description: 'YSR Cheyutha provides ₹18,750 per year for 4 consecutive years (totaling ₹75,000) directly to women between 45 and 60 years of age belonging to underprivileged SC, ST, BC, and Minority communities. In partnership with corporates like Amul, ITC, and HUL, the scheme facilitates dairy units, grocery stores, and poultry farming.',
    category: 'Women',
    state: 'Andhra Pradesh',
    governmentLevel: 'State',
    department: 'Department of Social Welfare & SERP, Government of Andhra Pradesh',
    financialBenefitAmount: '₹18,750 per year (Total ₹75,000 over 4 years) Direct Grant',
    benefits: [
      '₹18,750 annual grant transferred into the beneficiary’s bank account for 4 years',
      'Technical tie-ups with Amul, ITC, Procter & Gamble, and Reliance for wholesale supplies and buybacks',
      'Enables independent livelihood in cattle farming, retail stores, food processing, and tailoring'
    ],
    eligibility: [
      'Woman resident of Andhra Pradesh aged between 45 and 60 years',
      'Belonging to SC, ST, BC, or Minority communities',
      'Holding AP Rice Card with total family income under ₹1.44 Lakh (Rural) or ₹1.20 Lakh (Urban)'
    ],
    eligibilityRules: {
      minAge: 45,
      maxAge: 60,
      states: ['Andhra Pradesh'],
      genders: ['female'],
      maxIncome: 144000
    },
    requiredDocuments: [
      'Aadhaar Card of the woman applicant',
      'Caste and Integrated Community Certificate (SC/ST/BC/Minority)',
      'AP Rice Card / Income Certificate',
      'Aadhaar-seeded Bank Account Passbook'
    ],
    applicationProcess: [
      'Apply at your Village / Ward Secretariat (Sachivalayam) through the Welfare Assistant',
      'Verification of caste, age, and socioeconomic parameters through Navasakam',
      'DBT disbursement credited into bank account'
    ],
    deadline: 'Open Year Round',
    deadlineDate: '2026-12-31',
    isDeadlineApproaching: false,
    officialWebsite: 'https://navasakam2.apcfss.in',
    officialSource: 'Society for Elimination of Rural Poverty (SERP), Andhra Pradesh',
    lastUpdated: 'August 2026',
    tags: ['andhra pradesh', 'ap', 'cheyutha', 'women', 'livelihood', 'stree nidhi', 'micro enterprise'],
    targetEmploymentStatuses: ['Women']
  },
  {
    id: 'ap-kalyana-masthu',
    name: 'Andhra Pradesh YSR Kalyana Masthu & Shaadi Mubarak Scheme',
    slug: 'ap-kalyana-masthu',
    shortDescription: 'One-time financial marriage grant of up to ₹1,00,000 for poor brides from SC, ST, BC, and Minority communities with mandatory 10th pass qualification.',
    description: 'YSR Kalyana Masthu (and Shaadi Mubarak for Minorities) provides financial assistance up to ₹1,00,000 to impoverished brides from SC, ST, BC, Minority, and disabled families. To encourage education and eradicate child marriage, both the bride and groom must be at least 18 and 21 years old respectively, and both must have passed Class 10th (SSC).',
    category: 'Women',
    state: 'Andhra Pradesh',
    governmentLevel: 'State',
    department: 'Social Welfare & Minority Welfare Departments, Government of Andhra Pradesh',
    financialBenefitAmount: '₹1,00,000 (SC/ST/Minority) | ₹50,000 (BC) | ₹1,50,000 (Differently Abled)',
    benefits: [
      'Direct DBT credit of up to ₹1,00,000 directly into the bride’s bank account post-marriage',
      'Promotes educational attainment by requiring minimum Class 10th pass for bride and groom',
      'Provides financial independence to newlywed women in setting up home or small enterprise'
    ],
    eligibility: [
      'Bride must be a permanent resident of Andhra Pradesh',
      'Minimum age of 18 years for bride and 21 years for groom at the time of marriage',
      'Both bride and groom must have passed 10th Class (SSC)',
      'Total annual family income must be within BPL limits (Rice Card holder)'
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 45,
      states: ['Andhra Pradesh'],
      genders: ['female'],
      maxIncome: 144000
    },
    requiredDocuments: [
      'Bride and Groom Aadhaar Cards',
      'Class 10th SSC Passing Certificates of bride and groom',
      'Marriage Certificate or Marriage Registration Acknowledgement',
      'Caste Certificate and Rice Card'
    ],
    applicationProcess: [
      'Apply at Village / Ward Sachivalayam or Navasakam portal within 60 days of marriage',
      'Joint physical verification by Village Welfare & Education Assistant',
      'Grant disbursed directly into the bride’s bank account'
    ],
    deadline: 'Open Year Round',
    deadlineDate: '2026-12-31',
    isDeadlineApproaching: false,
    officialWebsite: 'https://navasakam2.apcfss.in',
    officialSource: 'Social Welfare Department, Government of Andhra Pradesh',
    lastUpdated: 'August 2026',
    tags: ['andhra pradesh', 'ap', 'kalyana masthu', 'shaadi mubarak', 'women', 'marriage aid'],
    targetEmploymentStatuses: ['Women']
  },

  // --- AP SENIOR CITIZEN SCHEMES ---
  {
    id: 'ap-ntr-bharosa-pension',
    name: 'Andhra Pradesh NTR Bharosa Senior Citizen Pension Scheme (Old Age Pension)',
    slug: 'ap-ntr-bharosa-pension',
    shortDescription: 'Enhanced monthly old age pension of ₹4,000 delivered directly at the doorstep on the 1st of every month for senior citizens aged 60+ in Andhra Pradesh.',
    description: 'Under the TDP/NDA coalition government and the Super Six guarantees, the flagship NTR Bharosa Pension (formerly YSR Pension Kanuka) was enhanced from ₹3,000 to ₹4,000 per month for senior citizens aged 60 years and above. The pension is disbursed punctually on the 1st day of every month directly at the elderly citizen’s doorstep by Village/Ward Secretariat volunteers.',
    category: 'Pension',
    state: 'Andhra Pradesh',
    governmentLevel: 'State',
    department: 'Department of Social Welfare & SERP, Government of Andhra Pradesh',
    financialBenefitAmount: '₹4,000 per month delivered directly at the doorstep on 1st of every month',
    benefits: [
      '₹4,000 monthly pension delivered in cash at the senior citizen’s doorstep on the 1st of each month',
      'Doorstep biometric authentication or facial recognition so elderly citizens do not need to visit banks or stand in lines',
      'Guaranteed lifelong economic security and dignity for senior citizens'
    ],
    eligibility: [
      'Resident of Andhra Pradesh aged 60 years or above',
      'Holding valid White Ration Card / AP Rice Card',
      'Total family income under ₹1.44 Lakh per annum (Rural) or ₹1.20 Lakh (Urban)',
      'Not a government employee or receiving government service pension'
    ],
    eligibilityRules: {
      minAge: 60,
      maxAge: 105,
      states: ['Andhra Pradesh'],
      requiresSeniorCitizen: true,
      maxIncome: 144000
    },
    requiredDocuments: [
      'Aadhaar Card of senior citizen (verifying age 60+)',
      'White Ration Card / AP Rice Card',
      'Voter Identity Card / Age proof certificate',
      'Bank Account Passbook (optional, for DBT mode)'
    ],
    applicationProcess: [
      'Submit application at nearest Village / Ward Sachivalayam (Gram/Ward Secretariat)',
      'Field verification and social audit by Welfare and Education Assistant',
      'Sanction card issued with monthly doorstep delivery starting on next 1st of month'
    ],
    deadline: 'Open Year Round',
    deadlineDate: '2026-12-31',
    isDeadlineApproaching: false,
    officialWebsite: 'https://sspensions.ap.gov.in',
    officialSource: 'Society for Elimination of Rural Poverty (SERP), Government of Andhra Pradesh',
    lastUpdated: 'August 2026',
    tags: ['andhra pradesh', 'ap', 'ntr bharosa', 'pension', 'senior citizen', 'old age pension', 'super six'],
    targetEmploymentStatuses: ['Senior Citizen']
  },
  {
    id: 'ap-senior-geriatric-vaidya-seva',
    name: 'Dr. NTR Vaidya Seva Geriatric & Senior Citizen Healthcare Support',
    slug: 'ap-senior-geriatric-vaidya-seva',
    shortDescription: '100% cashless hospitalization up to ₹25,00,000 for elderly citizens covering knee/hip replacements, cardiac stents, oncology, and Aarogya Aasara post-op allowance of ₹5,000/month.',
    description: 'Dr. NTR Vaidya Seva offers dedicated priority coverage for senior citizens aged 60+, providing completely cashless treatment up to ₹25,00,000 per family per year across 3,257 surgical, medical, and geriatric procedures. In addition, elderly patients undergoing surgery receive the Aarogya Aasara post-operative recovery allowance of up to ₹5,000 per month during bedrest.',
    category: 'Healthcare',
    state: 'Andhra Pradesh',
    governmentLevel: 'State',
    department: 'Dr. NTR Vaidya Seva Trust, Government of Andhra Pradesh',
    financialBenefitAmount: '₹25,00,000 Cashless Hospital Treatment + ₹5,000/month Aarogya Aasara Recovery Allowance',
    benefits: [
      'Cashless coverage up to ₹25,00,000 for cardiac surgeries, cataract surgeries, orthopedic knee/hip implants, dialysis, and cancer treatments',
      'Post-operative recuperative financial support (Aarogya Aasara) up to ₹5,000/month deposited directly into the senior citizen’s bank account',
      'Dedicated Vaidya Seva Mithra helpdesks providing priority wheelchair access and admission for elderly patients'
    ],
    eligibility: [
      'Senior citizen resident of Andhra Pradesh aged 60 years or above',
      'Holding AP Rice Card (White Ration Card) or NTR Vaidya Seva Card',
      'Family income within eligible ceiling (under ₹5 Lakhs per annum)'
    ],
    eligibilityRules: {
      minAge: 60,
      maxAge: 105,
      states: ['Andhra Pradesh'],
      requiresSeniorCitizen: true,
      maxIncome: 500000
    },
    requiredDocuments: [
      'Aadhaar Card of senior citizen',
      'AP Rice Card / NTR Vaidya Seva Health Card',
      'Doctor referral or medical diagnosis from government/empanelled hospital'
    ],
    applicationProcess: [
      'Visit any empanelled corporate or government hospital in AP, Hyderabad, Bengaluru, or Chennai',
      'Meet the Vaidya Seva Mithra at the hospital reception',
      'Instant electronic pre-authorization and free admission with zero out-of-pocket costs'
    ],
    deadline: 'Open Year Round',
    deadlineDate: '2026-12-31',
    isDeadlineApproaching: false,
    officialWebsite: 'https://aarogyasri.ap.gov.in',
    officialSource: 'Dr. NTR Vaidya Seva Trust, Government of Andhra Pradesh',
    lastUpdated: 'August 2026',
    tags: ['andhra pradesh', 'ap', 'ntr vaidya seva', 'senior citizen', 'geriatric', 'healthcare', 'aarogya aasara'],
    targetEmploymentStatuses: ['Senior Citizen']
  },
  {
    id: 'ap-vayo-vandana-assistive-devices',
    name: 'Andhra Pradesh Vayo Vandana Senior Citizen Assistive Devices Scheme',
    slug: 'ap-vayo-vandana-assistive-devices',
    shortDescription: 'Free distribution of physical assisted-living devices (hearing aids, spectacles, wheelchairs, tripod walking sticks, and artificial dentures) for low-income senior citizens.',
    description: 'The Andhra Pradesh Vayo Vandana Scheme, administered in coordination with the Senior Citizens Welfare Board and ALIMCO, organizes statewide assessment camps across all districts of Andhra Pradesh to distribute free high-grade assistive devices and walking aids to senior citizens aged 60 and above living below the poverty line.',
    category: 'Social Security',
    state: 'Andhra Pradesh',
    governmentLevel: 'State',
    department: 'Department for Empowerment of Senior Citizens, Government of Andhra Pradesh & ALIMCO',
    financialBenefitAmount: '100% Free Assisted Living Aids (Valued up to ₹25,000 per beneficiary)',
    benefits: [
      'Free distribution of digital hearing aids, motorized/standard wheelchairs, folding walkers, tripod canes, and spectacles',
      'Free dental screening and custom-fitted artificial dentures for elderly citizens',
      'Restores independent physical mobility, social communication, and quality of life'
    ],
    eligibility: [
      'Senior citizen resident of Andhra Pradesh aged 60 years or above',
      'Holding AP White Ration Card (Rice Card) or family income under ₹1.8 Lakh per annum',
      'Suffering from age-related hearing, vision, or locomotor impairment certified at camp'
    ],
    eligibilityRules: {
      minAge: 60,
      maxAge: 105,
      states: ['Andhra Pradesh'],
      requiresSeniorCitizen: true,
      maxIncome: 180000
    },
    requiredDocuments: [
      'Aadhaar Card proving age 60+',
      'AP Rice Card / Income Certificate',
      'Passport size photograph'
    ],
    applicationProcess: [
      'Attend the designated Vayo Vandana screening camp organized at Mandal / Municipality headquarters',
      'Undergo free clinical assessment by ALIMCO and medical specialists',
      'Receive customized assistive equipment on the spot or during the distribution ceremony'
    ],
    deadline: 'Open Year Round',
    deadlineDate: '2026-12-31',
    isDeadlineApproaching: false,
    officialWebsite: 'https://navasakam2.apcfss.in',
    officialSource: 'Welfare of Senior Citizens Department, Government of Andhra Pradesh',
    lastUpdated: 'August 2026',
    tags: ['andhra pradesh', 'ap', 'vayo vandana', 'senior citizen', 'assistive devices', 'hearing aid', 'wheelchair'],
    targetEmploymentStatuses: ['Senior Citizen']
  },
  {
    id: 'ap-senior-citizen-apsrtc-concession',
    name: 'Andhra Pradesh Senior Citizen APSRTC Bus Concession & Vrudhula Card',
    slug: 'ap-senior-citizen-apsrtc-concession',
    shortDescription: '25% fare concession on APSRTC express and rural buses, reserved senior seating, and priority healthcare queues for citizens aged 60+ across Andhra Pradesh.',
    description: 'APSRTC provides a 25% fare concession for all senior citizens aged 60 and above traveling on state-run APSRTC buses throughout Andhra Pradesh. In addition, the Vrudhula Card facilitates express queue services at MeeSeva centers, government hospitals, and district welfare offices.',
    category: 'Social Security',
    state: 'Andhra Pradesh',
    governmentLevel: 'State',
    department: 'APSRTC & Transport Department, Government of Andhra Pradesh',
    financialBenefitAmount: '25% Travel Concession on APSRTC Buses + Dedicated Senior Counters',
    benefits: [
      '25% discount on passenger fare on Palle Velugu, Express, Deluxe, and Super Luxury APSRTC buses',
      'Specially earmarked reserved seats in front rows of all state buses',
      'Priority queue privileges at government outpatient departments (OPD) and MeeSeva citizen centers'
    ],
    eligibility: [
      'Resident of Andhra Pradesh aged 60 years or older',
      'Any gender residing in Andhra Pradesh'
    ],
    eligibilityRules: {
      minAge: 60,
      maxAge: 105,
      states: ['Andhra Pradesh'],
      requiresSeniorCitizen: true
    },
    requiredDocuments: [
      'Aadhaar Card or Voter ID proving age 60 years or above',
      'Passport size photograph'
    ],
    applicationProcess: [
      'Present Aadhaar Card directly at any APSRTC bus ticketing counter or bus conductor during boarding',
      'Receive 25% discounted senior passenger ticket instantly',
      'Optionally obtain laminated APSRTC Senior Citizen ID card at main bus stations'
    ],
    deadline: 'Open Year Round',
    deadlineDate: '2026-12-31',
    isDeadlineApproaching: false,
    officialWebsite: 'https://apsrtc.ap.gov.in',
    officialSource: 'Andhra Pradesh State Road Transport Corporation (APSRTC)',
    lastUpdated: 'August 2026',
    tags: ['andhra pradesh', 'ap', 'apsrtc', 'senior citizen', 'bus concession', 'travel discount'],
    targetEmploymentStatuses: ['Senior Citizen']
  },
  {
    id: 'ap-igncaps-senior-pension',
    name: 'Indira Gandhi National Old Age Pension Scheme (IGNOAPS - AP State Direct DBT)',
    slug: 'ap-igncaps-senior-pension',
    shortDescription: 'Social security monthly cash pension directly disbursed into bank accounts of elderly citizens aged 60+ living below poverty line in Andhra Pradesh.',
    description: 'Under the National Social Assistance Programme (NSAP) integrated with Andhra Pradesh State Social Security, IGNOAPS provides monthly financial subsistence directly credited into the bank accounts of impoverished elderly residents aged 60 and above holding BPL cards.',
    category: 'Pension',
    state: 'Andhra Pradesh',
    governmentLevel: 'State',
    department: 'Department of Rural Development & NSAP, Government of Andhra Pradesh',
    financialBenefitAmount: 'Monthly Direct Cash Pension Disbursed via Aadhaar DBT',
    benefits: [
      'Direct credit into Aadhaar-seeded bank or post office account',
      'Assures basic food and medicine security for destitute senior citizens without family support',
      'Zero intermediaries with direct digital DBT monitoring'
    ],
    eligibility: [
      'Elderly resident of Andhra Pradesh aged 60 years or older',
      'Listed in official Below Poverty Line (BPL) / SECC household database'
    ],
    eligibilityRules: {
      minAge: 60,
      maxAge: 105,
      states: ['Andhra Pradesh'],
      requiresSeniorCitizen: true,
      maxIncome: 120000
    },
    requiredDocuments: [
      'Aadhaar Card',
      'BPL Certificate / White Ration Card',
      'Aadhaar-linked Bank Account Passbook'
    ],
    applicationProcess: [
      'Apply at Village / Ward Sachivalayam or through National Social Assistance Programme (NSAP) portal',
      'Verification by Mandal Parishad Development Officer (MPDO) / Municipal Commissioner',
      'Sanction and inclusion in monthly electronic DBT payroll'
    ],
    deadline: 'Open Year Round',
    deadlineDate: '2026-12-31',
    isDeadlineApproaching: false,
    officialWebsite: 'https://nsap.nic.in',
    officialSource: 'Ministry of Rural Development & Government of Andhra Pradesh',
    lastUpdated: 'August 2026',
    tags: ['andhra pradesh', 'ap', 'ignoaps', 'senior citizen', 'nsap', 'old age pension', 'dbt'],
    targetEmploymentStatuses: ['Senior Citizen']
  },
  {
    id: 'ap-vidya-deevena-reimbursement',
    name: 'Andhra Pradesh Vidya Deevena (Complete Fee Reimbursement via JnanaBhumi)',
    slug: 'ap-vidya-deevena-reimbursement',
    shortDescription: '100% full tuition fee reimbursement credited directly for ITI, Polytechnic, Degree, Engineering, and PG students in Andhra Pradesh.',
    description: 'Flagship higher education welfare program of the Government of Andhra Pradesh providing 100% full tuition fee reimbursement directly for students pursuing polytechnic, engineering, pharmacy, degree, and postgraduate courses via the official JnanaBhumi portal.',
    category: 'Scholarships',
    state: 'Andhra Pradesh',
    governmentLevel: 'State',
    department: 'Social Welfare & Higher Education Department, Government of Andhra Pradesh',
    financialBenefitAmount: '100% Full Tuition Fee Reimbursement paid directly to colleges/mothers',
    benefits: [
      '100% Full Fee Reimbursement paid quarterly directly into bank account',
      'Zero tuition burden for polytechnic, degree, engineering, pharmacy, and postgraduate students',
      'Promotes educational attainment across underprivileged communities in Andhra Pradesh'
    ],
    eligibility: [
      'Permanent resident student of Andhra Pradesh',
      'Pursuing ITI, Polytechnic, Degree, Engineering, Medicine, or Postgraduate courses',
      'Family annual income must not exceed ₹2.5 Lakhs per annum',
      'Student must maintain minimum 75% attendance'
    ],
    eligibilityRules: {
      minAge: 16,
      maxAge: 32,
      states: ['Andhra Pradesh'],
      maxIncome: 250000,
      requiresStudent: true,
      minEducation: ['10th Pass (Matric)', '12th Pass (Intermediate)', 'Diploma/ITI', 'Undergraduate (UG)', 'Postgraduate (PG)']
    },
    requiredDocuments: [
      'Aadhaar Card of student and mother',
      'AP Rice Card / White Ration Card (or Income Certificate under ₹2.5 Lakhs)',
      'Integrated Caste Certificate issued via MeeSeva',
      'College Admission details and Jnanabhumi student ID',
      'Aadhaar-seeded Bank Account Passbook'
    ],
    applicationProcess: [
      'Student applies via College Principal / Nodal Officer on Jnanabhumi portal (jnanabhumi.ap.gov.in)',
      'Field verification completed by Village / Ward Sachivalayam staff',
      'Sanctions approved and credited in quarterly cycles via DBT'
    ],
    deadline: '15 November 2026',
    deadlineDate: '2026-11-15',
    isDeadlineApproaching: false,
    officialWebsite: 'https://jnanabhumi.ap.gov.in',
    officialSource: 'Government of Andhra Pradesh, Social Welfare Dept',
    lastUpdated: 'August 2026',
    tags: ['andhra pradesh', 'ap', 'state scheme', 'scholarship', 'vidya deevena', 'fee reimbursement', 'jnanabhumi']
  },
  {
    id: 'ap-vasathi-deevena-grant',
    name: 'Andhra Pradesh Vasathi Deevena (Hostel & Boarding Grant via JnanaBhumi)',
    slug: 'ap-vasathi-deevena-grant',
    shortDescription: 'Annual financial assistance of ₹20,000 for degree/engineering, ₹15,000 for polytechnic, and ₹10,000 for ITI students for food & hostel expenses.',
    description: 'Vasathi Deevena provides annual financial aid to meet boarding, lodging, and hostel expenses of college students from low-income families in Andhra Pradesh, credited in two installments into the mother’s account.',
    category: 'Scholarships',
    state: 'Andhra Pradesh',
    governmentLevel: 'State',
    department: 'Social Welfare & Backward Classes Welfare Department, Government of Andhra Pradesh',
    financialBenefitAmount: '₹20,000/year (Degree/Engg) | ₹15,000/year (Polytechnic) | ₹10,000/year (ITI)',
    benefits: [
      '₹20,000 per year for Degree & Engineering students in 2 installments',
      '₹15,000 per year for Polytechnic diploma students',
      '₹10,000 per year for Industrial Training Institute (ITI) students',
      'Covers hostel mess charges, room rents, and study materials'
    ],
    eligibility: [
      'Permanent resident student of Andhra Pradesh',
      'Enrolled in recognized ITI, Polytechnic, Degree, or Professional Engineering courses',
      'Family annual income under ₹2.5 Lakhs per annum',
      'Must maintain 75% attendance'
    ],
    eligibilityRules: {
      minAge: 16,
      maxAge: 32,
      states: ['Andhra Pradesh'],
      maxIncome: 250000,
      requiresStudent: true
    },
    requiredDocuments: [
      'Aadhaar Card of student and mother',
      'AP Rice Card / FSC / Income Certificate',
      'College Bonafide Study Certificate',
      'Mother’s Bank Passbook'
    ],
    applicationProcess: [
      'Applied concurrently with Vidya Deevena on Jnanabhumi portal',
      'College Principal certifies semester enrollment and attendance',
      'Disbursed through Navasakam DBT gateway'
    ],
    deadline: '15 November 2026',
    deadlineDate: '2026-11-15',
    isDeadlineApproaching: false,
    officialWebsite: 'https://jnanabhumi.ap.gov.in',
    officialSource: 'Government of Andhra Pradesh, Social Welfare Dept',
    lastUpdated: 'August 2026',
    tags: ['andhra pradesh', 'ap', 'state scheme', 'scholarship', 'vasathi deevena', 'hostel grant']
  },
  {
    id: 'ap-videshi-vidya-scheme',
    name: 'Andhra Pradesh Overseas Study Grant (JnanaBhumi Videshi Vidya)',
    slug: 'ap-videshi-vidya-scheme',
    shortDescription: 'Financial grant up to ₹1.25 Crore for SC, ST, BC, Minority, and EWS students securing admission in top 100 QS-ranked global universities.',
    description: 'The Government of Andhra Pradesh sanctions financial grants up to ₹1.25 Crore (100% of tuition and living fees for top 50 QS universities, and up to ₹50 Lakhs for top 51–100 universities) for meritorious underprivileged students pursuing Master’s or PhD degrees abroad.',
    category: 'Scholarships',
    state: 'Andhra Pradesh',
    governmentLevel: 'State',
    department: 'Higher Education & Social Welfare Department, Government of Andhra Pradesh',
    financialBenefitAmount: 'Up to ₹1.25 Crore (Full Fee + Living Stipend + Airfare)',
    benefits: [
      '100% tuition fee and living expenses up to ₹1.25 Crore for admissions in top 50 QS-ranked universities',
      'Up to ₹50 Lakhs or 100% tuition for QS rank 51 to 100 institutions',
      'One-way flight passage and visa counseling facilitation'
    ],
    eligibility: [
      'Permanent resident of Andhra Pradesh',
      'Belonging to SC, ST, BC, Minority, or EWS category',
      'Family income not exceeding ₹8 Lakhs per annum',
      'Age below 35 years',
      'Secured unconditional admission in top 100 QS World University Rankings'
    ],
    eligibilityRules: {
      minAge: 20,
      maxAge: 35,
      states: ['Andhra Pradesh'],
      categories: ['SC', 'ST', 'OBC', 'EWS', 'Minority'],
      maxIncome: 800000,
      requiresStudent: true
    },
    requiredDocuments: [
      'Aadhaar Card and AP Domicile Certificate',
      'Caste Certificate and Income Certificate from MeeSeva',
      'Unconditional admission offer letter from QS top 100 university',
      'GRE / GMAT / IELTS / TOEFL score report',
      'Valid Passport and Student Visa'
    ],
    applicationProcess: [
      'Register on Jnanabhumi Videshi Vidya portal',
      'Upload university offer letter and academic credentials',
      'Scrutiny by State Level Selection Committee and release of DBT milestone payments'
    ],
    deadline: '30 November 2026',
    deadlineDate: '2026-11-30',
    isDeadlineApproaching: false,
    officialWebsite: 'https://jnanabhumi.ap.gov.in',
    officialSource: 'Government of Andhra Pradesh, Higher Education Dept',
    lastUpdated: 'August 2026',
    tags: ['andhra pradesh', 'ap', 'state scheme', 'overseas scholarship', 'videshi vidya', 'foreign studies']
  },
  {
    id: 'ap-yuva-galam-unemployment-aid',
    name: 'Andhra Pradesh Yuva Galam Unemployment Allowance Scheme',
    slug: 'ap-yuva-galam-unemployment-aid',
    shortDescription: 'Monthly financial assistance of ₹3,000 per month for educated unemployed youth in Andhra Pradesh to support skill development and competitive exam preparation.',
    description: 'Part of the Super Six welfare agenda of the Government of Andhra Pradesh, Yuva Galam provides ₹3,000 per month to eligible unemployed diploma, degree, and postgraduate youths in AP to cover skill training and job application expenses.',
    category: 'Employment',
    state: 'Andhra Pradesh',
    governmentLevel: 'State',
    department: 'Skill Development & Youth Welfare Department, Government of Andhra Pradesh',
    financialBenefitAmount: '₹3,000 per month direct allowance',
    benefits: [
      '₹3,000 per month direct stipend credited into candidate bank account',
      'Free industry certification and placement training via AP Skill Development Corporation (APSSDC)',
      'Financial support during competitive exam coaching and job searches'
    ],
    eligibility: [
      'Resident youth of Andhra Pradesh aged 18 to 35 years',
      'Minimum qualification of Polytechnic Diploma, ITI, Graduate Degree, or PG',
      'Currently unemployed and registered with AP Employment Exchange',
      'Family annual income under ₹2.5 Lakhs'
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 35,
      states: ['Andhra Pradesh'],
      maxIncome: 250000,
      minEducation: ['Diploma/ITI', 'Undergraduate (UG)', 'Postgraduate (PG)']
    },
    requiredDocuments: [
      'Aadhaar Card of applicant',
      'Educational Degree / Diploma Certificate and Marks Memo',
      'AP Employment Exchange registration card',
      'Aadhaar-linked Bank Passbook'
    ],
    applicationProcess: [
      'Register on AP Skill / Spandana Portal',
      'Verification of degree and unemployment status',
      'Monthly allowance credited directly to account'
    ],
    deadline: 'Open Year Round',
    deadlineDate: '2026-12-31',
    isDeadlineApproaching: false,
    officialWebsite: 'https://apssdc.in',
    officialSource: 'AP Skill Development Corporation, Government of Andhra Pradesh',
    lastUpdated: 'August 2026',
    tags: ['andhra pradesh', 'ap', 'yuva galam', 'unemployment allowance', 'youth', 'super six', 'employment'],
    targetEmploymentStatuses: ['Business Holder', 'Student']
  },
  {
    id: 'ap-sunna-vaddi-dwcra',
    name: 'Andhra Pradesh Sunna Vaddi (Zero Interest DWCRA Loans)',
    slug: 'ap-sunna-vaddi-dwcra',
    shortDescription: '100% full interest subvention for DWCRA Self Help Group (SHG) women on bank loans up to ₹5,00,000 in Andhra Pradesh.',
    description: 'Sunna Vaddi ensures zero interest on bank loans taken by DWCRA Self Help Groups in Andhra Pradesh. The state government directly reimburses the entire bank interest amount into the SHG members’ accounts, ensuring zero interest burden on women entrepreneurs.',
    category: 'Women',
    state: 'Andhra Pradesh',
    governmentLevel: 'State',
    department: 'SERP & MEPMA, Department of Rural Development, Government of Andhra Pradesh',
    financialBenefitAmount: '100% Interest Subvention on SHG bank loans up to ₹5,00,000',
    benefits: [
      '100% interest reimbursement credited directly to SHG bank accounts',
      'Eliminates interest burden on petty shop owners, weavers, vegetable vendors, and SHG women',
      'Strengthens women credit rating and livelihood enterprises'
    ],
    eligibility: [
      'Women belonging to registered rural (SERP) or urban (MEPMA) DWCRA Self Help Groups in AP',
      'Bank loan amount up to ₹5,00,000 with regular monthly repayments'
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 70,
      states: ['Andhra Pradesh'],
      genders: ['female'],
      requiresWomanEntrepreneur: true
    },
    requiredDocuments: [
      'SHG Group Registration details and Member Aadhaar Cards',
      'SHG Bank Loan Passbook showing regular repayments',
      'Rice Card / FSC'
    ],
    applicationProcess: [
      'SHG applies through Village Organization (VO) / Slum Level Federation (SLF)',
      'Bank submits repayment and interest claim to SERP/MEPMA',
      'Government disburses 100% interest subsidy directly to SHG account'
    ],
    deadline: 'Open Year Round',
    deadlineDate: '2026-12-31',
    isDeadlineApproaching: false,
    officialWebsite: 'https://navasakam2.apcfss.in',
    officialSource: 'Society for Elimination of Rural Poverty (SERP), Andhra Pradesh',
    lastUpdated: 'August 2026',
    tags: ['andhra pradesh', 'ap', 'sunna vaddi', 'dwcra', 'women', 'shg', 'interest free loan'],
    targetEmploymentStatuses: ['Women']
  }
];
