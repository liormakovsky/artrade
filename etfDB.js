const etfDB = [
  {
    etf: "xlf",
    stocks: ["brk.b", "jpm", "v", "ma", "bac"],
    connected: ["xlf", "dia"],
  },
  {
    etf: "xlv",
    stocks: ["unh", "lly", "jnj", "mrk", "abbv", "tmo"],
    connected: ["xlv", "dia"],
  },
  {
    etf: "xle",
    stocks: ["xom", "cvx", "eog", "slb", "cop"],
    connected: ["xop", "xle"],
  },
  {
    etf: "xlk",
    stocks: ["aapl", "msft", "nvda", "avgo", "adbe", "csco"],
    connected: ["xlk", "spy", "qqq", "dia"],
  },
  {
    etf: "xop",
    stocks: ["den", "vlo", "xom", "cvx", "cop"],
    connected: ["xop", "xle"],
  },
  {
    etf: "xly",
    stocks: ["amzn", "tsla", "mcd", "hd", "low"],
    connected: ["xly", "dia"],
  },
  {
    etf: "xli",
    stocks: ["cat", "unp", "hon", "ge", "ba"],
    connected: ["xli", "dia"],
  },
  {
    etf: "xlb",
    stocks: ["lin", "apd", "shw", "fcx", "ecl"],
    connected: ["xlb"],
  },
  {
    etf: "xlu",
    stocks: ["nee", "so", "duk", "sre", "aep"],
    connected: ["xlu"],
  },
  {
    etf: "xlp",
    stocks: ["pg", "cost", "pep", "wmt", "pm"],
    connected: ["xlp"],
  },
  {
    etf: "xlc",
    stocks: ["meta", "googl", "goog", "t", "chtr", "tmus"],
    connected: ["xlc", "spy", "qqq"],
  },
  {
    etf: "xlre",
    stocks: ["pld", "amt", "eqix", "well", "psa", "cci"],
    connected: ["xlc"],
  },
  {
    etf: "xme",
    stocks: ["arch", "amr", "btu", "rgld", "nem", "aa"],
    connected: ["xlc"],
  },
  {
    etf: "spy",
    stocks: ["aapl", "msft", "amzn", "nvda", "googl", "meta", "tsla", "goog"],
    connected: ["spy", "qqq", "dia", "vt"],
  },
  {
    etf: "qqq",
    stocks: ["aapl", "msft", "amzn", "nvda", "meta", "tsla", "googl", "goog"],
    connected: ["spy", "qqq", "dia", "vt"],
  },
  {
    etf: "dia",
    stocks: ["unh", "gs", "msft", "hd", "cat", "mcd", "amgn", "v"],
    connected: ["spy", "qqq", "dia", "vt"],
  },
  {
    etf: "vt",
    stocks: ["aapl", "msft", "amzn", "nvda", "googl", "tsla", "meta", "goog"],
    connected: ["spy", "qqq", "dia", "vt"],
  },
];

//https://www.fool.com/investing/stock-market/types-of-stocks/dividend-stocks/dividend-kings/#:~:text=A%20Dividend%20King%20is%20a,steady%20profits%20year%20after%20year.
const kingsDB = [
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
const aristocratsDB = [
  {
    "ticker": "wba",
    "name": "walgreens boots alliance",
    "industry": "drug retail",
    "dividendincrease": 47
  },
  {
    "ticker": "leg",
    "name": "leggett & platt",
    "industry": "home furnishings",
    "dividendincrease": 52
  },
  {
    "ticker": "mmm",
    "name": "3m",
    "industry": "industrial conglomerates",
    "dividendincrease": 65
  },
  {
    "ticker": "o",
    "name": "realty income",
    "industry": "retail reits",
    "dividendincrease": 29
  },
  {
    "ticker": "amcr",
    "name": "amcor",
    "industry": "paper and plastic packaging products and materials",
    "dividendincrease": 39
  },
  {
    "ticker": "trow",
    "name": "t. rowe price",
    "industry": "asset management and custody banks",
    "dividendincrease": 39
  },
  {
    "ticker": "ben",
    "name": "franklin resources",
    "industry": "asset management and custody banks",
    "dividendincrease": 42
  },
  {
    "ticker": "frt",
    "name": "federal realty",
    "industry": "retail reits",
    "dividendincrease": 56
  },
  {
    "ticker": "abbv",
    "name": "abbvie",
    "industry": "biotechnology",
    "dividendincrease": 51
  },
  {
    "ticker": "ibm",
    "name": "international business machines",
    "industry": "it consulting and other services",
    "dividendincrease": 28
  },
  {
    "ticker": "ess",
    "name": "essex property trust",
    "industry": "multi-family residential reits",
    "dividendincrease": 29
  },
  {
    "ticker": "cvx",
    "name": "chevron",
    "industry": "integrated oil and gas",
    "dividendincrease": 36
  },
  {
    "ticker": "kvue",
    "name": "kenvue",
    "industry": "personal care products",
    "dividendincrease": 61
  },
  {
    "ticker": "kmb",
    "name": "kimberly-clark",
    "industry": "household products",
    "dividendincrease": 51
  },
  {
    "ticker": "sjm",
    "name": "j.m. smucker",
    "industry": "packaged foods and meats",
    "dividendincrease": 21
  },
  {
    "ticker": "mdt",
    "name": "medtronic",
    "industry": "health care equipment",
    "dividendincrease": 46
  },
  {
    "ticker": "xom",
    "name": "exxon mobil",
    "industry": "integrated oil and gas",
    "dividendincrease": 40
  },
  {
    "ticker": "ed",
    "name": "consolidated edison",
    "industry": "multi-utilities",
    "dividendincrease": 49
  },
  {
    "ticker": "swk",
    "name": "stanley black & decker",
    "industry": "industrial machinery and supplies and components",
    "dividendincrease": 56
  },
  {
    "ticker": "clx",
    "name": "clorox",
    "industry": "household products",
    "dividendincrease": 60
  },
  {
    "ticker": "tgt",
    "name": "target",
    "industry": "consumer staples merchandise retail",
    "dividendincrease": 52
  },
  {
    "ticker": "hrl",
    "name": "hormel foods",
    "industry": "packaged foods and meats",
    "dividendincrease": 57
  },
  {
    "ticker": "nee",
    "name": "nextera energy",
    "industry": "electric utilities",
    "dividendincrease": 28
  },
  {
    "ticker": "ko",
    "name": "coca-cola",
    "industry": "soft drinks and non-alcoholic beverages",
    "dividendincrease": 61
  },
  {
    "ticker": "jnj",
    "name": "johnson & johnson",
    "industry": "pharmaceuticals",
    "dividendincrease": 61
  },
  {
    "ticker": "pep",
    "name": "pepsico",
    "industry": "soft drinks and non-alcoholic beverages",
    "dividendincrease": 51
  },
  {
    "ticker": "cinf",
    "name": "cincinnati financial",
    "industry": "property and casualty insurance",
    "dividendincrease": 62
  },
  {
    "ticker": "chrw",
    "name": "c.h. robinson",
    "industry": "air freight and logistics",
    "dividendincrease": 25
  },
  {
    "ticker": "ato",
    "name": "atmos energy",
    "industry": "gas utilities",
    "dividendincrease": 39
  },
  {
    "ticker": "syy",
    "name": "sysco",
    "industry": "food distributors",
    "dividendincrease": 54
  },
  {
    "ticker": "gpc",
    "name": "genuine parts company",
    "industry": "distributors",
    "dividendincrease": 67
  },
  {
    "ticker": "apd",
    "name": "air products and chemicals",
    "industry": "industrial gases",
    "dividendincrease": 41
  },
  {
    "ticker": "cl",
    "name": "colgate-palmolive",
    "industry": "household products",
    "dividendincrease": 60
  },
  {
    "ticker": "pg",
    "name": "procter & gamble",
    "industry": "household products",
    "dividendincrease": 67
  },
  {
    "ticker": "mcd",
    "name": "mcdonald's",
    "industry": "restaurants",
    "dividendincrease": 46
  },
  {
    "ticker": "afl",
    "name": "aflac",
    "industry": "life and health insurance",
    "dividendincrease": 40
  },
  {
    "ticker": "adp",
    "name": "automatic data processing",
    "industry": "human resource and employment services",
    "dividendincrease": 48
  },
  {
    "ticker": "adm",
    "name": "archer-daniels-midland",
    "industry": "agricultural products and services",
    "dividendincrease": 50
  },
  {
    "ticker": "emr",
    "name": "emerson electric",
    "industry": "electrical components and equipment",
    "dividendincrease": 66
  },
  {
    "ticker": "mkc",
    "name": "mccormick & company",
    "industry": "packaged foods and meats",
    "dividendincrease": 37
  },
  {
    "ticker": "itw",
    "name": "illinois tool works",
    "industry": "industrial machinery and supplies and components",
    "dividendincrease": 53
  },
  {
    "ticker": "low",
    "name": "lowe's",
    "industry": "home improvement retail",
    "dividendincrease": 51
  },
  {
    "ticker": "gd",
    "name": "general dynamics",
    "industry": "aerospace and defense",
    "dividendincrease": 30
  },
  {
    "ticker": "abt",
    "name": "abbott laboratories",
    "industry": "health care equipment",
    "dividendincrease": 51
  },
  {
    "ticker": "cat",
    "name": "caterpillar",
    "industry": "construction machinery and heavy transportation equipment",
    "dividendincrease": 30
  },
  {
    "ticker": "cah",
    "name": "cardinal health",
    "industry": "health care distributors",
    "dividendincrease": 38
  },
  {
    "ticker": "ppg",
    "name": "ppg industries",
    "industry": "specialty chemicals",
    "dividendincrease": 52
  },
  {
    "ticker": "aos",
    "name": "a. o. smith",
    "industry": "building products",
    "dividendincrease": 30
  },
  {
    "ticker": "bdx",
    "name": "becton, dickinson and company",
    "industry": "health care equipment",
    "dividendincrease": 51
  },
  {
    "ticker": "cb",
    "name": "chubb",
    "industry": "property and casualty insurance",
    "dividendincrease": 29
  },
  {
    "ticker": "dov",
    "name": "dover",
    "industry": "industrial machinery and supplies and components",
    "dividendincrease": 68
  },
  {
    "ticker": "bf.b",
    "name": "brown-forman",
    "industry": "distillers and vintners",
    "dividendincrease": 39
  },
  {
    "ticker": "pnr",
    "name": "pentair",
    "industry": "industrial machinery and supplies and components",
    "dividendincrease": 47
  },
  {
    "ticker": "wmt",
    "name": "walmart",
    "industry": "consumer staples merchandise retail",
    "dividendincrease": 50
  },
  {
    "ticker": "nue",
    "name": "nucor",
    "industry": "steel",
    "dividendincrease": 50
  },
  {
    "ticker": "lin",
    "name": "linde",
    "industry": "industrial gases",
    "dividendincrease": 31
  },
  {
    "ticker": "alb",
    "name": "albemarle",
    "industry": "specialty chemicals",
    "dividendincrease": 29
  },
  {
    "ticker": "chd",
    "name": "church & dwight",
    "industry": "household products",
    "dividendincrease": 27
  },
  {
    "ticker": "expd",
    "name": "expeditors international of washington",
    "industry": "air freight and logistics",
    "dividendincrease": 29
  },
  {
    "ticker": "ndsn",
    "name": "nordson corporation",
    "industry": "industrial machinery and supplies and components",
    "dividendincrease": 60
  },
  {
    "ticker": "ecl",
    "name": "ecolab",
    "industry": "specialty chemicals",
    "dividendincrease": 31
  },
  {
    "ticker": "ctas",
    "name": "cintas",
    "industry": "diversified support services",
    "dividendincrease": 40
  },
  {
    "ticker": "gww",
    "name": "w.w. grainger",
    "industry": "trading companies and distributors",
    "dividendincrease": 52
  },
  {
    "ticker": "shw",
    "name": "sherwin-williams",
    "industry": "specialty chemicals",
    "dividendincrease": 45
  },
  {
    "ticker": "spgi",
    "name": "s&p global",
    "industry": "financial exchanges and data",
    "dividendincrease": 50
  },
  {
    "ticker": "bro",
    "name": "brown & brown",
    "industry": "insurance brokers",
    "dividendincrease": 29
  },
  {
    "ticker": "rop",
    "name": "roper technologies",
    "industry": "application software",
    "dividendincrease": 30
  },
  {
    "ticker": "wst",
    "name": "west pharmaceutical services",
    "industry": "life sciences tools and services",
    "dividendincrease": 30
  }
];

//https://www.schwabassetmanagement.com/products/schd
const schdDB = [
  {
    "ticker": "vz",
    "name": "verizon communications inc",
    "percent": 4.538278868,
    "dyield": 6.99,
    "dgrowth": 2.02
  },
  {
    "ticker": "amgn",
    "name": "amgen inc",
    "percent": 4.382195393,
    "dyield": 3.13,
    "dgrowth": 10.04
  },
  {
    "ticker": "avgo",
    "name": "broadcom inc",
    "percent": 4.294932269,
    "dyield": 1.99,
    "dgrowth": 21.32
  },
  {
    "ticker": "ko",
    "name": "coca-cola",
    "percent": 4.023509138,
    "dyield": 3.14,
    "dgrowth": 3.36
  },
  {
    "ticker": "abbv",
    "name": "abbvie inc",
    "percent": 3.957423013,
    "dyield": 4.30,
    "dgrowth": 10.52
  },
  {
    "ticker": "pep",
    "name": "pepsico inc",
    "percent": 3.89775965,
    "dyield": 2.99,
    "dgrowth": 6.63
  },
  {
    "ticker": "mrk",
    "name": "merck & co inc",
    "percent": 3.894525156,
    "dyield": 2.93,
    "dgrowth": 9.79
  },
  {
    "ticker": "hd",
    "name": "home depot inc",
    "percent": 3.891616754,
    "dyield": 2.58,
    "dgrowth": 15.20
  },
  {
    "ticker": "blk",
    "name": "blackrock inc",
    "percent": 3.693024192,
    "dyield": 2.64,
    "dgrowth": 11.78
  },
  {
    "ticker": "txn",
    "name": "texas instrument inc",
    "percent": 3.677504473,
    "dyield": 3.30,
    "dgrowth": 13.80
  },
  {
    "ticker": "ups",
    "name": "united parcel service inc class b",
    "percent": 3.606950615,
    "dyield": 4.16,
    "dgrowth": 12.23
  },
  {
    "ticker": "pfe",
    "name": "pfizer inc",
    "percent": 3.587710061,
    "dyield": 5.60,
    "dgrowth": 4.95
  },
  {
    "ticker": "cvx",
    "name": "chevron corp",
    "percent": 3.487591741,
    "dyield": 4.17,
    "dgrowth": 6.16
  },
  {
    "ticker": "csco",
    "name": "cisco systems inc",
    "percent": 3.425295365,
    "dyield": 3.25,
    "dgrowth": 3.90
  },
  {
    "ticker": "lmt",
    "name": "lockheed martin corp",
    "percent": 3.312875635,
    "dyield": 2.80,
    "dgrowth": 8.18
  },
  {
    "ticker": "adp",
    "name": "automatic data processing inc",
    "percent": 3.117900277,
    "dyield": 2.41,
    "dgrowth": 13.62
  },
  {
    "ticker": "bx",
    "name": "blackstone inc",
    "percent": 2.60443362,
    "dyield": 2.87,
    "dgrowth": 6.53
  },
  {
    "ticker": "mo",
    "name": "altria group inc",
    "percent": 2.463297965,
    "dyield": 9.22,
    "dgrowth": 5.85
  },
  {
    "ticker": "eog",
    "name": "eog resources inc",
    "percent": 2.362705918
  },
  {
    "ticker": "itw",
    "name": "illinois tool inc",
    "percent": 2.198743411
  },
  {
    "ticker": "mmm",
    "name": "3m",
    "percent": 1.794027537
  },
  {
    "ticker": "usb",
    "name": "us bancorp",
    "percent": 1.745501733
  },
  {
    "ticker": "vlo",
    "name": "valero energy corp",
    "percent": 1.487627321
  },
  {
    "ticker": "kmb",
    "name": "kimberly clark corp",
    "percent": 1.370255339
  },
  {
    "ticker": "f",
    "name": "ford motor",
    "percent": 1.323539967
  },
  {
    "ticker": "payx",
    "name": "paychex inc",
    "percent": 1.284559252
  },
  {
    "ticker": "all",
    "name": "allstate corp",
    "percent": 1.189561257
  },
  {
    "ticker": "fast",
    "name": "fastenal",
    "percent": 1.124073247
  },
  {
    "ticker": "nem",
    "name": "newmont",
    "percent": 1.04841683
  },
  {
    "ticker": "oke",
    "name": "oneok inc",
    "percent": 1.011224214
  }
]

// https://www.ishares.com/us/products/264623/ishares-core-dividend-growth-etf.
const dgroDB = [
  {
    "ticker": "msft",
    "name": "microsoft corp",
    "percent": 3.38
  },
  {
    "ticker": "jpm",
    "name": "jpmorgan chase & co",
    "percent": 3.01
  },
  {
    "ticker": "aapl",
    "name": "apple inc",
    "percent": 2.95
  },
  {
    "ticker": "jnj",
    "name": "johnson & johnson",
    "percent": 2.68
  },
  {
    "ticker": "xom",
    "name": "exxon mobil corp",
    "percent": 2.56
  },
  {
    "ticker": "abbv",
    "name": "abbvie inc",
    "percent": 2.44
  },
  {
    "ticker": "cvx",
    "name": "chevron corp",
    "percent": 2.21
  },
  {
    "ticker": "pg",
    "name": "procter & gamble",
    "percent": 2.14
  },
  {
    "ticker": "pfe",
    "name": "pfizer inc",
    "percent": 1.96
  },
  {
    "ticker": "avgo",
    "name": "broadcom inc",
    "percent": 1.95
  },
  {
    "ticker": "hd",
    "name": "home depot inc",
    "percent": 1.95
  },
  {
    "ticker": "unh",
    "name": "unitedhealth group inc",
    "percent": 1.94
  },
  {
    "ticker": "bac",
    "name": "bank of america corp",
    "percent": 1.71
  },
  {
    "ticker": "mrk",
    "name": "merck & co inc",
    "percent": 1.70
  },
  {
    "ticker": "ko",
    "name": "coca-cola",
    "percent": 1.70
  },
  {
    "ticker": "pep",
    "name": "pepsico inc",
    "percent": 1.60
  },
  {
    "ticker": "csco",
    "name": "cisco systems inc",
    "percent": 1.29
  },
  {
    "ticker": "amgn",
    "name": "amgen inc",
    "percent": 1.18
  },
  {
    "ticker": "c",
    "name": "citigroup inc",
    "percent": 1.10
  },
  {
    "ticker": "mcd",
    "name": "mcdonalds corp",
    "percent": 1.09
  },
  {
    "ticker": "cmcsa",
    "name": "comcast corp class a",
    "percent": 1.08
  },
  {
    "ticker": "ups",
    "name": "united parcel service inc class b",
    "percent": 1.05
  },
  {
    "ticker": "ms",
    "name": "morgan stanley",
    "percent": 1.00
  }
];

//https://investor.vanguard.com/investment-products/etfs/profile/vug#portfolio-composition
const vugDB = [
  {
    "ticker": "aapl",
    "name": "Apple Inc.",
    "percent": 13.00
  },
  {
    "ticker": "msft",
    "name": "Microsoft Corp.",
    "percent": 12.88
  },
  {
    "ticker": "amzn",
    "name": "Amazon.com Inc.",
    "percent": 6.33
  },
  {
    "ticker": "nvda",
    "name": "NVIDIA Corp.",
    "percent": 4.90
  },
  {
    "ticker": "googl",
    "name": "Alphabet Inc. Class A",
    "percent": 3.77
  },
  {
    "ticker": "meta",
    "name": "Facebook Inc. Class A",
    "percent": 3.43
  },
  {
    "ticker": "goog",
    "name": "Alphabet Inc. Class C",
    "percent": 3.17
  },
  {
    "ticker": "tsla",
    "name": "Tesla Inc.",
    "percent": 2.78
  },
  {
    "ticker": "lly",
    "name": "Eli Lilly & Co.",
    "percent": 2.43
  },
  {
    "ticker": "v",
    "name": "Visa Inc. Class A",
    "percent": 1.88
  },
  {
    "ticker": "ma",
    "name": "Mastercard Inc. Class A",
    "percent": 1.62
  },
  {
    "ticker": "hd",
    "name": "Home Depot Inc.",
    "percent": 1.46
  },
  {
    "ticker": "cost",
    "name": "Costco Wholesale Corp.",
    "percent": 1.25
  },
  {
    "ticker": "adbe",
    "name": "Adobe Inc.",
    "percent": 1.24
  },
  {
    "ticker": "mcd",
    "name": "McDonald's Corp.",
    "percent": 0.98
  },
  {
    "ticker": "acn",
    "name": "Accenture plc Class A",
    "percent": 0.96
  },
  {
    "ticker": "lin",
    "name": "Linde plc",
    "percent": 0.96
  },
  {
    "ticker": "crm",
    "name": "salesforce.com Inc.",
    "percent": 0.95
  },
  {
    "ticker": "nflx",
    "name": "Netflix Inc.",
    "percent": 0.91
  },
  {
    "ticker": "tmo",
    "name": "Thermo Fisher Scientific Inc.",
    "percent": 0.88
  }
];

//https://www.wisdomtree.com/investments/etfs/equity/dgrw
const dgrwDB = [
  {
    "ticker": "msft",
    "name": "Microsoft Corporation",
    "percent": 9.72
  },
  {
    "ticker": "aapl",
    "name": "Apple Inc.",
    "percent": 6.00
  },
  {
    "ticker": "avgo",
    "name": "Broadcom Inc.",
    "percent": 3.67
  },
  {
    "ticker": "jnj",
    "name": "Johnson & Johnson",
    "percent": 3.24
  },
  {
    "ticker": "pg",
    "name": "Procter & Gamble Company",
    "percent": 2.83
  },
  {
    "ticker": "hd",
    "name": "Home Depot, Inc.",
    "percent": 2.40
  },
  {
    "ticker": "ko",
    "name": "Coca-Cola Company",
    "percent": 2.21
  },
  {
    "ticker": "mrk",
    "name": "Merck & Co., Inc.",
    "percent": 2.18
  },
  {
    "ticker": "pm",
    "name": "Philip Morris International Inc.",
    "percent": 2.05
  },
  {
    "ticker": "unh",
    "name": "UnitedHealth Group Incorporated",
    "percent": 2.01
  },
  {
    "ticker": "wmt",
    "name": "Walmart Inc.",
    "percent": 1.98
  },
  {
    "ticker": "csco",
    "name": "Cisco Systems, Inc.",
    "percent": 1.94
  },
  {
    "ticker": "nvda",
    "name": "NVIDIA Corporation",
    "percent": 1.92
  },
  {
    "ticker": "lly",
    "name": "Eli Lilly and Company",
    "percent": 1.89
  },
  {
    "ticker": "pep",
    "name": "PepsiCo, Inc.",
    "percent": 1.84
  },
  {
    "ticker": "orcl",
    "name": "Oracle Corp",
    "percent": 1.60
  },
  {
    "ticker": "wfc",
    "name": "Wells Fargo & Co",
    "percent": 1.49
  },
  {
    "ticker": "ms",
    "name": "Morgan Stanley",
    "percent": 1.48
  },
  {
    "ticker": "mcd",
    "name": "McDonalds Corp",
    "percent": 1.47
  },
  {
    "ticker": "amgn",
    "name": "Amgen Inc",
    "percent": 1.24
  },
  {
    "ticker": "txn",
    "name": "Texas Instruments Inc",
    "percent": 1.23
  },
  {
    "ticker": "ups",
    "name": "United Parcel Service Inc",
    "percent": 1.20
  },
  {
    "ticker": "qcom",
    "name": "Qualcomm Inc",
    "percent": 1.11
  },
  {
    "ticker": "v",
    "name": "Visa Inc",
    "percent": 1.10
  },
  {
    "ticker": "mo",
    "name": "Altria Group Inc",
    "percent": 1.10
  },
  {
    "ticker": "unp",
    "name": "Union Pacific Corp",
    "percent": 1.10
  },
  {
    "ticker": "gs",
    "name": "Goldman Sachs Group Inc",
    "percent": 1.00
  }
];

