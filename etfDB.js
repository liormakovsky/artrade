const etfDB = [
  {
    etf: "xlf",
    stocks: ["BRK.B", "JPM", "V", "MA", "BAC"],
    connected: ["xlf", "dia"],
  },
  {
    etf: "xlv",
    stocks: ["UNH", "LLY", "JNJ", "MRK", "ABBV", "TMO"],
    connected: ["xlv", "dia"],
  },
  {
    etf: "xle",
    stocks: ["XOM", "CVX", "EOG", "SLB", "COP"],
    connected: ["xop", "xle"],
  },
  {
    etf: "xlk",
    stocks: ["AAPL", "MSFT", "NVDA", "AVGO", "ADBE", "CSCO"],
    connected: ["xlk", "spy", "qqq", "dia"],
  },
  {
    etf: "xop",
    stocks: ["DEN", "VLO", "XOM", "CVX", "COP"],
    connected: ["xop", "xle"],
  },
  {
    etf: "xly",
    stocks: ["AMZN", "TSLA", "MCD", "HD", "LOW"],
    connected: ["xly", "dia"],
  },
  {
    etf: "xli",
    stocks: ["CAT", "UNP", "HON", "GE", "BA"],
    connected: ["xli", "dia"],
  },
  {
    etf: "xlb",
    stocks: ["LIN", "APD", "SHW", "FCX", "ECL"],
    connected: ["xlb"],
  },
  {
    etf: "xlu",
    stocks: ["NEE", "SO", "DUK", "SRE", "AEP"],
    connected: ["xlu"],
  },
  {
    etf: "xlp",
    stocks: ["PG", "COST", "PEP", "WMT", "PM"],
    connected: ["xlp"],
  },
  {
    etf: "xlc",
    stocks: ["META", "GOOGL", "GOOG", "T", "CHTR", "TMUS"],
    connected: ["xlc", "spy", "qqq"],
  },
  {
    etf: "xlre",
    stocks: ["PLD", "AMT", "EQIX", "WELL", "PSA", "CCI"],
    connected: ["xlc"],
  },
  {
    etf: "XME",
    stocks: ["ARCH", "AMR", "BTU", "RGLD", "NEM", "AA"],
    connected: ["xlc"],
  },
  {
    etf: "spy",
    stocks: ["AAPL", "MSFT", "AMZN", "NVDA", "GOOGL", "META", "TSLA", "GOOG"],
    connected: ["spy", "qqq", "dia", "vt"],
  },
  {
    etf: "qqq",
    stocks: ["AAPL", "MSFT", "AMZN", "NVDA", "META", "TSLA", "GOOGL", "GOOG"],
    connected: ["spy", "qqq", "dia", "vt"],
  },
  {
    etf: "dia",
    stocks: ["UNH", "GS", "MSFT", "HD", "CAT", "MCD", "AMGN", "V"],
    connected: ["spy", "qqq", "dia", "vt"],
  },
  {
    etf: "vt",
    stocks: ["AAPL", "MSFT", "AMZN", "NVDA", "GOOGL", "TSLA", "META", "GOOG"],
    connected: ["spy", "qqq", "dia", "vt"],
  },
];

//https://www.fool.com/investing/stock-market/types-of-stocks/dividend-stocks/dividend-kings/#:~:text=A%20Dividend%20King%20is%20a,steady%20profits%20year%20after%20year.
const dividendkings = [
  {
    "ticker": "awr",
    "name": "american states water",
    "sector": "utilities",
    "dividendincrease": 69
  },
  {
    "ticker": "dov",
    "name": "dover corporation",
    "sector": "industrials",
    "dividendincrease": 68
  },
  {
    "ticker": "nwn",
    "name": "northwest natural holding",
    "sector": "utilities",
    "dividendincrease": 68
  },
  {
    "ticker": "gpc",
    "name": "genuine parts",
    "sector": "consumer goods",
    "dividendincrease": 67
  },
  {
    "ticker": "pg",
    "name": "procter & gamble",
    "sector": "consumer goods",
    "dividendincrease": 67
  },
  {
    "ticker": "ph",
    "name": "parker hannifin",
    "sector": "industrials",
    "dividendincrease": 67
  },
  {
    "ticker": "emr",
    "name": "emerson electric",
    "sector": "industrials",
    "dividendincrease": 66
  },
  {
    "ticker": "mmm",
    "name": "3m",
    "sector": "industrials",
    "dividendincrease": 65
  },
  {
    "ticker": "cinf",
    "name": "cincinnati financial",
    "sector": "financials",
    "dividendincrease": 62
  },
  {
    "ticker": "ko",
    "name": "coca-cola",
    "sector": "consumer goods",
    "dividendincrease": 61
  },
  {
    "ticker": "jnj",
    "name": "johnson & johnson",
    "sector": "healthcare",
    "dividendincrease": 61
  },
  {
    "ticker": "kvue",
    "name": "kenvue",
    "sector": "consumer goods",
    "dividendincrease": 61
  },
  {
    "ticker": "lanc",
    "name": "lancaster colony",
    "sector": "consumer goods",
    "dividendincrease": 60
  },
  {
    "ticker": "cl",
    "name": "colgate-palmolive",
    "sector": "consumer goods",
    "dividendincrease": 60
  },
  {
    "ticker": "ndsn",
    "name": "nordson",
    "sector": "industrials",
    "dividendincrease": 60
  },
  {
    "ticker": "fmcb",
    "name": "farmers & merchants bancorp",
    "sector": "financials",
    "dividendincrease": 58
  },
  {
    "ticker": "hrl",
    "name": "hormel foods",
    "sector": "consumer goods",
    "dividendincrease": 57
  },
  {
    "ticker": "abm",
    "name": "abm industries",
    "sector": "industrials",
    "dividendincrease": 56
  },
  {
    "ticker": "cwt",
    "name": "california water service group",
    "sector": "utilities",
    "dividendincrease": 56
  },
  {
    "ticker": "swk",
    "name": "stanley black & decker",
    "sector": "industrials",
    "dividendincrease": 56
  },
  {
    "ticker": "frt",
    "name": "federal realty investment trust",
    "sector": "real estate",
    "dividendincrease": 56
  },
  {
    "ticker": "scl",
    "name": "stepan company",
    "sector": "industrials",
    "dividendincrease": 55
  },
  {
    "ticker": "cbsh",
    "name": "commerce bancshares",
    "sector": "financials",
    "dividendincrease": 55
  },
  {
    "ticker": "sjw",
    "name": "sjw group",
    "sector": "utilities",
    "dividendincrease": 55
  },
  {
    "ticker": "syy",
    "name": "sysco",
    "sector": "consumer goods",
    "dividendincrease": 54
  },
  {
    "ticker": "ful",
    "name": "h.b. fuller",
    "sector": "materials",
    "dividendincrease": 54
  },
  {
    "ticker": "mo",
    "name": "altria group",
    "sector": "consumer goods",
    "dividendincrease": 54
  },
  {
    "ticker": "msa",
    "name": "msa safety",
    "sector": "industrials",
    "dividendincrease": 53
  },
  {
    "ticker": "nfg",
    "name": "national fuel gas",
    "sector": "energy",
    "dividendincrease": 53
  },
  {
    "ticker": "uvv",
    "name": "universal corporation",
    "sector": "consumer goods",
    "dividendincrease": 53
  },
  {
    "ticker": "itw",
    "name": "illinois tool works",
    "sector": "industrials",
    "dividendincrease": 53
  },
  {
    "ticker": "bkh",
    "name": "black hills corp.",
    "sector": "utilities",
    "dividendincrease": 52
  },
  {
    "ticker": "gww",
    "name": "w.w. grainger",
    "sector": "industrials",
    "dividendincrease": 52
  },
  {
    "ticker": "tgt",
    "name": "target",
    "sector": "consumer goods",
    "dividendincrease": 52
  },
  {
    "ticker": "leg",
    "name": "leggett & platt",
    "sector": "industrials",
    "dividendincrease": 52
  },
  {
    "ticker": "ppg",
    "name": "ppg industries",
    "sector": "industrials",
    "dividendincrease": 52
  },
  {
    "ticker": "bdx",
    "name": "becton, dickinson & co.",
    "sector": "healthcare",
    "dividendincrease": 51
  },
  {
    "ticker": "abbv",
    "name": "abbvie",
    "sector": "healthcare",
    "dividendincrease": 51
  },
  {
    "ticker": "abt",
    "name": "abbott labs",
    "sector": "healthcare",
    "dividendincrease": 51
  },
  {
    "ticker": "tnc",
    "name": "tennant",
    "sector": "industrials",
    "dividendincrease": 51
  },
  {
    "ticker": "kmb",
    "name": "kimberly clark",
    "sector": "consumer goods",
    "dividendincrease": 51
  },
  {
    "ticker": "cduaf",
    "name": "canadian utilities",
    "sector": "utilities",
    "dividendincrease": 51
  },
  {
    "ticker": "pep",
    "name": "pepsico",
    "sector": "consumer goods",
    "dividendincrease": 51
  },
  {
    "ticker": "low",
    "name": "lowe's",
    "sector": "consumer goods",
    "dividendincrease": 51
  },
  {
    "ticker": "nue",
    "name": "nucor",
    "sector": "industrials",
    "dividendincrease": 50
  },
  {
    "ticker": "spgi",
    "name": "s&p global",
    "sector": "financials",
    "dividendincrease": 50
  },
  {
    "ticker": "tr",
    "name": "tootsie roll industries",
    "sector": "consumer goods",
    "dividendincrease": 50
  },
  {
    "ticker": "wmt",
    "name": "walmart inc.",
    "sector": "consumer goods",
    "dividendincrease": 50
  },
  {
    "ticker": "grc",
    "name": "the gorman-rupp company",
    "sector": "industrials",
    "dividendincrease": 50
  },
  {
    "ticker": "msex",
    "name": "middlesex water",
    "sector": "utilities",
    "dividendincrease": 50
  },
  {
    "ticker": "adm",
    "name": "adm",
    "sector": "industrials",
    "dividendincrease": 50
  }
]


//https://www.simplysafedividends.com/world-of-dividends/posts/6-2023-dividend-aristocrats-list-all-68-our-top-5-picks
const dividendAristocrats = [
  {
    "ticker": "wba",
    "name": "walgreens boots alliance",
    "industry": "drug retail"
  },
  {
    "ticker": "leg",
    "name": "leggett & platt",
    "industry": "home furnishings"
  },
  {
    "ticker": "mmm",
    "name": "3m",
    "industry": "industrial conglomerates"
  },
  {
    "ticker": "o",
    "name": "realty income",
    "industry": "retail reits"
  },
  {
    "ticker": "amcr",
    "name": "amcor",
    "industry": "paper and plastic packaging products and materials"
  },
  {
    "ticker": "trow",
    "name": "t. rowe price",
    "industry": "asset management and custody banks"
  },
  {
    "ticker": "ben",
    "name": "franklin resources",
    "industry": "asset management and custody banks"
  },
  {
    "ticker": "frt",
    "name": "federal realty",
    "industry": "retail reits"
  },
  {
    "ticker": "abbv",
    "name": "abbvie",
    "industry": "biotechnology"
  },
  {
    "ticker": "ibm",
    "name": "international business machines",
    "industry": "it consulting and other services"
  },
  {
    "ticker": "ess",
    "name": "essex property trust",
    "industry": "multi-family residential reits"
  },
  {
    "ticker": "cvx",
    "name": "chevron",
    "industry": "integrated oil and gas"
  },
  {
    "ticker": "kvue",
    "name": "kenvue",
    "industry": "personal care products"
  },
  {
    "ticker": "kmb",
    "name": "kimberly-clark",
    "industry": "household products"
  },
  {
    "ticker": "sjm",
    "name": "j.m. smucker",
    "industry": "packaged foods and meats"
  },
  {
    "ticker": "mdt",
    "name": "medtronic",
    "industry": "health care equipment"
  },
  {
    "ticker": "xom",
    "name": "exxon mobil",
    "industry": "integrated oil and gas"
  },
  {
    "ticker": "ed",
    "name": "consolidated edison",
    "industry": "multi-utilities"
  },
  {
    "ticker": "swk",
    "name": "stanley black & decker",
    "industry": "industrial machinery and supplies and components"
  },
  {
    "ticker": "clx",
    "name": "clorox",
    "industry": "household products"
  },
  {
    "ticker": "tgt",
    "name": "target",
    "industry": "consumer staples merchandise retail"
  },
  {
    "ticker": "hrl",
    "name": "hormel foods",
    "industry": "packaged foods and meats"
  },
  {
    "ticker": "nee",
    "name": "nextera energy",
    "industry": "electric utilities"
  },
  {
    "ticker": "ko",
    "name": "coca-cola",
    "industry": "soft drinks and non-alcoholic beverages"
  },
  {
    "ticker": "jnj",
    "name": "johnson & johnson",
    "industry": "pharmaceuticals"
  },
  {
    "ticker": "pep",
    "name": "pepsico",
    "industry": "soft drinks and non-alcoholic beverages"
  },
  {
    "ticker": "cinf",
    "name": "cincinnati financial",
    "industry": "property and casualty insurance"
  },
  {
    "ticker": "chrw",
    "name": "c.h. robinson",
    "industry": "air freight and logistics"
  },
  {
    "ticker": "ato",
    "name": "atmos energy",
    "industry": "gas utilities"
  },
  {
    "ticker": "syy",
    "name": "sysco",
    "industry": "food distributors"
  },
  {
    "ticker": "gpc",
    "name": "genuine parts company",
    "industry": "distributors"
  },
  {
    "ticker": "apd",
    "name": "air products and chemicals",
    "industry": "industrial gases"
  },
  {
    "ticker": "cl",
    "name": "colgate-palmolive",
    "industry": "household products"
  },
  {
    "ticker": "pg",
    "name": "procter & gamble",
    "industry": "household products"
  },
  {
    "ticker": "mcd",
    "name": "mcdonald's",
    "industry": "restaurants"
  },
  {
    "ticker": "afl",
    "name": "aflac",
    "industry": "life and health insurance"
  },
  {
    "ticker": "adp",
    "name": "automatic data processing",
    "industry": "human resource and employment services"
  },
  {
    "ticker": "adm",
    "name": "archer-daniels-midland",
    "industry": "agricultural products and services"
  },
  {
    "ticker": "emr",
    "name": "emerson electric",
    "industry": "electrical components and equipment"
  },
  {
    "ticker": "mkc",
    "name": "mccormick & company",
    "industry": "packaged foods and meats"
  },
  {
    "ticker": "itw",
    "name": "illinois tool works",
    "industry": "industrial machinery and supplies and components"
  },
  {
    "ticker": "low",
    "name": "lowe's",
    "industry": "home improvement retail"
  },
  {
    "ticker": "gd",
    "name": "general dynamics",
    "industry": "aerospace and defense"
  },
  {
    "ticker": "abt",
    "name": "abbott laboratories",
    "industry": "health care equipment"
  },
  {
    "ticker": "cat",
    "name": "caterpillar",
    "industry": "construction machinery and heavy transportation equipment"
  },
  {
    "ticker": "cah",
    "name": "cardinal health",
    "industry": "health care distributors"
  },
  {
    "ticker": "ppg",
    "name": "ppg industries",
    "industry": "specialty chemicals"
  },
  {
    "ticker": "aos",
    "name": "a. o. smith",
    "industry": "building products"
  },
  {
    "ticker": "bdx",
    "name": "becton, dickinson and company",
    "industry": "health care equipment"
  },
  {
    "ticker": "cb",
    "name": "chubb",
    "industry": "property and casualty insurance"
  },
  {
    "ticker": "dov",
    "name": "dover",
    "industry": "industrial machinery and supplies and components"
  },
  {
    "ticker": "bf.b",
    "name": "brown-forman",
    "industry": "distillers and vintners"
  },
  {
    "ticker": "pnr",
    "name": "pentair",
    "industry": "industrial machinery and supplies and components"
  },
  {
    "ticker": "wmt",
    "name": "walmart",
    "industry": "consumer staples merchandise retail"
  },
  {
    "ticker": "nue",
    "name": "nucor",
    "industry": "steel"
  },
  {
    "ticker": "lin",
    "name": "linde",
    "industry": "industrial gases"
  },
  {
    "ticker": "alb",
    "name": "albemarle",
    "industry": "specialty chemicals"
  },
  {
    "ticker": "chd",
    "name": "church & dwight",
    "industry": "household products"
  },
  {
    "ticker": "expd",
    "name": "expeditors international of washington",
    "industry": "air freight and logistics"
  },
  {
    "ticker": "ndsn",
    "name": "nordson corporation",
    "industry": "industrial machinery and supplies and components"
  },
  {
    "ticker": "ecl",
    "name": "ecolab",
    "industry": "specialty chemicals"
  },
  {
    "ticker": "ctas",
    "name": "cintas",
    "industry": "diversified support services"
  },
  {
    "ticker": "gww",
    "name": "w.w. grainger",
    "industry": "trading companies and distributors"
  },
  {
    "ticker": "shw",
    "name": "sherwin-williams",
    "industry": "specialty chemicals"
  },
  {
    "ticker": "spgi",
    "name": "s&p global",
    "industry": "financial exchanges and data"
  },
  {
    "ticker": "bro",
    "name": "brown & brown",
    "industry": "insurance brokers"
  },
  {
    "ticker": "rop",
    "name": "roper technologies",
    "industry": "application software"
  },
  {
    "ticker": "wst",
    "name": "west pharmaceutical services",
    "industry": "life sciences tools and services"
  }
]
