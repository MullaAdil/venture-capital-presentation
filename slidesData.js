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
          { title: "Equity Ownership", desc: "Capital given for company shares, not debt." },
          { title: "Zero EMI", desc: "No fixed monthly repayments or interest fees." },
          { title: "Shared Control", desc: "Founders share equity and board decision rights." },
          { title: "Strategic Mentorship", desc: "Active business guidance & networking included." }
        ]
      },
      {
        param: "Bank Loan",
        details: [
          { title: "Debt Financing", desc: "Borrowed money requiring 100% repayment." },
          { title: "Mandatory EMI", desc: "Strict monthly interest & principal payments." },
          { title: "100% Ownership", desc: "Founder retains full company ownership." },
          { title: "No Growth Advice", desc: "Bank provides money only; zero mentorship." }
        ]
      }
    ],
    risks: {
      investors: [
        { title: "90% Startup Failure Rate", desc: "High potential for total loss of invested capital." },
        { title: "Market Competition", desc: "Fast technological shifts can make startups obsolete." },
        { title: "7–10 Year Illiquidity", desc: "Capital is locked in private shares before exit." }
      ],
      entrepreneurs: [
        { title: "Equity Dilution", desc: "Founders lose percentage of company ownership." },
        { title: "10x–100x Growth Pressure", desc: "VCs demand aggressive revenue targets." },
        { title: "Board Control", desc: "Investors gain veto power over key decisions." }
      ]
    },
    failure: {
      intro: "What Happens When a Startup Fails?",
      points: [
        { title: "VC Absorbs Loss", desc: "VC loses equity investment without personal collateral." },
        { title: "No Founder Debt", desc: "Founders do not repay equity money from personal savings." },
        { title: "Closure & Layoffs", desc: "Operations cease and assets are liquidated to debt holders." }
      ]
    }
  },
  {
    id: 7,
    slideNumber: "07",
    tag: "Indian Ecosystem",
    title: "Venture Capital in India",
    subtitle: "India is the 3rd Largest Startup Ecosystem Worldwide",
    layout: "india_exact",
    govt: [
      { name: "Startup India", desc: "Tax exemptions & simplified compliance" },
      { name: "Digital India", desc: "High-speed digital UPI & internet connectivity" },
      { name: "Atal Innovation Mission", desc: "Incubators & tinkering labs nationwide" },
      { name: "FFS Scheme", desc: "₹10,000 Crore SIDBI fund injection" }
    ],
    sectors: [
      "Artificial Intelligence (AI)",
      "FinTech & UPI Payments",
      "HealthTech & Telemedicine",
      "EdTech & Upskilling",
      "Electric Vehicles (EV)",
      "SaaS & Enterprise Cloud"
    ],
    topVCs: [
      { name: "Peak XV Partners", desc: "Leading multi-stage tech investor (formerly Sequoia India)" },
      { name: "Accel India", desc: "Early-stage backer of Flipkart & Swiggy" },
      { name: "Kalaari Capital", desc: "Early fund for e-commerce & consumer tech" },
      { name: "Blume Ventures", desc: "Prominent seed fund for Indian tech founders" },
      { name: "Nexus Venture Partners", desc: "Indo-US fund for global enterprise software" }
    ],
    famousStartups: [
      { name: "Flipkart", desc: "E-commerce giant acquired by Walmart for $16 Billion" },
      { name: "Swiggy", desc: "On-demand food & quick commerce delivery leader" },
      { name: "Zomato", desc: "Food tech unicorn listed on public stock exchanges" },
      { name: "Ola", desc: "Mobility & EV electric transit pioneer" },
      { name: "Meesho", desc: "Social commerce platform empowering local sellers" }
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
      "Four students build an AI farming app needing ₹50 Lakhs capital.",
      "A VC firm invests ₹50 Lakhs in exchange for 20% company equity.",
      "The startup scales aggressively and becomes worth ₹100 Crores.",
      "The VC's 20% stake is now worth ₹20 Crores (40x return), while founders own 80% of a massive business."
    ],
    realCompanyExample: {
      name: "Flipkart (Real-World Case Study)",
      points: [
        "Started in 2007 in a Bengaluru apartment with ₹4 Lakhs personal savings as an online bookstore.",
        "In 2009, Accel India invested $1M (₹4.5 Crores) when traditional banks refused loans.",
        "Scaled Cash-on-Delivery, nationwide logistics & e-commerce market dominance.",
        "In 2018, Walmart acquired Flipkart for $16 Billion — yielding a 300x return for early VC Accel!"
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
      { title: "Substantial Capital Access", desc: "Large-scale growth funding without monthly interest repayments or personal debt liability." },
      { title: "Strategic Mentorship", desc: "Expert business guidance, board leadership, and operational scaling advice." },
      { title: "Accelerated Growth", desc: "Enables rapid market expansion, top-tier hiring, and aggressive brand marketing." },
      { title: "Credibility & Trust", desc: "VC backing validates the startup, attracting customers, talent, and corporate partners." }
    ],
    disadvantages: [
      { title: "Equity & Control Loss", desc: "Founders give up equity ownership stake and share board decision control." },
      { title: "10x-100x Return Pressure", desc: "VCs demand high-speed hyper-growth and aggressive revenue milestones." },
      { title: "Complex 6–12 Month Process", desc: "Pitching, due diligence, and contract negotiations require intense effort." },
      { title: "Risk of Founder Replacement", desc: "Underperforming founders may be replaced by professional CEOs chosen by VCs." }
    ],
    conclusionText: "Venture capital is a powerful catalyst for high-growth startups. Beyond money, VCs provide strategic mentorship, key networks, and market validation. Although it involves equity dilution and high performance expectations, venture capital builds world-class companies, drives technological innovation, and powers economic growth.",
    thankYou: "Thank You!"
  }
];
