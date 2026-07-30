const slidesData = [
  {
    id: 1,
    slideNumber: "01",
    tag: "Slide 1 of 9",
    title: "Venture Capitalists (VC)",
    subtitle: "Enterprise and Venture Creation (EVC)",
    category: "Enterprise and Venture Creation (EVC) Seminar",
    layout: "title_exact"
  },
  {
    id: 2,
    slideNumber: "02",
    tag: "Foundations",
    title: "Introduction, Venture Capital & History",
    subtitle: "Enterprise and Venture Creation (EVC)",
    layout: "intro_exact",
    introText: [
      "A startup begins with an idea, but every idea needs money to become a successful business. This is where venture capital plays an important role."
    ],
    whatIsVC: [
      "Venture Capital (VC) is a type of private investment given to startups and small businesses that have high growth potential.",
      "Instead of giving a loan, venture capitalists invest money in exchange for equity, which means ownership in the company.",
      "VC is known as a high-risk, high-return investment because many startups fail, but successful ones can generate huge profits."
    ],
    whoIsVC: {
      def: "A Venture Capitalist is an investor or investment firm that provides funding to startups.",
      points: [
        "Business guidance",
        "Industry connections",
        "Marketing support",
        "Financial advice",
        "Mentorship"
      ]
    },
    historyText: [
      "Before 1946, entrepreneurs mainly depended on family, friends, or banks.",
      "In 1946, the first modern venture capital firm, American Research and Development Corporation (ARDC), was founded by Georges Doriot, known as the Father of Venture Capital.",
      "Its successful investment in Digital Equipment Corporation proved that investing in startups could generate massive returns.",
      "Today, companies like Google, Apple, Amazon, and Facebook received venture capital during their early stages."
    ]
  },
  {
    id: 3,
    slideNumber: "03",
    tag: "Need & Features",
    title: "Need, Features & Objectives",
    subtitle: "Enterprise and Venture Creation (EVC)",
    layout: "need_features_exact",
    whyNeeded: {
      intro: "Startups often face three major problems:",
      problems: [
        "Lack of money",
        "Lack of business experience",
        "Lack of professional contacts"
      ],
      solution: "Venture capital solves these problems by providing funding, mentorship, and networking opportunities."
    },
    features: [
      "Equity-based investment",
      "High risk and high return",
      "Long-term investment",
      "Active involvement in business decisions",
      "Focus on innovation",
      "Supports scalable businesses"
    ],
    objectives: [
      "Promote entrepreneurship",
      "Encourage innovation",
      "Generate employment",
      "Support startup growth",
      "Increase economic development",
      "Earn returns through successful investments"
    ]
  },
  {
    id: 4,
    slideNumber: "04",
    tag: "Investment Process",
    title: "Venture Capital Investment Process",
    subtitle: "The 7 Steps in Venture Capital Investment",
    layout: "process_exact",
    intro: "The venture capital investment process consists of seven steps.",
    steps: [
      { step: "Step 1: Business Idea", desc: "The entrepreneur develops an innovative business idea." },
      { step: "Step 2: Business Plan", desc: "A business plan is prepared with market analysis, financial projections, and future goals." },
      { step: "Step 3: Pitch", desc: "The entrepreneur presents the idea to venture capitalists." },
      { step: "Step 4: Due Diligence", desc: "The VC examines:", points: ["Business model", "Founders", "Market potential", "Financials", "Legal documents"] },
      { step: "Step 5: Investment", desc: "If satisfied, the VC invests money in exchange for equity." },
      { step: "Step 6: Growth", desc: "The startup uses the funds for:", points: ["Product development", "Hiring employees", "Marketing", "Business expansion"] },
      { step: "Step 7: Exit", desc: "The VC earns profits through:", points: ["IPO", "Acquisition", "Selling shares"] }
    ]
  },
  {
    id: 5,
    slideNumber: "05",
    tag: "Stages & Comparison",
    title: "Funding Stages & Comparisons",
    subtitle: "Funding Stages & Venture Capital vs Angel Investor",
    layout: "stages_exact",
    stages: [
      { name: "Pre-Seed", desc: "Idea and research stage." },
      { name: "Seed Funding", desc: "Product development and prototype creation." },
      { name: "Series A", desc: "Business expansion and customer growth." },
      { name: "Series B", desc: "Scaling operations and entering new markets." },
      { name: "Series C", desc: "International expansion and acquisitions." },
      { name: "IPO", desc: "The company becomes publicly listed." }
    ],
    vsAngel: {
      angel: [
        "Individual investor",
        "Invests personal money",
        "Smaller investment",
        "Earlier stage"
      ],
      vc: [
        "Investment firm",
        "Invests pooled funds",
        "Larger investment",
        "Growth stage"
      ]
    }
  },
  {
    id: 6,
    slideNumber: "06",
    tag: "Risks & Failure",
    title: "VC vs Bank Loan, Risks & Startup Failure",
    subtitle: "Enterprise and Venture Creation (EVC)",
    layout: "risks_exact",
    table: [
      {
        param: "Venture Capital",
        details: [
          { title: "Equity investment", desc: "Capital given in exchange for company ownership share rather than debt." },
          { title: "No EMI required", desc: "No fixed monthly repayments or interest obligations regardless of profit." },
          { title: "Ownership shared", desc: "Founders surrender equity stake and share company control with investor partners." },
          { title: "Strategic support", desc: "Active business guidance, industry connections, and mentorship provided." }
        ]
      },
      {
        param: "Bank Loan",
        details: [
          { title: "Debt financing", desc: "Borrowed money with strict interest rates and full principal repayment terms." },
          { title: "Mandatory EMI", desc: "Regular monthly payments required regardless of business profits or losses." },
          { title: "100% ownership kept", desc: "Founder retains full company ownership, equity, and independent decision authority." },
          { title: "No business support", desc: "Banks provide money only; no strategic advice, networking, or mentorship." }
        ]
      }
    ],
    risks: {
      investors: [
        { title: "Startup Failure Risk", desc: "Over 90% of early-stage startups fail, resulting in total loss of invested capital." },
        { title: "Market & Tech Competition", desc: "Rival companies or fast technological changes can render the business obsolete." },
        { title: "Illiquidity & Long Gestation", desc: "Capital is locked in private shares for 7–10 years before any profitable exit opportunity." }
      ],
      entrepreneurs: [
        { title: "Loss of Ownership & Dilution", desc: "Selling equity dilutes the founders' control and equity stake in the company." },
        { title: "High Investor Growth Pressure", desc: "VCs demand 10x-100x financial returns, pushing founders toward aggressive targets." },
        { title: "Board Control & Conflicts", desc: "Investors secure board representation and veto rights, restricting founder autonomy." }
      ]
    },
    failure: {
      intro: "Key consequences when a VC-backed startup fails:",
      points: [
        { title: "VC Absorbs Capital Loss", desc: "The venture capital firm loses its entire equity investment without collateral recourse." },
        { title: "No Personal Liability for Founders", desc: "Founders do not repay equity money because equity carries risk, unlike bank debt." },
        { title: "Workforce Layoffs & Closure", desc: "Operations cease, leading to employee layoffs and workplace shutdown." },
        { title: "Asset Liquidation & Distribution", desc: "Remaining physical assets and patents are sold off to satisfy outstanding debt creditors." }
      ]
    }
  },
  {
    id: 7,
    slideNumber: "07",
    tag: "Indian Ecosystem",
    title: "Venture Capital in India",
    subtitle: "India is one of the fastest-growing startup ecosystems worldwide.",
    layout: "india_exact",
    govt: [
      { name: "Startup India", desc: "Provides tax exemptions, fast-track patent filings, and simplified compliance for startups." },
      { name: "Digital India", desc: "Expands nationwide high-speed internet and digital infrastructure to support tech startups." },
      { name: "Atal Innovation Mission", desc: "Establishes world-class incubators, tinkering labs, and innovation hubs across educational institutions." },
      { name: "Fund of Funds for Startups (FFS)", desc: "₹10,000 Crore government corpus managed by SIDBI to inject capital into registered VCs." }
    ],
    sectors: [
      { name: "Artificial Intelligence (AI)", desc: "Building generative models, predictive analytics, and automated enterprise tools." },
      { name: "FinTech", desc: "Revolutionizing digital payments via UPI, neo-banking, and micro-lending platforms." },
      { name: "HealthTech", desc: "Providing online telemedicine, AI diagnostic tools, and accessible digital healthcare." },
      { name: "EdTech", desc: "Enabling interactive online education, skill upskilling platforms, and competitive exam preparation." },
      { name: "AgriTech", desc: "Optimizing supply chain logistics, IoT soil sensors, and direct farm-to-consumer platforms." },
      { name: "Electric Vehicles (EV)", desc: "Building battery swapping networks, EV manufacturing, and clean green mobility solutions." },
      { name: "SaaS (Software as a Service)", desc: "Developing cloud-based enterprise software built in India for global customers." }
    ],
    topVCs: [
      { name: "Peak XV Partners", desc: "Formerly Sequoia India; leading multi-stage VC firm backing iconic tech unicorns." },
      { name: "Accel India", desc: "Renowned early-stage investor behind global giants like Flipkart, Swiggy, and Freshworks." },
      { name: "Kalaari Capital", desc: "Early-stage fund focusing on consumer internet, e-commerce, and deep tech innovations." },
      { name: "Blume Ventures", desc: "Prominent seed and pre-Series A fund empowering home-grown Indian tech startups." },
      { name: "Nexus Venture Partners", desc: "Pioneering Indo-US venture firm supporting enterprise software, AI, and commercial tech." }
    ],
    famousStartups: [
      { name: "Flipkart", desc: "E-commerce pioneer backed by Accel & SoftBank, acquired by Walmart for $16 Billion." },
      { name: "Ola", desc: "Mobility and EV leader transforming urban ride-hailing and clean transit across India." },
      { name: "Swiggy", desc: "On-demand food delivery and quick-commerce innovator with Instamart grocery delivery." },
      { name: "Zomato", desc: "Food delivery & restaurant discovery marketplace successfully listed on public stock exchanges." },
      { name: "Meesho", desc: "Social commerce platform democratizing online selling for millions of small businesses." }
    ]
  },
  {
    id: 8,
    slideNumber: "08",
    tag: "Real-World Examples",
    title: "Real-Life Examples: From Startup to Major Brand",
    subtitle: "How VC Funding Transformed Small Ideas into Household Brands",
    layout: "case_realtime",
    farmingExample: [
      "Suppose four engineering students develop an AI-based farming application.",
      "They need ₹50 lakh to develop the product.",
      "A venture capital firm invests ₹50 lakh in exchange for 20% equity.",
      "The startup grows successfully and becomes worth ₹100 crore.",
      "The VC’s 20% ownership is now worth ₹20 crore, while the founders still own most of a much larger company."
    ],
    realCompanyExample: {
      name: "Flipkart (Real-Time Major Brand Case)",
      points: [
        "Initial Startup (2007): Started in a 2BHK apartment in Bengaluru by Sachin & Binny Bansal as an online bookstore with ₹4 Lakhs personal savings.",
        "VC Funding Boost (2009): Accel India invested $1 Million (₹4.5 Crores) when traditional banks refused loans. Later, Tiger Global & SoftBank backed them.",
        "Growth to Major Brand: Built nationwide logistics, Cash-on-Delivery, and expanded across e-commerce categories.",
        "Landmark Exit (2018): Walmart acquired a controlling stake for $16 Billion (₹1.1 Lakh Crores) — giving early VC Accel a 300x Return on Investment!"
      ]
    }
  },
  {
    id: 9,
    slideNumber: "09",
    tag: "Conclusion",
    title: "Advantages, Disadvantages & Conclusion",
    subtitle: "Enterprise and Venture Creation (EVC)",
    layout: "conclusion_exact",
    advantages: [
      { title: "Substantial Capital Access", desc: "Provides large-scale growth funding without monthly interest payments or collateral debt." },
      { title: "Strategic Mentorship", desc: "VC partners bring experienced business guidance, board leadership, and operational advice." },
      { title: "Accelerated Scaling", desc: "Enables rapid market expansion, aggressive marketing campaigns, and top-tier hiring." },
      { title: "Strong Industry Connections", desc: "Unlocks valuable corporate partnerships, key enterprise clients, and future funding networks." },
      { title: "Increased Credibility & Trust", desc: "VC backing serves as a strong stamp of validation, boosting market reputation and customer trust." }
    ],
    disadvantages: [
      { title: "Equity & Ownership Loss", desc: "Founders must give up significant equity ownership shares and dilute future profits." },
      { title: "High Investor Return Expectations", desc: "VCs demand 10x-100x financial returns, placing immense performance pressure on founders." },
      { title: "Difficult & Lengthy Process", desc: "Pitching, due diligence, and deal negotiation can take 6-12 months of intense effort." },
      { title: "Pressure to Grow Quickly", desc: "Forces startups to prioritize aggressive hyper-scaling over organic, gradual development." }
    ],
    conclusionText: "To conclude, venture capital is an indispensable growth engine for innovative, high-potential startups. Beyond capital funding, venture capitalists provide vital mentorship, strategic networking, and operational expertise. Although it involves significant risk, equity dilution, and intense return expectations, venture capital has built iconic global and Indian companies—driving technology innovation, employment generation, and national economic growth.",
    thankYou: "Thank You!"
  }
];
