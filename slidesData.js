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
      { param: "Venture Capital", val1: "Equity investment", val2: "No EMI", val3: "Ownership shared", val4: "Business guidance provided" },
      { param: "Bank Loan", val1: "Loan with interest", val2: "EMI required", val3: "Founder keeps ownership", val4: "No business support" }
    ],
    risks: {
      investors: ["Startup failure", "Competition", "Market changes"],
      entrepreneurs: ["Loss of ownership", "Investor pressure", "Reduced decision-making power"]
    },
    failure: {
      intro: "If a startup fails:",
      points: [
        "The venture capitalist usually loses the invested money.",
        "Founders generally do not repay the investment because it is equity, not a loan.",
        "Employees may lose their jobs.",
        "Remaining company assets are sold to repay creditors."
      ]
    }
  },
  {
    id: 7,
    slideNumber: "07",
    tag: "Indian Ecosystem",
    title: "Venture Capital in India",
    subtitle: "India is one of the fastest-growing startup ecosystems.",
    layout: "india_exact",
    govt: ["Startup India", "Digital India", "Atal Innovation Mission", "Fund of Funds for Startups"],
    sectors: ["Artificial Intelligence", "FinTech", "HealthTech", "EdTech", "AgriTech", "Electric Vehicles", "SaaS"],
    topVCs: ["Peak XV Partners", "Accel", "Kalaari Capital", "Blume Ventures", "Nexus Venture Partners"],
    famousStartups: ["Flipkart", "Ola", "Swiggy", "Zomato", "Meesho"]
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
      "Easy access to funding",
      "Expert mentorship",
      "Faster business growth",
      "Strong industry connections",
      "Increased credibility"
    ],
    disadvantages: [
      "Loss of ownership",
      "High expectations from investors",
      "Difficult funding process",
      "Pressure to grow quickly"
    ],
    conclusionText: "To conclude, venture capital is an important source of funding for innovative startups. It provides not only money but also mentorship, networking, and business expertise. Although it is a high-risk investment, venture capital has helped create many successful companies and contributes significantly to innovation, employment, and economic growth.",
    thankYou: "Thank You"
  }
];
